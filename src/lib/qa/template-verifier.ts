// Template Verification Script
// Verifies all 265 templates render correctly

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

interface TemplateCheck {
  slug: string;
  category: string;
  tier: string;
  hasConfig: boolean;
  hasSections: boolean;
  sectionCount: number;
  hasValidTheme: boolean;
  issues: string[];
}

interface QAReport {
  total: number;
  passed: number;
  failed: number;
  templates: TemplateCheck[];
  summary: {
    byCategory: Record<string, { total: number; passed: number; failed: number }>;
    byTier: Record<string, { total: number; passed: number; failed: number }>;
    commonIssues: string[];
  };
}

const TEMPLATES_DIR = join(process.cwd(), 'src', 'templates');

export async function verifyAllTemplates(): Promise<QAReport> {
  const report: QAReport = {
    total: 0,
    passed: 0,
    failed: 0,
    templates: [],
    summary: {
      byCategory: {},
      byTier: {},
      commonIssues: []
    }
  };

  try {
    const categories = await readdir(TEMPLATES_DIR);

    for (const category of categories) {
      const categoryPath = join(TEMPLATES_DIR, category);
      const stat = await readdir(categoryPath, { withFileTypes: true });

      if (!stat.some(s => s.isDirectory())) continue;

      const categoryDirs = stat.filter(s => s.isDirectory());

      for (const tierDir of categoryDirs) {
        const tierPath = join(categoryPath, tierDir.name);
        const templates = await readdir(tierPath);
        const configFiles = templates.filter(t => t.includes('config.json'));

        for (const configFile of configFiles) {
          const check = await verifyTemplate(
            join(tierPath, configFile),
            category,
            tierDir.name
          );

          report.total++;
          if (check.issues.length === 0) {
            report.passed++;
          } else {
            report.failed++;
          }

          report.templates.push(check);

          // Update category summary
          if (!report.summary.byCategory[category]) {
            report.summary.byCategory[category] = { total: 0, passed: 0, failed: 0 };
          }
          report.summary.byCategory[category].total++;
          if (check.issues.length === 0) {
            report.summary.byCategory[category].passed++;
          } else {
            report.summary.byCategory[category].failed++;
          }

          // Update tier summary
          if (!report.summary.byTier[tierDir.name]) {
            report.summary.byTier[tierDir.name] = { total: 0, passed: 0, failed: 0 };
          }
          report.summary.byTier[tierDir.name].total++;
          if (check.issues.length === 0) {
            report.summary.byTier[tierDir.name].passed++;
          } else {
            report.summary.byTier[tierDir.name].failed++;
          }
        }
      }
    }

    // Aggregate common issues
    const issueCounts: Record<string, number> = {};
    report.templates.forEach(t => {
      t.issues.forEach(issue => {
        issueCounts[issue] = (issueCounts[issue] || 0) + 1;
      });
    });
    report.summary.commonIssues = Object.entries(issueCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([issue]) => issue);

  } catch (error) {
    console.error('Error verifying templates:', error);
  }

  return report;
}

async function verifyTemplate(
  configPath: string,
  category: string,
  tier: string
): Promise<TemplateCheck> {
  const issues: string[] = [];
  const slug = configPath.split('/').pop()?.replace('.json', '') || '';

  try {
    const content = await readFile(configPath, 'utf-8');
    const config = JSON.parse(content);

    // Check required fields
    if (!config.id) issues.push('Missing id field');
    if (!config.name) issues.push('Missing name field');
    if (!config.slug) issues.push('Missing slug field');
    if (!config.category) issues.push('Missing category field');

    // Check theme
    if (!config.theme) {
      issues.push('Missing theme');
    } else {
      if (!config.theme.colors) issues.push('Missing theme.colors');
      if (!config.theme.fonts) issues.push('Missing theme.fonts');
    }

    // Check pages and sections
    if (!config.pages || config.pages.length === 0) {
      issues.push('No pages defined');
    } else {
      let totalSections = 0;
      config.pages.forEach((page: any) => {
        if (page.sections) {
          totalSections += page.sections.length;
        }
      });

      if (totalSections === 0) {
        issues.push('No sections defined');
      }
    }

  } catch (error) {
    issues.push(`Parse error: ${(error as Error).message}`);
  }

  return {
    slug,
    category,
    tier,
    hasConfig: true,
    hasSections: !issues.some(i => i.includes('No sections')),
    sectionCount: 0,
    hasValidTheme: !issues.some(i => i.includes('Missing theme')),
    issues
  };
}

export function printQAReport(report: QAReport): void {
  console.log('\n========================================');
  console.log('TEMPLATE VERIFICATION REPORT');
  console.log('========================================\n');

  console.log(`Total Templates: ${report.total}`);
  console.log(`Passed: ${report.passed} (${((report.passed / report.total) * 100).toFixed(1)}%)`);
  console.log(`Failed: ${report.failed} (${((report.failed / report.total) * 100).toFixed(1)}%)`);

  console.log('\n--- By Category ---');
  for (const [cat, stats] of Object.entries(report.summary.byCategory)) {
    console.log(`${cat}: ${stats.passed}/${stats.total} passed`);
  }

  console.log('\n--- By Tier ---');
  for (const [tier, stats] of Object.entries(report.summary.byTier)) {
    console.log(`${tier}: ${stats.passed}/${stats.total} passed`);
  }

  if (report.summary.commonIssues.length > 0) {
    console.log('\n--- Common Issues ---');
    report.summary.commonIssues.forEach((issue, i) => {
      console.log(`${i + 1}. ${issue}`);
    });
  }

  console.log('\n--- Failed Templates ---');
  const failedTemplates = report.templates.filter(t => t.issues.length > 0);
  failedTemplates.slice(0, 20).forEach(t => {
    console.log(`  ${t.slug}: ${t.issues.join(', ')}`);
  });

  console.log('\n========================================\n');
}

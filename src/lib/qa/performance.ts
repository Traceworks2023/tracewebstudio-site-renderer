// Performance Optimization Utilities
// Lighthouse 90+ optimization helpers

export interface PerformanceMetrics {
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  totalBlockingTime: number;
  cumulativeLayoutShift: number;
  speedIndex: number;
}

export interface OptimizationCheck {
  type: 'image' | 'script' | 'style' | 'font' | 'render';
  passed: boolean;
  recommendation: string;
  impact: 'high' | 'medium' | 'low';
}

export const IMAGE_OPTIMIZATIONS = {
  formats: ['webp', 'avif', 'jpeg-xl'],
  maxWidth: 1920,
  quality: 80,
  lazyLoadThreshold: 50 // % of viewport
};

export const SCRIPT_OPTIMIZATIONS = {
  deferByDefault: true,
  moduleTypeOnly: ['type="module"'],
  criticalPatterns: ['/**/critical/**', '/_next/static/**'],
  excludePatterns: ['analytics', 'tracking', 'chat']
};

export function checkImageOptimization(
  images: { src: string; width?: number; height?: number; format?: string; loading?: string }[]
): OptimizationCheck[] {
  const checks: OptimizationCheck[] = [];

  images.forEach((img, index) => {
    // Check for modern formats
    if (!img.format || !['webp', 'avif', 'jpeg-xl'].includes(img.format)) {
      checks.push({
        type: 'image',
        passed: false,
        recommendation: `Image ${index + 1}: Convert to WebP or AVIF for better compression`,
        impact: 'high'
      });
    }

    // Check dimensions
    if (img.width && img.width > IMAGE_OPTIMIZATIONS.maxWidth) {
      checks.push({
        type: 'image',
        passed: false,
        recommendation: `Image ${index + 1}: Resize to max ${IMAGE_OPTIMIZATIONS.maxWidth}px width`,
        impact: 'medium'
      });
    }

    // Check lazy loading
    if (index > 0 && img.loading !== 'lazy') {
      checks.push({
        type: 'image',
        passed: false,
        recommendation: `Image ${index + 1}: Add loading="lazy" for below-fold images`,
        impact: 'medium'
      });
    }

    // Check explicit dimensions
    if (!img.width || !img.height) {
      checks.push({
        type: 'image',
        passed: false,
        recommendation: `Image ${index + 1}: Add explicit width and height attributes`,
        impact: 'low'
      });
    }
  });

  return checks;
}

export function checkScriptLoading(
  scripts: { src?: string; inline?: boolean; defer?: boolean; async?: boolean; type?: string }[]
): OptimizationCheck[] {
  const checks: OptimizationCheck[] = [];

  scripts.forEach((script, index) => {
    const identifier = script.src ? `Script ${index + 1} (${script.src})` : `Inline script ${index + 1}`;

    // Check for blocking scripts
    if (!script.defer && !script.async && !script.inline) {
      checks.push({
        type: 'script',
        passed: false,
        recommendation: `${identifier}: Add 'defer' or 'async' attribute to prevent render blocking`,
        impact: 'high'
      });
    }

    // Check for module scripts without defer
    if (script.type === 'module' && !script.defer) {
      checks.push({
        type: 'script',
        passed: false,
        recommendation: `${identifier}: Module scripts should use 'defer' for optimal loading`,
        impact: 'medium'
      });
    }
  });

  return checks;
}

export function checkFontLoading(fonts: {
  family: string;
  weights?: string[];
  display?: string;
  preloaded?: boolean;
}[]): OptimizationCheck[] {
  const checks: OptimizationCheck[] = [];

  fonts.forEach((font, index) => {
    // Check display swap
    if (!font.display || font.display === 'auto') {
      checks.push({
        type: 'font',
        passed: false,
        recommendation: `Font ${font.family}: Add 'display: swap' to prevent FOIT`,
        impact: 'high'
      });
    }

    // Check preloading for critical fonts
    if (!font.preloaded && index === 0) {
      checks.push({
        type: 'font',
        passed: false,
        recommendation: `Primary font ${font.family}: Consider preloading for faster FCP`,
        impact: 'medium'
      });
    }

    // Check weight optimization
    if (font.weights && font.weights.length > 4) {
      checks.push({
        type: 'font',
        passed: false,
        recommendation: `Font ${font.family}: Subset to only needed weights (${font.weights.length} loaded)`,
        impact: 'low'
      });
    }
  });

  return checks;
}

export function checkCriticalCSS(inlineStyles: {
  selector: string;
  size: number;
  isCritical: boolean;
}[]): OptimizationCheck[] {
  const checks: OptimizationCheck[] = [];

  const totalInline = inlineStyles.reduce((sum, s) => sum + s.size, 0);

  if (totalInline > 15000) {
    checks.push({
      type: 'style',
      passed: false,
      recommendation: `Critical CSS is ${totalInline}b - consider extracting non-critical styles`,
      impact: 'high'
    });
  }

  return checks;
}

export function getLCPOptimizationTips(heroImageSrc?: string): string[] {
  const tips: string[] = [];

  if (heroImageSrc) {
    tips.push(`Preload hero image: <link rel="preload" as="image" href="${heroImageSrc}">`);
  }

  tips.push('Use a CDN for static assets');
  tips.push('Enable text compression (gzip/brotli)');
  tips.push('Minimize main thread work');
  tips.push('Use an efficient caching policy');

  return tips;
}

export function generatePerformanceReport(
  metrics: PerformanceMetrics,
  optimizationChecks: OptimizationCheck[]
): string {
  const score = calculatePerformanceScore(metrics);

  let report = '\n========================================\n';
  report += 'PERFORMANCE REPORT\n';
  report += '========================================\n\n';

  report += `Performance Score: ${score}/100\n`;
  report += `LCP: ${metrics.largestContentfulPaint}ms\n`;
  report += `FID: ${metrics.totalBlockingTime}ms\n`;
  report += `CLS: ${metrics.cumulativeLayoutShift}\n\n`;

  const passedChecks = optimizationChecks.filter(c => c.passed).length;
  const failedChecks = optimizationChecks.filter(c => !c.passed).length;

  report += `Optimization Checks: ${passedChecks}/${optimizationChecks.length} passed\n`;
  report += `Failed: ${failedChecks}\n\n`;

  if (failedChecks > 0) {
    report += '--- High Impact Issues ---\n';
    optimizationChecks
      .filter(c => !c.passed && c.impact === 'high')
      .forEach(check => {
        report += `  - ${check.recommendation}\n`;
      });

    report += '\n--- Medium Impact Issues ---\n';
    optimizationChecks
      .filter(c => !c.passed && c.impact === 'medium')
      .forEach(check => {
        report += `  - ${check.recommendation}\n`;
      });
  }

  report += '\n========================================\n';

  return report;
}

function calculatePerformanceScore(metrics: PerformanceMetrics): number {
  let score = 100;

  // LCP penalty (target < 2500ms)
  if (metrics.largestContentfulPaint > 2500) {
    score -= 25;
  } else if (metrics.largestContentfulPaint > 1500) {
    score -= 10;
  }

  // TBT penalty (target < 200ms)
  if (metrics.totalBlockingTime > 300) {
    score -= 25;
  } else if (metrics.totalBlockingTime > 200) {
    score -= 10;
  }

  // CLS penalty (target < 0.1)
  if (metrics.cumulativeLayoutShift > 0.25) {
    score -= 25;
  } else if (metrics.cumulativeLayoutShift > 0.1) {
    score -= 10;
  }

  return Math.max(0, score);
}

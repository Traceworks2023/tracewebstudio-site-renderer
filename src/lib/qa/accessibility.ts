// Accessibility Utilities
// WCAG 2.1 AA compliance helpers

export interface A11yCheck {
  component: string;
  checks: A11yCheckResult[];
  passed: boolean;
  issues: string[];
}

export interface A11yCheckResult {
  rule: string;
  wcagCriteria: string;
  passed: boolean;
  message: string;
  severity: 'critical' | 'major' | 'minor';
}

export interface A11yComponentConfig {
  hasAltText: boolean;
  hasAriaLabel: boolean;
  hasFocusManagement: boolean;
  hasColorContrast: boolean;
  hasKeyboardNav: boolean;
  hasSkipLink: boolean;
  minTouchTarget: number;
}

export const WCAG_CRITERIA = {
  1_1_1: 'Non-text Content - All non-text content has text alternative',
  1_3_1: 'Info and Relationships - Structure is programmatically determined',
  1_4_1: 'Use of Color - Color is not only means of conveying info',
  1_4_3: 'Contrast Minimum - Text has 4.5:1 contrast ratio',
  1_4_4: 'Resize Text - Text can resize to 200%',
  2_1_1: 'Keyboard - All functionality via keyboard',
  2_1_2: 'No Keyboard Trap - Focus can be moved away',
  2_4_1: 'Bypass Blocks - Skip navigation links provided',
  2_4_2: 'Page Titled - Pages have descriptive titles',
  2_4_3: 'Focus Order - Focus order is logical',
  2_4_4: 'Link Purpose - Link purpose is clear',
  2_4_7: 'Focus Visible - Focus indicator is visible',
  3_1_1: 'Language of Page - Page language is programmed',
  4_1_1: 'Parsing - No duplicate IDs',
  4_1_2: 'Name, Role, Value - UI components have accessible names'
};

export function checkColorContrast(
  foreground: string,
  background: string,
  minRatio = 4.5
): { ratio: number; passed: boolean } {
  const fgLum = getLuminance(foreground);
  const bgLum = getLuminance(background);
  const lighter = Math.max(fgLum, bgLum);
  const darker = Math.min(fgLum, bgLum);
  const ratio = (lighter + 0.05) / (darker + 0.05);

  return {
    ratio: Math.round(ratio * 100) / 100,
    passed: ratio >= minRatio
  };
}

function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;

  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

export function validateTouchTargetSize(
  width: number,
  height: number,
  minSize = 44
): boolean {
  return width >= minSize && height >= minSize;
}

export function checkSemanticHeading(
  headingElements: { level: number; text: string }[]
): A11yCheckResult[] {
  const results: A11yCheckResult[] = [];
  let lastLevel = 0;

  headingElements.forEach((heading, index) => {
    // Check for skipped heading levels
    if (heading.level > lastLevel + 1 && lastLevel > 0) {
      results.push({
        rule: '2.4.6',
        wcagCriteria: WCAG_CRITERIA['2_4_6'],
        passed: false,
        message: `Heading level skipped from h${lastLevel} to h${heading.level}`,
        severity: 'major'
      });
    }

    // Check for empty headings
    if (!heading.text || heading.text.trim().length === 0) {
      results.push({
        rule: '2.4.6',
        wcagCriteria: WCAG_CRITERIA['2_4_6'],
        passed: false,
        message: `Empty heading at position ${index + 1}`,
        severity: 'minor'
      });
    }

    lastLevel = heading.level;
  });

  return results;
}

export function checkImageAltText(
  images: { src: string; alt: string | null; isDecorative: boolean }[]
): A11yCheckResult[] {
  const results: A11yCheckResult[] = [];

  images.forEach((img, index) => {
    if (!img.isDecorative && (!img.alt || img.alt.trim().length === 0)) {
      results.push({
        rule: '1.1.1',
        wcagCriteria: WCAG_CRITERIA['1_1_1'],
        passed: false,
        message: `Image at position ${index + 1} missing alt text`,
        severity: 'critical'
      });
    }

    if (!img.isDecorative && img.alt && img.alt.length > 125) {
      results.push({
        rule: '1.1.1',
        wcagCriteria: WCAG_CRITERIA['1_1_1'],
        passed: true,
        message: `Image alt text is long (${img.alt.length} chars) - consider简写`,
        severity: 'minor'
      });
    }
  });

  return results;
}

export function checkFormLabels(
  inputs: { id: string; type: string; hasLabel: boolean; hasAriaLabel: boolean }[]
): A11yCheckResult[] {
  const results: A11yCheckResult[] = [];

  inputs.forEach((input, index) => {
    if (input.type === 'hidden') return;

    if (!input.hasLabel && !input.hasAriaLabel) {
      results.push({
        rule: '1.3.1',
        wcagCriteria: WCAG_CRITERIA['1_3_1'],
        passed: false,
        message: `Input '${input.id}' at position ${index + 1} missing label or aria-label`,
        severity: 'critical'
      });
    }
  });

  return results;
}

export function checkFocusIndicator(elements: {
  selector: string;
  hasFocusStyle: boolean;
  isVisible: boolean;
}[]): A11yCheckResult[] {
  const results: A11yCheckResult[] = [];

  elements.forEach((el, index) => {
    if (!el.hasFocusStyle) {
      results.push({
        rule: '2.4.7',
        wcagCriteria: WCAG_CRITERIA['2_4_7'],
        passed: false,
        message: `Element '${el.selector}' missing visible focus indicator`,
        severity: 'critical'
      });
    }
  });

  return results;
}

export function generateA11yReport(checks: A11yCheck[]): string {
  const total = checks.length;
  const passed = checks.filter(c => c.passed).length;
  const failed = checks.filter(c => !c.passed).length;
  const critical = checks.flatMap(c => c.issues).filter(i => i.includes('critical')).length;

  let report = '\n========================================\n';
  report += 'ACCESSIBILITY REPORT (WCAG 2.1 AA)\n';
  report += '========================================\n\n';
  report += `Total Checks: ${total}\n`;
  report += `Passed: ${passed} (${((passed / total) * 100).toFixed(1)}%)\n`;
  report += `Failed: ${failed}\n`;
  report += `Critical Issues: ${critical}\n\n`;

  if (failed > 0) {
    report += '--- Issues ---\n';
    checks.filter(c => !c.passed).forEach(check => {
      report += `[${check.component}]\n`;
      check.checks.filter(c => !c.passed).forEach(issue => {
        report += `  - [${issue.severity}] ${issue.message}\n`;
      });
    });
  }

  report += '\n========================================\n';

  return report;
}

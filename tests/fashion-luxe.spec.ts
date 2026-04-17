import { test, expect } from '@playwright/test';

test.describe('Fashion Luxe Template', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4321/fashion-luxe');
  });

  test('should have proper navigation', async ({ page }) => {
    await expect(page.locator('text=New Arrivals')).toBeVisible();
    await expect(page.locator('text=Women')).toBeVisible();
    await expect(page.locator('text=Men')).toBeVisible();
  });

  test('should show hero section', async ({ page }) => {
    await expect(page.locator('text=Elevate Your Style')).toBeVisible();
    await expect(page.locator('text=Shop Now')).toBeVisible();
  });

  test('should show featured categories', async ({ page }) => {
    await expect(page.locator('text=Shop by Category')).toBeVisible();
    await expect(page.locator('text=Women')).toBeVisible();
    await expect(page.locator('text=Men')).toBeVisible();
  });
});

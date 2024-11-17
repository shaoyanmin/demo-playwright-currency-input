import { test, expect } from '@playwright/test';

test.describe('Currency Input Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('pw-currency-input')).toBeVisible();
  });

  test('Basic currency input and formatting', async ({ page }) => {
    // When I click on the currency input field
    // And I enter "1234" into the field
    // And I click outside the field
    // Then the form should display "1234"
    // And the input field should show "$ 1,234"
    // And no error message should be visible
  });

  test('Input field formatting behavior', async ({ page }) => {
    // When I click on the currency input field
    // Then the input field should be empty
    // When I enter "5678" into the field
    // Then the input field should show "5678"
    // When I click outside the field
    // Then the input field should show "$ 5,678"
  });

  test('Validation for NaN input', async ({ page }) => {
    // When I click on the currency input field
    // And I enter "abc" into the field
    // And I click outside the field
    // Then an error message "Value must be a number" should be visible
  });

  test('Validation for negative number input', async ({ page }) => {
    // When I click on the currency input field
    // And I enter "-100" into the field
    // And I click outside the field
    // Then an error message "Value must be positive" should be visible
  });

  test('Validation for empty input', async ({ page }) => {
    // When I click on the currency input field
    // And I leave the field empty
    // And I click outside the field
    // Then an error message "Value is required" should be visible
  });
});

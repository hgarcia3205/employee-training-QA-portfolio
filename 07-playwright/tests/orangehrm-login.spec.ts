import { test, expect } from '@playwright/test';

test('AT-001 valid OrangeHRM login', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
});

test('AT-002 invalid OrangeHRM login', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('WrongPassword123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid credentials')).toBeVisible();

  await expect(page).toHaveURL(/auth\/login/);
});

test('AT-003 create and search employee', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);

  await page.getByRole('link', { name: 'PIM' }).click();

  await page.getByRole('link', { name: 'Add Employee' }).click();

  await page.getByPlaceholder('First Name').fill('Quality');
  await page.getByPlaceholder('Last Name').fill('Automation');

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page).toHaveURL(/viewPersonalDetails/);

  await page.getByRole('link', { name: 'Employee List' }).click();

  await page.getByPlaceholder('Type for hints...').first().fill('Quality Automation');

  await page.waitForTimeout(1500);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText('Automation')).toBeVisible();
});
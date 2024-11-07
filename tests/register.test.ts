import { test, expect } from '@playwright/test';

test('user can create accout', async ({ page }) => {
  // Go to the login page
  await page.goto('http://localhost:5173/register');

  // Enter credentials and submit
  await page.fill('input[name="name"]', 'testuser');
  await page.fill('input[name="email"]', 'testuser@mail.com');
  await page.fill('input[name="password"]', 'password123');
  await page.fill('input[name="confirmPassword"]', 'password123');
  await page.click('button[type="submit"]');

  // Expect to be on the dashboard

//   await expect(page).toHaveURL('/login');
});

test('user can log in', async ({ page }) => {
  // Go to the login page
  await page.goto('http://localhost:5173/register');

  // Enter credentials and submit
  await page.fill('input[name="email"]', 'testuser@mail.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');

  // Expect to be on the dashboard
  await expect(page).toHaveURL('/dashboard');
});
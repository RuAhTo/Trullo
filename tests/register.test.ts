import { test, expect } from '@playwright/test';

test('user can create account', async ({ page }) => {
  // Go to the register page
  await page.goto('http://localhost:5173/register');

  // Enter credentials and submit
  await page.fill('input[name="name"]', 'testuser');
  await page.fill('input[name="email"]', 'testuser@mail.com');
  await page.fill('input[name="password"]', 'password123');
  await page.fill('input[name="confirmPassword"]', 'password123');
  await page.click('button[type="submit"]');

});

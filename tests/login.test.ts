import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
    // Go to the login page
    await page.goto('http://localhost:5173/login');
  
    // Enter credentials and submit
    await page.fill('input[name="email"]', 'testuser@mail.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
  
    // Wait for the response to ensure the login process has completed
    await page.waitForResponse(response => response.url().includes('/auth/login') && response.status() === 200);

    // Expect to be on the dashboard page after login

    // await expect(page).toHaveURL('/dashboard');
    
});

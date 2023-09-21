import { expect, test } from '@playwright/test';



//run a generic test that passes
test('generic test', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveURL('/');
});


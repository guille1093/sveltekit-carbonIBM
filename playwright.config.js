/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		url: 'http://localhost:4173',
		timeout: 120 * 2000
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;

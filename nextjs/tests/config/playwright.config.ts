import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: "../",
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: "chromium"
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: "firefox"
      },
    },
    {
      name: 'Safari',
      use: {
        browserName: "webkit"
      },
    }
  ],
};
export default config;
import fs from 'fs';

export class ScreenshotUtil {

    static async takeScreenshot(page, testInfo) {

        const testName = testInfo.title
            .replace(/[^a-zA-Z0-9]/g, '_');

        const now = new Date();

        const timestamp =
            `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;

        const screenshotPath =
            `screenshots/${testName}_${timestamp}.png`;

        // Create screenshots folder if it doesn't exist
        fs.mkdirSync('screenshots', { recursive: true });

        await page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        console.log(`Screenshot saved: ${screenshotPath}`);
    }
}
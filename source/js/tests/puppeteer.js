describe('Basic user flow for SPA ', () => {
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5500');
    });

    it('Test 1: Initial Home Page - Check for zero textboxes', async () => {
        let numBoxes = await page.evaluate(() => {
            return document.querySelectorAll("textarea").length;
        });
        expect(numBoxes).toBe(0);
    });

    it('Test 2: ')
});
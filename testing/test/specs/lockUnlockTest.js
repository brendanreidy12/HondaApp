const assert = require('assert');




describe('Lock/Unlock button test', () => {
    it('should lock and unlock the car based on the initial status', async () => {
        await browser.pause(5000);

        const lockUnlockButton = await $('~lock-unlock-button');
        const lockUnlockStatus = await $('~lock-unlock-status');
        const lockUnlockButtonStatus = await $('~lock-unlock-button-status');

        await lockUnlockButtonStatus.waitForDisplayed();
        await lockUnlockStatus.waitForDisplayed();

        const initialButtonStatus = await lockUnlockButtonStatus.getText();
        const initialLockStatus = await lockUnlockStatus.getText();

        if (initialButtonStatus === 'Lock' && initialLockStatus === 'THE CAR IS UNLOCKED') {
            await lockUnlockButton.click();
            await browser.pause(1000);
            const newButtonStatus = await lockUnlockButtonStatus.getText();
            const newLockStatus = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatus, 'Unlock');
            assert.strictEqual(newLockStatus, 'THE CAR IS LOCKED');
        } else if (initialButtonStatus === 'Unlock' && initialLockStatus === 'THE CAR IS LOCKED') {
            await lockUnlockButton.click();
            await browser.pause(1000);
            const newButtonStatus = await lockUnlockButtonStatus.getText();
            const newLockStatus = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatus, 'Lock');
            assert.strictEqual(newLockStatus, 'THE CAR IS UNLOCKED');
        } else {
            console.log('The initial status is inconsistent. Please check the app.');
        }
    });
});

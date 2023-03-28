describe('Specific element test', () => {
    it('Expo Set-up - App opened in config, this inputs project URL, opens app, and closes pop up', async () => {
        const selector = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup";

        const el1 = await $(selector);
        await el1.click();

        const selector2 = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.EditText";

        const el2 = await $(selector2);
        await el2.click();
        await el2.setValue("exp://172.16.1.33:19000");

        const selector3 = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup";

        const el3 = await $(selector3);
        await el3.click();

        await browser.pause(5000);
        
        const refreshButton = await $('~refresh-button');
        await refreshButton.click();

    });
});

describe('Climate Control Test', () => {
    it('Turns climate control on', async () => {
        await browser.pause(3000);

        let climateIcon = await driver.$("~climate-icon-button");
        await climateIcon.click();

        let el7 = await driver.$("android:id/text1");
        await el7.click();
        let el8 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[12]");
        await el8.click();
        let el9 = await driver.$("~climate-submit");
        await el9.click();
        let el10 = await driver.$("//android.widget.Button[@content-desc=\"Homepage, back\"]/android.widget.ImageView");
        await el10.click();
        let el11 = await driver.$("~refresh-button");
        await el11.click();
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });
});

/*
const lockUnlockButton = await $('~lock-unlock-button');

        const lockUnlockStatus = await $('~lock-unlock-status');
        const lockUnlockButtonStatus = await $('~lock-unlock-button-status');

        await lockIcon.waitForDisplayed();
        await browser.pause(1000);
        await lockIcon.click();

        await browser.pause(1000);
        
        await lockUnlockButtonStatus.waitForDisplayed();
        await lockUnlockStatus.waitForDisplayed();

        const initialButtonStatus = await lockUnlockButtonStatus.getText();
        const initialLockStatus = await lockUnlockStatus.getText();

        await browser.pause(10000);

        if (initialButtonStatus === 'LOCK' && initialLockStatus === 'THE CAR IS UNLOCKED') {
            await lockUnlockButton.click();
            await browser.pause(10000);
            const newButtonStatus = await lockUnlockButtonStatus.getText();
            const newLockStatus = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatus, 'UNLOCK');
            assert.strictEqual(newLockStatus, 'THE CAR IS LOCKED');

            console.log('Second Test Starting in 5s');
            await browser.pause(5000);

            await lockUnlockButton.click();
            await browser.pause(10000);
            const newButtonStatusTest2 = await lockUnlockButtonStatus.getText();
            const newLockStatusTest2 = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatusTest2, 'LOCK');
            assert.strictEqual(newLockStatusTest2, 'THE CAR IS UNLOCKED');
            console.log('Test Complete')

        } else if (initialButtonStatus === 'UNLOCK' && initialLockStatus === 'THE CAR IS LOCKED') {
            await lockUnlockButton.click();
            await browser.pause(10000);
            const newButtonStatus = await lockUnlockButtonStatus.getText();
            const newLockStatus = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatus, 'LOCK');
            assert.strictEqual(newLockStatus, 'THE CAR IS UNLOCKED');

            console.log('Second Test Starting in 5s');
            await browser.pause(5000);

            await lockUnlockButton.click();
            await browser.pause(10000);
            const newButtonStatusTest2 = await lockUnlockButtonStatus.getText();
            const newLockStatusTest2 = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatusTest2, 'UNLOCK');
            assert.strictEqual(newLockStatusTest2, 'THE CAR IS LOCKED');
            console.log('Test complete')
        } else {
            throw new Error('The initial status is inconsistent. Please check the app.');
        }
*/


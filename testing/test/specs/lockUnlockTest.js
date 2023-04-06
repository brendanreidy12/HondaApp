const assert = require('assert');

//Setup App for testing
describe('Specific element test', () => {
    it('Expo Set-up - App opened in config, this inputs project URL, opens app, and closes pop up', async () => {
        await browser.pause(5000);
        const selector = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup";

        const el1 = await $(selector);
        await el1.click();

        const selector2 = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.EditText";

        const el2 = await $(selector2);
        await el2.click();
        await el2.setValue("exp://172.16.3.127:19000");

        const selector3 = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup";

        const el3 = await $(selector3);
        await el3.click();
        
        const refreshButton = await $('~refresh-button');
        await refreshButton.waitForDisplayed();
        await browser.pause(5000);
        await refreshButton.click();

    });
});

//Start Lock/Unlock Test
describe('Lock/Unlock button test', () => {
    it('Toggles car lock/unlock twice and checks result', async () => {
        await browser.pause(3000);
        
        //Sets constants for each button
        const lockIcon = await $('~lock-icon-button');
        const lockUnlockButton = await $('~lock-unlock-button');
        const lockUnlockStatus = await $('~lock-unlock-status');
        const lockUnlockButtonStatus = await $('~lock-unlock-button-status');
        
        const backButton1 = "//android.widget.Button[@content-desc=\"Homepage, back\"]/android.widget.ImageView";
        const lockBackButton= await $(backButton1);

        //Ensures tests don't start until main screen UI loaded
        await lockIcon.waitForDisplayed();
        await browser.pause(1000);
        
        //Opens Lock Screen Page
        await lockIcon.click();

        await browser.pause(1000);
        
        //Ensures tests don't start until lock screen UI loaded
        await lockUnlockButtonStatus.waitForDisplayed();
        await lockUnlockStatus.waitForDisplayed();

        const initialButtonStatus = await lockUnlockButtonStatus.getText();
        const initialLockStatus = await lockUnlockStatus.getText();

        //Wait 2 seconds
        await browser.pause(2000);

        if (initialButtonStatus === 'LOCK' && initialLockStatus === 'THE CAR IS UNLOCKED') {
            await lockUnlockButton.click();
            
            //After button press, wait 2 seconds for update
            await browser.pause(2000);
            const newButtonStatus = await lockUnlockButtonStatus.getText();
            const newLockStatus = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatus, 'UNLOCK');
            assert.strictEqual(newLockStatus, 'THE CAR IS LOCKED');

            //Second test starting in 3s printed to terminal
            console.log('Second Test Starting in 3s');
            await browser.pause(3000);

            await lockUnlockButton.click();

            //After button press, wait 2 seconds for update
            await browser.pause(2000);
            const newButtonStatusTest2 = await lockUnlockButtonStatus.getText();
            const newLockStatusTest2 = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatusTest2, 'LOCK');
            assert.strictEqual(newLockStatusTest2, 'THE CAR IS UNLOCKED');
            console.log('Test Complete, returning to Main Page in 3s')

            await browser.pause(3000);
            await lockBackButton.click();

        } else if (initialButtonStatus === 'UNLOCK' && initialLockStatus === 'THE CAR IS LOCKED') {
            await lockUnlockButton.click();

            //After button press, wait 2 seconds for update
            await browser.pause(2000);
            const newButtonStatus = await lockUnlockButtonStatus.getText();
            const newLockStatus = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatus, 'LOCK');
            assert.strictEqual(newLockStatus, 'THE CAR IS UNLOCKED');

            //Second test starting in 3s printed to terminal
            console.log('Second Test Starting in 3s');
            await browser.pause(3000);

            await lockUnlockButton.click();

            //After button press, wait 2 seconds for update
            await browser.pause(2000);
            const newButtonStatusTest2 = await lockUnlockButtonStatus.getText();
            const newLockStatusTest2 = await lockUnlockStatus.getText();
            assert.strictEqual(newButtonStatusTest2, 'UNLOCK');
            assert.strictEqual(newLockStatusTest2, 'THE CAR IS LOCKED');
            console.log('Test complete, returning to Main Page in 3s')

            await browser.pause(3000);
            await lockBackButton.click();

        } else {
            throw new Error('The initial status is inconsistent. Please check the app.');
        }
    });
});

//Start Climate Control Test
describe('Climate Control Test', () => {
    it('Turns climate control on', async () => {
        await browser.pause(3000);

        const climateIcon = await $("~climate-icon-button");
        await climateIcon.click();

        const el7 = await $("android:id/text1");
        await el7.click();
        
        const el8 = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[12]");
        await el8.click();

        const el9 = await $("~climate-submit");
        await el9.click();

        const el10 = await $("//android.widget.Button[@content-desc=\"Homepage, back\"]/android.widget.ImageView");
        await el10.click();

        const el11 = await $("~refresh-button");
        await el11.click();
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });
});
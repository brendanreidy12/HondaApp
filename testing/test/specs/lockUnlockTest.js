const assert = require('assert');
const { isVisible } = require('wd/lib/commands');

//Setup App for testing
describe('Specific element test', () => {
    it('Expo Set-up - App opened in config, this inputs project URL, opens app, and closes pop up', async () => {
        await browser.pause(15000)
        
        let el1 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup");
        await el1.click();

        await browser.pause(3000)

        let el2 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.EditText");
        await el2.setValue("exp://172.16.1.73:19000");
        await el2.click();

        await browser.pause(3000)

        let el3 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup");
        await el3.click();

        await browser.pause(3000)

        const rangeColors = ['red', 'orange', 'white'];
        let range;

        for (const color of rangeColors) {
            range = await $(`~range-${color}`);
            const isDisplayed = await range.isDisplayed();
            if (isDisplayed) {
                break;
            }
        }

        await browser.pause(5000)
        await range.waitForDisplayed();
        await range.click();

        await browser.pause(3000)

    });
});


//Start Lock/Unlock Test
describe('Lock/Unlock button test', () => {
    it('Toggles car lock/unlock twice and checks result', async () => {
        await browser.pause(3000);
        
        const refreshButton = await $('~refresh-button');
        await refreshButton.waitForDisplayed();
        await browser.pause(5000);
        await refreshButton.click();


        //Sets constants for each button
        const lockIcon = await $('~lock-icon-button');
        const lockUnlockButton = await $('~lock-unlock-button');
        const lockUnlockStatus = await $('~lock-unlock-status');
        const lockUnlockButtonStatus = await $('~lock-unlock-button-status');
        
        const backButtonXPath = "//android.widget.Button[@content-desc=\"Homepage, back\"]/android.widget.ImageView";
        const backButton= await $(backButtonXPath);

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
            await backButton.click();

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
            await backButton.click();

        } else {
            throw new Error('The initial status is inconsistent. Please check the app.');
        }
    });
});


//Start Climate Control Test
describe('Climate Control Test', () => {
    it('Turns Climate Control On and Off', async () => {
        await browser.pause(3000);

        const climateIcon = await $('~climate-icon-button');
        await climateIcon.click();

        const tempSet19  = await $('~temp-19');
        const timeSet30 = await $('~Set time to 30 minutes');
        const climateSubmit = await $('~climate-submit');
        const climateStop = await $('~climate-stop');

        const climateStatus = await $('~climate-status');

        await browser.pause(3000);

        const isSubmitButtonVisible = await climateSubmit.isDisplayed();

        if (isSubmitButtonVisible) {
            // The submit button is visible, run the test case
            await tempSet19.waitForDisplayed();
            await tempSet19.click();

            await browser.pause(2000);

            await timeSet30.click();

            await browser.pause(2000);

            await climateSubmit.click();

            await browser.pause(10000);
        } else {
            // The submit button is not visible, press the "climate-stop" button before running the test
            await climateStop.click();
            await browser.pause(3000);

            await tempSet19.waitForDisplayed();
            await tempSet19.click();

            await browser.pause(2000);

            await timeSet30.click();

            await browser.pause(2000);

            await climateSubmit.click();

            await browser.pause(10000);
        }

        const updatedClimateStatus = await climateStatus.getText();
        if (updatedClimateStatus === 'Climate is on') {
            console.log('Climate Control Test Passed');
        } else {
            throw new Error('Climate not working as expected');
        }

        await climateStop.click();
        await browser.pause(2000);

        const backButtonXPath = "//android.widget.Button[@content-desc=\"Homepage, back\"]/android.widget.ImageView";
        const backButton= await $(backButtonXPath);
        await backButton.click();

        console.log('Starting discover page test in 3s')
        await browser.pause(3000);
    });
});


//Start Discover Page Test
describe('Discover Page Test', () => {
    it('Checks if video element is present', async () => {
        await browser.pause(3000);

        const discoverTabXPath = '//android.view.ViewGroup[@content-desc="app-root"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[2]';
        const discoverTab = await $(discoverTabXPath);
        await discoverTab.click();

        const homeTabXPath = '//android.view.ViewGroup[@content-desc="app-root"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[1]';
        const homeTab = await $(homeTabXPath);

        await browser.pause(3000);

        const firstVideoXPath = '//android.view.ViewGroup[@content-desc="app-root"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View';
        const firstVideo = await $(firstVideoXPath);
        const isVideoElementPresent = await firstVideo.waitForExist({ timeout: 30000 });

        if (isVideoElementPresent) {
            console.log('Discover Tab Test Passed: YouTube video element is present');
        } else {
            throw new Error('Video Content Not Loaded after 15 seconds');
        }
        
        await browser.pause(2000);
        await homeTab.click();

    });
});


//Start Range Colour Test
describe('Range Colour Test', () => {
    it('Presses refresh button 5 times, checks range value text color', async () => {
  
      await browser.pause(5000);
  
      // Repeat the process 5 times
      for (let i = 0; i < 5; i++) {
        // Press the refresh button
        const refreshButton = await $('~refresh-button');
        await refreshButton.waitForDisplayed();
        await refreshButton.click();
        await browser.pause(5000);
  
        // Determine the expected color
        const rangeRed = await $('~range-red');
        const rangeOrange = await $('~range-orange');
        const rangeWhite = await $('~range-white');
  
        let expectedColor;
        let rangeText;
  
        if (await rangeRed.isDisplayed()) {
          expectedColor = 'red';
          rangeText = await rangeRed.getText();
        } else if (await rangeOrange.isDisplayed()) {
          expectedColor = 'orange';
          rangeText = await rangeOrange.getText();
        } else if (await rangeWhite.isDisplayed()) {
          expectedColor = 'white';
          rangeText = await rangeWhite.getText();
        } else {
          throw new Error('No range element found');
        }
  
        const rangeValue = parseInt(rangeText.match(/\d+/)[0], 10);
  
        if (rangeValue >= 0 && rangeValue <= 20 && expectedColor !== 'red') {
          throw new Error(`Incorrect color for range value. Expected: red`);
        } else if (rangeValue >= 21 && rangeValue <= 35 && expectedColor !== 'orange') {
          throw new Error(`Incorrect color for range value. Expected: orange`);
        } else if (rangeValue > 35 && expectedColor !== 'white') {
          throw new Error(`Incorrect color for range value. Expected: white`);
        }
      }
      await browser.pause(3000);
    });
  });
  
  
  

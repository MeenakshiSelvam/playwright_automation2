// const {test, expect} = require('@playwright/test');
import {test,expect} from '@playwright/test';

test('SelectorDemo',async({page}) => {
    await page.goto("https://www.saucedemo.com/v1/");
    await page.pause(); //it opens playwright inspector page with our code and executed and stops in this line


    //using obj property 
    await page.click('id=user-name'); 

  //  await page.locator('id=user-name').fill("standard_user");   //directly use property
  //  await page.locator('[id="user-name"]').fill("standard_user"); // within []

  //  using xpath
  await page.locator('//*[@id="user-name"]').fill("standard_user"); 

  await page.locator('xpath=//input[@name="password"]').fill("secret_demo");  //we can give xpath as a property 

    //using css selectors

    //await page.locator("#login-button").click(); 

    //using text
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOG")').click();  // to check in all tag remove input.



  
});

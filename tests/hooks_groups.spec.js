const {test, expect} = require('@playwright/test');



test.describe('All my test' , async ()=>{


test.beforeEach(async({page}) =>{

  await page.goto("https://www.saucedemo.com/v1/")
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.waitForURL("https://www.saucedemo.com/v1/inventory.html")
  
})



test.afterEach(async ({page}) =>{
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    
    

  
})


//only is annotation
test.only('homepage' , async ({page}) => {
 
   await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
   await page.getByRole('button', { name: 'ADD TO CART' }).click();
   await page.getByRole('button', { name: '<- Back' }).click();
  
})



test.afterAll(async({browser}) =>{  // context or page is not used for afterall and beforeall (bcoz it is created for per test not for all tests so use browser)
    await browser.close();

})
})

const {test, expect} = require('@playwright/test');
test('Login Test1', async({page}) => {
    await page.goto("https://demo.applitools.com/");
    await page.pause();
   // await page.getByPlaceholder('Enter your username').fill("user1");
   


    await page.waitForSelector('placeholder = Enter your username',{timeout : 4000});
    await page.locator('placeholder=Enter your username').click();
    await expect(page.locator('placeholder=Enter your username')).toHaveCount(1);

    await page.getByPlaceholder('Enter your password').fill("pwd1");
    await page.getByRole('link', { name: 'Sign in' }).click();


});



test.only('Login Test2', async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.pause();
   
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'Tester' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();


});


// test.only('Demo Login 2' , async({page}) => { // test.only() - it only runs when we run this file

//     await page.pause();

// });

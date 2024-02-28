const {test, expect, chromium} = require('@playwright/test');
test('slow mo and vdo rec test', async({}) => {

//launch browser and add options for slowmo
    const browser =await chromium.launch(          
        {
            slowMo : 500,
            headless : false     // it executed as --headed
        }
    );
    //create incognito browser and add options for vdo rec
    const context =  await browser.newContext({
        recordVideo : {
            dir : 'videos/',
            size :{width : 800, height : 600}
        }
    });


    // create new page in incognito browser
    const page = await context.newPage();

     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      await page.pause();
       
      await page.getByPlaceholder('Username').click();
      await page.getByPlaceholder('Username').press('Control+a')
      await page.getByPlaceholder('Username').fill('Admin');
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill('admin123');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.locator('span').filter({ hasText: ' ' }).locator('i').click();  
      await page.getByRole('menuitem', { name: 'Logout' }).click();
    
    
    });
    

//hasNext()  - used in locator
//tohaveText() - used in Assertions.

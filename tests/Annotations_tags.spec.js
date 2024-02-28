const {test} = require('@playwright/test');

//Annotations

// skip - it will not be executed
test.skip('Test1', async({page}) => {
    await page.goto("https://demo.applitools.com/");
    await page.pause();
})  


//fail -intentionally failed.
test('not yet ready', async({page})=>{
    test.fail();
})

//fixme - it also skips the test ,test will be aborted
test.fixme('need to fix',async({page})=>{

})

//slow - it slows the execution - it triple count of timeout
test('slow test',async({page})=>{
    test.slow();
})

// only - File focus only this test
test('focus this test', async({page})=>{
    
})


//tags

//we can name tag with @
test('Test @fast' , async({page}) =>{
})


test('Test @admin' , async({page}) =>{
})


test('Test @reg' , async({page}) =>{
})
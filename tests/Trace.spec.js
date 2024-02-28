const { test, expect } = require('@playwright/test');
let context;
let page;

test.beforeAll(async ({browser}) =>{
    context = await browser.newContext();
    await context.tracing.start({screenshots: true ,snapshots :true});
    page = await context.newpage();


})

test('Playwright', async ({ page,context}) => {
await page.goto("https://google.com");
});

test.afterAll(async () =>{
    await context.tracing.stop({ path :'test2_trace.zip'});
})

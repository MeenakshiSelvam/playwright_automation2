import test, {page,expect} from '@playwright/test'

test('Assertions Test1' , async ({page}) => {
    
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()


    //Assertions

    //1 - check if element is present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);   //given element should be there in page at one place.
    if (await page.$('text = The Kitchen'))  // we can also use $ symbol instead of locator
    {
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    // 2 - check if element is visible or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();  // accessible or not
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEditable();
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeChecked();


    //3 - check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText("The Kitchen"); // give full text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText("abc");

    // 4 - check attribute and class
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute("class",/.*css-dpmy2a/)  // we can give class only or class with value
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)  // we give class value only - instaed of giving full value we can give /.*adn remaining line.
    

    // 5- check page url and title
     await expect(page).toHaveURL('https://kitchen.applitools.com/');
     await expect(page).toHaveTitle(/.* Kitchen/)


     // 6 - check page with screenshot  (Visual validation)
     await expect(page).toHaveScreenshot()  // when  we run this, it takes ss and save in tests folder,
     // when we run from another time page will match with screenshot in that folder and checks whether both matches (in image,txt,pixels,size,page) or not.


})
const puppeteer = require('puppeteer');

// const url = 'https://www.zhipin.com/c101280600-p100901/';
const url = 'https://www.zhipin.com/?sid=sem_pz_bdpc_dasou_title';
// const url = 'https://www.baidu.com/';
const config = {
    slowMo: 200,
    devtools: true,
    timeout: 0,
    defaultViewport: {
        width: 1376,
        height: 768,
    }
};

puppeteer.launch(config).then(async browser => {
    const page = await browser.newPage();
    await page.goto(url);
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    // const title = await page.title();
    // await page.type('#kw', 'puppeteer');
    // await page.keyboard.press('Enter');
    // const title = await page.title();

    const BRANDS_SELECTOR = '.job-menu';
    const brands = await page.evaluate(sel => {
        const ulList = Array.from($(sel).find('dl dd a'));
        console.log(888);
        const web = ulList.find(item => item.innerText.includes('前端'));
        console.log(web.innerText);
        return web.innerText;
    }, BRANDS_SELECTOR);
    console.log(brands);
    // await page.click('#main > div > div.home-sider > div > dl:nth-child(1) > dd > a:nth-child(5)');
});
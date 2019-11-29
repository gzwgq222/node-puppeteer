const puppeteer = require('puppeteer');
const schedule = require('node-schedule');

const url = 'https://www.yinsiduanxin.com/message/17150522475.html';
const config = {
    // headless: false,
    // devtools: true,
    timeout: 0,
    defaultViewport: {
        width: 1376,
        height: 768,
    }
};
const tm = {
    timeout: 0
}
console.log('--- 启动浏览器 ---');

puppeteer.launch((config)).then(async browser => {

    console.log('--- open tab ---');
    const page = await browser.newPage();
    // page.on('console', msg => console.log('LOG:', msg.text()));

    console.log('--- goto page ---');
    await page.goto(url, tm)
    async function getInfo() {
        console.time('time');
        const phone = await page.$eval('.main-title h1', el => el.getAttribute('data-clipboard-text'));
        console.log('phone:', phone);
        const code = await page.$$eval('tr td:nth-child(2)', els => {
            return els.map(el => el.innerText);
        });
        console.log('code:', code);
        console.timeEnd("time");
    }
    let i = 0;
    schedule.scheduleJob('1 * * * * *', _ => {
        console.log(`第 ${i} 次爬取`);
        i++;
        getInfo();
    })
    // await browser.close();
})
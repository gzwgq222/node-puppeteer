const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');
// const iPhone = devices['iPhone 6'];

const url = 'https://www.zhipin.com/c101280600-p100901/';
const config = {
    headless: false,
    // devtools: true,
    timeout: 0,
    args: ['--no-sandbox'],
    defaultViewport: {
        width: 1300,
        height: 800,
    }
};
// 17109324205 1111aaaa Function.prototype.constructor = function(){} ?page=1&ka=page-1
puppeteer.launch(config).then(async browser => {
    const page = await browser.newPage();
    // await page.emulate(iPhone);
    // 更改 js 环境
    await page.evaluateOnNewDocument(_ => {
      // 避免后台检测出
      Object.defineProperty(navigator, 'webdriver', { get: ()=> false });
      // Function.prototype.constructor = function(){}
    })
    // page.on('console', msg => console.log('LOG:', msg.text()));

    await page.goto(url, {timeout: 0});

    let res = [];
    async function getInfo(i = 2) {
      console.log('开始获取信息');
      await page.waitFor(3000);
      const getCompanyData = await page.$$eval(' #main > div > div.job-list > ul > li', els => {
        return els.map(el => {
          const data = {
            job: el.querySelector('h3 > a > div.job-title').innerText,
            pay: el.querySelector('h3 > a > span.red').innerText,
            address: el.querySelector('div.info-primary > p').innerText,
            company: el.querySelector('div.info-company > div > h3').innerText,
            info: el.querySelector('div.info-company > div > p').innerText
          };
          return data;
        })
      })
      console.log('过程', i, getCompanyData.length);
      res.push(...getCompanyData);
      console.log('push', i, res.length);
    }
    await getInfo();
    for(var i = 3; i < 5; i++) {
      console.log('i', i);
      await page.waitFor(`div.page > a:nth-child(${i})`);
      await page.click(`div.page > a:nth-child(${i})`);
      await getInfo(i);
    }
    console.log('最终', res.length);
});


const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// stream.write("888", 'utf8');

// console.log(__dirname)
// console.log(__filename)
// console.log(process.cwd())
const tm = {
    timeout: 0
};
const config = {
    ...tm,
    headless: false,
    defaultViewport: {
        width: 1376,
        height: 768,
    }
};

const url = 'http://weixin.szebus.net/ebus/front/wxQueryController.do?QueryTicket&accountid=402880e84e8ac674014e8b2dcaa0011e';
const ck = 'JSESSIONID=B45D5564726C77A596136AD4F57B2A0C';
console.log('---启动浏览器---');
puppeteer.launch(config).then(async browser => {
    console.log('---打开tab---');
    const page = await browser.newPage();
    console.log('---跳转页面---');
    await page.setCookie({
      domain: 'weixin.szebus.net',
      name: 'JSESSIONID',
      value: 'B45D5564726C77A596136AD4F57B2A0C'
    });
    await page.goto(url);
    page.on('console', msg => console.log('LOG:', msg.text()));

    // 首页
    console.log('---首页---');
})
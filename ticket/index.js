const puppeteer = require('puppeteer');

const tm = {
    timeout: 0
};
const config = {
    ...tm,
    headless: false,
    defaultViewport: {
        width: 2000,
        height: 1000,
    }
};
const url = 'https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=%E6%B7%B1%E5%9C%B3,SZQ&ts=%E6%80%80%E5%8C%96,HHQ&date=2019-12-27&flag=N,N,Y';
console.log('---启动浏览器---');
puppeteer.launch(config)
.then(async browser => {
    console.log('---打开tab---');
    const page = await browser.newPage();
    console.log('---跳转页面---');
    await page.goto(url);
    page.on('console', msg => console.log('LOG:', msg.text()));
    const selector = '#ticket_6j000G616500 > td.no-br > a';
    await page.waitFor(selector)
    console.log('--- 购票 ---');
    await page.click(selector);
    
    console.log('--- login ---');
    const login = '.modal-login > div.login-box > ul > li.login-hd-account';

    console.log('waitFor');
    await page.waitFor(login, {
        visible: true
    });
    // await page.waitFor(4000);
    console.log('click');
    await page.click(login).then(res => {
        console.log('获取成功');
    }).catch(err => {
        console.log('未选择到元素', err);
    }).finally(_ => {
        console.log('login finish');
    });
    console.log('输入账号');
    await page.type('#J-userName', 'gzwgq222', {delay: 300})
    console.log('输入密码');
    await page.type('#J-password', '123456', {delay: 300})
    console.log('点击登录');
    await page.click('#J-login');
})
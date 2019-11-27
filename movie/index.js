const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const jsonUrl = path.join(__dirname, 'move.json');
const stream = fs.createWriteStream(jsonUrl);
// stream.write("888", 'utf8');

// console.log(__dirname)
// console.log(__filename)
// console.log(process.cwd())
const config = {
    headless: false,
    timeout: 0,
    defaultViewport: {
        width: 1376,
        height: 768,
    }

}
const url = 'http://www.xiguayyv1.com/';
puppeteer.launch(config).then(async browser => {
    const page = await browser.newPage();
    await page.goto(url);
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    const movie = '.stui-vodlist.clearfix'
    // await page.click('body > div:nth-child(4) > div > div:nth-child(1) > div > div.stui-pannel_bd.clearfix > ul > li:nth-child(1) > div');
    const res = await page.evaluate( sel => {
        const ulList = Array.from($(sel).find('h4 a'));
        const data = ulList.map(item => {
            console.log(item.innerText);
            return item.innerText;
        })
        // stream.write(JSON.stringify(brands, undefined, 2), 'UTF8');
        console.log(2, ulList.length);
        return data;
    }, movie)
    stream.write(JSON.stringify(res, undefined, 2), 'utf8');
})
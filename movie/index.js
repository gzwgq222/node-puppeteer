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
    // headless: false,
    // defaultViewport: {
    //     width: 1376,
    //     height: 768,
    // }
};

const url = 'http://www.xiguayyv1.com';

console.log('---启动浏览器---');
puppeteer.launch(config).then(async browser => {
    console.log('---打开tab---');
    const page = await browser.newPage();
    console.log('---跳转页面---');
    await page.goto(url);
    page.on('console', msg => console.log('LOG:', msg.text()));

    // 首页
    console.log('---首页---');
    const movie = 'body > div:nth-child(4) > div > div:nth-child(1) > div > div.stui-pannel_bd.clearfix > ul';
    const res = await page.evaluate( sel => {
        const ulList = Array.from($(sel).find('a.stui-vodlist__thumb.lazyload'));
        return ulList.map(item => item.getAttribute('href'));
    }, movie);
    console.log('movie: ', res.length);

    // 详情页
    console.log('---详情页---');
    const movieHtml = await Promise.all(res.map(async (item, index) => {
        const moviePage = await browser.newPage();
        await moviePage.goto(`${url}${item}`, tm);
        const href = await moviePage.$eval(
            'body > div:nth-child(7) > div > div.col-lg-wide-75.col-xs-1.padding-0 > div:nth-child(5) > div > div.stui-pannel_bd.col-pd.clearfix > ul > li > a',
            el => el.href
        );
        moviePage.close();
        return href;
    }))

    // 播放页
    console.log('---播放页---');
    const playLink = await Promise.all(movieHtml.map(async item => {
        const playPage = await browser.newPage();
        await playPage.goto(item, tm);
        const src = await playPage.$eval('#Player', el => el.src);
        const info = await playPage.$eval('.thumb > a', el => {
            return {
               title: el.title,
               img: el.getAttribute('data-original')
            }
        });
        playPage.close();
        return {
            ...info,
            src: src.split('?url=')[1]
        };
    }));
    console.log('结果：', playLink);

    console.log('---写入流---');
    const jsonUrl = path.join(__dirname, 'move.json');
    const stream = fs.createWriteStream(jsonUrl);
    stream.write(JSON.stringify(playLink, undefined, 2), 'utf8');
    await page.close();
    await browser.close();
    console.log('爬取完成');
})
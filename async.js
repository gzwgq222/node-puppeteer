function sleep (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

async function test() {
    const data = [1, 2, 3, 4];
    console.time('程序1耗时');
    for (let e of data) {
        console.log(e);
        await sleep(1000);
    };
    console.timeEnd('程序1耗时');
    console.log('同步');
    // console.time('程序2耗时');
    // await Promise.all(data.map(item => {
    //     return sleep(1000);
    // }))
    // console.timeEnd('程序2耗时');
};

test();
function sleep (time) {
  console.log('p');
    return new Promise(resolve => {
        setTimeout( _ => {
          console.log('haha')
          resolve();

        }, time);
    });
}

async function test() {
    const data = [1, 2, 3, 4];
    // console.time('程序1耗时');
    for (let e = 0; e < data.length; e++) {
        console.log(e);
        await sleep(1000);
    };
    // console.timeEnd('程序1耗时');
    console.log('结束');
    // console.time('程序2耗时');
    // await Promise.all(data.map(item => {
    //     return sleep(1000);
    // }))
    // console.timeEnd('程序2耗时');
};

test();
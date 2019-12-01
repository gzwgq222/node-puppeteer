const data = [
  {
    job: 'Web前端',
    pay: '10-18K',
    address: '深圳 福田区 会展中心3-5年大专',
    company: '法本',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'web前端',
    pay: '25-50K·15薪',
    address: '深圳 南山区 科技园3-5年本科',
    company: '腾讯',
    info: '互联网已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '11-18K',
    address: '深圳 龙华区 龙华3-5年本科',
    company: '富士康',
    info: '互联网已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '12-24K',
    address: '深圳 龙岗区 坂田经验不限本科',
    company: '中软国际',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '12-20K',
    address: '深圳 龙岗区 坂田1-3年本科',
    company: '中软国际',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'Web前端',
    pay: '15-28K',
    address: '深圳 南山区 科技园3-5年本科',
    company: '软通动力',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '12-20K·13薪',
    address: '深圳 南山区 科技园3-5年大专',
    company: '软通动力',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '10-16K',
    address: '深圳 南山区 科技园3-5年大专',
    company: '宇信科技',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'WEB前端开发',
    pay: '15-30K',
    address: '深圳 南山区 科技园3-5年本科',
    company: '微众银行',
    info: '互联网金融不需要融资1000-9999人'
  },
  {
    job: 'web前端',
    pay: '12-24K',
    address: '深圳 龙岗区 坂田3-5年本科',
    company: '中软国际',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端专家',
    pay: '25-50K',
    address: '深圳 南山区 科技园3-5年本科',
    company: '度创',
    info: '移动互联网不需要融资500-999人'
  },
  {
    job: 'web前端',
    pay: '15-30K',
    address: '深圳 南山区 龙华经验不限本科',
    company: 'Makeblock童心制物',
    info: '智能硬件C轮500-999人'
  },
  {
    job: 'Web前端',
    pay: '20-40K',
    address: '深圳 南山区 深圳湾3-5年本科',
    company: '阿里巴巴集团',
    info: '互联网不需要融资10000人以上'
  },
  {
    job: 'web前端',
    pay: '15-30K',
    address: '深圳 龙岗区 坂田1年以内本科',
    company: '华为',
    info: '计算机软件不需要融资10000人以上'
  },
  {
    job: 'WEB前端工程师',
    pay: '10-15K',
    address: '深圳 福田区 香蜜湖3-5年本科',
    company: '欣旺达',
    info: '其他行业已上市10000人以上'
  },
  {
    job: 'Web前端工程师',
    pay: '8-12K',
    address: '深圳 福田区 岗厦1-3年本科',
    company: '深圳朗驰科技',
    info: '计算机软件未融资20-99人'
  },
  {
    job: 'web前端',
    pay: '13-16K',
    address: '深圳 南山区 科技园3-5年本科',
    company: '绛门科技',
    info: '计算机软件已上市500-999人'
  },
  {
    job: 'web前端开发',
    pay: '25-50K',
    address: '深圳 南山区 科技园5-10年本科',
    company: '腾讯',
    info: '互联网已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '13-25K',
    address: '深圳 龙岗区 坂田1-3年本科',
    company: '中软国际',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '12-18K',
    address: '深圳 龙岗区 坂田1-3年本科',
    company: '软通动力',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端工程师',
    pay: '15-25K·14薪',
    address: '深圳 南山区 龙华3-5年本科',
    company: '道通科技',
    info: '智能硬件不需要融资1000-9999人'
  },
  {
    job: 'web前端开发',
    pay: '14-28K',
    address: '深圳 龙岗区 坂田3-5年本科',
    company: '软通动力',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '8-10K',
    address: '深圳 南山区 南头1-3年大专',
    company: '租客网',
    info: '互联网A轮100-499人'
  },
  {
    job: 'web前端',
    pay: '25-50K',
    address: '深圳 福田区 梅林3-5年本科',
    company: 'vivo',
    info: '移动互联网不需要融资10000人以上'
  },
  {
    job: 'web前端',
    pay: '24-35K',
    address: '深圳 南山区 南头5-10年本科',
    company: '即构科技zego',
    info: '互联网B轮100-499人'
  },
  {
    job: 'web前端',
    pay: '12-20K',
    address: '深圳 南山区 科技园3-5年大专',
    company: 'IMG LOGICS',
    info: '互联网不需要融资100-499人'
  },
  {
    job: 'web前端',
    pay: '30-45K',
    address: '深圳 南山区 海王大厦3-5年本科',
    company: '广发证券',
    info: '互联网金融已上市1000-9999人'
  },
  {
    job: 'web前端',
    pay: '12-24K',
    address: '深圳 龙岗区 坂田经验不限本科',
    company: 'isoftstone',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'web前端工程师',
    pay: '20-40K',
    address: '深圳 南山区 南油3-5年本科',
    company: '今日头条',
    info: '移动互联网未融资10000人以上'
  },
  {
    job: 'web前端工程师',
    pay: '15-25K',
    address: '深圳 龙岗区 平湖3-5年大专',
    company: '华杰电商(傲基集团)',
    info: '贸易/进出口B轮1000-9999人'
  },
  {
    job: 'web前端',
    pay: '10-20K',
    address: '深圳 罗湖区 东门3-5年大专',
    company: '人脉团',
    info: '社交网络不需要融资20-99人'
  },
  {
    job: '资深web前端（GZ)',
    pay: '15-30K·15薪',
    address: '深圳 福田区 华强南3-5年本科',
    company: '广州智品网络科技公司',
    info: '移动互联网A轮100-499人'
  },
  {
    job: 'web前端开发工程师',
    pay: '9-14K·14薪',
    address: '深圳 龙华区 大浪3-5年本科',
    company: 'Idoo',
    info: '智能硬件不需要融资500-999人'
  },
  {
    job: 'web前端，后端',
    pay: '8-13K',
    address: '深圳 龙岗区 坂田1-3年本科',
    company: '软通动力',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '13-26K',
    address: '深圳 龙岗区 坂田经验不限本科',
    company: '中软国际',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'Web前端高级工程师',
    pay: '18-30K',
    address: '深圳 南山区 深圳湾3-5年本科',
    company: '小赢科技',
    info: '互联网已上市500-999人'
  },
  {
    job: 'web前端',
    pay: '6-8K',
    address: '深圳 南山区 西丽经验不限初中及以下',
    company: '旭联软件',
    info: '计算机软件0-20人'
  },
  {
    job: 'Web前端开发工程师',
    pay: '30-60K',
    address: '深圳 南山区 科技园5-10年本科',
    company: '腾讯',
    info: '互联网已上市10000人以上'
  },
  {
    job: 'Web前端开发工程师',
    pay: '25-40K',
    address: '深圳 龙岗区 万科城3-5年本科',
    company: '深圳华为',
    info: '通信/网络设备不需要融资10000人以上'
  },
  {
    job: 'Web前端开发工程师',
    pay: '20-40K',
    address: '深圳 5-10年本科',
    company: 'OPPO',
    info: '互联网不需要融资10000人以上'
  },
  {
    job: 'Web前端',
    pay: '11-17K·13薪',
    address: '深圳 龙岗区 坂田1-3年本科',
    company: '中软国际',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: '高级WEB前端开发工程师',
    pay: '20-35K',
    address: '深圳 南山区 科技园5-10年本科',
    company: '贝尔创意',
    info: '智能硬件B轮1000-9999人'
  },
  {
    job: 'web前端开发工程师',
    pay: '10-15K',
    address: '深圳 1-3年本科',
    company: '阿卡索外教网',
    info: '在线教育C轮1000-9999人'
  },
  {
    job: 'web前端工程师',
    pay: '12-20K',
    address: '深圳 南山区 科技园3-5年大专',
    company: 'IMG LOGICS',
    info: '互联网不需要融资100-499人'
  },
  {
    job: 'Web前端开发工程师',
    pay: '30-60K',
    address: '深圳 龙岗区 坂田3-5年本科',
    company: '华为',
    info: '计算机软件不需要融资10000人以上'
  },
  {
    job: 'Web前端开发工程师',
    pay: '12-24K',
    address: '深圳 福田区 黄木岗3-5年本科',
    company: '软通动力',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '25-50K',
    address: '深圳 南山区 深圳湾经验不限本科',
    company: 'OPPO',
    info: '互联网不需要融资10000人以上'
  },
  {
    job: 'web前端开发工程师',
    pay: '15-20K',
    address: '深圳 南山区 南头1-3年本科',
    company: 'JIGUANG极光',
    info: '数据服务已上市500-999人'
  },
  {
    job: 'web前端开发',
    pay: '11-20K',
    address: '深圳 龙岗区 坂田3-5年本科',
    company: '软通动力信息技术集团',
    info: '计算机软件不需要融资10000人以上'
  },
  {
    job: 'web前端讲师(兼职)',
    pay: '15-25K',
    address: '深圳 龙岗区 龙岗中心城1-3年大专',
    company: '深圳市领讯云智能',
    info: '培训机构0-20人'
  },
  {
    job: 'WEB前端工程师',
    pay: '14-20K',
    address: '深圳 罗湖区 东门3-5年大专',
    company: '四方精创',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'web前端',
    pay: '12-20K',
    address: '深圳 3-5年本科',
    company: '易宝',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'web前端',
    pay: '8-13K·13薪',
    address: '深圳 南山区 西丽3-5年本科',
    company: '深圳学堂科技有限公司',
    info: '计算机软件未融资0-20人'
  },
  {
    job: 'web前端',
    pay: '30-60K',
    address: '深圳 南山区 深圳湾3-5年本科',
    company: 'LAZADA',
    info: '电子商务不需要融资1000-9999人'
  },
  {
    job: 'web前端',
    pay: '6-10K',
    address: '深圳 宝安区 新安3-5年本科',
    company: '星际教育科技',
    info: '学前教育100-499人'
  },
  {
    job: 'Web前端开发工程师',
    pay: '11-20K',
    address: '深圳 福田区 上步经验不限本科',
    company: '宇信科技',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'web前端工程师',
    pay: '8-13K',
    address: '深圳 南山区 深圳湾3-5年本科',
    company: '星球家园',
    info: '互联网不需要融资20-99人'
  },
  {
    job: '移动web前端',
    pay: '25-45K',
    address: '深圳 3-5年本科',
    company: '腾讯',
    info: '互联网已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '7-12K',
    address: '深圳 南山区 科技园1-3年本科',
    company: '点通数据',
    info: '数据服务不需要融资1000-9999人'
  },
  {
    job: 'web前端leader',
    pay: '20-40K',
    address: '深圳 南山区 科技园3-5年本科',
    company: 'Shopee',
    info: '电子商务已上市1000-9999人'
  },
  {
    job: 'web前端',
    pay: '10-20K',
    address: '深圳 罗湖区 东门3-5年大专',
    company: '人脉团',
    info: '社交网络不需要融资20-99人'
  },
  {
    job: '资深web前端（GZ)',
    pay: '15-30K·15薪',
    address: '深圳 福田区 华强南3-5年本科',
    company: '广州智品网络科技公司',
    info: '移动互联网A轮100-499人'
  },
  {
    job: 'web前端开发工程师',
    pay: '9-14K·14薪',
    address: '深圳 龙华区 大浪3-5年本科',
    company: 'Idoo',
    info: '智能硬件不需要融资500-999人'
  },
  {
    job: 'web前端，后端',
    pay: '8-13K',
    address: '深圳 龙岗区 坂田1-3年本科',
    company: '软通动力',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '13-26K',
    address: '深圳 龙岗区 坂田经验不限本科',
    company: '中软国际',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'Web前端高级工程师',
    pay: '18-30K',
    address: '深圳 南山区 深圳湾3-5年本科',
    company: '小赢科技',
    info: '互联网已上市500-999人'
  },
  {
    job: 'web前端',
    pay: '6-8K',
    address: '深圳 南山区 西丽经验不限初中及以下',
    company: '旭联软件',
    info: '计算机软件0-20人'
  },
  {
    job: 'Web前端开发工程师',
    pay: '30-60K',
    address: '深圳 南山区 科技园5-10年本科',
    company: '腾讯',
    info: '互联网已上市10000人以上'
  },
  {
    job: 'Web前端开发工程师',
    pay: '25-40K',
    address: '深圳 龙岗区 万科城3-5年本科',
    company: '深圳华为',
    info: '通信/网络设备不需要融资10000人以上'
  },
  {
    job: 'Web前端开发工程师',
    pay: '20-40K',
    address: '深圳 5-10年本科',
    company: 'OPPO',
    info: '互联网不需要融资10000人以上'
  },
  {
    job: 'Web前端',
    pay: '11-17K·13薪',
    address: '深圳 龙岗区 坂田1-3年本科',
    company: '中软国际',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: '高级WEB前端开发工程师',
    pay: '20-35K',
    address: '深圳 南山区 科技园5-10年本科',
    company: '贝尔创意',
    info: '智能硬件B轮1000-9999人'
  },
  {
    job: 'web前端开发工程师',
    pay: '10-15K',
    address: '深圳 1-3年本科',
    company: '阿卡索外教网',
    info: '在线教育C轮1000-9999人'
  },
  {
    job: 'web前端工程师',
    pay: '12-20K',
    address: '深圳 南山区 科技园3-5年大专',
    company: 'IMG LOGICS',
    info: '互联网不需要融资100-499人'
  },
  {
    job: 'Web前端开发工程师',
    pay: '30-60K',
    address: '深圳 龙岗区 坂田3-5年本科',
    company: '华为',
    info: '计算机软件不需要融资10000人以上'
  },
  {
    job: 'Web前端开发工程师',
    pay: '12-24K',
    address: '深圳 福田区 黄木岗3-5年本科',
    company: '软通动力',
    info: '计算机软件已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '25-50K',
    address: '深圳 南山区 深圳湾经验不限本科',
    company: 'OPPO',
    info: '互联网不需要融资10000人以上'
  },
  {
    job: 'web前端开发工程师',
    pay: '15-20K',
    address: '深圳 南山区 南头1-3年本科',
    company: 'JIGUANG极光',
    info: '数据服务已上市500-999人'
  },
  {
    job: 'web前端开发',
    pay: '11-20K',
    address: '深圳 龙岗区 坂田3-5年本科',
    company: '软通动力信息技术集团',
    info: '计算机软件不需要融资10000人以上'
  },
  {
    job: 'web前端讲师(兼职)',
    pay: '15-25K',
    address: '深圳 龙岗区 龙岗中心城1-3年大专',
    company: '深圳市领讯云智能',
    info: '培训机构0-20人'
  },
  {
    job: 'WEB前端工程师',
    pay: '14-20K',
    address: '深圳 罗湖区 东门3-5年大专',
    company: '四方精创',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'web前端',
    pay: '12-20K',
    address: '深圳 3-5年本科',
    company: '易宝',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'web前端',
    pay: '8-13K·13薪',
    address: '深圳 南山区 西丽3-5年本科',
    company: '深圳学堂科技有限公司',
    info: '计算机软件未融资0-20人'
  },
  {
    job: 'web前端',
    pay: '30-60K',
    address: '深圳 南山区 深圳湾3-5年本科',
    company: 'LAZADA',
    info: '电子商务不需要融资1000-9999人'
  },
  {
    job: 'web前端',
    pay: '6-10K',
    address: '深圳 宝安区 新安3-5年本科',
    company: '星际教育科技',
    info: '学前教育100-499人'
  },
  {
    job: 'Web前端开发工程师',
    pay: '11-20K',
    address: '深圳 福田区 上步经验不限本科',
    company: '宇信科技',
    info: '计算机软件已上市1000-9999人'
  },
  {
    job: 'web前端工程师',
    pay: '8-13K',
    address: '深圳 南山区 深圳湾3-5年本科',
    company: '星球家园',
    info: '互联网不需要融资20-99人'
  },
  {
    job: '移动web前端',
    pay: '25-45K',
    address: '深圳 3-5年本科',
    company: '腾讯',
    info: '互联网已上市10000人以上'
  },
  {
    job: 'web前端',
    pay: '7-12K',
    address: '深圳 南山区 科技园1-3年本科',
    company: '点通数据',
    info: '数据服务不需要融资1000-9999人'
  },
  {
    job: 'web前端leader',
    pay: '20-40K',
    address: '深圳 南山区 科技园3-5年本科',
    company: 'Shopee',
    info: '电子商务已上市1000-9999人'
  }
]

console.log(data.length);
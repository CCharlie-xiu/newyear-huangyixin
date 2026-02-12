// ===== 页面文字配置 =====
const TEXT_CONFIG = {
    // 页面标题
    pageTitle: '回忆 - 2025',

    // 引导层
    intro: {
        icon: '❤️',
        title: '开启回忆',
        desc: '一起回顾属于我们的 2025<br>那些温暖的瞬间',
        btn: '下滑开始回忆'
    },

    // 封面
    cover: {
        year: '2025',
        title: '回忆',
        sub: '亲爱的 · 黄一心 · 这是你的2025份糖份检测报告',
        scrollHint: '向下滑动'
    },

    // 统计页
    stats: {
        title: '这一年，我们的数字',
        items: [
            { label: '一起聊天', value: '365', unit: '天' },
            { label: '深度共鸣', value: '86400', unit: '秒' }, // 隐喻全天候
            { label: '聊天总时长', value: '118502', unit: '分钟' }, // 约日均5.4小时
            { label: '互发表情', value: '32590', unit: '张' },
            { label: '视频', value: '15607', unit: '分钟' },
            { label: '互说晚安', value: '673', unit: '次' }, // 每天早晚各一次或更多
            { label: '深夜话痨', value: '188', unit: '个夜晚' },
            { label: '抖音分享', value: '2190', unit: '次' } // 日均6次左右的分享
        ]
    },

    // 时间轴
    timeline: {
        title: '时光轴',
        sub: '那些值得记住的日子',
        data: [
            { month: '1月15日 早上06:51', text: '马上考试的黄一心早期和吴昌桦说早安' },
            { month: '2月20日 下午13:16', text: '异地的黄一心说闻到了吴昌桦身上的味道' },
            { month: '3月10日 中午12:21', text: '吴昌桦开始研究黄一心的希沃怎么用' },
            { month: '4月21日 晚上23:08', text: '吴昌桦直播拆黄一心寄来的神秘礼物' },
            { month: '5月12日 凌晨00:23', text: '黄一心和吴昌桦开始收集一二布布表情包' },
            { month: '6月4日  凌晨00:00', text: '黄一心和吴昌桦一起度过18岁生日' },
            { month: '6月8日  早上07:08', text: '黄一心高考加油！！现在说来有好好考呢' },
            { month: '7月31日 深夜24:00', text: '黄一心和吴昌桦两个赌徒打麻将输光所有' },
            { month: '8月18日 下午15:06', text: '黄一心一觉睡到三点，吴昌桦端瓦乱杀' },
            { month: '9月29日 凌晨01:42', text: '黄一心买了个很牛的东西立马分享给吴昌桦' },
            { month: '10月5日 凌晨01:12', text: '吴昌桦给黄一心连说了三句晚安' },
            { month: '11月9日 一整天', text: '多次视频+黄一心想见面+吴昌桦要黄一心的课表' },
            { month: '12月24日 凌晨00:07', text: '黄一心给吴昌桦过生日' },
            { month: '12月25日 凌晨05:20', text: '吴昌桦偷偷亲了黄一心一大口' },
        ]
    },

    // 回忆主体
    memories: {
        title: '温暖瞬间',
        sub: '每一帧都是故事',
        captions: [
            '处理食材的认真模样',
            '刀工了得',
            '最美全家福',
            '大厨上线',
            '开饭啦',
            '满满一桌幸福',
            '干杯的瞬间',
            '笑得最开心的时候',
            '饭后的悠闲时光',
            '最后的合影留念',
            '饭后的悠闲时光'
        ],
        gallery: [
            'https://picsum.photos/seed/mem0/400/320',
            'https://picsum.photos/seed/mem1/400/420',
            'https://picsum.photos/seed/mem2/400/280',
            'https://picsum.photos/seed/mem3/400/500',
            'https://picsum.photos/seed/mem4/400/360',
            'https://picsum.photos/seed/mem5/400/450',
            'https://picsum.photos/seed/mem6/400/300',
            'https://picsum.photos/seed/mem7/400/380',
            'https://picsum.photos/seed/mem8/400/460',
            'https://picsum.photos/seed/mem9/400/340',
            'https://picsum.photos/seed/mem9/400/340'
        ]
    },

    // 高光时刻
    highlight: {
        badge: '黄一心宝宝和吴昌桦宝宝的小家庭全家福',
        imgSrc: 'https://picsum.photos/seed/together/600/400',
        title: '最珍贵的团聚',
        sub: '这一刻，所有的忙碌都值得'
    },

    // 减速区
    pause: {
        text: '时间慢下来<br>让我们好好感受<br>这一年的温度'
    },

    // 结尾
    ending: {
        farewell: '这一年，谢谢你',
        yearChars: ['2', '0', '2', '6']
    },

    // 祝福语
    blessings: [
        '一个亿', '大富大贵', '恭喜发财', '小公主发大财',
        '快快乐乐', '爽吃黄焖鸡', '暴富', '心想事成',
        '万事如意', '财源滚滚', '好运连连', '升职加薪',
        '锦鲤附体', '天天开心', '越来越美', '嘎嘎上分',
        '一夜暴富', '幸福美满', '吃嘛嘛香', '躺赢人生'
    ]
};

// ===== 图片资源配置 =====
const MEDIA_CONFIG = {
    bgmSrc: 'videos/M800003SsHqu0JF0un.mp3',

    videoSrc: [
        'https://www.w3schools.com/html/mov_bbb.mp4',
        'https://www.w3schools.com/html/movie.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
    ],

    imgUrls: [
        'https://picsum.photos/seed/fish/400/500',
        'https://picsum.photos/seed/cook/400/600',
        'https://picsum.photos/seed/family/400/400',
        'https://picsum.photos/seed/dinner/400/550',
        'https://picsum.photos/seed/feast/400/480'
    ],

    stickerImages: [
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3032.jpg','imgs/IMG_3033.jpg','imgs/IMG_3034.jpg','imgs/IMG_3035.jpg',
        'imgs/IMG_3036.jpg','imgs/IMG_3037.jpg','imgs/IMG_3038.jpg','imgs/IMG_3039.jpg',
        'imgs/IMG_3040.jpg','imgs/IMG_3041.jpg','imgs/IMG_3042.jpg','imgs/IMG_3043.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3066.jpg','imgs/IMG_3067.jpg','imgs/IMG_3068.jpg','imgs/IMG_3069.jpg',
        'imgs/IMG_3070.jpg','imgs/IMG_3071.jpg','imgs/IMG_3072.jpg','imgs/IMG_3073.jpg',
        'imgs/IMG_3074.jpg','imgs/IMG_3075.jpg','imgs/IMG_3076.jpg','imgs/IMG_3077.jpg',
        'imgs/IMG_3078.jpg','imgs/IMG_3079.jpg','imgs/IMG_3080.jpg','imgs/IMG_3081.jpg',
        'imgs/IMG_3082.jpg','imgs/IMG_3083.jpg','imgs/IMG_3084.jpg','imgs/IMG_3085.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3032.jpg','imgs/IMG_3033.jpg','imgs/IMG_3034.jpg','imgs/IMG_3035.jpg',
        'imgs/IMG_3036.jpg','imgs/IMG_3037.jpg','imgs/IMG_3038.jpg','imgs/IMG_3039.jpg',
        'imgs/IMG_3040.jpg','imgs/IMG_3041.jpg','imgs/IMG_3042.jpg','imgs/IMG_3043.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3066.jpg','imgs/IMG_3067.jpg','imgs/IMG_3068.jpg','imgs/IMG_3069.jpg',
        'imgs/IMG_3070.jpg','imgs/IMG_3071.jpg','imgs/IMG_3072.jpg','imgs/IMG_3073.jpg',
        'imgs/IMG_3074.jpg','imgs/IMG_3075.jpg','imgs/IMG_3076.jpg','imgs/IMG_3077.jpg',
        'imgs/IMG_3078.jpg','imgs/IMG_3079.jpg','imgs/IMG_3080.jpg','imgs/IMG_3081.jpg',
        'imgs/IMG_3082.jpg','imgs/IMG_3083.jpg','imgs/IMG_3084.jpg','imgs/IMG_3085.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3032.jpg','imgs/IMG_3033.jpg','imgs/IMG_3034.jpg','imgs/IMG_3035.jpg',
        'imgs/IMG_3036.jpg','imgs/IMG_3037.jpg','imgs/IMG_3038.jpg','imgs/IMG_3039.jpg',
        'imgs/IMG_3040.jpg','imgs/IMG_3041.jpg','imgs/IMG_3042.jpg','imgs/IMG_3043.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3066.jpg','imgs/IMG_3067.jpg','imgs/IMG_3068.jpg','imgs/IMG_3069.jpg',
        'imgs/IMG_3070.jpg','imgs/IMG_3071.jpg','imgs/IMG_3072.jpg','imgs/IMG_3073.jpg',
        'imgs/IMG_3074.jpg','imgs/IMG_3075.jpg','imgs/IMG_3076.jpg','imgs/IMG_3077.jpg',
        'imgs/IMG_3078.jpg','imgs/IMG_3079.jpg','imgs/IMG_3080.jpg','imgs/IMG_3081.jpg',
        'imgs/IMG_3082.jpg','imgs/IMG_3083.jpg','imgs/IMG_3084.jpg','imgs/IMG_3085.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3032.jpg','imgs/IMG_3033.jpg','imgs/IMG_3034.jpg','imgs/IMG_3035.jpg',
        'imgs/IMG_3036.jpg','imgs/IMG_3037.jpg','imgs/IMG_3038.jpg','imgs/IMG_3039.jpg',
        'imgs/IMG_3040.jpg','imgs/IMG_3041.jpg','imgs/IMG_3042.jpg','imgs/IMG_3043.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3066.jpg','imgs/IMG_3067.jpg','imgs/IMG_3068.jpg','imgs/IMG_3069.jpg',
        'imgs/IMG_3070.jpg','imgs/IMG_3071.jpg','imgs/IMG_3072.jpg','imgs/IMG_3073.jpg',
        'imgs/IMG_3074.jpg','imgs/IMG_3075.jpg','imgs/IMG_3076.jpg','imgs/IMG_3077.jpg',
        'imgs/IMG_3078.jpg','imgs/IMG_3079.jpg','imgs/IMG_3080.jpg','imgs/IMG_3081.jpg',
        'imgs/IMG_3082.jpg','imgs/IMG_3083.jpg','imgs/IMG_3084.jpg','imgs/IMG_3085.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3032.jpg','imgs/IMG_3033.jpg','imgs/IMG_3034.jpg','imgs/IMG_3035.jpg',
        'imgs/IMG_3036.jpg','imgs/IMG_3037.jpg','imgs/IMG_3038.jpg','imgs/IMG_3039.jpg',
        'imgs/IMG_3040.jpg','imgs/IMG_3041.jpg','imgs/IMG_3042.jpg','imgs/IMG_3043.jpg',
        'imgs/IMG_3024.jpg','imgs/IMG_3025.jpg','imgs/IMG_3026.jpg','imgs/IMG_3027.jpg',
        'imgs/IMG_3028.jpg','imgs/IMG_3029.jpg','imgs/IMG_3030.jpg','imgs/IMG_3031.jpg',
        'imgs/IMG_3066.jpg','imgs/IMG_3067.jpg','imgs/IMG_3068.jpg','imgs/IMG_3069.jpg',
        'imgs/IMG_3070.jpg','imgs/IMG_3071.jpg','imgs/IMG_3072.jpg','imgs/IMG_3073.jpg',
        'imgs/IMG_3074.jpg','imgs/IMG_3075.jpg','imgs/IMG_3076.jpg','imgs/IMG_3077.jpg',
        'imgs/IMG_3078.jpg','imgs/IMG_3079.jpg','imgs/IMG_3080.jpg','imgs/IMG_3081.jpg',
        'imgs/IMG_3082.jpg','imgs/IMG_3083.jpg','imgs/IMG_3084.jpg','imgs/IMG_3085.jpg',
    ],

    galleryHeights: [320, 420, 280, 500, 360, 450, 300, 380, 460, 340]
};

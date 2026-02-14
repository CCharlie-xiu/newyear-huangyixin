// ===== 页面文字配置 =====
const TEXT_CONFIG = {
    // 页面标题
    pageTitle: '回忆 - 2025',

    // 引导层
    intro: {
        icon: '❤️',
        title: '开启回忆',
        desc: '一起回顾属于我们的 2025<br>那些温暖的瞬间',
        btn: '回顾'
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
        title: '一闪一闪亮晶晶，满眼都是黄一心',
        sub: '每一帧都是故事',
        captions: [
            '真是一个可爱的小宝宝每次看到我都很开心',
            '哇咔咔好有爱呀好幸福这时候见面是真的很开心',
            '这张我超级爱所以我要单独拿出来再放一次',
            '韩国的大美女既视感超级美的一个回眸',
            '这张拍的超级好记录一下咱俩的拍照生活',
            '骑行高手美美带飞',
            '给妈妈的鲜花先给咱俩美美来一张',
            '这张表情真是太心动了',
            '哇咔咔太可爱了这张晚上拍的这天真的很开心',
            'qiaoqiaoqiao更是可爱',
            '爱上美美的老婆',
            '小小的老子大大的可爱'
        ],
        gallery: [
            'gallery/1.png',
            'gallery/3.jpg',
            'gallery/2.png',
            'gallery/4.jpg',
            'gallery/5.jpg',
            'gallery/6.jpg',
            'gallery/7.jpg',
            'gallery/8.jpg',
            'gallery/9.jpg',
            'gallery/10.jpg',
            'gallery/11.jpg',
            'gallery/12.jpg',
        ]
    },

    // 高光时刻
    highlight: {
        badge: '黄一心宝宝和吴昌桦宝宝的小家庭全家福',
        imgSrc: 'gallery/fn.jpg',
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
        '黄一心', '新年快乐','嘎嘎上分', '小公主发大财',
        '开开心心', '爽吃黄焖鸡', '暴富', '心想事成',
    ]
};

// ===== 图片资源配置 =====
const MEDIA_CONFIG = {
    bgmSrc: 'videos/M800003SsHqu0JF0un.mp3',

    videoSrc: [
        '',
    ],

    imgUrls: [
        'gallery/12.jpg',
        'gallery/13.jpg',
        'gallery/14.jpg',
        'gallery/15.jpg',
        'gallery/16.jpg',
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

// ===== 滚动时打印当前可见文字（带防抖） =====
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// ===== AI 调用相关 =====
let aiCalling = false;      // 防止并发调用
let lastSentText = '';       // 上次发送的文字，避免重复请求

async function callAI(visibleText) {
    if (aiCalling) return;
    // 内容没变就不重复调用
    if (visibleText === lastSentText) return;
    lastSentText = visibleText;
    aiCalling = true;

    const bubble = document.getElementById('speech-bubble');
    const bubbleText = bubble ? bubble.querySelector('.bubble-text') : null;
    if (!bubble || !bubbleText) { aiCalling = false; return; }

    // 先显示加载状态
    bubbleText.textContent = '';
    bubble.style.display = 'block';

    try {
        const res = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-ymrkjekqpkdmylfwstwyvpnplyobufdejujcblqmtjplkuxl'
            },
            body: JSON.stringify({
                model: 'Qwen/Qwen3-8B',
                stream: true,
                messages: [
                    {
                        role: 'system',
                        content: '你是一个恋爱大师，你的女主是黄一心，你叫做吴昌桦，接下来你要陪她一起看你给她制作的h5页面。，你最喜欢叫她老婆，小宝宝了。请用温柔、甜蜜、简短的语气回复（控制在150字以内），像男朋友在旁边陪她看一样。'
                    },
                    {
                        role: 'user',
                        content: '这是她现在看到的内容：' + visibleText
                    }
                ],
                max_tokens: 150,
                temperature: 0.8
            })
        });

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let fullText = '';
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            // 按行解析 SSE
            const lines = buffer.split('\n');
            // 最后一行可能不完整，留到下次
            buffer = lines.pop();

            for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || !trimmed.startsWith('data:')) continue;
                const jsonStr = trimmed.slice(5).trim();
                if (jsonStr === '[DONE]') continue;

                try {
                    const chunk = JSON.parse(jsonStr);
                    const delta = chunk.choices && chunk.choices[0] && chunk.choices[0].delta;
                    if (delta && delta.content) {
                        fullText += delta.content;
                        bubbleText.textContent = fullText;
                    }
                } catch (e) {
                    // 忽略解析失败的行
                }
            }
        }

        if (!fullText) {
            bubbleText.textContent = visibleText;
        }
    } catch (err) {
        console.error('[AI调用失败]', err);
        bubbleText.textContent = visibleText;
    } finally {
        aiCalling = false;
    }
}

function throttle(fn, interval) {
    let lastTime = 0;
    let pending = null;
    return function (...args) {
        const now = Date.now();
        clearTimeout(pending);
        if (now - lastTime >= interval) {
            lastTime = now;
            fn.apply(this, args);
        } else {
            // 间隔内的最后一次调用，等间隔结束后执行
            pending = setTimeout(() => {
                lastTime = Date.now();
                fn.apply(this, args);
            }, interval - (now - lastTime));
        }
    };
}

const throttledCallAI = throttle(callAI, 3000);

function getVisibleText() {
    const bubble = document.getElementById('speech-bubble');
    const bubbleText = bubble ? bubble.querySelector('.bubble-text') : null;
    if (!bubble || !bubbleText) return;

    const elements = document.querySelectorAll(
        'h2, h3, p, span, div, button'
    );
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;
    const texts = [];

    elements.forEach(el => {
        // 跳过气泡自身、不可见元素、fixed定位元素
        if (bubble.contains(el)) return;
        if (el.closest('#video-float') || el.closest('#speech-bubble')) return;
        if (el.offsetParent === null && el.style.position !== 'fixed') return;
        const style = getComputedStyle(el);
        if (style.opacity === '0' || style.visibility === 'hidden' || style.display === 'none') return;

        const rect = el.getBoundingClientRect();
        const elTop = rect.top + window.scrollY;
        const elBottom = elTop + rect.height;

        // 判断元素是否在视口内
        if (elBottom > viewportTop && elTop < viewportBottom) {
            // 只取直接文本内容，避免重复收集子元素文字
            const directText = Array.from(el.childNodes)
                .filter(node => node.nodeType === Node.TEXT_NODE)
                .map(node => node.textContent.trim())
                .join('');
            if (directText) {
                texts.push(directText);
            }
        }
    });

    if (texts.length) {
        const display = texts.join('，');
        console.log('[当前可见文字]', texts.join(' | '));
        bubble.style.display = 'block';
        // 调用AI，让气泡展示AI回复（节流5秒内最多一次）
        throttledCallAI(display);
    } else {
        bubble.style.display = 'none';
    }
}

// 气泡跟随视频浮窗位置
function updateBubblePosition() {
    const videoFloat = document.getElementById('video-float');
    const bubble = document.getElementById('speech-bubble');
    if (!videoFloat || !bubble) return;
    if (videoFloat.style.display === 'none') {
        bubble.style.display = 'none';
        return;
    }
    const vRect = videoFloat.getBoundingClientRect();
    bubble.style.top = vRect.top + 'px';
    bubble.style.right = (window.innerWidth - vRect.left + 8) + 'px';
}

window.addEventListener('scroll', debounce(function () {
    /* getVisibleText(); */
    updateBubblePosition();
}, 300), { passive: true });

// 定时刷新可见文字（处理非滚动触发的内容变化）
setInterval(function () {
    getVisibleText();
    updateBubblePosition();
}, 2000);

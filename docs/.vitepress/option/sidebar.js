export default {
    '/blog/': [
        {
            text: '红宝书',
            link: '/blog/',
            items: [
                { text: '起源', link: '/blog/chapter1' },
                { text: '了解javaScript', link: '/blog/chapter2' },
                { text: 'javaScript基本概念', link: '/blog/chapter3' }
            ]
        }
    ],
    '/style/': [
        {
            text: '视觉格式化模型',
            collapsed: true,
            items: [
                { text: '什么是视觉格式化模型', link: '/blog/chapter1' },
                { text: '了解javaScript', link: '/blog/chapter2' },
                { text: 'javaScript基本概念', link: '/blog/chapter3' }
            ]
        },
        {
            text: '样式计算',
            collapsed: true,
            items: [
                { text: '起源', link: '/blog/chapter1' },
                { text: '了解javaScript', link: '/blog/chapter2' },
                { text: 'javaScript基本概念', link: '/blog/chapter3' }
            ]
        }
    ],
    '/nginx/': [
        {
            items: [
                { text: 'global', link: '/nginx/global' },
                { text: 'events', link: '/nginx/events' },
                { text: 'stream', link: '/nginx/stream' },
                { text: 'http', link: '/nginx/http' },
                { text: 'server', link: '/nginx/server' },
                { text: 'location', link: '/nginx/location' },
                { text: 'property', link: '/nginx/property' },
            ]
        },
    ],
    '/git/': [
        {
            text: 'git',
            link: '/git/',
            items: [
                { text: 'git版本回退方案', link: '/git/fallback' },
            ]
        },
    ]
}
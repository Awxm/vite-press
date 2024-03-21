import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习文档",
  description: "学习文档",
  lang: "zh-CN",
  base: '/vite-press/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '博客', link: '/blog' },
      {
        text: '文档', items: [
          { text: '语言', link: '/javaScript/' },
          { text: '样式', link: '/style/' },
        ]
      },
      { text: '算法', link: '/arithmetic/' },
      { text: '面试', link: '/interview/' }
    ],

    sidebar: '',
    // [
    //   {
    //     text: '用户列表',
    //     items: [
    //       { text: '模块1', link: '/markdown-examples' },
    //       { text: '模块2', link: '/api-examples' }
    //     ]
    //   }
    // ],
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: []
  }
})

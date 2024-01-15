import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "募随文档",
  description: "募随文档",
  lang: "zh-CN",
  base: '/vite-press/',
  // lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '用户列表', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '用户列表',
        items: [
          { text: '模块1', link: '/markdown-examples' },
          { text: '模块2', link: '/api-examples' }
        ]
      }
    ],
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

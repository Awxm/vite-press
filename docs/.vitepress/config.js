import { defineConfig } from 'vitepress'
import sidebar from './option/sidebar.js';
import nav from './option/nav.js';
export default defineConfig({
  title: "学习文档",
  description: "学习文档",
  lang: "zh-CN",
  base: '/vite-press/',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/Awxm/vite-press' }],
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
})

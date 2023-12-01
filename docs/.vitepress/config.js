import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // markdown: {
  //   anchor: { permalink: true }
  // },
  title: "Lazy Blog",
  description: "Personal blog for lazy.",
  // rewrites: {
  //   'algorithm/index.html': 'algorithm/index.md',
  //   'http/index.html': 'http/index.md',
  //   'v8/index.html': 'v8/index.md',
  //   'jsfolder/index.html': 'jsfolder/index.md',
  //   'webpack/index.html': 'webpack/index.md',
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '数据结构', link: '/datastruct/stack' },
      { text: '算法', link: '/algorithm/sort' },
      { text: 'HTTP', link: '/http/http.html' },
      { text: '浏览器&V8', link: '/v8/v8.html' },
      { text: 'JS面试题', link: '/jsfolder/jsfolder.html' },
      { text: 'webpack', link: '/webpack/webpack.html' },
      { text: '设计模式', link: '/design/design.html' }
    ],

    sidebar: [
      {
        text: '算法',
        items: [
          { text: '排序算法', link: '/algorithm/sort' },
          { text: '二分搜索树相关', link: '/algorithm/bst' }
        ]
      },
      {
        text: '数据结构',
        items: [
          { text: '栈', link: '/datastruct/stack' },
          { text: '队列', link: '/datastruct/queue' }
        ]
      },
      {
        text: 'HTTP',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '浏览器&V8',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'JS面试题',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'webpack',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '设计模式',
        items: [
          // { text: '排序算法', link: '/algorithm/sort' },
          // { text: '二分搜索树相关', link: '/algorithm/bst' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lazyxiao/personal-blog' }
    ]
  }
})

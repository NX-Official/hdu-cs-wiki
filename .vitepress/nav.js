export function nav() {
  return [
    { text: '首页', link: '/' },
    {
      text: '章节', items:
        [
          { text: '1.杭电生存指南（最重要模块）', link: '/1.杭电生存指南/1.1人文社科的重要性（韩健夫老师寄语）' },
          { text: '2.高效学习', link: '/2.高效学习/2.高效学习' },
          { text: '3.编程思维体系构建', link: '/3.编程思维体系构建/3.编程思维体系构建' },
          { text: '4.人工智能', link: '/4.人工智能/4.人工智能' },
          { text: '5.富有生命的嵌入式', link: '/5.富有生命的嵌入式/5.富有生命的嵌入式' },
          { text: '6.计算机安全', link: '/6.计算机安全/6.计算机安全' },
          { text: '7.网络应用开发', link: '/7.网络应用开发/7.网络应用开发入门' },
          { text: '8.基础学科', link: '/8.基础学科/8.基础学科' },
        ]
    },
    { text: '博客', link: '/blog/' },
    { text: 'Wiki史', link: '/wiki史' },
    {
      text: '友链', items:
        [
          { text: '杭电导航', link: 'https://wiki.hduhelp.com' },
        ]
    },
  ]
}
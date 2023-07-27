---

# https://vitepress.dev/reference/default-theme-home-page

layout: home

# 网站图标旁边的显示文字

title: liuB 个人博客
titleTemplate: 开发文档

hero:
# 项目名称
    name: "VitePress"
# 项目的简单描述
    text: "VitePress开发文档"
# 标语：基于什么技术栈
    tagline: "基于Vue3、Vite3、TS、NaiveUI和UnoCSS"
# 项目首页的logo
    image:
# 相对于public文件夹的路径 ,放在public中无需写完整路径
          src: /StreamlineEmojis2.svg
# 图片不显示时的文字
          alt: Yellow Chicken
    actions:
            - theme: brand
              text: 开始
              link: /examples/markdown-examples
            - theme: alt
              text: 介绍
              link: /demo/demo1
            - theme: alt
              text: 在Gitee上查看
              link: https://gitee.com/wakemoto/projects
            - theme: brand
              text: v1.0.0

features:

# 直接复制粘贴即可 https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json

- icon: 🐳
  title: 最新流行技术栈
  details: 基于Vue3、Vite3、TS、NaiveUI和UnoCSS等最新技术栈开发
  link: /examples/markdown-examples
  linkText: 开始刷题
- icon: 🦈
  title: 最新流行技术栈
  details: 基于Vue3、Vite3、TS、NaiveUI和UnoCSS等最新技术栈开发
- icon: 🦭
  title: 最新流行技术栈
  details: 基于Vue3、Vite3、TS、NaiveUI和UnoCSS等最新技术栈开发
- icon: 🐧
  title: 最新流行技术栈
  details: 基于Vue3、Vite3、TS、NaiveUI和UnoCSS等最新技术栈开发
- icon: 🐬
  title: 最新流行技术栈
  details: 基于Vue3、Vite3、TS、NaiveUI和UnoCSS等最新技术栈开发
- icon:
# 这里一不小心就会报：Uncaught (in promise) TypeError: Cannot read properties of null (reading 'alt')
       src: /StreamlineEmojisBird2.svg
  title: 最新流行技术栈
  details: 基于Vue3、Vite3、TS、NaiveUI和UnoCSS等最新技术栈开发

# TeamMembers:  团队成员
# avatar: 成员的头像,这里使用的是github的头像
# name:  成员的名称
# title: 成员的职位
# org: 成员所在的组织
# orgLink: 成员所在的组织的链接
# desc: 成员的描述
# links: 成员的社交链接
# icon: 社交链接的图标
# link: 社交链接的链接
# sponsor: 成员的赞助商
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme';
import { icons } from './socialIcons';

const coreMembers = [  
  {
    avatar: 'https://www.github.com/HearLing.png',
    name: 'HearLing',
    title: '热爱学习，不秃头',
    desc: 'FE Developer',
    links: [
      { icon: 'github', link: 'https://github.com/HearLing'},
      {icon: { svg: icons.bilibili } ,link: "https://space.bilibili.com/201738571"},
    ]
  },
  {
    avatar: 'https://github.com/WakeMeTo.png',
    name: 'Bin Liu',
    title: '逆水行舟，不进则退',
    desc: 'FE Developer<br/>Creator @ <a href="https://github.com/chodocs/chodocs" target="_blank">ChoDocs</a>',
    org: 'Vue.js',
    orgLink:'https://gitee.com/wakemoto/vite-press-system-documents-main-navigation',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ],
    sponsor:'https://gitee.com/wakemoto/'
  },
];
const partners = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    org: 'Vue.js',
    orgLink:'https://gitee.com/wakemoto/vite-press-system-documents-main-navigation',
    desc: 'Evan You is the creator of Vue.js.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ],
    sponsor:'https://gitee.com/wakemoto/'
  },
];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title><Badge type="tip" text="核心成员" /></template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title><Badge type="tip" text="友情链接" /></template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
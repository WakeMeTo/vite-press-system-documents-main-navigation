import {defineConfig} from 'vitepress'
import {qqSvg} from "./icon";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // 部署站点的基础路径。如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，
    // 如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。
    base: '/vite-press-system-documents-main-navigation/',

    // 语言
    //lang: 'en-US',
    lang: 'zh-CN',

    // 用于配置页面的头部信息。这些标签将会被注入到所有页面中。
    head: [
        // 作者 => meta标签: <meta name="author" content="liuB">
        // meta => meta标签
        ['meta', {name: 'author', content: 'liuB'}],

        // 关键字 => 浏览器搜索引擎搜索的关键字
        ['meta', {name: 'keywords', content: 'VitePress, vite, vue3'}],

        // 网站图标 => <link rel="icon" type="image/svg+xml" href="/logo.svg">
        // link => <link>标签
        //['link', {rel: 'icon', type: 'image/svg+xml', href: '/StreamlineEmojis2.svg'}],

        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }],

        // 网站图标 => <link rel="icon" href="favicon.ico">,favicon.ico前面不能加/，否则找不到
        ['link', {rel: 'icon', href: 'favicon.ico'}]
    ],

    //  srcDir: `${path.resolve(process.cwd())}/src` => 指定源代码目录,没有指定的话默认是config.ts所在的文件夹根目录

    // 项目标题
    title: "VitePress",

    // 项目描述
    description: "VitePress Test",

    // 外观切换，如果设置为true，将在导航栏中显示一个切换按钮，允许用户在浅色和深色主题之间进行选择。默认不写就有。
    appearance: true,

    // 当设置为 true 时，VitePress 不会因为死链接而导致构建失败。默认为 false。
    ignoreDeadLinks: false,
    // 显示页面最后更新时间
    lastUpdated: true,
    // 设为true删除路径中的.html后缀,设为false则保留.html后缀,默认为false
    cleanUrls: false,
    //主题配置
    themeConfig: {
        // 首页左上角标题前面和左侧导航栏的图标
        logo: '/StreamlineEmojisChicken.svg',

        // 首页左上角和左侧导航栏的标题,没写的话默认是index.md的hero.name
        // 隐藏站点标题文本 => 设置为 siteTitle: false隐藏
        siteTitle: 'Hello VitePress',

        // 大纲的标题 => 右侧小标题的标题大纲
        outlineTitle: '快速导航',

        // 在大纲中显示的标题级别
        outline: 'deep',

        // 最近更新时间显示的文本
        lastUpdatedText: '最近更新',

        // 文档底部文本
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        },

        // 有 sidebar 时不显示
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
        },

        // 编辑链接的信息。如果未定义，编辑链接功能将被禁用。它位于页面底部。
        editLink: {
            text: '为此页提供修改建议',
            pattern: 'https://gitee.com/wakemoto/vite-press-system-documents-main-navigation/commit/5d9b9623f0122176e3bd8170837b38326efec89f'
        },

        // 要在导航栏末尾显示的社交链接。非常适合放置指向GitHub，Twitter，Facebook等社交服务的链接。
        socialLinks: [
            {
                icon: 'github',
                link: 'https://gitee.com/wakemoto/vite-press-system-documents-main-navigation/commit/cbb2edd36297be567dfe9e7eac81602481564627'
            },
            {
                icon: {svg: qqSvg},
                link: 'https://qm.qq.com/cgi-bin/qm/qr?k=XTjkqjV1KynFoEAdrqxMd6i71-TtCVGV&jump_from=webapi'
            }
        ],
        // https://www.algolia.com/developers/ 一个全局搜索引擎
        // 使用前需要申请appId,appKey,indexName
        search: {
            provider: 'algolia',
            options: {
                appId: 'XDL85IJNCD',
                apiKey: 'd24df6b33bfb43718acaa6fcf8276f71',
                indexName: 'systemDocument',
                // 这是搜索输入框的占位符文本，用于在输入框为空时显示提示性文字。该属性是可选的，可以不提供，如果不提供，则输入框将没有占位符文本。
                placeholder: '搜索文档',
                // 可以用不同的语言本地化搜索输入框的标签、按钮文本等。该属性是可选的，可以不提供，如果不提供，则使用默认的文本。
                translations: {
                    button: {
                        buttonText: '搜索',
                    },
                },
                locales: {
                    //这里是个大坑，zh是不生效的，改为root即可
                    root: {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                // 残障人士使用屏幕阅读器对网络内容的访问
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                // 搜索框
                                searchBox: {
                                    // 重置按钮标题
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    // 取消按钮文本
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消'
                                },
                                // 开始屏幕
                                startScreen: {
                                    // 最近的搜索标题
                                    recentSearchesTitle: '搜索历史',
                                    // 没有“最近搜索”文本
                                    noRecentSearchesText: '没有搜索历史',
                                    // 保存“最近的搜索”按钮标题
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    // 删除“最近搜索”按钮标题
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    // 收藏夹 搜索标题
                                    favoriteSearchesTitle: '收藏',
                                    // 删除收藏夹搜索按钮标题
                                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                                },
                                // 错误屏幕
                                errorScreen: {
                                    // 标题文本
                                    titleText: '无法获取结果',
                                    // 帮助文本
                                    helpText: '你可能需要检查你的网络连接'
                                },
                                // 搜索框的底部
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: '搜索提供者'
                                },
                                // 无结果屏幕
                                noResultsScreen: {
                                    // 无结果文本
                                    noResultsText: '无法找到相关结果',
                                    // 建议的查询文本
                                    suggestedQueryText: '你可以尝试查询',
                                    // 报告缺少结果文本
                                    reportMissingResultsText: '你认为该查询应该有结果？',
                                    // 报告缺少结果链接文本
                                    reportMissingResultsLinkText: '点击反馈'
                                }
                            }
                        }
                    }
                }
            },
        },
        // https://vitepress.dev/reference/default-theme-config
        // 导航项。text是导航栏显示的文本,link是Markdown文件的文件名不需要后缀
        // 如果文件名叫index.md可以省略不写，路径只写到目录名就可以了
        // activeMatch: '/config/' => 当前页面的导航栏高亮
        nav: [
            {text: '首页', link: '/'},
            {text: '例子', link: '/examples/markdown-examples', activeMatch: '/examples/'},
            {
                text: '博客文档',
                // 可以配置成下拉菜单
                items: [
                    {text: 'JavaScript 核心系列', link: '/articles/javaScript-core/构造函数、原型、原型链'},
                    {text: 'Vue 三方组件库', link: '/articles/libs/VForm3低代码初体验'},
                    {text: '其他', link: '/articles/other/nvm管理node'},
                ]
            }

        ],

        sidebar: {
            '/examples/': [
                {
                    // text是侧边栏显示的文本
                    text: 'Examples',
                    // 项的子项。
                    items: [
                        {text: 'Markdown Examples', link: '/examples/markdown-examples'},
                        {text: 'Runtime API Examples', link: '/examples/api-examples'}
                    ]
                },
                {
                    text: 'Demo',
                    // 侧边栏是否展开，false是展开,true是折叠,默认值是 false。
                    //collapsed: false,
                    items: [
                        {text: 'Demo1', link: '/demo/demo1'},
                        {text: 'Demo2', link: '/demo/demo2'}
                    ]
                }
            ],

            '/demo/': [
                {
                    text: 'Demo',
                    items: [
                        {text: 'Demo1', link: '/demo/demo1'},
                        {text: 'Demo2', link: '/demo/demo2'}
                    ]
                }
            ]
        },
        // 侧边栏项目。
        // sidebar: [
        //     {
        //         // text是侧边栏显示的文本
        //         text: 'Examples',
        //         // 项的子项。
        //         items: [
        //             {text: 'Markdown Examples', link: '/markdown-examples'},
        //             {text: 'Runtime API Examples', link: '/api-examples'}
        //         ]
        //     },
        //     {
        //         text: 'Demo',
        //         items: [
        //             {text: 'Demo1', link: '/demo/demo1'},
        //             {text: 'Demo2', link: '/demo/demo2'}
        //         ]
        //     }
        //
        // ],
        // 移动设备才能看到，PC端看不到
        returnToTopLabel: '返回顶部',

    },


    // 用于配置markdown-it的选项。注意，你不能使用此选项覆盖默认的markdown-it选项，只能用于扩展它。
    markdown: {
        // 显示行号
        lineNumbers: true,
        // 锚点配置
        anchor: {}
    }

})

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

        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'}],

        // 网站图标 => <link rel="icon" href="/favicon.ico">
        ['link', {rel: 'icon', href: 'favicon.ico'}]
    ],

    //  srcDir: `${path.resolve(process.cwd())}/src` => 指定源代码目录,没有指定的话默认是config.ts所在的文件夹根目录

    // 项目标题
    title: "VitePress",

    // 项目描述
    description: "VitePress Test",

    //主题配置
    themeConfig: {
        // 首页项目标题前面的图标
        logo: '/StreamlineEmojisChicken.svg',

        // 编辑链接的信息。如果未定义，编辑链接功能将被禁用。它位于页面底部。
        editLink: {
            text: '为此页提供修改建议',
            pattern: 'https://github.com/honghuangdc/soybean-admin-docs/tree/main/:path'
        },

        // 要在导航栏末尾显示的社交链接。非常适合放置指向GitHub，Twitter，Facebook等社交服务的链接。
        socialLinks: [
            { icon: 'github', link: 'https://gitee.com/wakemoto/vite-press-system-documents-main-navigation/commit/cbb2edd36297be567dfe9e7eac81602481564627' },
            {icon: {svg: qqSvg}, link: 'https://qm.qq.com/cgi-bin/qm/qr?k=XTjkqjV1KynFoEAdrqxMd6i71-TtCVGV&jump_from=webapi'}
        ],
        // https://www.algolia.com/developers/ 一个全局搜索引擎
        // 使用前需要申请appId,appKey,indexName
        algolia: {
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
        },
        // https://vitepress.dev/reference/default-theme-config
        // 导航项。text是导航栏显示的文本,link是Markdown文件的文件名不需要后缀
        nav: [
            {text: '首页', link: '/'},
            {text: '例子', link: '/markdown-examples'}
        ],

        // 侧边栏项目。
        sidebar: [
            {
                // text是侧边栏显示的文本
                text: 'Examples',
                // 项的子项。
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            },
            {
                text: 'Demo',
                items: [
                    {text: 'Demo1', link: '/demo/demo1'},
                    {text: 'Demo2', link: '/demo/demo2'}
                ]
            }

        ],
    },

    // 用于配置markdown-it的选项。注意，你不能使用此选项覆盖默认的markdown-it选项，只能用于扩展它。
    markdown: {
        // 锚点配置
        anchor: {}
    }

})

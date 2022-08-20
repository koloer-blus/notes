module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'koloer-blus | 个人小站',
    base: '/notes/',
    description: 'blus个人笔记',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://avatars.githubusercontent.com/u/77950278?s=120&v=4'
        }]
    ],
    markdown: {
        code: {
            lineNumbers: 6
        }
    },
    themeConfig: {
        repo: 'https://github.com/koloer-blus/notes',
        subSidebar: 'auto',
        docsBranch: 'master',
        editLinkPattern: ':repo/:branch/docs/:path',
        navbar: [{
                text: '首页',
                link: '/'
            },
            {
                text: '掘金',
                link: 'https://juejin.cn/user/870468941264270/posts'
            }

        ]
    },
    theme: '@vuepress/theme-default',
}

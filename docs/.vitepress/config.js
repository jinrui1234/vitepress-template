export default {
    // base: './',
    themeConfig: {
        siteTitle: 'vitepress-demo',
        // logo: '',

        //顶部导航设置
        nav: [
            { text: '导航', link: '/guide/', activeMatch: '/guide/' },
            { text: '配置', link: '/config/', activeMatch: '/config/' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: "成员列表", link: '/list' },
                    { text: 'github', link: 'https://github.com/...' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],

        //侧边栏
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: 'Index', link: '/guide/' },
                        { text: 'One', link: '/guide/one' },
                    ]
                }
            ],
            '/config/': [
                {
                    text: 'Config',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: 'Index', link: '/config/' },
                        { text: 'One', link: '/config/one' },
                    ]
                }
            ]
        }
    }
}
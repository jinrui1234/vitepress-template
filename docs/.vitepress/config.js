export default {
    //基础路径配置
    // base: './',   

    themeConfig: {
        siteTitle: 'vitepress-demo',   //首页标题配置
        // logo: '',

        //顶部导航路由配置
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

        //侧边栏路由配置
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    collapsible: true,  //侧边栏收缩配置
                    collapsed: false,   //侧边栏是否收缩配置
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
        },

        //外部（社交）配置
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],


    }
}
import projectConfig from '/pagic.config.js';
import IndexPage from './index_content.js';
var _a, _b;
export default {
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "index.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "",
    'content': React.createElement(IndexPage, { config: {
            blog: {
                path: 'blog/'
            },
            description: 'A static site generator powered by Deno + React',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'build.ts',
                'index_cn.tsx',
                'dist'
            ],
            github: 'https://gitee.com/xcatliu/pagic',
            include: undefined,
            nav: [
                {
                    link: '/docs/introduction.html',
                    text: '文档'
                },
                {
                    link: '/themes/',
                    text: '主题'
                },
                {
                    link: '/plugins/',
                    text: '插件'
                },
                {
                    link: '/blog/',
                    text: '博客'
                },
                {
                    link: '/about/',
                    text: '关于'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next',
                'blog'
            ],
            port: 8000,
            root: '/',
            serve: false,
            sidebar: {
                '/docs/': [
                    'docs/introduction.md',
                    'docs/usage.md',
                    'docs/config.md',
                    'docs/content.md',
                    'docs/layout.md',
                    'docs/themes.md',
                    'docs/plugins.md',
                    'docs/deployment.md',
                    'docs/demos.md',
                    'docs/limitations.md'
                ]
            },
            srcDir: '.',
            theme: 'docs',
            title: 'Pagic',
            watch: false
        }, content: null, contentBody: null, contentTitle: null, head: undefined, layoutPath: "_layout.tsx", outputPath: "index.html", pagePath: "index.tsx", script: null, title: "", toc: null }),
    'contentTitle': null,
    'contentBody': null,
    'head': undefined,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null,
    'blog': {
        "isPost": false,
        "isPosts": false,
        "posts": [
            {
                "pagePath": "blog/design_pagic_config_ts.md",
                "title": "设计 pagic.config.ts",
                "link": "blog/design_pagic_config_ts.html",
                "date": "2020-07-12T00:00:00.000Z",
                "updated": null
            }
        ]
    }
};

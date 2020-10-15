import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "部署",
        "link": "docs/deployment.html"
    },
    'next': {
        "title": "局限性",
        "link": "docs/limitations.html"
    },
    'sidebar': [
        {
            "title": "介绍",
            "link": "docs/introduction.html",
            "pagePath": "docs/introduction.md"
        },
        {
            "title": "基本用法",
            "link": "docs/usage.html",
            "pagePath": "docs/usage.md"
        },
        {
            "title": "配置文件",
            "link": "docs/config.html",
            "pagePath": "docs/config.md"
        },
        {
            "title": "页面内容",
            "link": "docs/content.html",
            "pagePath": "docs/content.md"
        },
        {
            "title": "_layout.tsx",
            "link": "docs/layout.html",
            "pagePath": "docs/layout.md"
        },
        {
            "title": "主题",
            "link": "docs/themes.html",
            "pagePath": "docs/themes.md"
        },
        {
            "title": "插件",
            "link": "docs/plugins.html",
            "pagePath": "docs/plugins.md"
        },
        {
            "title": "部署",
            "link": "docs/deployment.html",
            "pagePath": "docs/deployment.md"
        },
        {
            "title": "示例网站",
            "link": "docs/demos.html",
            "pagePath": "docs/demos.md"
        },
        {
            "title": "局限性",
            "link": "docs/limitations.html",
            "pagePath": "docs/limitations.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "docs/demos.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/demos.html",
    'title': "示例网站",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>示例网站</h1>\n<ul>\n<li><a href="https://yoshixmk.github.io/deno-x-ranking/">Deno X ranking</a> (<a href="https://github.com/yoshixmk/deno-x-ranking">GitHub</a>)</li>\n<li><a href="https://ts.xcatliu.com/">TypeScript 入门教程</a> (<a href="https://github.com/xcatliu/typescript-tutorial/">GitHub</a>)</li>\n<li><a href="https://deno-tutorial.js.org/">Deno 钻研之术</a> (<a href="https://github.com/hylerrix/deno-tutorial">GitHub</a>)</li>\n<li><a href="https://manual.deno.js.cn/">Deno 中文手册</a> (<a href="https://github.com/denocn/deno_manual">GitHub</a>)</li>\n<li><a href="https://cn.history.js.org/">JavaScript 20 年</a> (<a href="https://github.com/doodlewind/jshistory-cn">GitHub</a>)</li>\n<li><a href="https://es-interview.js.org/">ECMAScript+ 面试宝典</a> (<a href="https://github.com/hylerrix/es-interview">GitHub</a>)</li>\n<li><a href="https://github.com/xcatliu/pagic/issues/new?assignees=xcatliu&amp;labels=demo&amp;template=add-a-demo.md&amp;title=Add+my+site+as+a+demo+https%3A%2F%2Fexample.com">Add my site as a demo</a> 😝</li>\n</ul>'
        } }),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u793A\u4F8B\u7F51\u7AD9"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="https://yoshixmk.github.io/deno-x-ranking/">Deno X ranking</a> (<a href="https://github.com/yoshixmk/deno-x-ranking">GitHub</a>)</li>\n<li><a href="https://ts.xcatliu.com/">TypeScript 入门教程</a> (<a href="https://github.com/xcatliu/typescript-tutorial/">GitHub</a>)</li>\n<li><a href="https://deno-tutorial.js.org/">Deno 钻研之术</a> (<a href="https://github.com/hylerrix/deno-tutorial">GitHub</a>)</li>\n<li><a href="https://manual.deno.js.cn/">Deno 中文手册</a> (<a href="https://github.com/denocn/deno_manual">GitHub</a>)</li>\n<li><a href="https://cn.history.js.org/">JavaScript 20 年</a> (<a href="https://github.com/doodlewind/jshistory-cn">GitHub</a>)</li>\n<li><a href="https://es-interview.js.org/">ECMAScript+ 面试宝典</a> (<a href="https://github.com/hylerrix/es-interview">GitHub</a>)</li>\n<li><a href="https://github.com/xcatliu/pagic/issues/new?assignees=xcatliu&amp;labels=demo&amp;template=add-a-demo.md&amp;title=Add+my+site+as+a+demo+https%3A%2F%2Fexample.com">Add my site as a demo</a> 😝</li>\n</ul>'
        } }),
    'head': undefined,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null,
    'date': "2020-10-15T08:42:21.600Z",
    'updated': null,
    'author': undefined,
    'contributors': [],
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

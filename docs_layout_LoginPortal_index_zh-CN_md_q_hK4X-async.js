((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/LoginPortal/index.zh-CN.md?type=text'],
{ "docs/layout/LoginPortal/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("docs/layout/LoginPortal/index.zh-CN.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "与 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Ant ProComponents",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 的 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "LoginFormPage",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 类似, 但支持更多的自定义 CSS 样式。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { LoginPortal } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "import React from 'react';\nimport { LoginForm } from '@ant-design/pro-form';\nimport { LoginPortal, PageFooter } from '@jiovan-labs/ant-buddy-pro';\nimport { SelectLang } from '@umijs/max';\n\nexport default () => {\n    const loginForm = (\n        // 根据您的需要自行定制以下内容\n        // 通常是一个登录表单\n        <LoginForm/>\n    );\n\n    return (\n        <LoginPortal\n            interactionHeader={(\n                // 根据您的需要自行定制以下内容\n                // 这里使用一个多语言切换的下拉菜单\n                <div data-lang='true'>\n                    <SelectLang/>\n                </div>\n            )}\n            interactionContent={loginForm}\n            interactionFooter={(\n                // 根据您的需要自行定制以下内容\n                // 通常是一个页脚\n                <PageFooter/>\n            )}\n        />\n    );\n}\n",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "组件的 CSS 类名前缀",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'abp-login-portal'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "容器 div 的 CSS 类名",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "容器 div 的 CSS 样式",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerHeader",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "容器 div 的顶部内容",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerFooter",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "容器 div 的底部内容",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "vesselClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "二级容器 div 的 CSS 类名(容器 div 除去顶部节点和底部节点)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "vesselStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "二级容器 div 的 CSS 样式(容器 div 除去顶部节点和底部节点)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "introductionClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "左侧宣传区的 CSS 类名",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "introductionStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "左侧宣传区的 CSS 样式",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "introductionContent",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "左侧宣传区的内容",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "右侧交互区的 CSS 类名",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "右侧交互区的 CSS 样式",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionHeader",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "右侧交互区的顶部内容，通常是切换语言选项",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionContent",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "右侧交互区的主要内容，通常是登录表单",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionFooter",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "右侧交互区的底部内容，通常是版权声明",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interchangeClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "右侧交互区主要内容的 CSS 类名",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interchangeStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "右侧交互区主要内容的 CSS 样式",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=docs_layout_LoginPortal_index_zh-CN_md_q_hK4X-async.js.map
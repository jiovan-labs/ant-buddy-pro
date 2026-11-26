((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/LoginPortal/index.zh-TW.md?type=text'],
{ "docs/layout/LoginPortal/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/LoginPortal/index.zh-TW.md?watch=parent");
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
        "value": "與 ",
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
        "value": " 類似, 但支持更多的自定義 CSS 樣式。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { LoginPortal } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "import React from 'react';\nimport { LoginForm } from '@ant-design/pro-form';\nimport { LoginPortal, PageFooter } from '@jiovan-labs/ant-buddy-pro';\nimport { SelectLang } from '@umijs/max';\n\nexport default () => {\n    const loginForm = (\n        // 根據您的需要自行定製以下內容\n        // 通常是一個登錄表單\n        <LoginForm/>\n    );\n\n    return (\n        <LoginPortal\n            interactionHeader={(\n                // 根據您的需要自行定製以下內容\n                // 這裏使用一個多語言切換的下拉菜單\n                <div data-lang='true'>\n                    <SelectLang/>\n                </div>\n            )}\n            interactionContent={loginForm}\n            interactionFooter={(\n                // 根據您的需要自行定製以下內容\n                // 通常是一個頁腳\n                <PageFooter/>\n            )}\n        />\n    );\n}\n",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "屬性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "類型",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "預設值",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "組件的 CSS 類名前綴",
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
        "value": "容器 div 的 CSS 類名",
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
        "value": "容器 div 的 CSS 樣式",
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
        "value": "容器 div 的頂部內容",
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
        "value": "容器 div 的底部內容",
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
        "value": "二級容器 div 的 CSS 類名(容器 div 除去頂部節點和底部節點)",
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
        "value": "二級容器 div 的 CSS 樣式(容器 div 除去頂部節點和底部節點)",
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
        "value": "左側宣傳區的 CSS 類名",
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
        "value": "左側宣傳區的 CSS 樣式",
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
        "value": "左側宣傳區的內容",
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
        "value": "右側交互區的 CSS 類名",
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
        "value": "右側交互區的 CSS 樣式",
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
        "value": "右側交互區的頂部內容，通常是切換語言選項",
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
        "value": "右側交互區的主要內容，通常是登錄表單",
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
        "value": "右側交互區的底部內容，通常是版權聲明",
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
        "value": "右側交互區主要內容的 CSS 類名",
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
        "value": "右側交互區主要內容的 CSS 樣式",
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
//# sourceMappingURL=docs_layout_LoginPortal_index_zh-TW_md_q_hK4X-async.js.map
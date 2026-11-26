((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/CodePreview/index.zh-TW.md?type=text'],
{ "docs/layout/CodePreview/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/CodePreview/index.zh-TW.md?watch=parent");
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
        "value": "CodePreview 是一個用於展示代碼預覽的組件，可包含一個標題和一段文本，您也可以通過 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "children",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 屬性來完全定製它。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { CodePreview } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "預設值",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'abp-code-preview'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 類名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 樣式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "preClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "pre 節點的 CSS 類名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "preStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "pre 節點的 CSS 樣式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "codeClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "code 節點的 CSS 類名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "codeStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "code 節點的 CSS 樣式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "titleContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "標題內容",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "titleProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "標題屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "TitleProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "titleClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "標題的 CSS 類名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "titleStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "標題的 CSS 樣式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "textContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "文本內容",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "textProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "文本屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "TextProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "textClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "文本的 CSS 類名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "textStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "文本的 CSS 樣式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boundBorder",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否顯示邊框",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boundShadow",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否顯示邊框陰影",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "presetStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "預設樣式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'padding-0' | 'padding-xxs' | 'padding-xs' | 'padding-sm' | 'padding-md' | 'padding-lg' | false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'padding-md'",
        "paraId": 2,
        "tocIndex": 3
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
//# sourceMappingURL=docs_layout_CodePreview_index_zh-TW_md_q_hK4X-async.js.map
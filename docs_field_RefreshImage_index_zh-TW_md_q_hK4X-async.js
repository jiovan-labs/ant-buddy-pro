((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/RefreshImage/index.zh-TW.md?type=text'],
{ "docs/field/RefreshImage/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/RefreshImage/index.zh-TW.md?watch=parent");
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
        "value": "RefreshImage 是一個可點擊刷新的圖片組件。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "典型的場景是配合圖形驗證碼使用，尤其是服務端不使用 Node.js 而生成圖形驗證碼的情況。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { RefreshImage } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "預設值",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'abp-refresh-image'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 類名",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 樣式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "handCursor",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否手型鼠標指針樣式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "src",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "圖片源",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "fallback",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "備用圖片源",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "onRefresh",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "圖片刷新後的回調函數",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(currentSrc?: string, previousSrc?: string) => void",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "locale",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "組件的語言，e.g. 'zh_TW'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "localeProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "多語言屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "註：其他屬性繼承自 Ant Design 的 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Image",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 組件。",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "通過 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "參數",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "refresh",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "刷新圖片源",
        "paraId": 6,
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
//# sourceMappingURL=docs_field_RefreshImage_index_zh-TW_md_q_hK4X-async.js.map
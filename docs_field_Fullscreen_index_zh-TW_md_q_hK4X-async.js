((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/Fullscreen/index.zh-TW.md?type=text'],
{ "docs/field/Fullscreen/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/Fullscreen/index.zh-TW.md?watch=parent");
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
        "value": "Fullscreen 是壹個用來切換全屏的圖標按鈕。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "如果您使用默認的圖標，您需要先安裝 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "@ant-design/icons",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " 圖標組件包：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "import { Fullscreen } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 2
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
        "value": "'abp-fullscreen'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "容器 span 的 CSS 類名",
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
        "value": "容器 span 的 CSS 樣式",
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
        "value": "triggerFor",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "要切換全屏的 DOM 元素",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Element | null | (() => Element | null | undefined)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "document.documentElement",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "onChange",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "全屏更改後的回調函數",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "(fullscreen?: boolean) => void",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "tooltipCtrl",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否使用 Tooltip",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "tooltipProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Tooltip 屬性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Omit<TooltipProps, 'title'>",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "locale",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "組件的語言，e.g. 'zh_TW'",
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
        "value": "localeProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "多語言屬性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "通過 ",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "方法名",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "參數",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "isFullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "檢查是否處於全屏狀態",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "enterFullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "進入全屏",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "exitFullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "退出全屏",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "toggleFullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "切換全屏狀態",
        "paraId": 5,
        "tocIndex": 5
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
//# sourceMappingURL=docs_field_Fullscreen_index_zh-TW_md_q_hK4X-async.js.map
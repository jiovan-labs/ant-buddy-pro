((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/IconSelect/index.zh-TW.md?type=text'],
{ "docs/form/IconSelect/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/IconSelect/index.zh-TW.md?watch=parent");
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
        "value": "IconSelect，提供了一個可選擇圖標的下拉框。",
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
        "value": "import { IconSelect } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "屬性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "說明",
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
        "value": "'abp-icon-select'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "optionMode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "選項模式，文本或圖標",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'icon' | 'text'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'icon'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "optionGroup",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否將選項分組",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "proField",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否使用 ProFormField 控件",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "tabsProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "標簽頁的屬性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "MixinTabsProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "themeTypes",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "主題類型",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "IconThemeType[]",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "['outlined', 'filled', 'twotone']",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "defaultThemeType",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "默認的主題類型",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "IconThemeType",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'outlined'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "themeInkBar",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否顯示主題類型的活躍指示條",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "sceneTypes",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "場景類型",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "IconSceneType[]",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "['direction', 'suggestion', 'editor', 'data', 'logo', 'web']",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "defaultSceneType",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "默認的場景類型",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "IconSceneType",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'direction'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "sceneInkBar",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否顯示場景類型的活躍指示條",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "sceneEntryWidth",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "場景類型的寬度",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'150px'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "optionWrapperClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "包裹圖標選項 div 的 CSS 類名",
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
        "value": "optionWrapperStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "包裹圖標選項 div 的 CSS 樣式",
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
        "value": "optionIconClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "圖標選項的 CSS 類名",
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
        "value": "optionIconStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "圖標選項的 CSS 樣式",
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
        "value": "searchBox",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否顯示搜索框",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
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
        "value": "false",
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
        "value": "組件的語言, e.g. 'zh_TW'",
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
//# sourceMappingURL=docs_form_IconSelect_index_zh-TW_md_q_hK4X-async.js.map
((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/LocaleTextarea/index.zh-TW.md?type=text'],
{ "docs/form/LocaleTextarea/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/LocaleTextarea/index.zh-TW.md?watch=parent");
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
        "value": "LocaleTextarea，提供了壹個可切換多種語言輸入的多行文本輸入框，以便讓您的應用程序支持多語言特性。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { LocaleTextarea } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "switchTextareaProps",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " 屬性下的每項，都擁有其獨立的屬性，這樣您可以充分自定義每個語言的特性，比如把某壹項或某幾項設置為 ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "禁用",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " 或 ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "只讀",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " 狀態。",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "switchQuickTags",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " 可以簡單快速的自定義語言輸入項。",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "屬性",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "說明",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "類型",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "預設值",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "'abp-locale-textarea'",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "containerClazz",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "容器 div 的 CSS 類名",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "containerStyle",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "容器 div 的 CSS 樣式",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "tabsProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "標簽頁的屬性",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "MixinTabsProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "multilingual",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "是否啓用多語言",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "proField",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "默認文本框是否使用 ProFormField 控件",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "locale",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "組件的語言, e.g. 'zh_TW'",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "localeProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "多語言屬性",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchTextareaProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "多語言輸入項的屬性(比 ",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchQuickTags",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": " 優先級高，更多自定義)",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "SwitchTextareaProps[]",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchQuickTags",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "多語言輸入項的名稱(比 ",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchTextareaProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": " 優先級低，更簡單快捷)",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "string[]",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchShareProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "語言輸入項的通用屬性",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "SwitchShareProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchCloneProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "語言輸入項的克隆屬性",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "SwitchCloneProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchProField",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "語言輸入項是否使用 ProFormField 控件",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "forceRender",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "是否強制渲染標簽頁內容",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 7
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
//# sourceMappingURL=docs_form_LocaleTextarea_index_zh-TW_md_q_hK4X-async.js.map
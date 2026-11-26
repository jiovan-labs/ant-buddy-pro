((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/LocaleInput/index.zh-TW.md?type=text'],
{ "docs/form/LocaleInput/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/LocaleInput/index.zh-TW.md?watch=parent");
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
        "value": "LocaleInput，提供了壹個包含多種語言下拉框的文本輸入字段，以便讓您的應用程序支持多語言特性。",
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
        "value": "import { LocaleInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "popupInputProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 屬性下的每項，都擁有其獨立的屬性，這樣您可以充分自定義每個語言的特性，比如把某壹項或某幾項設置為 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "禁用",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 或 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "只讀",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 狀態。",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "popupQuickTags",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 可以簡單快速的自定義語言輸入項。",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "當 ",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "multilingual",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": " 為 ",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "false",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": " 時，組件僅渲染主輸入框（無語言下拉彈層），主輸入框可正常透過輸入法輸入中文等內容。",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "屬性",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "說明",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "類型",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "預設值",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "clazzPrefix",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'abp-locale-input'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "addon",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "默認文本框的附屬節點內容",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "<TranslationOutlined/>",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "addonPos",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "默認文本框的附屬節點位置",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'after'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "defaultOpen",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "是否默認展開彈出層",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "triggerProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "彈出層的屬性",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Omit<TriggerProps, 'popup' | 'popupVisible' | 'children'>",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "multilingual",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "是否啓用多語言",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "locale",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "組件的語言, e.g. 'zh_TW'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupInputProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "多語言輸入項的屬性(比 ",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupQuickTags",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": " 優先級高，更多自定義)",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "PopupInputProps[]",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupQuickTags",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "多語言輸入項的名稱(比 ",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupInputProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": " 優先級低，更簡單快捷)",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "string[]",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupTagPos",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "語言輸入項的標簽位置",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'before'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupAddon",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "語言輸入項的附屬節點內容",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "<SelectOutlined/>",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupAddonPos",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "語言輸入項的附屬節點位置",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'after'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupShareProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "語言輸入項的通用屬性",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "PopupShareProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupCloneProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "語言輸入項的克隆屬性",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "PopupCloneProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupConfirmProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "語言輸入項的動作確認屬性",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "PopupConfirmProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupProField",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "語言輸入項是否使用 ProFormField 控件",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "注意: 其他屬性繼承自 AddonInput 組件。",
        "paraId": 7,
        "tocIndex": 9
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
//# sourceMappingURL=docs_form_LocaleInput_index_zh-TW_md_q_hK4X-async.js.map
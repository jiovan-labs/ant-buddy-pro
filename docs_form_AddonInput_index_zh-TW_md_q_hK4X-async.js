((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/AddonInput/index.zh-TW.md?type=text'],
{ "docs/form/AddonInput/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("docs/form/AddonInput/index.zh-TW.md?watch=parent");
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
        "value": "AddonInput，提供了一個支持 addonBefore 和 addonAfter 屬性的文本輸入框組件，還原了早期版本 Ant Design Input 組件的 addon 功能。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "在新版 Ant Design 中，Input 組件移除了 addonBefore 和 addonAfter 屬性，建議使用 Space.Compact 模式。但在實際使用中，直接使用 Space.Compact 不夠方便，且沒有舊版 addon 的灰色背景效果。AddonInput 組件使用新版 Space.Compact 實現，同時保留了舊版的視覺效果和使用方式。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "典型的應用場景是，在輸入框前後添加固定的前綴、後綴、按鈕或其他內容，例如 URL 輸入框添加協議前綴和域名後綴。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { AddonInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "類型",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "預設值",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "'abp-addon-input'",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "addonBefore",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "輸入框前的內容",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "addonAfter",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "輸入框後的內容",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "cursorBefore",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "輸入框前的內容的鼠標指針",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "'default'",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "cursorAfter",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "輸入框後的內容的鼠標指針",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "'default'",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "paddingBefore",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "輸入框前的內容間距",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "paddingAfter",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "輸入框後的內容間距",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "widthBlock",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "是否匹配父節點的寬度",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "proField",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "是否使用 ProFormField 控件",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "注意: 其他屬性繼承自 Ant Design Pro 的 ProForm.Item 組件。",
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
//# sourceMappingURL=docs_form_AddonInput_index_zh-TW_md_q_hK4X-async.js.map
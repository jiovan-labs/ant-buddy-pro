((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/DivideSelect/index.zh-TW.md?type=text'],
{ "docs/form/DivideSelect/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/DivideSelect/index.zh-TW.md?watch=parent");
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
        "value": "DivideSelect, 提供了一下可以將選項的標簽和值分開顯示的選擇框。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { DivideSelect } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "說明",
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
        "value": "'abp-divide-select'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "optionClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項 div 的 CSS 類名",
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
        "value": "optionStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項 div 的 CSS 樣式",
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
        "value": "optionBeforeClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項左側 span 的 CSS 類名",
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
        "value": "optionBeforeStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項左側 span 的 CSS 樣式",
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
        "value": "optionBeforeContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項左側 span 的內容",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'label' | 'value' | 'code' | false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'label'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "optionBeforeRender",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項左側 span 的渲染方法",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(dom?: React.ReactNode) => React.ReactNode | undefined",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "optionAfterClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項右側 span 的 CSS 類名",
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
        "value": "optionAfterStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項右側 span 的 CSS 樣式",
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
        "value": "optionAfterContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項右側 span 的內容",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'label' | 'value' | 'code' | false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'value'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "optionAfterRender",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "下拉選項右側 span 的渲染方法",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(dom?: React.ReactNode) => React.ReactNode | undefined",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "requestOptionPlace",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "使用 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "request",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 數據的同時，是否保留 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "options",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 或 ",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "valueEnum",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": " 數據",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'before' | 'after' | 'override' | false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "proField",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否使用 ProFormField 控件",
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
        "value": "'before-prior' | 'after-prior' | false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'before-prior'",
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
//# sourceMappingURL=docs_form_DivideSelect_index_zh-TW_md_q_hK4X-async.js.map
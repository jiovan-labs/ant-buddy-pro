((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/CollapseForm/index.zh-TW.md?type=text'],
{ "docs/form/CollapseForm/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/CollapseForm/index.zh-TW.md?watch=parent");
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
        "value": "CollapseForm，提供了壹個可以折疊展開的表單。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "典型的應用場景是，在某條評論下進行回復。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { CollapseForm } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "說明",
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
        "value": "'abp-collapse-form'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "autoEntryCursor",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否自動改變鼠標指針樣式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "closedEntry",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單關閉時的入口節點",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "closedEntryClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單關閉時的入口節點 div 的 CSS 類名",
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
        "value": "closedEntryStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單關閉時的入口節點 div 的 CSS 樣式",
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
        "value": "openedEntry",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單展開時的入口節點",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "openedEntryClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單展開時的入口節點 div 的 CSS 類名",
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
        "value": "openedEntryStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單展開時的入口節點 div 的 CSS 樣式",
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
        "value": "formContent",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單內容節點",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "formContentClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單內容節點 div 的 CSS 類名",
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
        "value": "formContentStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單內容節點 div 的 CSS 樣式",
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
        "value": "formProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Omit<ProFormProps, 'formRef'> | Omit<FormProps, 'form'>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "closeOnBlur",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單失去焦點後是否關閉表單",
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
        "value": "closeOnFinish",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表單提交成功後是否關閉表單",
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
        "value": "defaultOpen",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否默認展開表單",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "triggerType",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "展開表單的觸發方式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'click' | 'hover'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'click'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "proField",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否使用 ProFormField 控件",
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
        "value": "通過 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "參數",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "獲取表單實例",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getFormRef",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "獲取表單 ref 引用",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isFormOpen",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "檢查表單是否展開",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "openForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "展開表單",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "closeForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "關閉表單",
        "paraId": 5,
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
//# sourceMappingURL=docs_form_CollapseForm_index_zh-TW_md_q_hK4X-async.js.map
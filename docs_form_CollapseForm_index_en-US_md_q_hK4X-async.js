((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/CollapseForm/index.en-US.md?type=text'],
{ "docs/form/CollapseForm/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/CollapseForm/index.en-US.md?watch=parent");
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
        "value": "CollapseForm, provides a form with collapse capability.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The typical scenario is, replying to someone under a comment.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { CollapseForm } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The CSS class prefix of the component",
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
        "value": "Whether to change the cursor automatically",
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
        "value": "The entry element when form closed",
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
        "value": "The CSS class name of the entry element div when form closed",
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
        "value": "The CSS style of the entry element div when form closed",
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
        "value": "The entry element when form opened",
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
        "value": "The CSS class name of the entry element div when form opened",
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
        "value": "The CSS style of the entry element div when form opened",
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
        "value": "The form content",
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
        "value": "The CSS class name of the form content div",
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
        "value": "The CSS style of the form content div",
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
        "value": "The props of form",
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
        "value": "Whether to close the form after form blur",
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
        "value": "Whether to close the form after submitting successful",
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
        "value": "Whether the form is default open or not",
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
        "value": "The trigger type when open the form",
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
        "value": "Whether to use ProFormField instead of Antd",
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
        "value": "The following methods can be accessed via ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Method",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Get form instance",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getFormRef",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Get form ref reference",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isFormOpen",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Check if form is open",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "openForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Open the form",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "closeForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Close the form",
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
//# sourceMappingURL=docs_form_CollapseForm_index_en-US_md_q_hK4X-async.js.map
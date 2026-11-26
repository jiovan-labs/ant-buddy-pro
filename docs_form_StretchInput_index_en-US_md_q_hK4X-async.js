((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/StretchInput/index.en-US.md?type=text'],
{ "docs/form/StretchInput/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/StretchInput/index.en-US.md?watch=parent");
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
        "value": "StretchInput, provides a text input box with stretch capability when focus it.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The typical scenario is, displaying a small search box or an icon, and stretching it when click on it.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { StretchInput } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-stretch-input'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the container div",
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
        "value": "The CSS style of the container div",
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
        "value": "miniature",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The instead DOM when the input box is collapsed (lost focus)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "stretchClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name when stretched",
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
        "value": "stretchStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The CSS style when stretched",
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
        "value": "triggerType",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The trigger type when stretch the collapsed DOM",
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
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "onStretchChange",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The callback function when stretch changed",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(stretch?: boolean) => void",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
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
//# sourceMappingURL=docs_form_StretchInput_index_en-US_md_q_hK4X-async.js.map
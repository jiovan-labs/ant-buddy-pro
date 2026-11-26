((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/AddonInput/index.en-US.md?type=text'],
{ "docs/form/AddonInput/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/AddonInput/index.en-US.md?watch=parent");
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
        "value": "AddonInput, provides a text input box with addonBefore and addonAfter properties, restoring the addon functionality from earlier versions of Ant Design Input component.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "In the new version of Ant Design, the Input component removed the addonBefore and addonAfter properties, recommending the use of Space.Compact mode instead. However, in practical use, directly using Space.Compact is not convenient and lacks the gray background effect of the old version's addon. The AddonInput component implements this using the new Space.Compact while preserving the visual effects and usage pattern of the old version.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The typical scenario is adding fixed prefixes, suffixes, buttons or other content before and after the input box, such as adding protocol prefix and domain suffix for URL input.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { AddonInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "The CSS class prefix of the component",
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
        "value": "The content before the input field",
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
        "value": "The content after the input field",
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
        "value": "The cursor before the input field",
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
        "value": "The cursor after the input field",
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
        "value": "The padding of the addon before",
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
        "value": "The padding of the addon after",
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
        "value": "Whether to match the width of parent element",
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
        "value": "Whether to use ProFormField instead of Antd",
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
        "value": "Note: Other properties are inherited from Ant Design Pro's ProForm.Item component.",
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
//# sourceMappingURL=docs_form_AddonInput_index_en-US_md_q_hK4X-async.js.map
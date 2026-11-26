((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/CompactTuple/index.en-US.md?type=text'],
{ "docs/field/CompactTuple/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/CompactTuple/index.en-US.md?watch=parent");
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
        "value": "CompactTuple component, can display a field and an addon under a compact space.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The typical scenario is, displaying a date picker of identify with a switch/checkbox, which indicates the date is infinite.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "In this case, the date picker has borders while the switch/checkbox doesn't. This component could border the switch/checkbox, to unify the UI style.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { CompactTuple } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'abp-compact-tuple'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the container div",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the container div",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "spaceCompactProps",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The props of the compact space",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "SpaceCompactProps",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "{block: true}",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "field",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The field element",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fieldClazz",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the field wrapper div",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fieldStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the field wrapper div",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fieldBorder",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Whether to border the field element or not",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addon",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The addon element",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonClazz",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the addon div",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the addon div",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonBorder",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Whether to border the addon element or not",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonMarginLeft",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The margin left of the addon element",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean | number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonMarginRight",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The margin right of the addon element",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean | number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonPos",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The position of addon",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'after'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "readonlyBorder",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Whether to render borders when under readonly mode",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "widthBlock",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Whether to match the width of parent element or not",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "presetStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The preset style of the component",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'field-prior' | 'addon-prior' | false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'field-prior'",
        "paraId": 4,
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
//# sourceMappingURL=docs_field_CompactTuple_index_en-US_md_q_hK4X-async.js.map
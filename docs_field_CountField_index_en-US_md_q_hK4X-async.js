((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/CountField/index.en-US.md?type=text'],
{ "docs/field/CountField/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/CountField/index.en-US.md?watch=parent");
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
        "value": "CountField component, can display a field with a count number.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { CountField } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'abp-count-field'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the container div",
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
        "value": "containerStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the container div",
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
        "value": "field",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The field element",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "count",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The thumbs count",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "0",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "countProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The props of the count",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Omit<BadgeProps, 'children' | 'color' | 'count' | 'dot' | 'showZero' | 'size' | 'status' | 'text'>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "layout",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The layout of the label and the field",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'horizontal' | 'vertical'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'horizontal'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "showCount",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to show the count or not",
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
        "value": "spaceSize",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The space size",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "SpaceSize",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tooltipCtrl",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to use Tooltip",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tooltipProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The props of Antd Tooltip",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "TooltipProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "onChange",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The callback function when the count changed",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(count?: number) => void",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "showZero",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to show zero count",
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
        "value": "The following methods can be accessed via ",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Method",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "getCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Get current count",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "setCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "count: number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Set count value",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "increaseCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Increase count (+1)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "decreaseCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Decrease count (-1)",
        "paraId": 4,
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
//# sourceMappingURL=docs_field_CountField_index_en-US_md_q_hK4X-async.js.map
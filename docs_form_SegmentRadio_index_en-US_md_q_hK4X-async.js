((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/SegmentRadio/index.en-US.md?type=text'],
{ "docs/form/SegmentRadio/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/SegmentRadio/index.en-US.md?watch=parent");
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
        "value": "SegmentRadio, Similar to ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Segmented",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " of ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Ant Design",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", but wraps it with ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "ProForm",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " features.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { SegmentRadio } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "'abp-segment-radio'",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "containerClazz",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "The CSS class name of the container div",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "containerStyle",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "The CSS style of the container div",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "request",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "The remote request",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "(params?: Record<string, any>, props?: Record<string, any>) => Promise<(SegmentedRawOption | SegmentedLabeledOption)[]>",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "requestOptionPlace",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "Whether to keep the ",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "options",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": " data when using the ",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "request",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": " data",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "'before' | 'after' | 'override' | false",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "proField",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "Whether to use ProFormField instead of Antd",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "true",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "onOptionItemsChange",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "The callback function when the option items changed",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "(options?: (SegmentedRawOption | SegmentedLabeledOption)[]) => void",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
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
//# sourceMappingURL=docs_form_SegmentRadio_index_en-US_md_q_hK4X-async.js.map
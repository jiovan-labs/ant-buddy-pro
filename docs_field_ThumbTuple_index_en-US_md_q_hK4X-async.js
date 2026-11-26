((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/ThumbTuple/index.en-US.md?type=text'],
{ "docs/field/ThumbTuple/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/ThumbTuple/index.en-US.md?watch=parent");
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
        "value": "ThumbTuple component, can display two thumbs with counts.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The typical scenario is, displaying two thumbs which acted as ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "like",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "dislike",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { ThumbTuple } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-thumb-tuple'",
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
        "value": "spaceProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The props of the space",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "SpaceProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "thumbLikeProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The props of liking",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Omit<ThumbToggleProps, 'ref' | 'actionType'>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "thumbDislikeProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The props of disliking",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Omit<ThumbToggleProps, 'ref' | 'actionType'>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
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
        "value": "getThumbLikeRef",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Get ref of like thumb component",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getThumbDislikeRef",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Get ref of dislike thumb component",
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
//# sourceMappingURL=docs_field_ThumbTuple_index_en-US_md_q_hK4X-async.js.map
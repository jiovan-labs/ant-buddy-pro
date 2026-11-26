((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/FallbackImage/index.en-US.md?type=text'],
{ "docs/field/FallbackImage/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/FallbackImage/index.en-US.md?watch=parent");
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
        "value": "FallbackImage, provides a fallback option when the image source can not be loaded.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { FallbackImage } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-fallback-image'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "src",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The source of the image",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>)",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "fallback",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The fallback source of the image",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string | Promise<string | undefined> | (() => string | undefined | Promise<string | undefined>)",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Note: Other properties are inherited from rc-image's Image component.",
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
//# sourceMappingURL=docs_field_FallbackImage_index_en-US_md_q_hK4X-async.js.map
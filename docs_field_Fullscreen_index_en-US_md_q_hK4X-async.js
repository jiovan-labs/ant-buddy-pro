((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/Fullscreen/index.en-US.md?type=text'],
{ "docs/field/Fullscreen/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/Fullscreen/index.en-US.md?watch=parent");
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
        "value": "Fullscreen, provides an icon with the ability to toggle fullscreen mode.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "You need to install ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "@ant-design/icons",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " package first if you're using the default icons:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "import { Fullscreen } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'abp-fullscreen'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS class name of the container span",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS style of the container span",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "triggerFor",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The target DOM element to toggle fullscreen",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Element | null | (() => Element | null | undefined)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "document.documentElement",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "onChange",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The callback function when the fullscreen changed",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "(fullscreen?: boolean) => void",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "tooltipCtrl",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Whether to use Tooltip",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "tooltipProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The props of Antd Tooltip",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Omit<TooltipProps, 'title'>",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "locale",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The locale of the component, e.g. 'en_US'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "localeProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The props of locale",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The following methods can be accessed via ",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "Method",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Parameters",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "isFullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Check if in fullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "enterFullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Enter fullscreen mode",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "exitFullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Exit fullscreen mode",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "toggleFullscreen",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Toggle fullscreen state",
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
//# sourceMappingURL=docs_field_Fullscreen_index_en-US_md_q_hK4X-async.js.map
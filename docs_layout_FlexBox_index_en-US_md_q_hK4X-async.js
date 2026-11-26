((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/FlexBox/index.en-US.md?type=text'],
{ "docs/layout/FlexBox/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/FlexBox/index.en-US.md?watch=parent");
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
        "value": "FlexBox component, a flex layout container for alignment.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { FlexBox } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-flex-box'",
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
        "value": "justifyContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The space distribution of items along the main axis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['justifyContent']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "justifyItems",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The justifying of items along the main axis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['justifyItems']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "alignContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The space distribution of items along the cross axis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['alignContent']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "alignItems",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The justifying of items along the cross axis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['alignItems']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flex",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "How items will grow or shrink to fit the space available",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flex']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexBasis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The initial main size of items on the main axis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexBasis']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexDirection",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The flex direction of items on the main axis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexDirection']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexFlow",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The shorthand representation of flex-direction and flex-wrap",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexFlow']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexGrow",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The flex grow factor of items on the main axis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexGrow']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexShrink",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The flex shrink factor of items on the main axis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexShrink']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexWrap",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether items are forced onto one line or can wrap onto multiple lines",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexWrap']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "gap",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The gaps between rows and columns",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'small' | 'middle' | 'large' | React.CSSProperties['gap']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boundBorder",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to show the bound border or not",
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
        "value": "boundShadow",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to show the bound shadow or not",
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
        "value": "tokenBg",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to use the background color of token",
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
//# sourceMappingURL=docs_layout_FlexBox_index_en-US_md_q_hK4X-async.js.map
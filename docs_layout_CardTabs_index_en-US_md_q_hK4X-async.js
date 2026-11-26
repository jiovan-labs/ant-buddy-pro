((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/CardTabs/index.en-US.md?type=text'],
{ "docs/layout/CardTabs/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/CardTabs/index.en-US.md?watch=parent");
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
        "value": "Similar to ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Tabs",
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
        "value": ", but ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "CardTabs",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " with ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "card",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " style and borders.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { CardTabs } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-card-tabs'",
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
        "value": "tabBorder",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to display the tab border",
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
        "value": "tabPlacement",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The position of the tabs",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'top' | 'top-end' | 'bottom' | 'bottom-end' | 'start' | 'end'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'top'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "contentBorder",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to display the content border",
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
        "value": "inkBar",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to display the ink bar",
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
        "value": "size",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The size of the tabs",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'small' | 'middle' | 'large' | 'extra-small'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'middle'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "presetStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The preset style of the component",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'padding-0' | 'padding-xxs' | 'padding-xs' | 'padding-sm' | 'padding-md' | 'padding-lg' | false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Note: Other properties are inherited from Ant Design's ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Tabs",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " component.",
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
//# sourceMappingURL=docs_layout_CardTabs_index_en-US_md_q_hK4X-async.js.map
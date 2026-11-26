((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/guide/index.en-US.md?type=text'],
{ "docs/guide/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("docs/guide/index.en-US.md?watch=parent");
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
        "value": "ant-buddy-pro",
        "paraId": 0
    },
    {
        "value": "ant-buddy-pro",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " is a React components library based on ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Ant Design",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " & ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Ant ProComponents",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ", providing more customization and individual components, aiming to provide better experience for React developers.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "🪄 Elegant default configurations assist developers to get started as simple as possible",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "💎 React components compatible with Ant Design. More components are coming soon",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "🎨 Theme capabilities, for customizing complete theme components, are up to you",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "First, you should have ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "node",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": ", and ensure that the node version is 10.13 or above.",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "$ node -v\nv10.13.0\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "You can install this package in your React project as follows:",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "You may import components as follows:",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "import { FooBar } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "Enjoy your coding journey with ",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "ant-buddy-pro",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": ". ✌️",
        "paraId": 10,
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
//# sourceMappingURL=docs_guide_index_en-US_md_q_hK4X-async.js.map
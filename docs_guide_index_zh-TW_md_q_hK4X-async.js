((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/guide/index.zh-TW.md?type=text'],
{ "docs/guide/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/guide/index.zh-TW.md?watch=parent");
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
        "value": " 是一款基於 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Ant Design",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 和 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Ant ProComponents",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 的增強組件庫，提供更多自定義樣式和獨立組件，為 React 開發者提供更好的的組件開發體驗。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "🪄 熟悉 Ant Design 可快速上手，讓您專註於業務邏輯",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "💎 不斷完善的 React 組件，與 Ant Design 如出一轍",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "🎨 支持 Ant Design 主題樣式，更多樣式，隨心控製",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "首先得有 ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "node",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "，並確保 node 版本是 10.13 或以上。",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "$ node -v\nv10.13.0\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "在您的項目中安裝此依賴：",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "在您的程序中導入組件：",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "import { FooBar } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "即可開始使用 ",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "ant-buddy-pro",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": " 組件編寫您的程序。✌️",
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
//# sourceMappingURL=docs_guide_index_zh-TW_md_q_hK4X-async.js.map
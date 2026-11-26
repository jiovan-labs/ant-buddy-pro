((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/ThumbTuple/index.zh-TW.md?type=text'],
{ "docs/field/ThumbTuple/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/ThumbTuple/index.zh-TW.md?watch=parent");
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
        "value": "ThumbTuple 用於顯示兩個拇指圖標和計數。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "典型的應用場景是，顯示兩個拇指，分別為 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "喜歡",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 和 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "不喜歡",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { ThumbTuple } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "預設值",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
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
        "value": "容器 div 的 CSS 類名",
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
        "value": "容器 div 的 CSS 樣式",
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
        "value": "間距的屬性",
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
        "value": "喜歡的屬性",
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
        "value": "不喜歡的屬性",
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
        "value": "通過 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "參數",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getThumbLikeRef",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "獲取喜歡拇指組件的 ref",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getThumbDislikeRef",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "獲得不喜歡拇指組件的 ref",
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
//# sourceMappingURL=docs_field_ThumbTuple_index_zh-TW_md_q_hK4X-async.js.map
((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/CountField/index.zh-TW.md?type=text'],
{ "docs/field/CountField/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/CountField/index.zh-TW.md?watch=parent");
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
        "value": "CountField 用於顯示壹個帶計數的字段。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { CountField } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "預設值",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
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
        "value": "容器 div 的 CSS 類名",
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
        "value": "容器 div 的 CSS 樣式",
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
        "value": "字段節點",
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
        "value": "計數",
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
        "value": "計數的屬性",
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
        "value": "標簽和內容的布局樣式",
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
        "value": "是否顯示計數",
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
        "value": "間距大小",
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
        "value": "是否使用 Tooltip",
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
        "value": "Tooltip 屬性",
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
        "value": "計數更改後的回調函數",
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
        "value": "是否顯示零計數",
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
        "value": "通過 ",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "參數",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "getCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "獲取當前計數值",
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
        "value": "設置計數值",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "increaseCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "增加計數值（+1）",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "decreaseCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "減少計數值（-1）",
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
//# sourceMappingURL=docs_field_CountField_index_zh-TW_md_q_hK4X-async.js.map
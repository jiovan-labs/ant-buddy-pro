((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/CompactTuple/index.zh-TW.md?type=text'],
{ "docs/field/CompactTuple/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/CompactTuple/index.zh-TW.md?watch=parent");
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
        "value": "CompactTuple 可以顯示緊湊間距模式下的壹個控件和壹個附加節點。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "典型的應用場景是，顯示壹個證件類型的日期選取框和壹個切換/復選框，用於標記證件是長期有效。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "在這種情況下，日期選取框是有邊框的，但切換/復選框沒有。此控件可以給切換/復選框加上邊框，以便統壹用戶 UI。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { CompactTuple } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "預設值",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'abp-compact-tuple'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 類名",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 樣式",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "spaceCompactProps",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "緊湊間距的屬性",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "SpaceCompactProps",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "{block: true}",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "field",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "字段節點",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fieldClazz",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "包裹字段節點 div 的 CSS 類名",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fieldStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "包裹字段節點 div 的 CSS 樣式",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fieldBorder",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "字段節點是否有邊框",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addon",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "附加節點",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonClazz",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "包裹附加節點 div 的 CSS 類名",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "包裹附加節點 div 的 CSS 樣式",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonBorder",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "附加節點是否有邊框",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonMarginLeft",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "附加節點的左外邊距",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean | number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonMarginRight",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "附加節點的右外邊距",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean | number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "addonPos",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "附屬節點位置",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'after'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "readonlyBorder",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "只讀模式下是否渲染邊框",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "widthBlock",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "是否匹配父節點的寬度",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "presetStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "預設樣式",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'field-prior' | 'addon-prior' | false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'field-prior'",
        "paraId": 4,
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
//# sourceMappingURL=docs_field_CompactTuple_index_zh-TW_md_q_hK4X-async.js.map
((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/ThumbToggle/index.zh-TW.md?type=text'],
{ "docs/field/ThumbToggle/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/ThumbToggle/index.zh-TW.md?watch=parent");
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
        "value": "ThumbToggle 用於顯示壹個帶計數的拇指圖標，並可以切換。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { ThumbToggle } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-thumb-toggle'",
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
        "value": "actionType",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "動作類型",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'like' | 'dislike' | 'favorite'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'like'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "checkable",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否可選中圖標",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "checkedClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "圖標選中時的 CSS 類名",
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
        "value": "checkedStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "圖標選中時的 CSS 樣式",
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
        "value": "uncheckedClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "圖標未選中時的 CSS 類名",
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
        "value": "uncheckedStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "圖標未選中時的 CSS 樣式",
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
        "value": "Omit<BadgeProps, 'color' | 'count' | 'dot' | 'showZero' | 'size' | 'status' | 'text'>",
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
        "value": "圖標和內容的布局樣式",
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
        "value": "Omit<TooltipProps, 'title'>",
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
        "value": "選中狀態或計數更改後的回調函數",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(checked?: boolean, count?: number) => void",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "onToggle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "計數的觸發更新函數",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(checked?: boolean, count?: number) => boolean | number | void | Promise<boolean | number | void>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "locale",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "組件的語言，e.g. 'zh_TW'",
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
        "value": "localeProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "多語言屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "checked",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "圖標是否選中",
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
        "value": "defaultChecked",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "默認選中狀態",
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
        "value": "isCheckable",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "檢查是否可選中",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "isChecked",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "檢查是否已選中",
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
        "value": "setCheckable",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "checkable: boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "設置是否可選中",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "setChecked",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "checked: boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "設置選中狀態",
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
    },
    {
        "value": "toggleChecked",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "切換選中狀態（異步）",
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
//# sourceMappingURL=docs_field_ThumbToggle_index_zh-TW_md_q_hK4X-async.js.map
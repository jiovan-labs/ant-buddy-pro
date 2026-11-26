((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/FoldSection/index.zh-TW.md?type=text'],
{ "docs/layout/FoldSection/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/FoldSection/index.zh-TW.md?watch=parent");
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
        "value": "與 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Ant Design",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 的 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Collapse",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 組件類似，但只有一個標題欄和一個面板。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "如果您使用默認的圖標，您需要先安裝 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "@ant-design/icons",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " 圖標組件包：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "import { FoldSection } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "屬性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "類型",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "預設值",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'abp-fold-section'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "容器 div 的 CSS 類名",
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
        "value": "容器 div 的 CSS 樣式",
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
        "value": "boundBorder",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "外邊界是否有邊框",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "headerClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "頭部 div 的 CSS 類名",
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
        "value": "headerStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "頭部 div 的 CSS 樣式",
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
        "value": "headerOrnament",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "頭部裝飾 span 的內容",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "headerOrnamentPos",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "頭部裝飾 span 的位置",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'before'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "headerContent",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "頭部標題 span 的內容",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "headerCollapse",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "頭部摺叠 span 的節點內容(面板展開時)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "<DownOutlined/>",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "headerCollapsePos",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "頭部摺叠 span 的位置",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'after'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "headerExpand",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "頭部摺叠 span 的節點內容(面板摺叠時)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "<UpOutlined/>",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "tooltipCtrl",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否使用 Tooltip",
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
        "value": "Tooltip 屬性",
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
        "value": "panelClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "面板 div 的 CSS 類名",
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
        "value": "panelStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "面板 div 的 CSS 樣式",
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
        "value": "panelContent",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "面板 div 的內容",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "panelForceRender",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "面板 div 無内容也無佔位符時，是否强制渲染它",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "panelDestroyOnClose",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "關閉面板 div 時是否銷毀它",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "panelPlaceholder",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "面板 div 的佔位符",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "<Empty/>",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "defaultOpen",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否默認展開面板 div",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "onOpenChange",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "面板 div 折疊展開狀態變化時的回調函數",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "(open: boolean) => void",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "presetStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "預設樣式",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'default' | 'success' | 'info' | 'warn' | 'error' | 'classic' | false",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'default'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "locale",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "組件的語言, e.g. 'zh_TW'",
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
        "value": "多語言屬性",
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
//# sourceMappingURL=docs_layout_FoldSection_index_zh-TW_md_q_hK4X-async.js.map
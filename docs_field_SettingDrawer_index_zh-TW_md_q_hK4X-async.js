((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/SettingDrawer/index.zh-TW.md?type=text'],
{ "docs/field/SettingDrawer/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/SettingDrawer/index.zh-TW.md?watch=parent");
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
        "value": "SettingDrawer 是一個封裝了 pro-components SettingDrawer 的組件，通過自定義觸發器替代默認的齒輪圖標。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "核心設計理念",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "完全複用",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - 繼承 pro-components SettingDrawer 的所有屬性和功能",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "隱藏默認按鈕",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - 自動隱藏 pro-components 的默認設置按鈕",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "完整功能",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - 主題配置、佈局切換、深色模式等所有原生功能保持不變",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { SettingDrawer } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "SettingDrawer 繼承了 pro-components SettingDrawer 的所有屬性，並新增了以下屬性：",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "屬性",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "默認值",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "'abp-setting-drawer'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "容器 span 的 CSS 類名",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "容器 span 的 CSS 樣式",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "triggerDom",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "自定義觸發 DOM 元素",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "<SkinOutlined style={{fontSize: 16}} />",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "tooltipCtrl",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "是否使用 Tooltip",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "tooltipProps",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Tooltip 屬性",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Omit<TooltipProps, 'title'>",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "locale",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "組件的語言，e.g. 'zh_TW'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "localeProps",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "多語言屬性",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "此外，支持 pro-components SettingDrawer 的所有其他屬性，例如：",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "settings",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - 當前設置",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "onSettingChange",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - 設置變化回調",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "hideHintAlert",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - 隱藏提示按鈕",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "hideCopyButton",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - 隱藏複製按鈕",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "等等...",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "通過 ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "參數",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "open",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "以編程方式打開設置抽屜面板",
        "paraId": 9,
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
//# sourceMappingURL=docs_field_SettingDrawer_index_zh-TW_md_q_hK4X-async.js.map
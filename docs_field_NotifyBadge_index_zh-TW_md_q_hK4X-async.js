((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/NotifyBadge/index.zh-TW.md?type=text'],
{ "docs/field/NotifyBadge/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/NotifyBadge/index.zh-TW.md?watch=parent");
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
        "value": "NotifyBadge，提供了一個帶下拉框的徽標。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "典型的應用場景是，顯示一個小圖標，下拉展示通知和任務列表。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { NotifyBadge } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-notify-badge'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "hyperlinkProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "超鏈接的屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "HyperlinkProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "badgeContent",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "徽標的內容節點",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "<BellOutlined/>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "badgeProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "徽標的屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Omit<BadgeProps, 'children'>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "dropdownEnabled",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否允許下拉彈出層",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "dropdownProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "下拉彈出層的屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Omit<DropdownProps, 'popupRender' | 'menu' | 'children'>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "tabsProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "標簽頁的屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "MixinTabsProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "locale",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "組件的語言，e.g. 'zh_TW'",
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
        "value": "localeProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "多語言屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "下拉彈出層沒有固定寬度，會跟隨當前標簽頁的內容寬度變化，因此在內容長度不同的標簽頁之間切換時，寬度可能改變。若需固定寬度，可透過 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "dropdownProps.styles.root",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 設定——它是 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Dropdown",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 的 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "root",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 語義插槽，作用於彈出層根節點：",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "<NotifyBadge\n    dropdownProps={{\n        styles: {\n            root: { width: 360 },\n        },\n    }}\n    // ...\n/>\n",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "組件預設在彈出層根節點上設定了 ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "minWidth: 320",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "，你可以透過 ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "styles.root",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " 覆蓋調整，以適配自己的內容。",
        "paraId": 6,
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
//# sourceMappingURL=docs_field_NotifyBadge_index_zh-TW_md_q_hK4X-async.js.map
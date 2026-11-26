((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/NotifyBadge/index.en-US.md?type=text'],
{ "docs/field/NotifyBadge/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/NotifyBadge/index.en-US.md?watch=parent");
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
        "value": "NotifyBadge, provides a badge with dropdown notify list.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The typical scenario is, displaying a small icon with a dropdown which lists notices and tasks.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { NotifyBadge } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The CSS class prefix of the component",
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
        "value": "The properties of the hyperlink",
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
        "value": "The content of the badge",
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
        "value": "The properties of the badge",
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
        "value": "Whether to enable the dropdown div",
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
        "value": "The properties of the dropdown div",
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
        "value": "The properties of the tabs",
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
        "value": "The locale of the component, e.g. 'en_US'",
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
        "value": "The props of locale",
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
        "value": "The dropdown popup has no fixed width and grows with the content of the active tab, so switching between tabs with different content lengths may change its width. To set a fixed width, use ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "dropdownProps.styles.root",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " (the semantic ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "root",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " of ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Dropdown",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "), which is applied to the popup root element:",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "<NotifyBadge\n    dropdownProps={{\n        styles: {\n            root: { width: 360 },\n        },\n    }}\n    // ...\n/>\n",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "The component sets ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "minWidth: 320",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " on the popup root by default; overriding ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "styles.root",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " lets you fine-tune the width to fit your content.",
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
//# sourceMappingURL=docs_field_NotifyBadge_index_en-US_md_q_hK4X-async.js.map
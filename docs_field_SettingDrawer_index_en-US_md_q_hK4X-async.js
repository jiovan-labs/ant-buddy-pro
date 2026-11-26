((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/SettingDrawer/index.en-US.md?type=text'],
{ "docs/field/SettingDrawer/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/SettingDrawer/index.en-US.md?watch=parent");
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
        "value": "SettingDrawer is a component that wraps pro-components SettingDrawer with a custom trigger, replacing the default gear icon.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Core Design Principles",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ":",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Full Reuse",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - Inherits all properties and features from pro-components SettingDrawer",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Hide Default Button",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - Automatically hides the default settings button from pro-components",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Complete Features",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - All native features remain intact: theme configuration, layout switching, dark mode, etc.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { SettingDrawer } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "SettingDrawer inherits all properties from pro-components SettingDrawer and adds these new properties:",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "CSS class prefix of the component",
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
        "value": "The CSS class name of the container span",
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
        "value": "The CSS style of the container span",
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
        "value": "Custom trigger DOM element",
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
        "value": "Whether to use Tooltip",
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
        "value": "The props of Antd Tooltip",
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
        "value": "The locale of the component, e.g. 'en_US'",
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
        "value": "The props of locale",
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
        "value": "In addition, it supports all other properties of pro-components SettingDrawer, such as:",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "settings",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - Current settings",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "onSettingChange",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - Callback when settings change",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "hideHintAlert",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - Hide hint button",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "hideCopyButton",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - Hide copy button",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "And more...",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "The following methods can be accessed via ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Method",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "open",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Programmatically open the settings drawer panel",
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
//# sourceMappingURL=docs_field_SettingDrawer_index_en-US_md_q_hK4X-async.js.map
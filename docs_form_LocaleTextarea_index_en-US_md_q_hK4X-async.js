((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/LocaleTextarea/index.en-US.md?type=text'],
{ "docs/form/LocaleTextarea/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/LocaleTextarea/index.en-US.md?watch=parent");
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
        "value": "LocaleTextarea, provides a textarea with a tabs that can switch different locales, aiming to support multilingual capability for your application.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { LocaleTextarea } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Each ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "switchTextareaProps",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " item has its own input properties, thus you can control them as you wish, such as marking someone of them to ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "disabled",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " or ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "readonly",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": ", and so on.",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "switchQuickTags",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " can custom language input items quickly.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "'abp-locale-textarea'",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "containerClazz",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The CSS class name of the container div",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "containerStyle",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The CSS style of the container div",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "tabsProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The properties of the tabs",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "MixinTabsProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "multilingual",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "Whether to enable multilingual or not",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "proField",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "Whether to use ProFormField instead of Antd for the entry field",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "locale",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The locale of the component, e.g. 'en_US'",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "localeProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The props of locale",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchTextareaProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The properties of locale items (Higher priority than ",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchQuickTags",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": ", more customizations)",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "SwitchTextareaProps[]",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchQuickTags",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The tag of locale items (Lower priority than ",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchTextareaProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": ", more convenient)",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "string[]",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchShareProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The sharing properties of the locale items",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "SwitchShareProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchCloneProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "The clone properties of the locale items",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "SwitchCloneProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchProField",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "Whether to use ProFormField instead of Antd for the locale items",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "forceRender",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "Whether to force render the tab content",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 7
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
//# sourceMappingURL=docs_form_LocaleTextarea_index_en-US_md_q_hK4X-async.js.map
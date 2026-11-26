((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/LocaleInput/index.en-US.md?type=text'],
{ "docs/form/LocaleInput/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/LocaleInput/index.en-US.md?watch=parent");
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
        "value": "LocaleInput, provides a text input box with a dropdown div of locale input boxes, aiming to support multilingual capability for your application.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "You need to install ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "@ant-design/icons",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " package first if you're using the default icons:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "import { LocaleInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Each ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "popupInputProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " item has its own input properties, thus you can control them as you wish, such as marking someone of them to ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "disabled",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " or ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "readonly",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": ", and so on.",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "popupQuickTags",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " can custom language input items quickly.",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "When ",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "multilingual",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": " is ",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "false",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": ", the component renders only the main input box (no locale dropdown). The main input box supports IME input (e.g. typing Chinese) normally.",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "Property",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Default",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "clazzPrefix",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'abp-locale-input'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "addon",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The DOM of the addon for the entry field",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "<TranslationOutlined/>",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "addonPos",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The position of the addon for the entry field",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'after'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "defaultOpen",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Whether the dropdown div is default open or not",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "triggerProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The properties of the dropdown div",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Omit<TriggerProps, 'popup' | 'popupVisible' | 'children'>",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "multilingual",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Whether to enable multilingual or not",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "locale",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The locale of the component, e.g. 'en_US'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupInputProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The properties of locale items (Higher priority than ",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupQuickTags",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": ", more customizations)",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "PopupInputProps[]",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupQuickTags",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The tag of locale items (Lower priority than ",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupInputProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": ", more convenient)",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "string[]",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupTagPos",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The position of language tags for the locale items",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'before'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupAddon",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The DOM of language addon for the locale items",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "<SelectOutlined/>",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupAddonPos",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The position of language addons for the locale items",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "'after'",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupShareProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The share properties of the locale items",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "PopupShareProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupCloneProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The clone properties of the locale items",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "PopupCloneProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupConfirmProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "The confirm properties of the locale items",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "PopupConfirmProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupProField",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Whether to use ProFormField instead of Antd for the locale items",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "Note: Other properties are inherited from AddonInput component.",
        "paraId": 7,
        "tocIndex": 9
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
//# sourceMappingURL=docs_form_LocaleInput_index_en-US_md_q_hK4X-async.js.map
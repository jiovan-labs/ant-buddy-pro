((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/CaptchaInput/index.en-US.md?type=text'],
{ "docs/form/CaptchaInput/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/CaptchaInput/index.en-US.md?watch=parent");
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
        "value": "CaptchaInput, provides a text input box and a button with captcha generation capability.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Similar to ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "ProFormCaptcha",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " of ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "ProComponents",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ", the most differences are:",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "ProFormCaptcha provides a function named ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGetCaptcha",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " to trigger the captcha generation, while CaptchaInput named ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGenerate",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "The function declaration of ProFormCaptcha ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGetCaptcha",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " is ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "(phone)=>Promise<any>",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ", while the declaration of CaptchaInput ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGenerate",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " is ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "(mobile?: string) => boolean | void | Promise<boolean | void>",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ", the latter one supports much richer return data types",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "The function of ProFormCaptcha ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGetCaptcha",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " only can stop captcha generation by throwing an exception, while CaptchaInput ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGenerate",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " provides more return types to automatically decide should start the generation or not (",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "This is especially useful when popups an extra slider captcha",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ")",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "CaptchaInput provides a function named ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onTimerBegin",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " to initialize additional preparations, and provides a function ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onTimerEnd",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " to do the additional cleanups",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "CaptchaInput also provides ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "dependName",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " to verify the third-party field, and ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "autoValidate",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " to control whether this function is automatically enabled. It can be used to allow clicking to obtain the verification code only when the mobile phone number (and other fields, such as dialing code) are verified",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { CaptchaInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'abp-captcha-input'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the container div",
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
        "value": "The CSS style of the container div",
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
        "value": "fieldRef",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The ref of the component",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.Ref<CaptchaInputRef | null | undefined>",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "autoValidate",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Whether to auto validate phoneName and dependName",
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
        "value": "dependName",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The field name(s) to validate before sending",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NamePath",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "timerInterval",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The timer interval, in milliseconds",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "1000",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onGenerate",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The callback function when generating captcha",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(mobile?: string) => boolean | void | Promise<boolean | void>",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onTimer",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The callback function when the timer changed",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(count: number) => void",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onTimerBegin",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The callback function when the timer begin",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "() => void",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onTimerEnd",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The callback function when the timer end",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "() => void",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "locale",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The locale of the component",
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
        "value": "localeProps",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "The props of locale",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Note: Other properties are inherited from ProFormCaptcha component.",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "The following methods can be accessed via ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Method",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "isLoading",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Check if loading",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "isTiming",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Check if timer running",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "startTimer",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Start the timer",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "stopTimer",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Stop the timer",
        "paraId": 7,
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
//# sourceMappingURL=docs_form_CaptchaInput_index_en-US_md_q_hK4X-async.js.map
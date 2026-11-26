((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/DelayModal/index.en-US.md?type=text'],
{ "docs/field/DelayModal/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/DelayModal/index.en-US.md?watch=parent");
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
        "value": "DelayModal component, can display a modal dialog after specified timeout, when there aren't any events to prevent it.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The typical scenario is, displaying a dialog to notice user that user hasn't operates anything for a several time, needs to re-login.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { DelayModal } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-delay-modal'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "actionType",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The action type to display the modal",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'confirm' | 'info' | 'warn' | 'success' | 'error' | 'custom'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'info'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "autoStart",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Whether auto start the modal timer",
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
        "value": "onceOnly",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Whether to display the modal only once",
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
        "value": "preventEvents",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The events that will prevent displaying the modal",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Array<keyof GlobalEventHandlersEventMap>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "['keydown', 'mousedown', 'scroll']",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "timeout",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The timeout that will display the modal, in milliseconds",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "1000 * 60 * 15",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "triggerFor",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The target DOM element to trigger the prevent events",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Document | Element | null | (() => Document | Element | null | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "document",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "modalProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The properties of the modal",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "MixinModalProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "modalFunProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The properties of the functional modal dialog",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "MixinModalFuncProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "skipCondition",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The condition for skipping timer once",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean | (() => boolean | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "stopCondition",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The condition for stopping the timer",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean | (() => boolean | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "onOpenChange",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The callback function when the opening state changed",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(open: boolean) => void",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The following methods can be accessed via ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Method",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isOpening",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Check if modal is opening",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isTiming",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Check if timer is running",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "hasOpened",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Check if modal has been opened",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "startTimer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Start the timer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "stopTimer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Stop the timer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "resetTimer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Reset the timer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "addListener",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Add event listeners",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "removeListener",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Remove event listeners",
        "paraId": 5,
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
//# sourceMappingURL=docs_field_DelayModal_index_en-US_md_q_hK4X-async.js.map
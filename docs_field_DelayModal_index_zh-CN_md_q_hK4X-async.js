((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/DelayModal/index.zh-CN.md?type=text'],
{ "docs/field/DelayModal/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/DelayModal/index.zh-CN.md?watch=parent");
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
        "value": "DelayModal 用于在超时后显示一个模态对话框，如果没有其它事件来阻止（延迟）它的话。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "典型的应用场景是，当用户长时间不操作后，显示对话框来提示用户需要重新登录。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { DelayModal } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "属性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "组件的 CSS 类名前缀",
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
        "value": "显示模态对话框的动作类型",
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
        "value": "是否自动开始模态对话框的计时器",
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
        "value": "是否只显示一次模态对话框",
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
        "value": "阻止显示模态对话框的事件",
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
        "value": "显示模态对话框的超时时间,单位毫秒",
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
        "value": "要触发延迟事件的 DOM 元素",
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
        "value": "模态对话框的属性",
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
        "value": "函数型模态对话框的属性",
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
        "value": "跳过单次计时器的条件",
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
        "value": "停止计时器的条件",
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
        "value": "显示状态变化时的回调函数",
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
        "value": "通过 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 可以访问以下方法：",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isOpening",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "检查模态框是否正在打开",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isTiming",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "检查计时器是否正在运行",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "hasOpened",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "检查模态框是否已经打开过",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "startTimer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "启动计时器",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "stopTimer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "停止计时器",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "resetTimer",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "重置计时器",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "addListener",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "添加事件监听器",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "removeListener",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "移除事件监听器",
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
//# sourceMappingURL=docs_field_DelayModal_index_zh-CN_md_q_hK4X-async.js.map
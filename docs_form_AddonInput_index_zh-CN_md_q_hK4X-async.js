((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/AddonInput/index.zh-CN.md?type=text'],
{ "docs/form/AddonInput/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/AddonInput/index.zh-CN.md?watch=parent");
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
        "value": "AddonInput，提供了一个支持 addonBefore 和 addonAfter 属性的文本输入框组件，还原了早期版本 Ant Design Input 组件的 addon 功能。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "在新版 Ant Design 中，Input 组件移除了 addonBefore 和 addonAfter 属性，建议使用 Space.Compact 模式。但在实际使用中，直接使用 Space.Compact 不够方便，且没有旧版 addon 的灰色背景效果。AddonInput 组件使用新版 Space.Compact 实现，同时保留了旧版的视觉效果和使用方式。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "典型的应用场景是，在输入框前后添加固定的前缀、后缀、按钮或其他内容，例如 URL 输入框添加协议前缀和域名后缀。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { AddonInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "组件的 CSS 类名前缀",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "'abp-addon-input'",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "addonBefore",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "输入框前的内容",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "addonAfter",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "输入框后的内容",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "cursorBefore",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "输入框前的内容的鼠标指针",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "'default'",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "cursorAfter",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "输入框后的内容的鼠标指针",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "'default'",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "paddingBefore",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "输入框前的内容间距",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "paddingAfter",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "输入框后的内容间距",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "widthBlock",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "是否匹配父节点的宽度",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "proField",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "是否使用 ProFormField 控件",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 5
    },
    {
        "value": "注意: 其他属性继承自 Ant Design Pro 的 ProForm.Item 组件。",
        "paraId": 5,
        "tocIndex": 5
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
//# sourceMappingURL=docs_form_AddonInput_index_zh-CN_md_q_hK4X-async.js.map
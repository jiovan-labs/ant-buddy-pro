((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/CollapseForm/index.zh-CN.md?type=text'],
{ "docs/form/CollapseForm/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/CollapseForm/index.zh-CN.md?watch=parent");
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
        "value": "CollapseForm，提供了一个可以折叠展开的表单。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "典型的应用场景是，在某条评论下进行回复。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { CollapseForm } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "属性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "说明",
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
        "value": "'abp-collapse-form'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "autoEntryCursor",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否自动改变鼠标指针样式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "closedEntry",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单关闭时的入口节点",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "closedEntryClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单关闭时的入口节点 div 的 CSS 类名",
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
        "value": "closedEntryStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单关闭时的入口节点 div 的 CSS 样式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "openedEntry",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单展开时的入口节点",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "openedEntryClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单展开时的入口节点 div 的 CSS 类名",
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
        "value": "openedEntryStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单展开时的入口节点 div 的 CSS 样式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "formContent",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单内容节点",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "formContentClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单内容节点 div 的 CSS 类名",
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
        "value": "formContentStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单内容节点 div 的 CSS 样式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "formProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单属性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Omit<ProFormProps, 'formRef'> | Omit<FormProps, 'form'>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "closeOnBlur",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单失去焦点后是否关闭表单",
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
        "value": "closeOnFinish",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "表单提交成功后是否关闭表单",
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
        "value": "defaultOpen",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否默认展开表单",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "triggerType",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "展开表单的触发方式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'click' | 'hover'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'click'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "proField",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否使用 ProFormField 控件",
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
        "value": "getForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "获取表单实例",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getFormRef",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "获取表单 ref 引用",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isFormOpen",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "检查表单是否展开",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "openForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "展开表单",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "closeForm",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "关闭表单",
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
//# sourceMappingURL=docs_form_CollapseForm_index_zh-CN_md_q_hK4X-async.js.map
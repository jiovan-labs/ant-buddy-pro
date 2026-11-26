((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/RemoteField/index.zh-CN.md?type=text'],
{ "docs/field/RemoteField/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/RemoteField/index.zh-CN.md?watch=parent");
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
        "value": "RemoteField 可以使用远程数据渲染一个组件。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "此诉求产生的原因是，并不是所有的 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Ant Design",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 组件都被 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Ant ProComponents",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 封装，此组件提供了通过远程数据来渲染字段的能力。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { RemoteField } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-remote-field'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 类名",
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
        "value": "containerStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 样式",
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
        "value": "request",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "远程请求",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(params?: any) => Promise<any>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "render",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "获取远程数据后的回调函数",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | ((outcome?: any) => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "fallback",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "组件的占位符",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "<Spin/>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "autoStart",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否自动开始获取远程数据",
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
        "value": "注：其他属性继承自 Pro Components 的 ProFormFieldRemoteProps。",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "通过 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " 可以访问以下方法：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "getOutcome",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "获取远程请求的结果数据",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "isAutoStart",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "检查是否自动启动",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "refresh",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "刷新远程数据",
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
//# sourceMappingURL=docs_field_RemoteField_index_zh-CN_md_q_hK4X-async.js.map
((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/DragModal/index.zh-CN.md?type=text'],
{ "docs/field/DragModal/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/DragModal/index.zh-CN.md?watch=parent");
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
        "value": "DragModal 用于显示一个可拖动的模态对话框。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { DragModal } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "属性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "组件的 CSS 类名前缀",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'abp-drag-modal'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "draggable",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "模态对话框是否可拖动",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "注：其他属性继承自 Ant Design 的 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Modal",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 组件。",
        "paraId": 3,
        "tocIndex": 3
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
//# sourceMappingURL=docs_field_DragModal_index_zh-CN_md_q_hK4X-async.js.map
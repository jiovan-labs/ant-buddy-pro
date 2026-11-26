((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/ExactInput/index.zh-CN.md?type=text'],
{ "docs/form/ExactInput/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/ExactInput/index.zh-CN.md?watch=parent");
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
        "value": "ExactInput，提供了一个带复选框的文本输入字段，以便支持精确查询特性。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "如果您使用默认的图标，您需要先安装 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "@ant-design/icons",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " 图标组件包：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "import { ExactInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "说明",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "组件的 CSS 类名前缀",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'abp-exact-input'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "addonPos",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "文本框的附属节点位置",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'after'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "compactAddon",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "文本框的附属节点是否使用紧凑模式",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "checkable",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否显示复选框",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "checkProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "复选框的属性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "AddonCheckProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "tooltipCtrl",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "是否使用 Tooltip",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "tooltipProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Tooltip 属性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Omit<TooltipProps, 'title'>",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "locale",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "组件的语言, e.g. 'zh_CN'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "localeProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "多语言属性",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "注意: 其他属性继承自 AddonInput 组件。",
        "paraId": 4,
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
//# sourceMappingURL=docs_form_ExactInput_index_zh-CN_md_q_hK4X-async.js.map
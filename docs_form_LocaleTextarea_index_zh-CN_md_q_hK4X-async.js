((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/LocaleTextarea/index.zh-CN.md?type=text'],
{ "docs/form/LocaleTextarea/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/LocaleTextarea/index.zh-CN.md?watch=parent");
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
        "value": "LocaleTextarea，提供了一个可切换多种语言输入的多行文本输入框，以便让您的应用程序支持多语言特性。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { LocaleTextarea } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "switchTextareaProps",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " 属性下的每项，都拥有其独立的属性，这样您可以充分自定义每个语言的特性，比如把某一项或某几项设置为 ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "禁用",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " 或 ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "只读",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " 状态。",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "switchQuickTags",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " 可以简单快速的自定义语言输入项。",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "说明",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "组件的 CSS 类名前缀",
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
        "value": "容器 div 的 CSS 类名",
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
        "value": "容器 div 的 CSS 样式",
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
        "value": "标签页的属性",
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
        "value": "是否启用多语言",
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
        "value": "默认文本框是否使用 ProFormField 控件",
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
        "value": "组件的语言, e.g. 'zh_CN'",
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
        "value": "多语言属性",
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
        "value": "多语言输入项的属性(比 ",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchQuickTags",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": " 优先级高，更多自定义)",
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
        "value": "多语言输入项的名称(比 ",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": "switchTextareaProps",
        "paraId": 4,
        "tocIndex": 7
    },
    {
        "value": " 优先级低，更简单快捷)",
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
        "value": "语言输入项的通用属性",
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
        "value": "语言输入项的克隆属性",
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
        "value": "语言输入项是否使用 ProFormField 控件",
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
        "value": "是否强制渲染标签页内容",
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
//# sourceMappingURL=docs_form_LocaleTextarea_index_zh-CN_md_q_hK4X-async.js.map
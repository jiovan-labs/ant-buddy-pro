((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/LocaleInput/index.zh-CN.md?type=text'],
{ "docs/form/LocaleInput/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/LocaleInput/index.zh-CN.md?watch=parent");
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
        "value": "LocaleInput，提供了一个包含多种语言下拉框的文本输入字段，以便让您的应用程序支持多语言特性。",
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
        "value": "import { LocaleInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "popupInputProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 属性下的每项，都拥有其独立的属性，这样您可以充分自定义每个语言的特性，比如把某一项或某几项设置为 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "禁用",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 或 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "只读",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 状态。",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "popupQuickTags",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 可以简单快速的自定义语言输入项。",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "当 ",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "multilingual",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": " 为 ",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "false",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": " 时，组件仅渲染主输入框（无语言下拉弹层），主输入框可正常通过输入法输入中文等内容。",
        "paraId": 5,
        "tocIndex": 8
    },
    {
        "value": "属性",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "说明",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "类型",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "默认值",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "clazzPrefix",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "组件的 CSS 类名前缀",
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
        "value": "默认文本框的附属节点内容",
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
        "value": "默认文本框的附属节点位置",
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
        "value": "是否默认展开弹出层",
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
        "value": "弹出层的属性",
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
        "value": "是否启用多语言",
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
        "value": "组件的语言, e.g. 'zh_CN'",
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
        "value": "多语言输入项的属性(比 ",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupQuickTags",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": " 优先级高，更多自定义)",
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
        "value": "多语言输入项的名称(比 ",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": "popupInputProps",
        "paraId": 6,
        "tocIndex": 9
    },
    {
        "value": " 优先级低，更简单快捷)",
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
        "value": "语言输入项的标签位置",
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
        "value": "语言输入项的附属节点内容",
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
        "value": "语言输入项的附属节点位置",
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
        "value": "语言输入项的通用属性",
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
        "value": "语言输入项的克隆属性",
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
        "value": "语言输入项的动作确认属性",
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
        "value": "语言输入项是否使用 ProFormField 控件",
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
        "value": "注意: 其他属性继承自 AddonInput 组件。",
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
//# sourceMappingURL=docs_form_LocaleInput_index_zh-CN_md_q_hK4X-async.js.map
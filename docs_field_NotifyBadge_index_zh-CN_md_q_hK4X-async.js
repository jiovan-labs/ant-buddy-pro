((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/NotifyBadge/index.zh-CN.md?type=text'],
{ "docs/field/NotifyBadge/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/NotifyBadge/index.zh-CN.md?watch=parent");
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
        "value": "NotifyBadge，提供了一个带下拉框的徽标。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "典型的应用场景是，显示一个小图标，下拉展示通知和任务列表。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { NotifyBadge } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-notify-badge'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "hyperlinkProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "超链接的属性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "HyperlinkProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "badgeContent",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "徽标的内容节点",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "<BellOutlined/>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "badgeProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "徽标的属性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Omit<BadgeProps, 'children'>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "dropdownEnabled",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否允许下拉弹出层",
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
        "value": "dropdownProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "下拉弹出层的属性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Omit<DropdownProps, 'popupRender' | 'menu' | 'children'>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "tabsProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "标签页的属性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "MixinTabsProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "locale",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "组件的语言, e.g. 'zh_CN'",
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
        "value": "localeProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "多语言属性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "下拉弹出层没有固定宽度，会跟随当前标签页的内容宽度变化，因此在内容长度不同的标签页之间切换时，宽度可能改变。若需固定宽度，可通过 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "dropdownProps.styles.root",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 设置——它是 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Dropdown",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 的 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "root",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 语义插槽，作用于弹出层根节点：",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "<NotifyBadge\n    dropdownProps={{\n        styles: {\n            root: { width: 360 },\n        },\n    }}\n    // ...\n/>\n",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "组件默认在弹出层根节点上设置了 ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "minWidth: 320",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "，你可以通过 ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "styles.root",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " 覆盖调整，以适配自己的内容。",
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
//# sourceMappingURL=docs_field_NotifyBadge_index_zh-CN_md_q_hK4X-async.js.map
((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/MenuTabs/index.zh-CN.md?type=text'],
{ "docs/layout/MenuTabs/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/MenuTabs/index.zh-CN.md?watch=parent");
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
        "value": "参见 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "在线例子",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "MenuTabs",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 与 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Ant Design Tab",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 类似，但是集成了 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Ant Design Menu",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { MenuTabs } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-menu-tabs'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "menuProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "菜单属性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "MixinMenuProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 类名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 样式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "entryClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "菜单栏 div 的 CSS 类名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "entryStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "菜单栏 div 的 CSS 样式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "entryWidth",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "菜单栏 div 的宽度",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'208px'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "entryInkBar",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否显示菜单栏 div 的活跃指示条",
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
        "value": "entrySelectionBold",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否加粗显示菜单栏 div 选中的菜单项",
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
        "value": "entryVisible",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否显示菜单栏 div",
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
        "value": "tabClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "选项卡 div 的 CSS 类名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tabStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "选项卡 div 的 CSS 样式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tabTitleClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "选项卡标题 div 的 CSS 类名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tabTitleStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "选项卡标题 div 的 CSS 样式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tabTitleRender",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "选项卡标题内容的渲染方式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(dom?: React.ReactNode) => React.ReactNode | undefined",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tabTitleVisible",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否显示选项卡 div 的标题",
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
        "value": "tabContentClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "选项卡内容 div 的 CSS 类名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tabContentStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "选项卡内容 div 的 CSS 样式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "adjustLayoutProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "自动调整布局的属性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "AdjustLayoutProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "presetStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "预设样式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'padding-0' | 'padding-xxs' | 'padding-xs' | 'padding-sm' | 'padding-md' | 'padding-lg' | false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'padding-md'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "注意: 其他属性继承自 Ant Design 的 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Menu",
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
//# sourceMappingURL=docs_layout_MenuTabs_index_zh-CN_md_q_hK4X-async.js.map
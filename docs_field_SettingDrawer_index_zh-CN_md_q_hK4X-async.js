((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/SettingDrawer/index.zh-CN.md?type=text'],
{ "docs/field/SettingDrawer/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/SettingDrawer/index.zh-CN.md?watch=parent");
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
        "value": "SettingDrawer 是一个封装了 pro-components SettingDrawer 的组件，通过自定义触发器替代默认的齿轮图标。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "核心设计理念",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "完全复用",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - 继承 pro-components SettingDrawer 的所有属性和功能",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "隐藏默认按钮",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - 自动隐藏 pro-components 的默认设置按钮",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "完整功能",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " - 主题配置、布局切换、深色模式等所有原生功能保持不变",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { SettingDrawer } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "SettingDrawer 继承了 pro-components SettingDrawer 的所有属性，并新增了以下属性：",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "组件的 CSS 类名前缀",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "'abp-setting-drawer'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "容器 span 的 CSS 类名",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "容器 span 的 CSS 样式",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "triggerDom",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "自定义触发 DOM 元素",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "<SkinOutlined style={{fontSize: 16}} />",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "tooltipCtrl",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "是否使用 Tooltip",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "tooltipProps",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Tooltip 属性",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Omit<TooltipProps, 'title'>",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "locale",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "组件的语言, e.g. 'zh_CN'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "localeProps",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "多语言属性",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "此外，支持 pro-components SettingDrawer 的所有其他属性，例如：",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "settings",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - 当前设置",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "onSettingChange",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - 设置变化回调",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "hideHintAlert",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - 隐藏提示按钮",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "hideCopyButton",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " - 隐藏复制按钮",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "等等...",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "通过 ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " 可以访问以下方法：",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "open",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "以编程方式打开设置抽屉面板",
        "paraId": 9,
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
//# sourceMappingURL=docs_field_SettingDrawer_index_zh-CN_md_q_hK4X-async.js.map
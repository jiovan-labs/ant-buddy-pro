((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/FlexBox/index.zh-CN.md?type=text'],
{ "docs/layout/FlexBox/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/FlexBox/index.zh-CN.md?watch=parent");
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
        "value": "FlexBox 组件，一个用于对齐的弹性布局容器。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { FlexBox } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-flex-box'",
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
        "value": "justifyContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素在主轴上的分配空间的方式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['justifyContent']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "justifyItems",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素在主轴上的对齐方式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['justifyItems']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "alignContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素在交叉轴上的分配空间的方式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['alignContent']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "alignItems",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素在交叉轴上的对齐方式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['alignItems']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flex",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素如何增大或缩小以适应容器中可用的空间",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flex']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexBasis",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素在主轴方向上的初始大小",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexBasis']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexDirection",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素在容器中的主轴方向",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexDirection']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexFlow",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "属性 flex-direction 和 flex-wrap 的简写形式",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexFlow']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexGrow",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素在主轴上的 flex 增长系数",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexGrow']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexShrink",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素在主轴上的 flex 收缩系数",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexShrink']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "flexWrap",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "内部元素是单行显示还是多行显示",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties['flexWrap']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "gap",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "行与列之间的间隙",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'small' | 'middle' | 'large' | React.CSSProperties['gap']",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boundBorder",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否显示边框",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boundShadow",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否显示边框阴影",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tokenBg",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否使用 token 的背景色",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
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
//# sourceMappingURL=docs_layout_FlexBox_index_zh-CN_md_q_hK4X-async.js.map
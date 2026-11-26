((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/CipherStrength/index.zh-CN.md?type=text'],
{ "docs/form/CipherStrength/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/CipherStrength/index.zh-CN.md?watch=parent");
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
        "value": "CipherStrength，是一个可以通过进度条和文字来显示密码强度的组件。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { CipherStrength } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "属性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "说明",
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
        "value": "'abp-cipher-strength'",
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
        "value": "watchField",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "要监听的字段名",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'password'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "progressClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "进度条 div 的 CSS 类名",
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
        "value": "progressStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "进度条 div 的 CSS 样式",
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
        "value": "captionClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "标题 div 的 CSS 类名",
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
        "value": "captionStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "标题 div 的 CSS 样式",
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
        "value": "captionPos",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "标题位置",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'before' | 'after' | false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'after'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "colorProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "颜色属性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "StrokeColorProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "widthBlock",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否匹配父节点的宽度",
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
        "value": "locale",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "组件的语言, e.g. 'zh_CN'",
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
        "value": "localeProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "多语言属性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
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
//# sourceMappingURL=docs_form_CipherStrength_index_zh-CN_md_q_hK4X-async.js.map
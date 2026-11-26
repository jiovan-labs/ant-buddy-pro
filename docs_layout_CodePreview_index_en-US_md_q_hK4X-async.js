((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/CodePreview/index.en-US.md?type=text'],
{ "docs/layout/CodePreview/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/CodePreview/index.en-US.md?watch=parent");
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
        "value": "CodePreview component, provides a simple segment for displaying code snippet, with a title and a text, and also you can customize it completely with the ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "children",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " prop.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { CodePreview } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'abp-code-preview'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the container div",
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
        "value": "The CSS style of the container div",
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
        "value": "preClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the pre node",
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
        "value": "preStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the pre node",
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
        "value": "codeClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the code node",
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
        "value": "codeStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the code node",
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
        "value": "titleContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The content of the title",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "titleProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The properties of the title",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "TitleProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "titleClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the title",
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
        "value": "titleStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the title",
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
        "value": "textContent",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The content of the text",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "textProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The properties of the text",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "TextProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "textClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the text",
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
        "value": "textStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the text",
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
        "value": "boundBorder",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to show the bound border or not",
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
        "value": "boundShadow",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to show the bound shadow or not",
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
        "value": "presetStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The preset style of the component",
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
//# sourceMappingURL=docs_layout_CodePreview_index_en-US_md_q_hK4X-async.js.map
((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/EvenDescriptions/index.en-US.md?type=text'],
{ "docs/layout/EvenDescriptions/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/EvenDescriptions/index.en-US.md?watch=parent");
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
        "value": "A descriptions component based on ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Ant Design",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "'s ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Descriptions",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "ProDescriptions",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ". It forces a fixed table layout so that columns are laid out strictly at their specified widths and are not squeezed by content in adjacent cells.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Background: in bordered mode, antd v6 forces ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "table-layout: auto",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ", which makes columns with more content squeeze empty or shorter ones; in non-bordered mode antd already defaults to ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "fixed",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ". This component overrides the style back to ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "fixed",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " via its own class and is enabled by default. As a result, toggling ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "fixed",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " makes no visible difference in non-bordered scenarios.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { EvenDescriptions } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'abp-even-descriptions'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "fixed",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Whether to force the columns to keep their specified widths",
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
        "value": "proField",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Whether to use ProDescriptions; when ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": ", antd Descriptions is used",
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
        "value": "columns",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The columns of ProDescriptions (used when ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "proField",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " is ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": ")",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "ProDescriptionsColumn[]",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "items",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "The items of the descriptions (used when ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "proField",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " is ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": ")",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "DescriptionsProps['items']",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Note: Other properties are inherited from ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "ProDescriptions",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " (when ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "proField=true",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ") or Ant Design's ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Descriptions",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " (when ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "proField=false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ").",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fixed",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " only makes the table adopt ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "table-layout: fixed",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "If ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "no widths are specified",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": ", columns share the width evenly and content will not squeeze adjacent columns (the core use case of this component, see the demo);",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "To ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "specify widths",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": ", set ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "styles.label.width",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " / ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "styles.content.width",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": ":\n",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "When ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "proField=true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": ": on each entry in ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "columns",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": ";",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "When ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "proField=false",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": ": on each entry in ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "items",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": ".",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Note: under ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "table-layout: fixed",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ", column widths are determined by the ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "first row of cells",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ". Make sure the width for each column is specified on the first row (and kept consistent across rows); otherwise width settings on later rows will not take effect.",
        "paraId": 8,
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
//# sourceMappingURL=docs_layout_EvenDescriptions_index_en-US_md_q_hK4X-async.js.map
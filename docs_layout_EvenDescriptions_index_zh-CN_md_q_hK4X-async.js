((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/EvenDescriptions/index.zh-CN.md?type=text'],
{ "docs/layout/EvenDescriptions/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/EvenDescriptions/index.zh-CN.md?watch=parent");
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
        "value": "基于 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Ant Design",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 的 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Descriptions",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 与 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "ProDescriptions",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 的描述列表组件，强制使用固定表格布局，使列严格按设定宽度排列，不会被相邻单元格中的内容挤压。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "背景：antd v6 在 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "bordered",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 模式下会强制 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "table-layout: auto",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "，导致内容较多的列挤压内容较少（或为空）的列；而非 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "bordered",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 模式下 antd 默认已是 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "fixed",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "。本组件通过自有类名在 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "bordered",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 时覆盖回 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "fixed",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "，默认开启。因此在非 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "bordered",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 场景下，切换 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "fixed",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 不会看到差异。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { EvenDescriptions } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "是否强制列保持指定的宽度",
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
        "value": "是否使用 ProDescriptions，为 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 时使用 antd Descriptions",
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
        "value": "ProDescriptions 的列配置（",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "proField",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 为 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 时使用）",
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
        "value": "描述项数组（",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "proField",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 为 ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": " 时使用）",
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
        "value": "注意: 其他属性继承自 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "ProDescriptions",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "（",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "proField=true",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "）或 Ant Design 的 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Descriptions",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "（",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "proField=false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "）组件。",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fixed",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " 只负责让表格采用 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "table-layout: fixed",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "若",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "未指定列宽",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "，各列会平均分配宽度，内容不会挤压相邻列（本组件的核心用途，见 demo）；",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "若需",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "指定列宽",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "，可通过 ",
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
        "value": " 设置：\n",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "proField=true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "：写在 ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "columns",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " 的每一项上；",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "proField=false",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "：写在 ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "items",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " 的每一项上。",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "注意：",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "table-layout: fixed",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " 下列宽由",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "第一行单元格",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "决定，请确保同一列在第一行即指定宽度，且各行列宽设置一致，否则后续行的宽度设置不会生效。",
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
//# sourceMappingURL=docs_layout_EvenDescriptions_index_zh-CN_md_q_hK4X-async.js.map
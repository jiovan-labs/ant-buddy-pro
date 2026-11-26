((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/SegmentRadio/index.zh-TW.md?type=text'],
{ "docs/form/SegmentRadio/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/SegmentRadio/index.zh-TW.md?watch=parent");
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
        "value": "SegmentRadio 與 ",
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
        "value": "Segmented",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 類似，但是包裝了一層 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "ProForm",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 的特有屬性。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { SegmentRadio } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "說明",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "類型",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "預設值",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "'abp-segment-radio'",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "containerClazz",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "容器 div 的 CSS 類名",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "containerStyle",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "容器 div 的 CSS 樣式",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "request",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "遠程數據請求",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "(params?: Record<string, any>, props?: Record<string, any>) => Promise<(SegmentedRawOption | SegmentedLabeledOption)[]>",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "requestOptionPlace",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "使用 ",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "request",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": " 數據的同時，是否保留 ",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "options",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": " 數據",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "'before' | 'after' | 'override' | false",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "proField",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "是否使用 ProFormField 控件",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "true",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "onOptionItemsChange",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "選項變化時的回調函數",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "(options?: (SegmentedRawOption | SegmentedLabeledOption)[]) => void",
        "paraId": 2,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 6
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
//# sourceMappingURL=docs_form_SegmentRadio_index_zh-TW_md_q_hK4X-async.js.map
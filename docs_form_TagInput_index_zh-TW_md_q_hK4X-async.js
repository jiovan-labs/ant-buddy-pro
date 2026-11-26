((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/TagInput/index.zh-TW.md?type=text'],
{ "docs/form/TagInput/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/TagInput/index.zh-TW.md?watch=parent");
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
        "value": "TagInput，提供了壹個可通過文本框增加的多標簽。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { TagInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "說明",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "類型",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "預設值",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "'abp-tag-input'",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "containerClazz",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "容器 div 的 CSS 類名",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "containerStyle",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "容器 div 的 CSS 樣式",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "React.CSSProperties",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "fieldRef",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "組件的 ref 句柄",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "React.Ref<TagInputRef | null | undefined>",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "request",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "遠程數據請求",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "(params?: Record<string, any>, props?: Record<string, any>) => Promise<(string | number | TextTagProps)[]>",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "requestOptionPlace",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "使用 request 數據的同時是否保留數據",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "'before' | 'after' | 'override' | false",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "fulfilTagItems",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "已完成標簽的屬性或內容",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "(string | number | TextTagProps)[]",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "fulfilTagProps",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "已完成標簽的通用屬性",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "Omit<TagProps, 'children'>",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "addable",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "是否可以添加標簽",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "false",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "addingInputProps",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "添加標簽的文本框的屬性",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "AddingInputProps",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "addingTagProps",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "添加標簽的屬性",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "TagProps",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "compactMargin",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "是否使用緊凑邊距",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "warnExists",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "是否顯示標簽已存在的警告",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "proField",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "是否使用 ProFormField 控件",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "onTagContentsChange",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "標簽内容變化時的回調函數",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "(contents?: (string | number)[]) => void",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "locale",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "組件的語言, e.g. 'zh_TW'",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "localeProps",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "多語言屬性",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 5
    },
    {
        "value": "通過 ",
        "paraId": 3,
        "tocIndex": 6
    },
    {
        "value": "ref",
        "paraId": 3,
        "tocIndex": 6
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 3,
        "tocIndex": 6
    },
    {
        "value": "方法名",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "參數",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "getTagContents",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "無",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "獲取標簽内容列表",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "setTagContents",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "contents?: (string | number)[] | null",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "設置標簽内容列表",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "addTagContent",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "content?: string | number | null",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "添加單個標簽内容",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "removeTagContent",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "content?: string | number | null",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "移除單個標簽内容",
        "paraId": 4,
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
//# sourceMappingURL=docs_form_TagInput_index_zh-TW_md_q_hK4X-async.js.map
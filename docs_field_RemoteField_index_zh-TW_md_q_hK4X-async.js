((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/RemoteField/index.zh-TW.md?type=text'],
{ "docs/field/RemoteField/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/RemoteField/index.zh-TW.md?watch=parent");
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
        "value": "RemoteField 可以使用遠程數據渲染壹個組件。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "此訴求產生的原因是，並不是所有的 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Ant Design",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 組件都被 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Ant ProComponents",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 封裝，此組件提供了通過遠程數據來渲染字段的能力。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { RemoteField } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "預設值",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'abp-remote-field'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 類名",
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
        "value": "containerStyle",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 樣式",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "request",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "遠程請求",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(params?: any) => Promise<any>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "render",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "獲取遠程數據後的回調函數",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | ((outcome?: any) => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "fallback",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "組件的佔位符",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "<Spin/>",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "autoStart",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是否自動開始獲取遠程數據",
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
        "value": "註：其他屬性繼承自 Pro Components 的 ProFormFieldRemoteProps。",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "通過 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "參數",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "getOutcome",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "獲取遠程請求的結果數據",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "isAutoStart",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "檢查是否自動啟動",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "refresh",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "刷新遠程數據",
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
//# sourceMappingURL=docs_field_RemoteField_index_zh-TW_md_q_hK4X-async.js.map
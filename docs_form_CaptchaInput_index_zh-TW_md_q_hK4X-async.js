((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/CaptchaInput/index.zh-TW.md?type=text'],
{ "docs/form/CaptchaInput/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/CaptchaInput/index.zh-TW.md?watch=parent");
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
        "value": "CaptchaInput，提供了壹個可以獲取驗證碼的按鈕和壹個輸入驗證碼的文本框。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "與 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "ProComponents",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 的 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "ProFormCaptcha",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 組件類似，但最大的區別是：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "ProFormCaptcha 提供了 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGetCaptcha",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 函數來實現獲取驗證碼的邏輯，CaptchaInput 的函數名為 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGenerate",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "ProFormCaptcha 的 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGetCaptcha",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 函數定義是 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "(phone)=>Promise<any>",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "，CaptchaInput 的 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGenerate",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 函數定義是 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "(mobile?: string) => boolean | void | Promise<boolean | void>",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "，後者支持更豐富的返回數據類型",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "ProFormCaptcha 的 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGetCaptcha",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 函數只能通過拋出異常來中止觸發倒計時的動作，CaptchaInput 的 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onGenerate",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 函數可以依據多種類型來自動判斷是否需要啟動倒計時（",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "這在彈出額外的滑塊驗證碼的時候特別有用",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "）",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "CaptchaInput 額外提供了 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onTimerBegin",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 函數來初始化其他工作；提供了 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "onTimerEnd",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 函數來進行額外的清理工作",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "CaptchaInput 額外提供了 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "dependName",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 用于校驗第三方字段，配合 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "autoValidate",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 來控制是否自動啟用此功能，可用于當手機號（和其他字段，例如國際冠碼）校驗通過才允許點擊獲取驗證碼",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "import { CaptchaInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "說明",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "預設值",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'abp-captcha-input'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "containerClazz",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 類名",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "容器 div 的 CSS 樣式",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.CSSProperties",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "fieldRef",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "組件的 ref 句柄",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "React.Ref<CaptchaInputRef | null | undefined>",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "autoValidate",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "是否自動校驗 phoneName 和 dependName",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "dependName",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "發送驗證碼之前要校驗的字段名",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NamePath",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "timerInterval",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "計時器的間隔，單位毫秒",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "1000",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onGenerate",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "生成驗證碼時的回調函數",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(mobile?: string) => boolean | void | Promise<boolean | void>",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onTimer",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "計時變化時的回調函數",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(count: number) => void",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onTimerBegin",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "計時開始時的回調函數",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "() => void",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "onTimerEnd",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "計時結束時的回調函數",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "() => void",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "locale",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "組件的語言, e.g. 'zh_TW'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "localeProps",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "多語言屬性",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "IntlLocaleProps",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "注意: 其他屬性繼承自 ProFormCaptcha 組件。",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "通過 ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "參數",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "isLoading",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "檢查是否正在加載",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "isTiming",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "檢查計時器是否運行",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "startTimer",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "啟動計時器",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "stopTimer",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "停止計時器",
        "paraId": 7,
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
//# sourceMappingURL=docs_form_CaptchaInput_index_zh-TW_md_q_hK4X-async.js.map
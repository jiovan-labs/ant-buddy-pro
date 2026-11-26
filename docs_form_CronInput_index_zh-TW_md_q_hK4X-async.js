((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/CronInput/index.zh-TW.md?type=text'],
{ "docs/form/CronInput/index.zh-TW.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/CronInput/index.zh-TW.md?watch=parent");
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
        "value": "CronInput 是壹個可以通過可視化選項來生成 cron 表達式的組件。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { CronInput } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "說明",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "類型",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "預設值",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "clazzPrefix",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "組件的 CSS 類名前綴",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'abp-cron-input'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "addon",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "默認文本框的附屬節點內容",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.ReactNode | (() => React.ReactNode | undefined)",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "<FieldTimeOutlined/>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "addonPos",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "默認文本框的附屬節點位置",
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
        "value": "allowSecond",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否允許秒標籤頁",
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
        "value": "allowYear",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否允許年標籤頁",
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
        "value": "defaultOpen",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否默認展開彈出層",
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
        "value": "defaultShowSecond",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否默認顯示秒標籤頁",
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
        "value": "defaultShowYear",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否默認顯示年標籤頁",
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
        "value": "echoValidateError",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否回顯驗證錯誤到控制臺",
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
        "value": "triggerProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "彈出層的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Omit<TriggerProps, 'popup' | 'popupVisible' | 'children'>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "tabsProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "標簽頁的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "CronTabProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "secondPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "秒標簽頁的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "SecondPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "minutePanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "分標簽頁的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "MinutePanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "hourPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "時標簽頁的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "HourPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "dayPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "天標簽頁的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "DayPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "monthPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "月標簽頁的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "MonthPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "weekPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "周標簽頁的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "WeekPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "yearPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "年標簽頁的屬性",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "YearPanelProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "validateRule",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否校驗控件",
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
        "value": "locale",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "組件的語言, e.g. 'zh_TW'",
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
        "value": "多語言屬性",
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
    },
    {
        "value": "onValidateError",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "驗證錯誤時的回調函數",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(express?: string, errors?: string[], income?: boolean) => void",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "allowOkEcho",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "是否允許確定按鈕回顯值",
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
        "value": "注意: 其他屬性繼承自 AddonInput 組件。",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "通過 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 可以訪問以下方法：",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "參數",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isShowSecond",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "檢查是否顯示秒標簽頁",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isShowYear",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "無",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "檢查是否顯示年標簽頁",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "setShowSecond",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "show: boolean",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "設置是否顯示秒標簽頁",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "setShowYear",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "show: boolean",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "設置是否顯示年標簽頁",
        "paraId": 5,
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
//# sourceMappingURL=docs_form_CronInput_index_zh-TW_md_q_hK4X-async.js.map
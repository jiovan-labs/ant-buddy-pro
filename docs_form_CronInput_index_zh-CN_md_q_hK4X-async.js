((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/CronInput/index.zh-CN.md?type=text'],
{ "docs/form/CronInput/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/CronInput/index.zh-CN.md?watch=parent");
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
        "value": "CronInput 是一个可以通过可视化选项来生成 cron 表达式的组件。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { CronInput } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "默认文本框的附属节点内容",
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
        "value": "默认文本框的附属节点位置",
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
        "value": "是否允许秒标签页",
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
        "value": "是否允许年标签页",
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
        "value": "是否默认展开弹出层",
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
        "value": "是否默认显示秒标签页",
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
        "value": "是否默认显示年标签页",
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
        "value": "是否回显验证错误到控制台",
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
        "value": "弹出层的属性",
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
        "value": "标签页的属性",
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
        "value": "秒标签页的属性",
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
        "value": "分标签页的属性",
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
        "value": "时标签页的属性",
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
        "value": "天标签页的属性",
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
        "value": "月标签页的属性",
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
        "value": "周标签页的属性",
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
        "value": "年标签页的属性",
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
        "value": "是否校验控件",
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
    },
    {
        "value": "onValidateError",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "验证错误时的回调函数",
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
        "value": "是否允许确定按钮回显值",
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
        "value": "注意: 其他属性继承自 AddonInput 组件。",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "通过 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": " 可以访问以下方法：",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "参数",
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
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "检查是否显示秒标签页",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "isShowYear",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "检查是否显示年标签页",
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
        "value": "设置是否显示秒标签页",
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
        "value": "设置是否显示年标签页",
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
//# sourceMappingURL=docs_form_CronInput_index_zh-CN_md_q_hK4X-async.js.map
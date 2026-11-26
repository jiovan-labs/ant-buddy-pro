((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/ThumbToggle/index.en-US.md?type=text'],
{ "docs/field/ThumbToggle/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/ThumbToggle/index.en-US.md?watch=parent");
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
        "value": "ThumbToggle component, can display a thumb with toggle capability, and a count number.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { ThumbToggle } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-thumb-toggle'",
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
        "value": "actionType",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The action type",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'like' | 'dislike' | 'favorite'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'like'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "checkable",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether can checked the icon or not",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "checkedClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the icon when checked",
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
        "value": "checkedStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the icon when checked",
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
        "value": "uncheckedClazz",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS class name of the icon when unchecked",
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
        "value": "uncheckedStyle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The CSS style of the icon when unchecked",
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
        "value": "count",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The thumbs count",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "0",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "countProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The props of count",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Omit<BadgeProps, 'color' | 'count' | 'dot' | 'showZero' | 'size' | 'status' | 'text'>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "layout",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The layout of the icon and the field",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'horizontal' | 'vertical'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'horizontal'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "showCount",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to show the count or not",
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
        "value": "tooltipCtrl",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to use Tooltip",
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
        "value": "tooltipProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The props of Antd Tooltip",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Omit<TooltipProps, 'title'>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "onChange",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The callback function when the checked state or count changed",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(checked?: boolean, count?: number) => void",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "onToggle",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The trigger function for updating the count",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(checked?: boolean, count?: number) => boolean | number | void | Promise<boolean | number | void>",
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
        "value": "The locale of the component, e.g. 'en_US'",
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
        "value": "The props of locale",
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
        "value": "checked",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether the icon is checked",
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
        "value": "defaultChecked",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The default checked state",
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
        "value": "showZero",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to show zero count",
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
        "value": "The following methods can be accessed via ",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Method",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "isCheckable",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Check if checkable",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "isChecked",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Check if checked",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "getCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Get current count",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "setCheckable",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "checkable: boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Set checkable state",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "setChecked",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "checked: boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Set checked state",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "setCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "count: number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Set count value",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "increaseCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Increase count (+1)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "decreaseCount",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Decrease count (-1)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "toggleChecked",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Toggle checked (async)",
        "paraId": 4,
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
//# sourceMappingURL=docs_field_ThumbToggle_index_en-US_md_q_hK4X-async.js.map
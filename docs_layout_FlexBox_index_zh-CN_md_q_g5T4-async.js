((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/FlexBox/index.zh-CN.md?type=demo'],
{ "docs/layout/FlexBox/demo.zh-CN.tsx?dumi-raw": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
__mako_require__("docs/layout/FlexBox/demo.zh-CN.tsx?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _default = "/*\n * Copyright (c) 2023 Jiovan Ltd. All rights reserved.\n *\n * Licensed under the MIT License (the \"License\")\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n */\n\n\nimport React from 'react';\nimport { Button, Divider } from 'antd';\nimport { ProForm, ProFormRadio, ProFormSwitch } from '@ant-design/pro-components';\nimport { FlexBox } from '@jiovan-labs/ant-buddy-pro';\n\n\nexport default () => {\n    const [justifyContent, setJustifyContent] = React.useState<string>('center');\n    const [alignItems, setAlignItems] = React.useState<string>('center');\n    const [gap, setGap] = React.useState<string>('middle');\n    const [boundBorder, setBoundBorder] = React.useState<boolean>(false);\n    const [boundShadow, setBoundShadow] = React.useState<boolean>(false);\n    const [tokenBg, setTokenBg] = React.useState<boolean>(false);\n\n    return (\n        <>\n            <ProForm\n                name='FlexBox_demo.zh-CN'\n                layout='horizontal'\n                autoFocusFirstInput={false}\n                submitter={false}\n            >\n                <ProFormRadio.Group\n                    label='主轴空间'\n                    radioType='button'\n                    fieldProps={{\n                        value: justifyContent,\n                        buttonStyle: 'solid',\n                        onChange: (event: any) => {\n                            setJustifyContent(event.target?.value);\n                        }\n                    }}\n                    options={[\n                        { label: 'Start', value: 'start' },\n                        { label: 'Center', value: 'center' },\n                        { label: 'End', value: 'end' },\n                        { label: 'Space-Between', value: 'space-between' },\n                        { label: 'Space-Around', value: 'space-around' },\n                        { label: 'Space-Evenly', value: 'space-evenly' },\n                    ]}\n                />\n                <ProFormRadio.Group\n                    label='交叉轴对齐'\n                    radioType='button'\n                    fieldProps={{\n                        value: alignItems,\n                        buttonStyle: 'solid',\n                        onChange: (event: any) => {\n                            setAlignItems(event.target?.value);\n                        }\n                    }}\n                    options={[\n                        { label: 'Start', value: 'start' },\n                        { label: 'Center', value: 'center' },\n                        { label: 'End', value: 'end' },\n                        { label: 'Stretch', value: 'stretch' },\n                    ]}\n                />\n                <ProFormRadio.Group\n                    label='间隙'\n                    radioType='button'\n                    fieldProps={{\n                        value: gap,\n                        buttonStyle: 'solid',\n                        onChange: (event: any) => {\n                            setGap(event.target?.value);\n                        }\n                    }}\n                    options={[\n                        { label: '大', value: 'large' },\n                        { label: '中', value: 'middle' },\n                        { label: '小', value: 'small' },\n                        { label: '自定义', value: '48px' },\n                    ]}\n                />\n                <ProForm.Group>\n                    <ProFormSwitch\n                        label='边框线条'\n                        checkedChildren='是'\n                        unCheckedChildren='否'\n                        fieldProps={{\n                            checked: boundBorder,\n                            onChange: setBoundBorder,\n                        }}\n                    />\n                    <ProFormSwitch\n                        label='边框阴影'\n                        checkedChildren='是'\n                        unCheckedChildren='否'\n                        fieldProps={{\n                            checked: boundShadow,\n                            onChange: setBoundShadow,\n                        }}\n                    />\n                    <ProFormSwitch\n                        label='Token 背景色'\n                        checkedChildren='是'\n                        unCheckedChildren='否'\n                        fieldProps={{\n                            checked: tokenBg,\n                            onChange: setTokenBg,\n                        }}\n                    />\n                </ProForm.Group>\n            </ProForm>\n            <Divider />\n            <FlexBox\n                justifyContent={justifyContent}\n                alignItems={alignItems}\n                gap={gap}\n                boundBorder={boundBorder}\n                boundShadow={boundShadow}\n                tokenBg={tokenBg}\n                containerStyle={{\n                    height: '160px',\n                }}\n            >\n                <Button disabled={true}>按钮</Button>\n                <Button disabled={true}>按钮</Button>\n                <Button disabled={true}>按钮</Button>\n                <Button disabled={true}>按钮</Button>\n            </FlexBox>\n        </>\n    );\n}\n";
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
"docs/layout/FlexBox/index.zh-CN.md?type=demo": function (module, exports, __mako_require__){
"use strict";
var interop = __mako_require__("@swc/helpers/_/_interop_require_wildcard")._;
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "demos", {
    enumerable: true,
    get: function() {
        return demos;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
__mako_require__("docs/layout/FlexBox/index.zh-CN.md?watch=parent");
var _antd = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/antd/es/index.js"));
var _procomponents = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@ant-design/pro-components/es/index.js"));
var _antbuddypro = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const demos = {
    'docs-layout-flex-box-demo-demo.zh-cn': {
        component: /*#__PURE__*/ _react.default.memo(/*#__PURE__*/ _react.default.lazy(()=>__mako_require__.ensure2("docs/layout/FlexBox/demo.zh-CN.tsx?techStack=react").then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "docs/layout/FlexBox/demo.zh-CN.tsx?techStack=react"))))),
        asset: {
            "type": "BLOCK",
            "id": "docs-layout-flex-box-demo-demo.zh-cn",
            "refAtomIds": [],
            "dependencies": {
                "index.tsx": {
                    "type": "FILE",
                    "value": __mako_require__("docs/layout/FlexBox/demo.zh-CN.tsx?dumi-raw").default
                },
                "react": {
                    "type": "NPM",
                    "value": "19.3.1"
                },
                "antd": {
                    "type": "NPM",
                    "value": "6.7.2"
                },
                "@ant-design/pro-components": {
                    "type": "NPM",
                    "value": "3.1.15-9"
                },
                "@jiovan-labs/ant-buddy-pro": {
                    "type": "NPM",
                    "value": "2.0.6"
                }
            },
            "entry": "index.tsx"
        },
        routeId: 'docs/layout/FlexBox/index.zh-CN',
        context: {
            "react": _react,
            "antd": _antd,
            "@ant-design/pro-components": _procomponents,
            "@jiovan-labs/ant-buddy-pro": _antbuddypro
        },
        renderOpts: {
            compile: async (...args)=>{
                return (await __mako_require__.ensure2("node_modules/dumi/dist/client/misc/reactDemoCompiler.js").then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "node_modules/dumi/dist/client/misc/reactDemoCompiler.js")))).default(...args);
            }
        }
    }
};
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
"node_modules/@ant-design/pro-components/es/field/components/Money/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _fieldLocale = __mako_require__("node_modules/@ant-design/pro-components/es/field/internal/fieldLocale.js");
var _useFieldIntl = __mako_require__("node_modules/@ant-design/pro-components/es/field/internal/useFieldIntl.js");
var _fieldMode = __mako_require__("node_modules/@ant-design/pro-components/es/field/internal/fieldMode.js");
var _FieldMoneyEdit = __mako_require__("node_modules/@ant-design/pro-components/es/field/components/Money/FieldMoneyEdit.js");
var _FieldMoneyRead = __mako_require__("node_modules/@ant-design/pro-components/es/field/components/Money/FieldMoneyRead.js");
var _moneyFormat = __mako_require__("node_modules/@ant-design/pro-components/es/field/components/Money/moneyFormat.js");
const FieldMoney = ({ text, mode: type, render, formItemRender, fieldProps, proFieldKey, valueEnum, placeholder, locale, customSymbol = fieldProps.customSymbol, numberFormatOptions = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.numberFormatOptions, numberPopoverRender = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.numberPopoverRender) || false, ...rest }, ref)=>{
    const precision = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.precision) ?? _moneyFormat.DefaultPrecisionCont;
    let intl = (0, _useFieldIntl.useFieldIntl)();
    if (locale && _fieldLocale.fieldIntlMap[locale]) intl = _fieldLocale.fieldIntlMap[locale];
    const placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
    const moneySymbol = (0, _react.useMemo)(()=>{
        if (customSymbol) return customSymbol;
        if (false === rest.moneySymbol || false === fieldProps.moneySymbol) return;
        return intl.getMessage('moneySymbol', '¥');
    }, [
        customSymbol,
        fieldProps.moneySymbol,
        intl,
        rest.moneySymbol
    ]);
    const localeMeta = (0, _react.useMemo)(()=>(0, _moneyFormat.getLocaleMoneyMeta)(locale, numberFormatOptions), [
        locale,
        numberFormatOptions
    ]);
    const getFormateValue = (0, _react.useCallback)((value)=>{
        const reg = new RegExp(`\\B(?=(\\d{${3 + Math.max(precision - _moneyFormat.DefaultPrecisionCont, 0)}})+(?!\\d))`, 'g');
        const [intStr, floatStr] = String(value).split('.');
        const resultInt = intStr.replace(reg, ',');
        let resultFloat = '';
        if (floatStr && precision > 0) resultFloat = `.${floatStr.slice(0, void 0 === precision ? _moneyFormat.DefaultPrecisionCont : precision)}`;
        return `${resultInt}${resultFloat}`;
    }, [
        precision
    ]);
    if ((0, _fieldMode.isProFieldReadMode)(type)) return (0, _FieldMoneyRead.FieldMoneyRead)({
        text,
        mode: type,
        render,
        formItemRender,
        fieldProps,
        proFieldKey,
        valueEnum,
        placeholder,
        locale,
        customSymbol,
        numberFormatOptions,
        numberPopoverRender,
        ...rest,
        precision,
        moneySymbol
    }, ref);
    if ((0, _fieldMode.isProFieldEditOrUpdateMode)(type)) return (0, _FieldMoneyEdit.FieldMoneyEdit)({
        text,
        mode: type,
        render,
        formItemRender,
        fieldProps,
        proFieldKey,
        valueEnum,
        placeholder,
        locale,
        customSymbol,
        numberFormatOptions,
        numberPopoverRender,
        ...rest,
        precision,
        placeholderValue,
        moneySymbol,
        getFormateValue,
        localeMeta
    }, ref);
    return null;
};
const Money = /*#__PURE__*/ _react.default.forwardRef(FieldMoney);
var _default = Money;

},
"node_modules/@ant-design/pro-components/es/form/layouts/LightFilter/LightFilterPopoverField.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "LightFilterPopoverField", {
    enumerable: true,
    get: function() {
        return LightFilterPopoverField;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _index = __mako_require__("node_modules/@ant-design/pro-components/es/form/layouts/LightFilter/LightWrapper/index.js");
var _index1 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-components/es/form/components/FormItem/index.js"));
function LightFilterPopoverField({ field, label, valuePropName, restOtherProps, help, ignoreFormItem, transform, dataFormat, valueType, messageVariables, convertValue, formItemKey, variant, placement, allowClear, footerRender, labelFormatter, fieldAllowClear }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_index1.default, {
        label: void 0,
        tooltip: false,
        valuePropName: valuePropName,
        ...restOtherProps,
        help: help,
        ignoreFormItem: ignoreFormItem,
        transform: transform,
        dataFormat: dataFormat,
        valueType: valueType,
        messageVariables: messageVariables,
        convertValue: convertValue,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_index.LightWrapper, {
            label: label,
            valuePropName: valuePropName,
            variant: variant,
            allowClear: fieldAllowClear ?? allowClear,
            footerRender: footerRender,
            placement: placement,
            labelFormatter: labelFormatter,
            valueType: valueType,
            children: field
        })
    }, formItemKey);
}

},
"node_modules/react-dom/server.browser.js": function (module, exports, __mako_require__){
'use strict';
var l;
var s;
l = __mako_require__("node_modules/react-dom/cjs/react-dom-server-legacy.browser.development.js");
s = __mako_require__("node_modules/react-dom/cjs/react-dom-server.browser.development.js");
exports.version = l.version;
exports.renderToString = l.renderToString;
exports.renderToStaticMarkup = l.renderToStaticMarkup;
exports.renderToReadableStream = s.renderToReadableStream;
exports.resume = s.resume;

},
 }]);
//# sourceMappingURL=docs_layout_FlexBox_index_zh-CN_md_q_g5T4-async.js.map
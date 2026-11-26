((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/field/CompactTuple/index.zh-CN.md?type=demo'],
{ "docs/field/CompactTuple/demo.zh-CN.tsx?dumi-raw": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/CompactTuple/demo.zh-CN.tsx?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _default = "/*\n * Copyright (c) 2023 Jiovan Ltd. All rights reserved.\n *\n * Licensed under the MIT License (the \"License\")\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n */\n\n\nimport React from 'react';\nimport { Row, Col, Divider } from 'antd';\nimport datePickerLocale from 'antd/es/date-picker/locale/zh_CN';\nimport { ProForm, ProFormDatePicker, ProFormRadio, ProFormSwitch, ProFormDependency } from '@ant-design/pro-components';\nimport { CompactTuple, type BeforeAfterType } from '@jiovan-labs/ant-buddy-pro';\nimport { type TuplePresetStyle } from '@jiovan-labs/ant-buddy-pro/field/CompactTuple';\nimport dayjs from 'dayjs';\n\n\nexport default () => {\n    // noinspection DuplicatedCode\n    const [formReadonly, setFormReadonly] = React.useState<boolean>(false);\n    const [widthBlock, setWidthBlock] = React.useState<boolean>(false);\n    const [addonPos, setAddonPos] = React.useState<BeforeAfterType>('after');\n    const [presetStyle, setPresetStyle] = React.useState<TuplePresetStyle | false>('field-prior');\n\n    return (\n        <>\n            <ProForm\n                name='CompactTuple_demo.zh-CN'\n                layout='horizontal'\n                autoFocusFirstInput={false}\n                submitter={false}\n            >\n                <ProForm.Group>\n                    <ProFormSwitch\n                        label='表单只读'\n                        checkedChildren='是'\n                        unCheckedChildren='否'\n                        fieldProps={{\n                            checked: formReadonly,\n                            onChange: setFormReadonly,\n                        }}\n                    />\n                    <ProFormSwitch\n                        label='匹配宽度'\n                        checkedChildren='是'\n                        unCheckedChildren='否'\n                        fieldProps={{\n                            checked: widthBlock,\n                            onChange: setWidthBlock,\n                        }}\n                    />\n                </ProForm.Group>\n                <ProFormRadio.Group\n                    label='附加物位置'\n                    radioType='button'\n                    fieldProps={{\n                        value: addonPos,\n                        buttonStyle: 'solid',\n                        disabled: formReadonly,\n                        onChange: (event: any) => {\n                            setAddonPos(event.target?.value);\n                        }\n                    }}\n                    options={[\n                        { label: '前', value: 'before' },\n                        { label: '后', value: 'after' },\n                        { label: '无', value: false },\n                    ]}\n                />\n                <ProFormRadio.Group\n                    label='预设样式'\n                    radioType='button'\n                    fieldProps={{\n                        value: presetStyle,\n                        buttonStyle: 'solid',\n                        disabled: formReadonly,\n                        onChange: (event: any) => {\n                            setPresetStyle(event.target?.value);\n                        }\n                    }}\n                    options={[\n                        { label: '字段优先', value: 'field-prior' },\n                        { label: '附加物优先', value: 'addon-prior' },\n                        { label: '无', value: false },\n                    ]}\n                />\n            </ProForm>\n            <Divider />\n            <ProForm\n                name='CompactTuple_test'\n                layout='vertical'\n                autoFocusFirstInput={false}\n                readonly={formReadonly}\n                submitter={false}\n            >\n                <Row gutter={[12, 0]}>\n                    <Col span={12}>\n                        <ProFormDatePicker\n                            name='identityStart'\n                            label='开始日期'\n                            placeholder='开始日期'\n                            fieldProps={{\n                                style: { width: '100%' },\n                                locale: datePickerLocale,\n                            }}\n                        />\n                    </Col>\n                    <Col span={12}>\n                        <CompactTuple\n                            field={(\n                                <ProFormDependency name={['identityStart', 'identityInfinite']} shouldUpdate={true}>\n                                    {({ identityStart, identityInfinite }) => {\n                                        return (\n                                            <ProFormDatePicker\n                                                name='identityEnd'\n                                                label='结束日期'\n                                                placeholder='结束日期'\n                                                fieldProps={{\n                                                    disabled: identityInfinite,\n                                                    disabledDate: (date: any) => date < dayjs(identityStart),\n                                                    style: { width: '100%' },\n                                                    locale: datePickerLocale,\n                                                }}\n                                            />\n                                        );\n                                    }}\n                                </ProFormDependency>\n                            )}\n                            addon={(\n                                <ProFormSwitch\n                                    name='identityInfinite'\n                                    label='长期'\n                                    fieldProps={{\n                                        defaultChecked: false,\n                                        checkedChildren: '是',\n                                        unCheckedChildren: '否',\n                                        style: {\n                                            margin: '2px 6px',\n                                        }\n                                    }}\n                                />\n                            )}\n                            addonPos={addonPos}\n                            addonBorder={true}\n                            addonMarginLeft={addonPos === 'after'}\n                            addonMarginRight={addonPos === 'before'}\n                            widthBlock={widthBlock}\n                            presetStyle={presetStyle}\n                        />\n                    </Col>\n                </Row>\n            </ProForm>\n        </>\n    );\n}\n";
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
"docs/field/CompactTuple/index.zh-CN.md?type=demo": function (module, exports, __mako_require__){
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
__mako_require__("docs/field/CompactTuple/index.zh-CN.md?watch=parent");
var _antd = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/antd/es/index.js"));
var _zh_CN = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/antd/es/date-picker/locale/zh_CN.js"));
var _procomponents = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@ant-design/pro-components/es/index.js"));
var _antbuddypro = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("src/index.ts"));
var _dayjs = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/dayjs/dayjs.min.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const demos = {
    'docs-field-compact-tuple-demo-demo.zh-cn': {
        component: /*#__PURE__*/ _react.default.memo(/*#__PURE__*/ _react.default.lazy(()=>__mako_require__.ensure2("docs/field/CompactTuple/demo.zh-CN.tsx?techStack=react").then(__mako_require__.dr(interop, __mako_require__.bind(__mako_require__, "docs/field/CompactTuple/demo.zh-CN.tsx?techStack=react"))))),
        asset: {
            "type": "BLOCK",
            "id": "docs-field-compact-tuple-demo-demo.zh-cn",
            "refAtomIds": [],
            "dependencies": {
                "index.tsx": {
                    "type": "FILE",
                    "value": __mako_require__("docs/field/CompactTuple/demo.zh-CN.tsx?dumi-raw").default
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
                },
                "dayjs": {
                    "type": "NPM",
                    "value": "1.11.23"
                }
            },
            "entry": "index.tsx"
        },
        routeId: 'docs/field/CompactTuple/index.zh-CN',
        context: {
            "react": _react,
            "antd": _antd,
            "antd/es/date-picker/locale/zh_CN": _zh_CN,
            "@ant-design/pro-components": _procomponents,
            "@jiovan-labs/ant-buddy-pro": _antbuddypro,
            "dayjs": _dayjs
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
//# sourceMappingURL=docs_field_CompactTuple_index_zh-CN_md_q_g5T4-async.js.map
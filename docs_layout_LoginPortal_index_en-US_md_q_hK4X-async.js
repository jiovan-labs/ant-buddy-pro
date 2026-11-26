((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/layout/LoginPortal/index.en-US.md?type=text'],
{ "docs/layout/LoginPortal/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/layout/LoginPortal/index.en-US.md?watch=parent");
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
        "value": "Similar to ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "LoginFormPage",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " of ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Ant ProComponents",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", with more customization for CSS classes and styles.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { LoginPortal } from '@jiovan-labs/ant-buddy-pro';\n",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "import React from 'react';\nimport { LoginForm } from '@ant-design/pro-form';\nimport { LoginPortal, PageFooter } from '@jiovan-labs/ant-buddy-pro';\nimport { SelectLang } from '@umijs/max';\n\nexport default () => {\n    const loginForm = (\n        // Customize the following content according to your needs\n        // Typically be a form component\n        <LoginForm/>\n    );\n\n    return (\n        <LoginPortal\n            interactionHeader={(\n                // Customize the following content according to your needs\n                // Here use a language switch dropdown menu\n                <div data-lang='true'>\n                    <SelectLang/>\n                </div>\n            )}\n            interactionContent={loginForm}\n            interactionFooter={(\n                // Customize the following content according to your needs\n                // Typically be a footer component\n                <PageFooter/>\n            )}\n        />\n    );\n}\n",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "clazzPrefix",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS class prefix of the component",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "'abp-login-portal'",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS class name of the container div",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS style of the container div",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerHeader",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The top element of the container div",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "containerFooter",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The bottom element of the container div",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "vesselClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS class name of the vessel div (container excludes containerHeader and containerFooter)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "vesselStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS style of the vessel div (container excludes containerHeader and containerFooter)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "introductionClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS class name of the introduction div (left area)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "introductionStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS style of the introduction div (left area)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "introductionContent",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The content of the introduction div (left area)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS class name of the interaction div (right area)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS style of the interaction div (right area)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionHeader",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The top element of the interaction div (right area), typically a language switch",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionContent",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The main element of the interaction div (right area), typically a login form",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interactionFooter",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The bottom element of the interaction div (right area), typically a copyright declaration",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.ReactNode",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interchangeClazz",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS class name of the interchange div (right area main content)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "interchangeStyle",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "The CSS style of the interchange div (right area main content)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "React.CSSProperties",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
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
//# sourceMappingURL=docs_layout_LoginPortal_index_en-US_md_q_hK4X-async.js.map
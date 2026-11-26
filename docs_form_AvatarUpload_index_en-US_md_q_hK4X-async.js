((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/AvatarUpload/index.en-US.md?type=text'],
{ "docs/form/AvatarUpload/index.en-US.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/AvatarUpload/index.en-US.md?watch=parent");
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
        "value": "AvatarUpload, provides an avtar with upload and crop capability.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { AvatarUpload } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "'abp-avatar-upload'",
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
        "value": "fieldRef",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The ref of the component",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "React.Ref<AvatarUploadRef | null | undefined>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "imageSrc",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The source of the image",
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
        "value": "fallbackSrc",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The fallback source of the image",
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
        "value": "shape",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The shape of the component",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'circle' | 'square'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "'circle'",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "avatarProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The props of the avatar",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Omit<AvatarProps, 'src' | 'srcSet' | 'shape' | 'children'>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "imageProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The props of the image",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Omit<RcImageProps, 'src' | 'srcSet' | 'fallback' | 'width' | 'height' | 'preview' | 'title'>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "uploadEnabled",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to enable upload",
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
        "value": "uploadProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The props of uploading",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "FileUploadProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "cropEnabled",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Whether to enable crop",
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
        "value": "cropProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The props of cropping",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Omit<ImgCropProps, 'children'>",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
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
        "value": "TooltipProps",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "onImageSrcChange",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The callback function when image source changed",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(src?: string) => void",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "onFallbackSrcChange",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "The callback function when fallback image changed",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "(src?: string) => void",
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
        "value": "The locale of the component",
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
        "value": "isLoading",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Check if loading",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "getImageSrc",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Get image source URL",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "setImageSrc",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "src?: string",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Set image source URL",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "getFallbackSrc",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "None",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Get fallback source URL",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "setFallbackSrc",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "src?: string",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Set fallback source URL",
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
//# sourceMappingURL=docs_form_AvatarUpload_index_en-US_md_q_hK4X-async.js.map
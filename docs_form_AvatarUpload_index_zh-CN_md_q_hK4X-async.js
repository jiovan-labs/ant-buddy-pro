((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['docs/form/AvatarUpload/index.zh-CN.md?type=text'],
{ "docs/form/AvatarUpload/index.zh-CN.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/form/AvatarUpload/index.zh-CN.md?watch=parent");
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
        "value": "AvatarUpload，可以显示一个头像，并支持上传和裁剪。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "import { AvatarUpload } from '@jiovan-labs/ant-buddy-pro';\n",
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
        "value": "容器 div 的 CSS 类名",
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
        "value": "容器 div 的 CSS 样式",
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
        "value": "组件的 ref 句柄",
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
        "value": "图片源",
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
        "value": "备用图片源",
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
        "value": "组件的形状",
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
        "value": "头像属性",
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
        "value": "图像属性",
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
        "value": "是否启用上传",
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
        "value": "上传属性",
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
        "value": "是否启用裁剪",
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
        "value": "裁剪属性",
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
        "value": "是否使用 Tooltip",
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
        "value": "Tooltip 属性",
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
        "value": "图片源变化时的回调函数",
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
        "value": "备用图片源变化时的回调函数",
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
        "value": "通过 ",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "ref",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": " 可以访问以下方法：",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "方法名",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "isLoading",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "检查是否正在加载",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "getImageSrc",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "获取图片源地址",
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
        "value": "设置图片源地址",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "getFallbackSrc",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "无",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "获取备用图片源地址",
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
        "value": "设置备用图片源地址",
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
//# sourceMappingURL=docs_form_AvatarUpload_index_zh-CN_md_q_hK4X-async.js.map
((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@jiovan-labs/ant-buddy-pro"] || []).push([
        ['nm__dumi__dist__client__pages__Demo__index'],
{ "node_modules/dumi/dist/client/pages/Demo/index.js": function (module, exports, __mako_require__){
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
var _dumi = __mako_require__(".dumi/tmp/dumi/exports.ts");
var _react = __mako_require__("node_modules/react/index.js");
var _liveDemoMessage = __mako_require__("node_modules/dumi/dist/client/theme-api/liveDemoMessage.js");
var _useRenderer = __mako_require__("node_modules/dumi/dist/client/theme-api/useRenderer.js");
"";
var DemoRenderPage = function DemoRenderPage() {
    var params = (0, _dumi.useParams)();
    var _useLocation = (0, _dumi.useLocation)(), search = _useLocation.search;
    var id = params.id;
    var routeId = new URLSearchParams(search).get('routeId') || undefined;
    var demo = (0, _dumi.useDemo)(id, undefined, undefined, routeId);
    var _useRenderer1 = (0, _useRenderer.useRenderer)({
        id: id,
        component: demo.component,
        renderOpts: demo.renderOpts
    }), canvasRef = _useRenderer1.canvasRef;
    var _ref = demo || {}, component = _ref.component, renderOpts = _ref.renderOpts;
    var _useLiveDemo = (0, _dumi.useLiveDemo)(id), liveDemoNode = _useLiveDemo.node, setSource = _useLiveDemo.setSource, liveDemoError = _useLiveDemo.error, loading = _useLiveDemo.loading;
    var finalNode = liveDemoNode || (renderOpts !== null && renderOpts !== void 0 && renderOpts.renderer ? /*#__PURE__*/ (0, _react.createElement)('div', {
        ref: canvasRef
    }) : component && /*#__PURE__*/ (0, _react.createElement)(component));
    // listen message event for setSource
    (0, _react.useEffect)(function() {
        var _demo$asset;
        var dependencies = (_demo$asset = demo.asset) === null || _demo$asset === void 0 ? void 0 : _demo$asset.dependencies;
        var entryFileName = dependencies && Object.keys(dependencies).find(function(key) {
            return dependencies[key].type === 'FILE';
        });
        var handler = function handler(ev) {
            if ((0, _liveDemoMessage.isLiveDemoMessage)(ev, window.parent, 'dumi.liveDemo.setSource') && (0, _liveDemoMessage.isLiveDemoSource)(ev.data.value, entryFileName)) setSource(ev.data.value);
        };
        window.addEventListener('message', handler);
        return function() {
            return window.removeEventListener('message', handler);
        };
    }, [
        demo.asset,
        setSource
    ]);
    // The parent listens on this window for compilation completion.
    (0, _react.useEffect)(function() {
        if (!loading && (liveDemoError || liveDemoNode)) window.postMessage({
            type: 'dumi.liveDemo.compileDone',
            value: {
                err: liveDemoError
            }
        }, window.location.origin);
    }, [
        liveDemoError,
        liveDemoNode,
        loading
    ]);
    return finalNode;
};
var _default = DemoRenderPage;

},
 }]);
//# sourceMappingURL=nm__dumi__dist__client__pages__Demo__index-async.js.map
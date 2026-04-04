(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "ProductCard-module__N0CcKq__body",
  "card": "ProductCard-module__N0CcKq__card",
  "category": "ProductCard-module__N0CcKq__category",
  "description": "ProductCard-module__N0CcKq__description",
  "discount": "ProductCard-module__N0CcKq__discount",
  "footer": "ProductCard-module__N0CcKq__footer",
  "image": "ProductCard-module__N0CcKq__image",
  "imageWrap": "ProductCard-module__N0CcKq__imageWrap",
  "price": "ProductCard-module__N0CcKq__price",
  "priceRow": "ProductCard-module__N0CcKq__priceRow",
  "ratingNum": "ProductCard-module__N0CcKq__ratingNum",
  "ratingRow": "ProductCard-module__N0CcKq__ratingRow",
  "starEmpty": "ProductCard-module__N0CcKq__starEmpty",
  "starFilled": "ProductCard-module__N0CcKq__starFilled",
  "stars": "ProductCard-module__N0CcKq__stars",
  "title": "ProductCard-module__N0CcKq__title",
});
}),
"[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.module.css [app-client] (css module)");
;
;
;
function ProductCard({ product }) {
    const rating = product.rating ?? 0;
    const stars = Math.round(rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product.thumbnail,
                        alt: product.title,
                        fill: true,
                        sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                        children: product.category
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                        children: [
                                            "$",
                                            product.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    product.discountPercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discount,
                                        children: [
                                            "−",
                                            Math.round(product.discountPercentage),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ratingRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                                        children: Array.from({
                                            length: 5
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: i < stars ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starFilled : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starEmpty,
                                                children: "★"
                                            }, i, false, {
                                                fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ratingNum,
                                        children: rating.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "ProductGrid-module__h1mVUW__grid",
  "heading": "ProductGrid-module__h1mVUW__heading",
  "main": "ProductGrid-module__h1mVUW__main",
  "meta": "ProductGrid-module__h1mVUW__meta",
  "pageHeader": "ProductGrid-module__h1mVUW__pageHeader",
});
}),
"[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.module.css [app-client] (css module)");
;
;
;
function ProductGrid({ products }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                        children: "Produktu katalogs"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                        children: [
                            products.length,
                            " produkti"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.js",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.js",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ProductGrid;
var _c;
__turbopack_context__.k.register(_c, "ProductGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/CSRPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CSRPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/ProductGrid.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CSRPage({ productCount }) {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CSRPage.useEffect": ()=>{
            fetch(`https://dummyjson.com/products?limit=${productCount}&select=id,title,description,price,thumbnail,rating,discountPercentage,category`).then({
                "CSRPage.useEffect": (res)=>res.json()
            }["CSRPage.useEffect"]).then({
                "CSRPage.useEffect": (data)=>{
                    setProducts(data.products);
                }
            }["CSRPage.useEffect"]);
        }
    }["CSRPage.useEffect"], [
        productCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bakalaura__darbs$2f$Eksperiments$2f$pwa$2d$csr$2f$app$2f$components$2f$ProductGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        products: products
    }, void 0, false, {
        fileName: "[project]/Documents/Bakalaura darbs/Eksperiments/pwa-csr/app/components/CSRPage.js",
        lineNumber: 20,
        columnNumber: 7
    }, this);
}
_s(CSRPage, "f86L6rLANGURv6GE6gupp7+oOp4=");
_c = CSRPage;
var _c;
__turbopack_context__.k.register(_c, "CSRPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Bakalaura%20darbs_Eksperiments_pwa-csr_app_components_0qt2nzt._.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["performance-breakdown-performance-breakdown-module"],{

/***/ "./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div style=\"margin-bottom:4px\">\n        <input placeholder=\"Filter...\" type=\"text\" id=\"filter-textbox1\" (input)=\"onTextboxFilterChanged()\"></div>\n      \n      <ag-grid-angular #agGrid style=\"width: 100%; height: 450px;\" id=\"myGridbd\" class=\"ag-theme-fresh\" [columnDefs]=\"columnDefs\"\n        [rowData]=\"rowData\" [getNodeChildDetails]=\"getNodeChildDetails\" (gridReady)=\"onGridReady($event)\">\n      </ag-grid-angular>      \n</div>"

/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 1%; }\n"

/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BreakdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownComponent", function() { return BreakdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreakdownComponent = /** @class */ (function () {
    function BreakdownComponent() {
        this.columnDefs = [
            {
                headerName: "Brand/Consignee",
                children: [
                    {
                        headerName: "",
                        field: "brand",
                        cellRenderer: "agGroupCellRenderer",
                        width: 300
                    }
                ]
            },
            {
                headerName: "PPM",
                children: [
                    {
                        headerName: "Rec",
                        field: "rec",
                        width: 100
                    },
                    {
                        headerName: "Reject",
                        field: "reject",
                        width: 100
                    },
                    {
                        headerName: "Val",
                        field: "val1",
                        width: 100
                    }
                ]
            },
            {
                headerName: "QPM",
                children: [
                    {
                        headerName: "PPM",
                        field: "ppm",
                        width: 100
                    },
                    {
                        headerName: "IR",
                        field: "ir",
                        width: 100
                    },
                    {
                        headerName: "NC",
                        field: "nc",
                        width: 100
                    },
                    {
                        headerName: "Spend",
                        field: "spend",
                        width: 100
                    },
                    {
                        headerName: "Val",
                        field: "val2",
                        width: 100
                    }
                ]
            },
            {
                headerName: "Delivery Precision(%)",
                children: [
                    {
                        headerName: "Del",
                        field: "del1",
                        width: 100
                    },
                    {
                        headerName: "Corr",
                        field: "corr1",
                        width: 100
                    },
                    {
                        headerName: "%",
                        field: "per1",
                        width: 100
                    }
                ]
            },
            {
                headerName: "Service Level",
                children: [
                    {
                        headerName: "Del",
                        field: "del2",
                        width: 100
                    },
                    {
                        headerName: "Corr",
                        field: "corr2",
                        width: 100
                    },
                    {
                        headerName: "%",
                        field: "per2",
                        width: 100
                    }
                ]
            },
            {
                headerName: "Spend",
                children: [
                    {
                        headerName: "",
                        field: "tot",
                        width: 100
                    }
                ]
            }
        ];
        this.columnDefs1 = [
            {
                headerName: "",
                field: "brand",
                cellRenderer: "agGroupCellRenderer",
                width: 300
            },
            {
                headerName: "Rec",
                field: "rec",
                width: 100
            },
            {
                headerName: "Reject",
                field: "reject",
                width: 100
            },
            {
                headerName: "Val",
                field: "val1",
                width: 100
            },
            {
                headerName: "PPM",
                field: "ppm",
                width: 100
            },
            {
                headerName: "IR",
                field: "ir",
                width: 100
            },
            {
                headerName: "NC",
                field: "nc",
                width: 100
            },
            {
                headerName: "Spend",
                field: "spend",
                width: 100
            },
            {
                headerName: "Val",
                field: "val2",
                width: 100
            },
            {
                headerName: "Del",
                field: "del1",
                width: 100
            },
            {
                headerName: "Corr",
                field: "corr1",
                width: 100
            },
            {
                headerName: "%",
                field: "per1",
                width: 100
            },
            {
                headerName: "Del",
                field: "del2",
                width: 100
            },
            {
                headerName: "Corr",
                field: "corr2",
                width: 100
            },
            {
                headerName: "%",
                field: "per2",
                width: 100
            },
            {
                headerName: "",
                field: "tot",
                width: 100
            }
        ];
        this.rowData = [
            {
                brand: "Supplier Total",
                rec: "98",
                reject: "48",
                val1: "493",
                ppm: "493",
                ir: "7",
                nc: "48",
                spend: "391",
                val2: "50",
                del1: "1001",
                corr1: "928",
                per1: "92.7",
                del2: "0",
                corr2: "0",
                per2: "0.0",
                tot: "10000",
                participants: null
            },
            {
                brand: "CVA COE",
                rec: "98",
                reject: "48",
                val1: "493",
                ppm: "493",
                ir: "7",
                nc: "48",
                spend: "391",
                val2: "50",
                del1: "1001",
                corr1: "928",
                per1: "92.7",
                del2: "0",
                corr2: "0",
                per2: "0.0",
                tot: "10000",
                participants: [
                    {
                        brand: "1001, Goteborg",
                        rec: "98",
                        reject: "48",
                        val1: "493",
                        ppm: "493",
                        ir: "7",
                        nc: "48",
                        spend: "391",
                        val2: "50",
                        del1: "1001",
                        corr1: "928",
                        per1: "92.7",
                        del2: "0",
                        corr2: "0",
                        per2: "0.0",
                        tot: "10000",
                        participants: [
                            {
                                brand: "2018-07",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            },
                            {
                                brand: "2018-06",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            },
                            {
                                brand: "2018-05",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            }
                        ]
                    },
                    {
                        brand: "2800, Curitiba",
                        rec: "98",
                        reject: "48",
                        val1: "493",
                        ppm: "493",
                        ir: "7",
                        nc: "48",
                        spend: "391",
                        val2: "50",
                        del1: "1001",
                        corr1: "928",
                        per1: "92.7",
                        del2: "0",
                        corr2: "0",
                        per2: "0.0",
                        tot: "10000",
                        participants: [
                            {
                                brand: "2018-07",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            },
                            {
                                brand: "2018-06",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            },
                            {
                                brand: "2018-05",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            }
                        ]
                    },
                    {
                        brand: "4645, Gent",
                        rec: "98",
                        reject: "48",
                        val1: "493",
                        ppm: "493",
                        ir: "7",
                        nc: "48",
                        spend: "391",
                        val2: "50",
                        del1: "1001",
                        corr1: "928",
                        per1: "92.7",
                        del2: "0",
                        corr2: "0",
                        per2: "0.0",
                        tot: "10000",
                        participants: [
                            {
                                brand: "2018-07",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            },
                            {
                                brand: "2018-06",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            },
                            {
                                brand: "2018-05",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            }
                        ]
                    }
                ]
            },
            {
                brand: "CVA Conventional",
                rec: "98",
                reject: "48",
                val1: "493",
                ppm: "493",
                ir: "7",
                nc: "48",
                spend: "391",
                val2: "50",
                del1: "1001",
                corr1: "928",
                per1: "92.7",
                del2: "0",
                corr2: "0",
                per2: "0.0",
                tot: "10000",
                participants: [
                    {
                        brand: "4285, Macungie",
                        rec: "98",
                        reject: "48",
                        val1: "493",
                        ppm: "493",
                        ir: "7",
                        nc: "48",
                        spend: "391",
                        val2: "50",
                        del1: "1001",
                        corr1: "928",
                        per1: "92.7",
                        del2: "0",
                        corr2: "0",
                        per2: "0.0",
                        tot: "10000",
                        participants: [
                            {
                                brand: "2018-06",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            },
                            {
                                brand: "2018-05",
                                rec: "98",
                                reject: "48",
                                val1: "493",
                                ppm: "493",
                                ir: "7",
                                nc: "48",
                                spend: "391",
                                val2: "50",
                                del1: "1001",
                                corr1: "928",
                                per1: "92.7",
                                del2: "0",
                                corr2: "0",
                                per2: "0.0",
                                tot: "10000",
                            }
                        ]
                    }
                ]
            }
        ];
        this.getNodeChildDetails = function getNodeChildDetails(rowItem) {
            if (rowItem.participants) {
                return {
                    group: true,
                    expanded: rowItem.group === "Group C",
                    children: rowItem.participants,
                    key: rowItem.group
                };
            }
            else {
                return null;
            }
        };
    }
    BreakdownComponent.prototype.ngOnInit = function () {
    };
    BreakdownComponent.prototype.onTextboxFilterChanged = function () {
        var value = document.getElementById("filter-textbox1").value;
        this.gridApi.setQuickFilter(value);
    };
    BreakdownComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        //params.api.sizeColumnsToFit();
    };
    BreakdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breakdown',
            template: __webpack_require__(/*! ./breakdown.component.html */ "./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.html"),
            styles: [__webpack_require__(/*! ./breakdown.component.scss */ "./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreakdownComponent);
    return BreakdownComponent;
}());



/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/performance-breakdown-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: PerformanceBreakdownRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceBreakdownRoutingModule", function() { return PerformanceBreakdownRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _performance_breakdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./performance-breakdown.component */ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _performance_breakdown_component__WEBPACK_IMPORTED_MODULE_2__["PerformanceBreakdownComponent"]
    }
];
var PerformanceBreakdownRoutingModule = /** @class */ (function () {
    function PerformanceBreakdownRoutingModule() {
    }
    PerformanceBreakdownRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PerformanceBreakdownRoutingModule);
    return PerformanceBreakdownRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"trend-tab\" data-toggle=\"tab\" href=\"#Trend\" role=\"tab\" aria-controls=\"trend\"\n        aria-selected=\"true\">Performance Trend</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"breakdown-tab\" data-toggle=\"tab\" href=\"#BreakDown\" role=\"tab\" aria-controls=\"breakdown\"\n        aria-selected=\"false\">Performance BreakDown</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"Trend\" role=\"tabpanel\" aria-labelledby=\"trend-tab\">\n      <app-trend></app-trend>\n    </div>\n    <div class=\"tab-pane fade\" id=\"BreakDown\" role=\"tabpanel\" aria-labelledby=\"breakdown-tab\">\n      <app-breakdown></app-breakdown>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PerformanceBreakdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceBreakdownComponent", function() { return PerformanceBreakdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerformanceBreakdownComponent = /** @class */ (function () {
    function PerformanceBreakdownComponent() {
    }
    PerformanceBreakdownComponent.prototype.ngOnInit = function () {
    };
    PerformanceBreakdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-breakdown',
            template: __webpack_require__(/*! ./performance-breakdown.component.html */ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.html"),
            styles: [__webpack_require__(/*! ./performance-breakdown.component.scss */ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PerformanceBreakdownComponent);
    return PerformanceBreakdownComponent;
}());



/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/performance-breakdown.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: PerformanceBreakdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceBreakdownModule", function() { return PerformanceBreakdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _performance_breakdown_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./performance-breakdown-routing.module */ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown-routing.module.ts");
/* harmony import */ var _performance_breakdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performance-breakdown.component */ "./src/app/features/supplier-info/performance-breakdown/performance-breakdown.component.ts");
/* harmony import */ var _trend_trend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trend/trend.component */ "./src/app/features/supplier-info/performance-breakdown/trend/trend.component.ts");
/* harmony import */ var _breakdown_breakdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breakdown/breakdown.component */ "./src/app/features/supplier-info/performance-breakdown/breakdown/breakdown.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PerformanceBreakdownModule = /** @class */ (function () {
    function PerformanceBreakdownModule() {
    }
    PerformanceBreakdownModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _performance_breakdown_routing_module__WEBPACK_IMPORTED_MODULE_2__["PerformanceBreakdownRoutingModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([])
            ],
            declarations: [_performance_breakdown_component__WEBPACK_IMPORTED_MODULE_3__["PerformanceBreakdownComponent"], _trend_trend_component__WEBPACK_IMPORTED_MODULE_4__["TrendComponent"], _breakdown_breakdown_component__WEBPACK_IMPORTED_MODULE_5__["BreakdownComponent"]]
        })
    ], PerformanceBreakdownModule);
    return PerformanceBreakdownModule;
}());



/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/trend/trend.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/trend/trend.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"margin-bottom:4px\">\n    <input placeholder=\"Filter...\" type=\"text\" id=\"filter-textbox\" (input)=\"onTextboxFilterChanged()\"></div>\n  <!-- <input type=\"checkbox\" [(ngModel)]=\"delivery\" (click)='hideDelivery($event)'>Show Delivery Precision(%) -->\n  <ag-grid-angular #agGrid style=\"width: 100%; height: 450px;\" id=\"myGrid\" class=\"ag-theme-fresh\" [columnDefs]=\"columnDefs\"\n    [rowData]=\"rowData\" [getNodeChildDetails]=\"getNodeChildDetails\" (gridReady)=\"onGridReady($event)\">\n  </ag-grid-angular>\n</div>"

/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/trend/trend.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/trend/trend.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 1%; }\n"

/***/ }),

/***/ "./src/app/features/supplier-info/performance-breakdown/trend/trend.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/supplier-info/performance-breakdown/trend/trend.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TrendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendComponent", function() { return TrendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrendComponent = /** @class */ (function () {
    function TrendComponent() {
        this.delivery = false;
        this.columnDefs = [{
                headerName: "Brand/Consignee",
                field: 'brand',
                children: [
                    {
                        headerName: "",
                        field: "brand",
                        cellRenderer: "agGroupCellRenderer",
                        width: 200
                    }
                ]
            },
            {
                headerName: "PPM",
                field: 'ppm',
                children: [
                    {
                        headerName: "Target",
                        field: "target1",
                        width: 90
                    },
                    {
                        headerName: "Last",
                        field: "last1",
                        width: 90
                    },
                    {
                        headerName: "Actual",
                        field: "actual1",
                        width: 90
                    },
                    {
                        headerName: "Trend",
                        field: "trend1",
                        width: 90
                    }
                ]
            },
            {
                headerName: "QPM",
                field: 'qpm',
                children: [
                    {
                        headerName: "Target",
                        field: "target2",
                        width: 90
                    },
                    {
                        headerName: "Last",
                        field: "last2",
                        width: 90
                    },
                    {
                        headerName: "Actual",
                        field: "actual2",
                        width: 90
                    },
                    {
                        headerName: "Trend",
                        field: "trend2",
                        width: 90
                    }
                ]
            },
            {
                headerName: "Delivery Precision(%)",
                children: [
                    {
                        headerName: "Target",
                        field: "target3",
                        width: 90
                    },
                    {
                        headerName: "Last",
                        field: "last3",
                        width: 90
                    },
                    {
                        headerName: "Actual",
                        field: "actual3",
                        width: 90
                    },
                    {
                        headerName: "Trend",
                        field: "trend3",
                        width: 90
                    }
                ],
                field: 'delivery'
            }
        ];
        this.rowData = [
            {
                brand: "Supplier Total",
                target1: "",
                last1: "0",
                actual1: "0",
                trend1: "0",
                target2: "",
                last2: "0",
                actual2: "0",
                trend2: "0",
                target3: "",
                last3: "0",
                actual3: "0",
                trend3: "0",
                participants: null
            },
            {
                brand: "CVA COE",
                target1: "<70",
                last1: "0",
                actual1: "0",
                trend1: "0",
                target2: "<50",
                last2: "0",
                actual2: "0",
                trend2: "0",
                target3: ">95",
                last3: "0",
                actual3: "0",
                trend3: "0",
                participants: [
                    {
                        brand: "1001 Gothenborg",
                        target1: "<70",
                        last1: "0",
                        actual1: "0",
                        trend1: "0",
                        target2: "<50",
                        last2: "0",
                        actual2: "0",
                        trend2: "0",
                        target3: ">95",
                        last3: "0",
                        actual3: "0",
                        trend3: "0"
                    },
                    {
                        brand: "2800 Curitiba",
                        target1: "<70",
                        last1: "0",
                        actual1: "0",
                        trend1: "0",
                        target2: "<50",
                        last2: "0",
                        actual2: "0",
                        trend2: "0",
                        target3: ">95",
                        last3: "0",
                        actual3: "0",
                        trend3: "0"
                    }, {
                        brand: "4645 Ghent",
                        target1: "<70",
                        last1: "0",
                        actual1: "0",
                        trend1: "0",
                        target2: "<50",
                        last2: "0",
                        actual2: "0",
                        trend2: "0",
                        target3: ">95",
                        last3: "0",
                        actual3: "0",
                        trend3: "0"
                    }, {
                        brand: "31967 Bourg",
                        target1: "<70",
                        last1: "0",
                        actual1: "0",
                        trend1: "0",
                        target2: "<50",
                        last2: "0",
                        actual2: "0",
                        trend2: "0",
                        target3: ">95",
                        last3: "0",
                        actual3: "0",
                        trend3: "0"
                    }
                ]
            },
            {
                brand: "Logistics Services",
                target1: "<70",
                last1: "0",
                actual1: "0",
                trend1: "0",
                target2: "<50",
                last2: "0",
                actual2: "0",
                trend2: "0",
                target3: ">95",
                last3: "0",
                actual3: "0",
                trend3: "0",
                participants: [
                    {
                        brand: "1001 Gothenborg",
                        target1: "<70",
                        last1: "0",
                        actual1: "0",
                        trend1: "0",
                        target2: "<50",
                        last2: "0",
                        actual2: "0",
                        trend2: "0",
                        target3: ">95",
                        last3: "0",
                        actual3: "0",
                        trend3: "0"
                    },
                    {
                        brand: "1618 Gent",
                        target1: "<70",
                        last1: "0",
                        actual1: "0",
                        trend1: "0",
                        target2: "<50",
                        last2: "0",
                        actual2: "0",
                        trend2: "0",
                        target3: ">95",
                        last3: "0",
                        actual3: "0",
                        trend3: "0"
                    }, {
                        brand: "31971 Venissieux",
                        target1: "<70",
                        last1: "0",
                        actual1: "0",
                        trend1: "0",
                        target2: "<50",
                        last2: "0",
                        actual2: "0",
                        trend2: "0",
                        target3: ">95",
                        last3: "0",
                        actual3: "0",
                        trend3: "0"
                    }
                ]
            },
            {
                brand: "CVA Conventional",
                target1: "<70",
                last1: "0",
                actual1: "0",
                trend1: "0",
                target2: "<50",
                last2: "0",
                actual2: "0",
                trend2: "0",
                target3: ">95",
                last3: "0",
                actual3: "0",
                trend3: "0",
                participants: [
                    {
                        brand: "4285 Macungie",
                        target1: "<70",
                        last1: "0",
                        actual1: "0",
                        trend1: "0",
                        target2: "<50",
                        last2: "0",
                        actual2: "0",
                        trend2: "0",
                        target3: ">95",
                        last3: "0",
                        actual3: "0",
                        trend3: "0"
                    }
                ]
            }
        ];
        this.getNodeChildDetails = function getNodeChildDetails(rowItem) {
            if (rowItem.participants) {
                return {
                    group: true,
                    expanded: rowItem.group === "Group C",
                    children: rowItem.participants,
                    key: rowItem.group
                };
            }
            else {
                return null;
            }
        };
    }
    TrendComponent.prototype.ngOnInit = function () {
    };
    TrendComponent.prototype.onTextboxFilterChanged = function () {
        var value = document.getElementById("filter-textbox").value;
        this.gridApi.setQuickFilter(value);
    };
    TrendComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.gridColumnApi.setColumnsVisible(["target3", "last3", "actual3","trend3"], false);
        //params.api.sizeColumnsToFit();
    };
    TrendComponent.prototype.hideDelivery = function (e) {
        this.delivery = e.target.checked;
        this.gridColumnApi.setColumnsVisible(["target3", "last3", "actual3", "trend3"], this.delivery);
    };
    TrendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trend',
            template: __webpack_require__(/*! ./trend.component.html */ "./src/app/features/supplier-info/performance-breakdown/trend/trend.component.html"),
            styles: [__webpack_require__(/*! ./trend.component.scss */ "./src/app/features/supplier-info/performance-breakdown/trend/trend.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrendComponent);
    return TrendComponent;
}());



/***/ })

}]);
//# sourceMappingURL=performance-breakdown-performance-breakdown-module.js.map
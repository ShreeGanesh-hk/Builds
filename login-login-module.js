(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/features/login/login-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/login/login-routing.module.ts ***!
  \********************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/features/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/features/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">VOLVO &#124; </a>\n  <span class=\"navbar-text\">Volvo Supplier Information Base</span>\n</nav>\n<div class=\"container\">\n  <div class=\"row-fluid\">\n    <div class=\"form-signin\">\n      <h2>VOLVO SUPPLIER INFORMATION BASE</h2>\n      <h3>its all about volvo supplier <a class=\"link1\" data-toggle=\"modal\" data-target=\"#exampleModal\">More..</a></h3>\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div id=\"login-form\"  class=\"form-signin\" >\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">User ID</label>\n              <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" id=\"userID\" placeholder=\"VCN\\<security id>\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Password</label>\n              <div class=\"col-sm-9\">\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n              </div>\n            </div>\n            <button  class=\"btn btn-primary bt-login\" type=\"submit\" (click)=\"navigateDetails()\">Sign In</button>\n          </div>\n          <div class=\"form-footer\">\n            <div class=\"row\">\n              <div class=\"col-xs-7 col-sm-7 col-md-7\">\n                <a class=\"link2\">Request access to VSIB</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Update required content\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/features/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/features/login/login.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  width: 100%;\n  align-content: center;\n  max-width: 500px;\n  padding: 15px;\n  margin: auto; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.form-signin h2 {\n  color: #fff;\n  font-weight: 700;\n  font-size: 1.5rem;\n  text-align: center; }\n\n.bt-login {\n  float: right;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\nh3 {\n  color: #fff;\n  font-weight: 400;\n  font-size: 1rem;\n  text-align: center; }\n\nh4 {\n  color: #000;\n  font-weight: 400;\n  font-size: 1rem;\n  text-align: center; }\n\n.form-signin .link1 {\n  color: #fff;\n  text-decoration: underline;\n  font-weight: 400;\n  font-size: 1rem;\n  text-align: center;\n  cursor: pointer; }\n\n.form-signin .link2 {\n  color: grey;\n  text-decoration: underline;\n  font-weight: 400;\n  font-size: 1rem;\n  text-align: center;\n  cursor: pointer; }\n\n.form-footer {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/features/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router) {
        this._router = _router;
        // Style to add background image only to Login page;
        document.body.style.backgroundImage = 'url(\'../../assets/image/volvotrucks.jpg\')';
        document.body.style.backgroundPosition = 'center center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundSize = 'cover';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.navigateDetails = function () {
        document.body.style.backgroundImage = '';
        this._router.navigate(['./vsib/home']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/features/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/features/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/features/login/login.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/login/login.module.ts ***!
  \************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/features/login/login-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/features/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map
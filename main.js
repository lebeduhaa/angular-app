(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/home/main', pathMatch: 'full' }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_modules_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modules.module */ "./src/app/modules/modules.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_modules_module__WEBPACK_IMPORTED_MODULE_4__["ModulesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hover_scale_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hover-scale.directive */ "./src/app/directives/hover-scale.directive.ts");
/* harmony import */ var _stroll_next_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stroll-next.directive */ "./src/app/directives/stroll-next.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _hover_scale_directive__WEBPACK_IMPORTED_MODULE_1__["HoverScaleDirective"],
                _stroll_next_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollNextDirective"]
            ],
            exports: [
                _hover_scale_directive__WEBPACK_IMPORTED_MODULE_1__["HoverScaleDirective"],
                _stroll_next_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollNextDirective"]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/directives/hover-scale.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/hover-scale.directive.ts ***!
  \*****************************************************/
/*! exports provided: HoverScaleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverScaleDirective", function() { return HoverScaleDirective; });
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

var HoverScaleDirective = /** @class */ (function () {
    function HoverScaleDirective(element) {
        this.element = element;
    }
    HoverScaleDirective.prototype.makeLarger = function () {
        this.element.nativeElement.classList.add('profile__goal-card_selected-directive');
    };
    HoverScaleDirective.prototype.makeSmaller = function () {
        this.element.nativeElement.classList.remove('profile__goal-card_selected-directive');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousemove'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HoverScaleDirective.prototype, "makeLarger", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HoverScaleDirective.prototype, "makeSmaller", null);
    HoverScaleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHoverScale]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HoverScaleDirective);
    return HoverScaleDirective;
}());



/***/ }),

/***/ "./src/app/directives/stroll-next.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/stroll-next.directive.ts ***!
  \*****************************************************/
/*! exports provided: ScrollNextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollNextDirective", function() { return ScrollNextDirective; });
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

var ScrollNextDirective = /** @class */ (function () {
    function ScrollNextDirective() {
        this.scrollPrevEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollNextEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ScrollNextDirective.prototype.scrollHandler = function ($event) {
        var delta = Math.max(-1, Math.min(1, ($event.wheelDelta || -$event.detail)));
        console.log(delta);
        if (delta > 0) {
            this.scrollPrevEvent.emit(true);
        }
        else {
            this.scrollNextEvent.emit(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollNextDirective.prototype, "scrollPrevEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollNextDirective.prototype, "scrollNextEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('wheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollNextDirective.prototype, "scrollHandler", null);
    ScrollNextDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appScrollNext]'
        })
    ], ScrollNextDirective);
    return ScrollNextDirective;
}());



/***/ }),

/***/ "./src/app/modules/combinations/combinations-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/combinations/combinations-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CombinationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationsRoutingModule", function() { return CombinationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_combinations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/combinations.component */ "./src/app/modules/combinations/component/combinations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CombinationsRoutingModule = /** @class */ (function () {
    function CombinationsRoutingModule() {
    }
    CombinationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'combinations', component: _component_combinations_component__WEBPACK_IMPORTED_MODULE_2__["CombinationsComponent"] }
                ])
            ]
        })
    ], CombinationsRoutingModule);
    return CombinationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/combinations/combinations.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/combinations/combinations.module.ts ***!
  \*************************************************************/
/*! exports provided: CombinationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationsModule", function() { return CombinationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _combinations_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combinations-routing.module */ "./src/app/modules/combinations/combinations-routing.module.ts");
/* harmony import */ var _component_combinations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/combinations.component */ "./src/app/modules/combinations/component/combinations.component.ts");
/* harmony import */ var _component_combinations_side_bar_combinations_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/combinations-side-bar/combinations-side-bar.component */ "./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.ts");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CombinationsModule = /** @class */ (function () {
    function CombinationsModule() {
    }
    CombinationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _combinations_routing_module__WEBPACK_IMPORTED_MODULE_2__["CombinationsRoutingModule"],
                src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            declarations: [
                _component_combinations_component__WEBPACK_IMPORTED_MODULE_3__["CombinationsComponent"],
                _component_combinations_side_bar_combinations_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["CombinationsSideBarComponent"]
            ],
            exports: [
                _component_combinations_component__WEBPACK_IMPORTED_MODULE_3__["CombinationsComponent"]
            ]
        })
    ], CombinationsModule);
    return CombinationsModule;
}());



/***/ }),

/***/ "./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-bar {\r\n  height: 100%;\r\n  background-color: #fff;\r\n}\r\n.side-bar__header {\r\n  height: 150px;\r\n  border-bottom: 1px solid #e1e1e1;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21iaW5hdGlvbnMvY29tcG9uZW50L2NvbWJpbmF0aW9ucy1zaWRlLWJhci9jb21iaW5hdGlvbnMtc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWJpbmF0aW9ucy9jb21wb25lbnQvY29tYmluYXRpb25zLXNpZGUtYmFyL2NvbWJpbmF0aW9ucy1zaWRlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uc2lkZS1iYXJfX2hlYWRlciB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-bar\">\r\n  <div class=\"side-bar__header\" [ngStyle]=\"{'background-image': getImage()}\">\r\n    <div class=\"side-bar__header-prev\">\r\n      <button [disabled]=\"goPrevDisabled()\" (click)=\"decNav()\" mat-icon-button>\r\n        <mat-icon>arrow_back_ios</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div class=\"side-bar__header-title\">комбинация {{currentCombination}}</div>\r\n    <div class=\"side-bar__header-next\">\r\n      <button [disabled]=\"goNextDisabled()\" (click)=\"incNav()\" mat-icon-button>\r\n        <mat-icon>arrow_forward_ios</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CombinationsSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationsSideBarComponent", function() { return CombinationsSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CombinationsSideBarComponent = /** @class */ (function () {
    function CombinationsSideBarComponent() {
        this.currentCombination = 1;
    }
    CombinationsSideBarComponent.prototype.getImage = function () {
        return "url('assets/img/combinations/" + this.currentCombination + ".png')";
    };
    CombinationsSideBarComponent.prototype.goPrevDisabled = function () {
        return this.currentCombination === 1;
    };
    CombinationsSideBarComponent.prototype.goNextDisabled = function () {
        return this.currentCombination === 3;
    };
    CombinationsSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-combinations-side-bar',
            template: __webpack_require__(/*! ./combinations-side-bar.component.html */ "./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./combinations-side-bar.component.css */ "./src/app/modules/combinations/component/combinations-side-bar/combinations-side-bar.component.css")]
        })
    ], CombinationsSideBarComponent);
    return CombinationsSideBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/combinations/component/combinations.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/combinations/component/combinations.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".combinations {\r\n  height: 100%;\r\n  display: flex;\r\n}\r\n.combinations__side-bar {\r\n  flex-basis: 20%;\r\n  box-shadow: 0 0 20px rgba(128, 128, 128, 0.158);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21iaW5hdGlvbnMvY29tcG9uZW50L2NvbWJpbmF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtDQUNqRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tYmluYXRpb25zL2NvbXBvbmVudC9jb21iaW5hdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21iaW5hdGlvbnMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb21iaW5hdGlvbnNfX3NpZGUtYmFyIHtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE1OCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/combinations/component/combinations.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/combinations/component/combinations.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"combinations\">\r\n  <div class=\"combinations__side-bar\">\r\n    <app-combinations-side-bar></app-combinations-side-bar>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/combinations/component/combinations.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/combinations/component/combinations.component.ts ***!
  \**************************************************************************/
/*! exports provided: CombinationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationsComponent", function() { return CombinationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CombinationsComponent = /** @class */ (function () {
    function CombinationsComponent() {
    }
    CombinationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-combinations',
            template: __webpack_require__(/*! ./combinations.component.html */ "./src/app/modules/combinations/component/combinations.component.html"),
            styles: [__webpack_require__(/*! ./combinations.component.css */ "./src/app/modules/combinations/component/combinations.component.css")]
        })
    ], CombinationsComponent);
    return CombinationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/component/about/about.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/home/component/about/about.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  background-color: #f8f8f8;\r\n  background-image: url('about-back.png');\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n.about__wrapper {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.about__images {\r\n  flex-basis: 50%;\r\n}\r\n.about__information {\r\n  flex-basis: 50%;\r\n}\r\n.about__images-main {\r\n  text-align: center;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n.about__images-main img {\r\n  width: 100%;\r\n}\r\n.about__images-additional {\r\n  display: flex;\r\n}\r\n.about__image-additional {\r\n  height: 260px;\r\n}\r\n.about__image-additional img {\r\n  width: 100%;\r\n}\r\n.about__information-title-back {\r\n  font-family: 'SFUIText-Heavy';\r\n  font-size: 123px;\r\n  color: rgba(0, 0, 0, .03);\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  line-height: 114px;\r\n}\r\n.about__information-title-common {\r\n  font-family: 'SFUIText-Light';\r\n  font-size: 48px;\r\n  padding-left: 15px;\r\n  position: relative;\r\n  margin-bottom: 15px;\r\n  color: #333333;\r\n}\r\n.about__information-title::after {\r\n  content: '';\r\n  display: block;\r\n  width: 7.5%;\r\n  height: 3px;\r\n  background-color: #fff;\r\n  background-color: #73c15d;\r\n}\r\n.about__information-description {\r\n  margin-top: 45px;\r\n  font-family: 'SFUIDisplay-Light';\r\n  font-size: 19px;\r\n  line-height: 43px;\r\n  width: 63%;\r\n  color: #43454b;\r\n}\r\n.about__information-items {\r\n  font-family: 'SFUIDisplay-Light';\r\n  font-size: 15px;\r\n  line-height: 19px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 63%;\r\n  color: #43454b;\r\n  justify-content: space-between;\r\n  margin: 40px 0;\r\n}\r\n.about__information-item {\r\n  flex-basis: 47.5%;\r\n  border: 1px solid #e8e8e8;\r\n  margin-bottom: 30px;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.about__information-content {\r\n  padding: 15px;\r\n}\r\n.about__information-icon {\r\n  /* position: float;\r\n  top: 0;\r\n  right: 0; */\r\n  float: right;\r\n  height: 40px;\r\n  width: 40px;\r\n  border-left: 1px solid #e8e8e8;\r\n  border-bottom: 1px solid #e8e8e8;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n.about__information-icon_first {\r\n  background-image: url('first.png');\r\n}\r\n.about__information-icon_second {\r\n  background-image: url('second.png');\r\n}\r\n.about__information-icon_third {\r\n  background-image: url('third.png');\r\n}\r\n.about__information-icon_fourth {\r\n  background-image: url('fourth.png');\r\n}\r\n.about__information-action button {\r\n  border: none;\r\n  background-image: url('button.png');\r\n  background-repeat: no-repeat;\r\n  background-color: transparent;\r\n  background-size: 100% 100%;\r\n  background-position: center center;\r\n  font-family: 'SFUIDisplay-Semibold';\r\n  text-transform: uppercase;\r\n  color: white;\r\n  width: 200px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, .3);\r\n}\r\n.about__information-action button:hover {\r\n  box-shadow: 0 0 10px gray;\r\n}\r\n.about__information-action button:active {\r\n  box-shadow: inset 0 0 5px white;\r\n}\r\n.about__footer {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -49px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.about__footer button {\r\n  height: 96px;\r\n  width: 96px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n  border: none;\r\n  box-shadow: 0 0 20px rgba(128, 128, 128, 0.36);\r\n  background-image: url('arrow.png');\r\n  background-position: center 26px;\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n.about__footer button:hover {\r\n  box-shadow: 0 0 20px rgb(128, 128, 128);\r\n}\r\n.about__footer button:active {\r\n  box-shadow: inset 0 0 25px rgba(128, 128, 128, 0.315);\r\n}\r\n@media screen and (max-width: 1550px) {\r\n  .about__information-description {\r\n    margin-top: 15px;\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    width: 86%;\r\n  }\r\n  .about__information-items {\r\n    width: 86%;\r\n    margin: 20px 0;\r\n    margin-bottom: 0;\r\n  }\r\n  .about__information-content {\r\n    padding: 10px;\r\n  }\r\n  .about__information-title-back {\r\n    font-size: 72px;\r\n    line-height: 70px;\r\n  }\r\n  .about__information-title-common {\r\n    font-size: 40px;\r\n    padding-left: 11px;\r\n    margin-bottom: 10px;\r\n  }\r\n  .about__information-title::after {\r\n    width: 9.5%;\r\n  }\r\n  .about__information-icon {\r\n    height: 30px;\r\n    width: 30px;\r\n  }\r\n  .about__information-action button {\r\n    width: 170px;\r\n    height: 50px;\r\n  }\r\n  .about__footer button {\r\n    width: 80px;\r\n    height: 80px;\r\n    background-position: center 16px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix3Q0FBd0U7RUFDeEUsNkJBQTZCO0VBQzdCLHlCQUF5QjtDQUMxQjtBQUNEO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFOztjQUVZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsbUNBQW1DO0NBQ3BDO0FBQ0Q7RUFDRSxtQ0FBbUU7Q0FDcEU7QUFDRDtFQUNFLG9DQUFvRTtDQUNyRTtBQUNEO0VBQ0UsbUNBQW1FO0NBQ3BFO0FBQ0Q7RUFDRSxvQ0FBb0U7Q0FDckU7QUFDRDtFQUNFLGFBQWE7RUFDYixvQ0FBOEQ7RUFDOUQsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUNBQXVDO0NBQ3hDO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGdDQUFnQztDQUNqQztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsbUNBQW1FO0VBQ25FLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjtBQUNEO0VBQ0Usd0NBQXdDO0NBQ3pDO0FBQ0Q7RUFDRSxzREFBc0Q7Q0FDdkQ7QUFFRDtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsY0FBYztHQUNmO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlDQUFpQztHQUNsQztDQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2Fib3V0L2Fib3V0LWJhY2sucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuLmFib3V0X193cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYWJvdXRfX2ltYWdlcyB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcbi5hYm91dF9faW5mb3JtYXRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxufVxyXG4uYWJvdXRfX2ltYWdlcy1tYWluIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYWJvdXRfX2ltYWdlcy1tYWluIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFib3V0X19pbWFnZXMtYWRkaXRpb25hbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYWJvdXRfX2ltYWdlLWFkZGl0aW9uYWwge1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbn1cclxuLmFib3V0X19pbWFnZS1hZGRpdGlvbmFsIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFib3V0X19pbmZvcm1hdGlvbi10aXRsZS1iYWNrIHtcclxuICBmb250LWZhbWlseTogJ1NGVUlUZXh0LUhlYXZ5JztcclxuICBmb250LXNpemU6IDEyM3B4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wMyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMTRweDtcclxufVxyXG4uYWJvdXRfX2luZm9ybWF0aW9uLXRpdGxlLWNvbW1vbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdTRlVJVGV4dC1MaWdodCc7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uYWJvdXRfX2luZm9ybWF0aW9uLXRpdGxlOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDcuNSU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNjMTVkO1xyXG59XHJcbi5hYm91dF9faW5mb3JtYXRpb24tZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTRlVJRGlzcGxheS1MaWdodCc7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4gIHdpZHRoOiA2MyU7XHJcbiAgY29sb3I6ICM0MzQ1NGI7XHJcbn1cclxuLmFib3V0X19pbmZvcm1hdGlvbi1pdGVtcyB7XHJcbiAgZm9udC1mYW1pbHk6ICdTRlVJRGlzcGxheS1MaWdodCc7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA2MyU7XHJcbiAgY29sb3I6ICM0MzQ1NGI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG59XHJcbi5hYm91dF9faW5mb3JtYXRpb24taXRlbSB7XHJcbiAgZmxleC1iYXNpczogNDcuNSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5hYm91dF9faW5mb3JtYXRpb24tY29udGVudCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4uYWJvdXRfX2luZm9ybWF0aW9uLWljb24ge1xyXG4gIC8qIHBvc2l0aW9uOiBmbG9hdDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7ICovXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcbi5hYm91dF9faW5mb3JtYXRpb24taWNvbl9maXJzdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2Fib3V0L2ZpcnN0LnBuZycpO1xyXG59XHJcbi5hYm91dF9faW5mb3JtYXRpb24taWNvbl9zZWNvbmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9hYm91dC9zZWNvbmQucG5nJyk7XHJcbn1cclxuLmFib3V0X19pbmZvcm1hdGlvbi1pY29uX3RoaXJkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYWJvdXQvdGhpcmQucG5nJyk7XHJcbn1cclxuLmFib3V0X19pbmZvcm1hdGlvbi1pY29uX2ZvdXJ0aCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2Fib3V0L2ZvdXJ0aC5wbmcnKTtcclxufVxyXG4uYWJvdXRfX2luZm9ybWF0aW9uLWFjdGlvbiBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9uLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LVNlbWlib2xkJztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxufVxyXG4uYWJvdXRfX2luZm9ybWF0aW9uLWFjdGlvbiBidXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyYXk7XHJcbn1cclxuLmFib3V0X19pbmZvcm1hdGlvbi1hY3Rpb24gYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCB3aGl0ZTtcclxufVxyXG4uYWJvdXRfX2Zvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtNDlweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFib3V0X19mb290ZXIgYnV0dG9uIHtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzYpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9hYm91dC9hcnJvdy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMjZweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5hYm91dF9fZm9vdGVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG59XHJcbi5hYm91dF9fZm9vdGVyIGJ1dHRvbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyNXB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zMTUpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTUwcHgpIHtcclxuICAuYWJvdXRfX2luZm9ybWF0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiA4NiU7XHJcbiAgfVxyXG4gIC5hYm91dF9faW5mb3JtYXRpb24taXRlbXMge1xyXG4gICAgd2lkdGg6IDg2JTtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmFib3V0X19pbmZvcm1hdGlvbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5hYm91dF9faW5mb3JtYXRpb24tdGl0bGUtYmFjayB7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICB9XHJcbiAgLmFib3V0X19pbmZvcm1hdGlvbi10aXRsZS1jb21tb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmFib3V0X19pbmZvcm1hdGlvbi10aXRsZTo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDkuNSU7XHJcbiAgfVxyXG4gIC5hYm91dF9faW5mb3JtYXRpb24taWNvbiB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcbiAgLmFib3V0X19pbmZvcm1hdGlvbi1hY3Rpb24gYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLmFib3V0X19mb290ZXIgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDE2cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/home/component/about/about.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/home/component/about/about.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\" appScrollNext (scrollNextEvent)=\"reactOnScrollNextEvent()\" (scrollPrevEvent)=\"reactOnScrollPrevEvent()\">\r\n  <div class=\"about__wrapper\">\r\n    <div class=\"about__images\">\r\n      <div class=\"about__images-main\">\r\n        <img src=\"assets/img/about/first-image.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"about__images-additional\">\r\n        <div class=\"about__image-additional\">\r\n          <img src=\"assets/img/about/second-image.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"about__image-additional\">\r\n          <img src=\"assets/img/about/third-image.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"about__image-additional\">\r\n          <img src=\"assets/img/about/fourth-image.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"about__information\">\r\n      <div class=\"about__information-title\">\r\n        <div class=\"about__information-title-common\">\r\n          О сервисе\r\n          <div class=\"about__information-title-back\">О сервисе</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"about__information-description\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipi cing elit, sed diam nonummy nibh euismod tincidunt ut laoreet doloremagna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.\r\n      </div>\r\n      <div class=\"about__information-items\">\r\n        <div class=\"about__information-item\">\r\n          <div class=\"about__information-icon about__information-icon_first\"></div>\r\n          <div class=\"about__information-content\">\r\n            Каждая комбинация\r\n            рассчитывается исходя из\r\n            суточных норм\r\n          </div>\r\n        </div>\r\n        <div class=\"about__information-item\">\r\n          <div class=\"about__information-icon about__information-icon_second\"></div>\r\n          <div class=\"about__information-content\">\r\n            Уникальная возможность самостоятельной разработки\r\n            рациона питания\r\n          </div>\r\n        </div>\r\n        <div class=\"about__information-item\">\r\n          <div class=\"about__information-icon about__information-icon_third\"></div>\r\n          <div class=\"about__information-content\">\r\n            Удобный интерфейс и наглядная визуализация всех микро и макро-элементов\r\n          </div>\r\n        </div>\r\n        <div class=\"about__information-item\">\r\n          <div class=\"about__information-icon about__information-icon_fourth\"></div>\r\n          <div class=\"about__information-content\">\r\n            Умные рекомендации рецептов\r\n            блюд соответствующих вашим комбинациям\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"about__information-action\">\r\n        <button routerLink=\"/profile\">попробовать</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"about__footer\">\r\n      <button routerLink=\"/home/feedback\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/component/about/about.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/component/about/about.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_router_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/router.helper */ "./src/app/shared/router.helper.ts");
/* harmony import */ var src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/application-constants */ "./src/app/shared/application-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(routerHelper) {
        this.routerHelper = routerHelper;
    }
    AboutComponent.prototype.reactOnScrollPrevEvent = function () {
        this.routerHelper.navigateToPage(src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_2__["APP"].pages.main);
    };
    AboutComponent.prototype.reactOnScrollNextEvent = function () {
        this.routerHelper.navigateToPage(src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_2__["APP"].pages.feedback);
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modules/home/component/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/modules/home/component/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_router_helper__WEBPACK_IMPORTED_MODULE_1__["RouterHelper"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/component/feedback/feedback.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/home/component/feedback/feedback.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedback {\r\n  background-image: url('feedback-back.png');\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.feedback__form {\r\n  padding: 65px;\r\n  background-color: #fff;\r\n  border-radius: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: 0 0 50px rgba(0, 0, 0, .2);\r\n}\r\n.feedback__form-title {\r\n  font-family: 'SFUIDisplay-Medium';\r\n  font-size: 25px;\r\n  line-height: 35px;\r\n  text-transform: uppercase;\r\n}\r\n.feedback__form-description {\r\n  font-family: 'SFUIDisplay-Thin';\r\n  font-size: 20px;\r\n  line-height: 30px;\r\n  width: 50%;\r\n  text-align: center;\r\n  color: #666666;\r\n}\r\n.feedback__control input {\r\n  width: 870px;\r\n  height: 80px;\r\n  background-color: transparent;\r\n  border: none;\r\n  font-family: 'SFUIDisplay-Light';\r\n  font-size: 20px;\r\n  outline: none;\r\n  color: #666666;\r\n}\r\n.feedback__control {\r\n  margin-bottom: 40px;\r\n  background-repeat: no-repeat;\r\n  background-position: 20px center;\r\n  padding-left: 80px;\r\n  border-bottom: 1px solid #dedede;\r\n}\r\n.feedback__control_name {\r\n  background-image: url('name.png');\r\n}\r\n.feedback__control_email {\r\n  background-image: url('email.png');\r\n}\r\n.feedback__control_message {\r\n  background-image: url('message.png');\r\n}\r\n.feedback__send {\r\n  font-family: 'SFUIDisplay-Regular';\r\n  border: none;\r\n  background-image: url('button.png');\r\n  background-repeat: no-repeat;\r\n  background-color: transparent;\r\n  background-size: 100% 100%;\r\n  background-position: center center;\r\n  color: white;\r\n  width: 280px;\r\n  height: 65px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 30px;\r\n  font-size: 20px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, .3);\r\n}\r\n.feedback__send:hover {\r\n  box-shadow: 0 0 10px gray;\r\n}\r\n.feedback__send:active {\r\n  box-shadow: inset 0 0 5px white;\r\n}\r\n.feedback__send-icon {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-image: url('send.png');\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center center;\r\n  margin-left: 30px;\r\n}\r\n.feedback__send-content {\r\n  border-right: 1px solid white;\r\n  padding: 0 30px;\r\n}\r\n@media screen and (max-width: 1550px) {\r\n  .feedback__control input {\r\n    width: 600px;\r\n    height: 55px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQThFO0VBQzlFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix1Q0FBdUM7Q0FDeEM7QUFDRDtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGlDQUFpQztDQUNsQztBQUNEO0VBQ0Usa0NBQXFFO0NBQ3RFO0FBQ0Q7RUFDRSxtQ0FBc0U7Q0FDdkU7QUFDRDtFQUNFLHFDQUF3RTtDQUN6RTtBQUNEO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixvQ0FBOEQ7RUFDOUQsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1Q0FBdUM7Q0FDeEM7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsZ0NBQWdDO0NBQ2pDO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFxRTtFQUNyRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1DQUFtQztFQUNuQyxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFO0lBQ0UsYUFBYTtJQUNiLGFBQWE7R0FDZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRiYWNrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmVlZGJhY2svZmVlZGJhY2stYmFjay5wbmcnKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uZmVlZGJhY2tfX2Zvcm0ge1xyXG4gIHBhZGRpbmc6IDY1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1MHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG59XHJcbi5mZWVkYmFja19fZm9ybS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdTRlVJRGlzcGxheS1NZWRpdW0nO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5mZWVkYmFja19fZm9ybS1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdTRlVJRGlzcGxheS1UaGluJztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuLmZlZWRiYWNrX19jb250cm9sIGlucHV0IHtcclxuICB3aWR0aDogODcwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LUxpZ2h0JztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG4uZmVlZGJhY2tfX2NvbnRyb2wge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMHB4IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuLmZlZWRiYWNrX19jb250cm9sX25hbWUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9mZWVkYmFjay9uYW1lLnBuZycpO1xyXG59XHJcbi5mZWVkYmFja19fY29udHJvbF9lbWFpbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ZlZWRiYWNrL2VtYWlsLnBuZycpO1xyXG59XHJcbi5mZWVkYmFja19fY29udHJvbF9tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmVlZGJhY2svbWVzc2FnZS5wbmcnKTtcclxufVxyXG4uZmVlZGJhY2tfX3NlbmQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU0ZVSURpc3BsYXktUmVndWxhcic7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9idXR0b24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxufVxyXG4uZmVlZGJhY2tfX3NlbmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyYXk7XHJcbn1cclxuLmZlZWRiYWNrX19zZW5kOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCB3aGl0ZTtcclxufVxyXG4uZmVlZGJhY2tfX3NlbmQtaWNvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9mZWVkYmFjay9zZW5kLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLmZlZWRiYWNrX19zZW5kLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU1MHB4KSB7XHJcbiAgLmZlZWRiYWNrX19jb250cm9sIGlucHV0IHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/home/component/feedback/feedback.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/home/component/feedback/feedback.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feedback\" appScrollNext (scrollPrevEvent)=\"reactOnScrollPrevEvent()\">\r\n  <div class=\"feedback__wrapper\">\r\n    <form class=\"feedback__form\">\r\n      <div class=\"feedback__form-title\">остались вопросы?</div>\r\n      <div class=\"feedback__form-description\">\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing \r\n        elit sed diam nonummy nibh euismod.\r\n      </div>\r\n      <div class=\"feedback__control feedback__control_name\">\r\n        <input type=\"text\" placeholder=\"Имя\">\r\n      </div>\r\n      <div class=\"feedback__control feedback__control_email\">\r\n        <input type=\"text\" placeholder=\"E-mail\">\r\n      </div>\r\n      <div class=\"feedback__control feedback__control_message\">\r\n        <input type=\"text\" placeholder=\"Сообщение\">\r\n      </div>\r\n      <button class=\"feedback__send\">\r\n        <div class=\"feedback__send-content\">Отправить</div>\r\n        <div class=\"feedback__send-icon\"></div>\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/home/component/feedback/feedback.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/home/component/feedback/feedback.component.ts ***!
  \***********************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_router_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/router.helper */ "./src/app/shared/router.helper.ts");
/* harmony import */ var src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/application-constants */ "./src/app/shared/application-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(routerHelper) {
        this.routerHelper = routerHelper;
    }
    FeedbackComponent.prototype.reactOnScrollPrevEvent = function () {
        this.routerHelper.navigateToPage(src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_2__["APP"].pages.about);
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/modules/home/component/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/modules/home/component/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_router_helper__WEBPACK_IMPORTED_MODULE_1__["RouterHelper"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/component/home-navigation/home-navigation.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/component/home-navigation/home-navigation.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  font-size: 23px;\r\n  border-left: 1px solid #d0d0d0;\r\n}\r\n.navigation__links {\r\n  flex-basis: 45%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n}\r\n.navigation__link {\r\n  margin-left: -6px;\r\n  background-color: #f8f8f8;\r\n  padding: 18px 0;\r\n  cursor: pointer;\r\n  outline: none;\r\n  font-family: 'SFUIText-Light';\r\n}\r\n.navigation__link_active {\r\n  font-family: 'SFUIDisplay-Medium';\r\n}\r\n.navigation__link:first-child {\r\n  padding-top: 50px;\r\n}\r\n.navigation__link:last-child {\r\n  padding-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudC9ob21lLW5hdmlnYXRpb24vaG9tZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSxrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudC9ob21lLW5hdmlnYXRpb24vaG9tZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDBkMGQwO1xyXG59XHJcbi5uYXZpZ2F0aW9uX19saW5rcyB7XHJcbiAgZmxleC1iYXNpczogNDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5uYXZpZ2F0aW9uX19saW5rIHtcclxuICBtYXJnaW4tbGVmdDogLTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIHBhZGRpbmc6IDE4cHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LWZhbWlseTogJ1NGVUlUZXh0LUxpZ2h0JztcclxufVxyXG4ubmF2aWdhdGlvbl9fbGlua19hY3RpdmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnU0ZVSURpc3BsYXktTWVkaXVtJztcclxufVxyXG4ubmF2aWdhdGlvbl9fbGluazpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuLm5hdmlnYXRpb25fX2xpbms6bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/component/home-navigation/home-navigation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/home/component/home-navigation/home-navigation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n  <div class=\"navigation__links\">\r\n    <div class=\"navigation__link\" routerLink=\"/home/main\" routerLinkActive=\"navigation__link_active\">1</div>\r\n    <div class=\"navigation__link\" routerLink=\"/home/about\" routerLinkActive=\"navigation__link_active\">2</div>\r\n    <div class=\"navigation__link\" routerLink=\"/home/feedback\" routerLinkActive=\"navigation__link_active\">3</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/component/home-navigation/home-navigation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/home/component/home-navigation/home-navigation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: HomeNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNavigationComponent", function() { return HomeNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeNavigationComponent = /** @class */ (function () {
    function HomeNavigationComponent() {
    }
    HomeNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-navigation',
            template: __webpack_require__(/*! ./home-navigation.component.html */ "./src/app/modules/home/component/home-navigation/home-navigation.component.html"),
            styles: [__webpack_require__(/*! ./home-navigation.component.css */ "./src/app/modules/home/component/home-navigation/home-navigation.component.css")]
        })
    ], HomeNavigationComponent);
    return HomeNavigationComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/component/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/component/home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app__wrapper {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.app__home-navigation {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 68px;\r\n  height: 100%;\r\n  z-index: 2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudC9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnQvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9fd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYXBwX19ob21lLW5hdmlnYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDY4cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/component/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/home/component/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"app__wrapper\" [@routeAnimations]=\"prepareRoute(outlet)\"> -->\r\n<div class=\"app__wrapper\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n  <div class=\"app__home-navigation\">\r\n    <app-home-navigation></app-home-navigation>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/component/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/home/component/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations */ "./src/app/shared/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home/component/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/modules/home/component/home.component.css")],
            animations: [
                src_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["routerAnimations"]
            ]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/component/main/main.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/component/main/main.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  background-image: url('main-back.jpg');\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  position: relative;\r\n  font-size: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.main__plate {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 10;\r\n  width: 30%;\r\n}\r\n.main__plate img {\r\n  width: 100%;\r\n}\r\n.main__navigation {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  background-image: url('main-decor.png');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  background-size: 71%;\r\n}\r\n.main__navigation-items {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  font-family: 'SFUIDisplay-Medium';\r\n}\r\n.main__navigation-item {\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n.main__navigation-item {\r\n  margin-left: 70px;\r\n}\r\n.main__navigation-item:first-child {\r\n  margin-left: 170px;\r\n}\r\n.main__navigation-items-wrapper {\r\n  width: 100%;\r\n  margin-top: 90px;\r\n}\r\n.main__content {\r\n  text-align: center;\r\n  z-index: 2;\r\n}\r\n.main__title {\r\n  width: 850px;\r\n  font-size: 52px;\r\n  line-height: 60px;\r\n  font-family: 'SFUIDisplay-Medium';\r\n}\r\n.main__description {\r\n  font-family: 'SFUIDisplay-Light';\r\n  font-size: 23px;\r\n  line-height: 26px;\r\n  color: #9198ab;\r\n  margin-top: 25px;\r\n  margin-bottom: 70px;\r\n}\r\n.main__action button {\r\n  border: none;\r\n  background-image: url('button.png');\r\n  background-repeat: no-repeat;\r\n  background-color: transparent;\r\n  background-size: 100% 100%;\r\n  background-position: center center;\r\n  font-family: 'SFUIDisplay-Semibold';\r\n  text-transform: uppercase;\r\n  color: white;\r\n  width: 230px;\r\n  height: 70px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, .3);\r\n}\r\n.main__action button:hover {\r\n  box-shadow: 0 0 10px gray;\r\n}\r\n.main__action button:active {\r\n  box-shadow: inset 0 0 5px white;\r\n}\r\n.main__footer {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 18.5%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n.main__footer-description {\r\n  font-family: 'SFUIDisplay-Light';\r\n  font-style: 18px;\r\n  line-height: 26px;\r\n  color: #8791ab;\r\n}\r\n.main__more {\r\n  height: 83px;\r\n  width: 83px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n  border: none;\r\n  box-shadow: 0 0 20px rgba(128, 128, 128, 0.36);\r\n  background-image: url('more.png');\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n.main__more:hover {\r\n  box-shadow: 0 0 20px rgb(128, 128, 128);\r\n}\r\n.main__more:active {\r\n  box-shadow: inset 0 0 25px rgba(128, 128, 128, 0.315);\r\n}\r\n@media screen and (max-width: 1550px) {\r\n  .main__title {\r\n    font-size: 45px;\r\n  }\r\n  .main__action button {\r\n    width: 190px;\r\n    height: 50px;\r\n  }\r\n  .main__more {\r\n    height: 65px;\r\n    width: 65px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudC9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFzRTtFQUN0RSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLE9BQU87RUFDUCx3Q0FBeUU7RUFDekUsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztDQUNaO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2Isb0NBQThEO0VBQzlELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVDQUF1QztDQUN4QztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxnQ0FBZ0M7Q0FDakM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsV0FBVztDQUNaO0FBQ0Q7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxrQ0FBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjtBQUNEO0VBQ0Usd0NBQXdDO0NBQ3pDO0FBQ0Q7RUFDRSxzREFBc0Q7Q0FDdkQ7QUFFRDtFQUNFO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsWUFBWTtHQUNiO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50L21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lL21haW4tYmFjay5qcGcnKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1haW5fX3BsYXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuLm1haW5fX3BsYXRlIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1haW5fX25hdmlnYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9tYWluLWRlY29yLnBuZyAgJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDcxJTtcclxufVxyXG4ubWFpbl9fbmF2aWdhdGlvbi1pdGVtcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LU1lZGl1bSc7XHJcbn1cclxuLm1haW5fX25hdmlnYXRpb24taXRlbSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1haW5fX25hdmlnYXRpb24taXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbn1cclxuLm1haW5fX25hdmlnYXRpb24taXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3MHB4O1xyXG59XHJcbi5tYWluX19uYXZpZ2F0aW9uLWl0ZW1zLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuLm1haW5fX2NvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5tYWluX190aXRsZSB7XHJcbiAgd2lkdGg6IDg1MHB4O1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LU1lZGl1bSc7XHJcbn1cclxuLm1haW5fX2Rlc2NyaXB0aW9uIHtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LUxpZ2h0JztcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgY29sb3I6ICM5MTk4YWI7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcbi5tYWluX19hY3Rpb24gYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2J1dHRvbi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdTRlVJRGlzcGxheS1TZW1pYm9sZCc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbn1cclxuLm1haW5fX2FjdGlvbiBidXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IGdyYXk7XHJcbn1cclxuLm1haW5fX2FjdGlvbiBidXR0b246YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHdoaXRlO1xyXG59XHJcbi5tYWluX19mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDE4LjUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLm1haW5fX2Zvb3Rlci1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdTRlVJRGlzcGxheS1MaWdodCc7XHJcbiAgZm9udC1zdHlsZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBjb2xvcjogIzg3OTFhYjtcclxufVxyXG4ubWFpbl9fbW9yZSB7XHJcbiAgaGVpZ2h0OiA4M3B4O1xyXG4gIHdpZHRoOiA4M3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjM2KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbW9yZS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubWFpbl9fbW9yZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG59XHJcbi5tYWluX19tb3JlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI1cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMxNSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NTBweCkge1xyXG4gIC5tYWluX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgfVxyXG4gIC5tYWluX19hY3Rpb24gYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLm1haW5fX21vcmUge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/home/component/main/main.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/component/main/main.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" appScrollNext (scrollNextEvent)=\"reactOnScrollNextEvent()\">\r\n  <div class=\"main__navigation\">\r\n    <div class=\"main__navigation-items-wrapper\">\r\n      <div class=\"main__navigation-items\">\r\n        <li class=\"main__navigation-item\" routerLink=\"/home/about\">о сервисе</li>\r\n        <li class=\"main__navigation-item\" routerLink=\"/home/feedback\">задать вопрос</li>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main__content\">\r\n    <div class=\"main__title\">\r\n      Popular belief simply random text\r\n      roots in a piece of classical !\r\n    </div>\r\n    <div class=\"main__description\">\r\n      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\r\n    </div>\r\n    <div class=\"main__action\">\r\n      <button routerLink=\"/profile\">Попробовать</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"main__footer\">\r\n    <button class=\"main__more\" (click)=\"reactOnScrollNextEvent()\"></button>\r\n    <div class=\"main__footer-description\">подробнее</div>\r\n  </div>\r\n  <div class=\"main__plate\">\r\n    <img src=\"assets/img/home/plate.png\" alt=\"\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/component/main/main.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/component/main/main.component.ts ***!
  \***************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_router_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/router.helper */ "./src/app/shared/router.helper.ts");
/* harmony import */ var src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/application-constants */ "./src/app/shared/application-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(routerHelper) {
        this.routerHelper = routerHelper;
    }
    MainComponent.prototype.reactOnScrollNextEvent = function () {
        this.routerHelper.navigateToPage(src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_2__["APP"].pages.about);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/home/component/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/modules/home/component/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_router_helper__WEBPACK_IMPORTED_MODULE_1__["RouterHelper"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/modules/home/component/main/main.component.ts");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/about/about.component */ "./src/app/modules/home/component/about/about.component.ts");
/* harmony import */ var _component_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/feedback/feedback.component */ "./src/app/modules/home/component/feedback/feedback.component.ts");
/* harmony import */ var _component_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/home.component */ "./src/app/modules/home/component/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: 'home',
                        component: _component_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        children: [
                            { path: 'main', component: _component_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], data: { animation: 'Main' } },
                            { path: 'about', component: _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], data: { animation: 'About' } },
                            { path: 'feedback', component: _component_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"], data: { animation: 'Feedback' } }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/home.component */ "./src/app/modules/home/component/home.component.ts");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/modules/home/component/main/main.component.ts");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/about/about.component */ "./src/app/modules/home/component/about/about.component.ts");
/* harmony import */ var _component_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/feedback/feedback.component */ "./src/app/modules/home/component/feedback/feedback.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_home_navigation_home_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/home-navigation/home-navigation.component */ "./src/app/modules/home/component/home-navigation/home-navigation.component.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
                src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"]
            ],
            declarations: [
                _component_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                _component_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
                _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _component_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"],
                _component_home_navigation_home_navigation_component__WEBPACK_IMPORTED_MODULE_7__["HomeNavigationComponent"]
            ],
            exports: [
                _component_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/modules.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/modules.module.ts ***!
  \*******************************************/
/*! exports provided: ModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesModule", function() { return ModulesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/modules/profile/profile.module.ts");
/* harmony import */ var _combinations_combinations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combinations/combinations.module */ "./src/app/modules/combinations/combinations.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_2__["ProfileModule"],
                _combinations_combinations_module__WEBPACK_IMPORTED_MODULE_3__["CombinationsModule"]
            ],
            exports: [
                _home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_2__["ProfileModule"],
                _combinations_combinations_module__WEBPACK_IMPORTED_MODULE_3__["CombinationsModule"]
            ]
        })
    ], ModulesModule);
    return ModulesModule;
}());



/***/ }),

/***/ "./src/app/modules/profile/component/combinations/combination-card/combination-card.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/profile/component/combinations/combination-card/combination-card.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  height: 430px;\r\n  width: 262px;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  transition: .2s;\r\n  border-radius: 17px;\r\n  padding-top: 15px;\r\n}\r\n.profile__goal-card_selected, .profile__goal-card_selected-directive {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  padding: 15px 10px 0 10px;\r\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\r\n  background-size: 100% 100%;\r\n}\r\n.card__title, .card__coefficient {\r\n  font-size: 14px;\r\n  line-height: 22px;\r\n  font-family: 'MuseoSansCyrl-700';\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n.card__description {\r\n  font-size: 11px;\r\n  text-align: center;\r\n  font-family: 'MuseoSansCyrl-100';\r\n  margin-top: 7px;\r\n}\r\n.card__calories {\r\n  padding: 0 25px;\r\n  margin-top: 115px;\r\n}\r\n.card__parameters-title {\r\n  font-family: 'SFUIDisplay-Semibold';\r\n  font-size: 10px;\r\n  color: white;\r\n  background-image: url('callories.png');\r\n  padding: 5px 0 5px 20px;\r\n  background-repeat: no-repeat;\r\n}\r\n.card__parameters-title_proteines {\r\n  background-image: url('proteines.png');\r\n}\r\n.card__parameters-title_fats {\r\n  background-image: url('fats.png');\r\n}\r\n.card__parameters-title_carbohydrates {\r\n  background-image: url('carbohydrates.png');\r\n}\r\n.card__parameters-value {\r\n  font-size: 10px;\r\n  font-family: 'SFUIDisplay-Thin';\r\n  color: white;\r\n}\r\n.card__parameters-progress-bar {\r\n  margin-top: 7px;\r\n  width: 50px;\r\n  height: 3px;\r\n  background-color: #f0f0f0;\r\n}\r\n.card__parameters-progress {\r\n  height: 100%;\r\n  background-color: #f9b90a;\r\n}\r\n.card__additional {\r\n  margin-top: 18px;\r\n  display: flex;\r\n  padding: 0 25px;\r\n  justify-content: space-between;\r\n}\r\n.card__components {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 0 8px 0 7px;\r\n  margin-left: -1px;\r\n  margin-top: 27px;\r\n  transition: .2s;\r\n}\r\n.card__component {\r\n  flex-basis: 33.3%;\r\n  height: 30px;\r\n  border: 1px solid #697178;\r\n  box-sizing: border-box;\r\n  color: #f2f2f2;\r\n  font-size: 10px;\r\n  font-family: 'SFUIDisplay-Light';\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-right: none;\r\n  border-bottom: none;\r\n}\r\n.card__component:nth-child(3n + 1) {\r\n  border-left: none;\r\n}\r\n.card:hover .card__components {\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9jb21iaW5hdGlvbnMvY29tYmluYXRpb24tY2FyZC9jb21iaW5hdGlvbi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4QywyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVDQUEwRTtFQUMxRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSx1Q0FBMEU7Q0FDM0U7QUFDRDtFQUNFLGtDQUFxRTtDQUN0RTtBQUNEO0VBQ0UsMkNBQThFO0NBQy9FO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxXQUFXO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvY29tcG9uZW50L2NvbWJpbmF0aW9ucy9jb21iaW5hdGlvbi1jYXJkL2NvbWJpbmF0aW9uLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIHdpZHRoOiAyNjJweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIHRyYW5zaXRpb246IC4ycztcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5wcm9maWxlX19nb2FsLWNhcmRfc2VsZWN0ZWQsIC5wcm9maWxlX19nb2FsLWNhcmRfc2VsZWN0ZWQtZGlyZWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4IDAgMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuLmNhcmRfX3RpdGxlLCAuY2FyZF9fY29lZmZpY2llbnQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmwtNzAwJztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jYXJkX19kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmwtMTAwJztcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuLmNhcmRfX2NhbG9yaWVzIHtcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTE1cHg7XHJcbn1cclxuLmNhcmRfX3BhcmFtZXRlcnMtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnU0ZVSURpc3BsYXktU2VtaWJvbGQnO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2NhcmRzL2NhbGxvcmllcy5wbmcnKTtcclxuICBwYWRkaW5nOiA1cHggMCA1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5jYXJkX19wYXJhbWV0ZXJzLXRpdGxlX3Byb3RlaW5lcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2NhcmRzL3Byb3RlaW5lcy5wbmcnKTtcclxufVxyXG4uY2FyZF9fcGFyYW1ldGVycy10aXRsZV9mYXRzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvY2FyZHMvZmF0cy5wbmcnKTtcclxufVxyXG4uY2FyZF9fcGFyYW1ldGVycy10aXRsZV9jYXJib2h5ZHJhdGVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvY2FyZHMvY2FyYm9oeWRyYXRlcy5wbmcnKTtcclxufVxyXG4uY2FyZF9fcGFyYW1ldGVycy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU0ZVSURpc3BsYXktVGhpbic7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkX19wYXJhbWV0ZXJzLXByb2dyZXNzLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuLmNhcmRfX3BhcmFtZXRlcnMtcHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliOTBhO1xyXG59XHJcbi5jYXJkX19hZGRpdGlvbmFsIHtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY2FyZF9fY29tcG9uZW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMCA4cHggMCA3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgbWFyZ2luLXRvcDogMjdweDtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuLmNhcmRfX2NvbXBvbmVudCB7XHJcbiAgZmxleC1iYXNpczogMzMuMyU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2OTcxNzg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTRlVJRGlzcGxheS1MaWdodCc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5jYXJkX19jb21wb25lbnQ6bnRoLWNoaWxkKDNuICsgMSkge1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG59XHJcbi5jYXJkOmhvdmVyIC5jYXJkX19jb21wb25lbnRzIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/profile/component/combinations/combination-card/combination-card.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/profile/component/combinations/combination-card/combination-card.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appHoverScale class=\"card\" [ngStyle]=\"{'background-image': getBackground()}\">\r\n  <div class=\"card__title\">{{title}}</div>\r\n  <div class=\"card__description\">Коэфициент полезных веществ:</div>\r\n  <div class=\"card__coefficient\">{{coefficient}}%</div>\r\n  <div class=\"card__calories\">\r\n    <div class=\"card__parameters\">\r\n      <div class=\"card__parameters-title\">Калории</div>\r\n      <div class=\"card__parameters-value\">{{calories}} кКал</div>\r\n      <div class=\"card__parameters-progress-bar\">\r\n        <div class=\"card__parameters-progress\" [ngStyle]=\"{'width': '20%'}\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card__additional\">\r\n    <div class=\"card__parameters\">\r\n      <div class=\"card__parameters-title card__parameters-title_proteines\">Белки</div>\r\n      <div class=\"card__parameters-value\">{{proteins}} г</div>\r\n      <div class=\"card__parameters-progress-bar\">\r\n        <div class=\"card__parameters-progress\" [ngStyle]=\"{'width': '30%'}\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card__parameters\">\r\n      <div class=\"card__parameters-title card__parameters-title_fats\">Жиры</div>\r\n      <div class=\"card__parameters-value\">{{fats}} г</div>\r\n      <div class=\"card__parameters-progress-bar\">\r\n        <div class=\"card__parameters-progress\" [ngStyle]=\"{'width': '10%'}\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card__parameters\">\r\n      <div class=\"card__parameters-title card__parameters-title_carbohydrates\">Углеводы</div>\r\n      <div class=\"card__parameters-value\">{{carbohydrates}} г</div>\r\n      <div class=\"card__parameters-progress-bar\">\r\n        <div class=\"card__parameters-progress\" [ngStyle]=\"{'width': '15%'}\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card__components\">\r\n    <div class=\"card__component\" *ngFor=\"let component of components\">{{component}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/profile/component/combinations/combination-card/combination-card.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/profile/component/combinations/combination-card/combination-card.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CombinationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationCardComponent", function() { return CombinationCardComponent; });
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

var CombinationCardComponent = /** @class */ (function () {
    function CombinationCardComponent() {
    }
    CombinationCardComponent.prototype.getBackground = function () {
        return "url('assets/img/cards/" + this.image + "')";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CombinationCardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CombinationCardComponent.prototype, "coefficient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CombinationCardComponent.prototype, "calories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CombinationCardComponent.prototype, "proteins", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CombinationCardComponent.prototype, "fats", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CombinationCardComponent.prototype, "carbohydrates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CombinationCardComponent.prototype, "components", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CombinationCardComponent.prototype, "image", void 0);
    CombinationCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-combination-card',
            template: __webpack_require__(/*! ./combination-card.component.html */ "./src/app/modules/profile/component/combinations/combination-card/combination-card.component.html"),
            styles: [__webpack_require__(/*! ./combination-card.component.css */ "./src/app/modules/profile/component/combinations/combination-card/combination-card.component.css")]
        })
    ], CombinationCardComponent);
    return CombinationCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/profile/component/combinations/combinations.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/profile/component/combinations/combinations.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".combinations {\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  margin-top: 80px;\r\n  position: relative;\r\n}\r\n.combinations__first {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.combinations__card {\r\n  margin-right: 50px;\r\n  cursor: pointer;\r\n}\r\n.combinations__card:last-child {\r\n  margin-right: 0;\r\n}\r\n.combinations__navigation {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.combinations__navigation-item {\r\n  width: 45px;\r\n  height: 5px;\r\n  border: 1px solid #e0e0e0;\r\n  background-color: #fff;\r\n  margin-right: 15px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n.combinations__navigation-item:last-child {\r\n  margin-right: 0;\r\n}\r\n.combinations__navigation-item_active {\r\n  background-color: #4a545c;\r\n}\r\n.combinations__cards {\r\n  padding: 50px 0;\r\n  overflow: hidden;\r\n}\r\n.combinations__prev {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: -30px;\r\n}\r\n.combinations__next {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: -30px;\r\n}\r\n.combinations__prev button, .combinations__next button {\r\n  height: 45px;\r\n  width: 45px;\r\n}\r\n.combinations__prev .mat-icon, .combinations__next .mat-icon {\r\n  font-size: 30px;\r\n}\r\n.combinations__prev .mat-icon {\r\n  margin-right: -4px;\r\n}\r\n.combinations__next .mat-icon {\r\n  margin-left: -4px;\r\n}\r\n@media screen and (max-width: 1550px) {\r\n  .combinations {\r\n    margin-top: 0px;\r\n  }\r\n  .combinations__navigation {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9jb21iaW5hdGlvbnMvY29tYmluYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7Q0FDZDtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0U7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9jb21iaW5hdGlvbnMvY29tYmluYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tYmluYXRpb25zIHtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb21iaW5hdGlvbnNfX2ZpcnN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb21iaW5hdGlvbnNfX2NhcmQge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbWJpbmF0aW9uc19fY2FyZDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmNvbWJpbmF0aW9uc19fbmF2aWdhdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb21iaW5hdGlvbnNfX25hdmlnYXRpb24taXRlbSB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jb21iaW5hdGlvbnNfX25hdmlnYXRpb24taXRlbTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmNvbWJpbmF0aW9uc19fbmF2aWdhdGlvbi1pdGVtX2FjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNTQ1YztcclxufVxyXG4uY29tYmluYXRpb25zX19jYXJkcyB7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNvbWJpbmF0aW9uc19fcHJldiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IC0zMHB4O1xyXG59XHJcbi5jb21iaW5hdGlvbnNfX25leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogLTMwcHg7XHJcbn1cclxuLmNvbWJpbmF0aW9uc19fcHJldiBidXR0b24sIC5jb21iaW5hdGlvbnNfX25leHQgYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuLmNvbWJpbmF0aW9uc19fcHJldiAubWF0LWljb24sIC5jb21iaW5hdGlvbnNfX25leHQgLm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmNvbWJpbmF0aW9uc19fcHJldiAubWF0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogLTRweDtcclxufVxyXG4uY29tYmluYXRpb25zX19uZXh0IC5tYXQtaWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NTBweCkge1xyXG4gIC5jb21iaW5hdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICAuY29tYmluYXRpb25zX19uYXZpZ2F0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/profile/component/combinations/combinations.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/profile/component/combinations/combinations.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"combinations\">\r\n  <div class=\"combinations__cards\">\r\n    <div @showHide class=\"combinations__first\" *ngIf=\"currentNav === 1\">\r\n      <div app class=\"combinations__card\" *ngFor=\"let card of firstStepCards\">\r\n        <app-combination-card\r\n          [title]=\"card.title\"\r\n          [coefficient]=\"card.coefficient\"\r\n          [calories]=\"card.calories\"\r\n          [proteins]=\"card.proteins\"\r\n          [fats]=\"card.fats\"\r\n          [carbohydrates]=\"card.carbohydrates\"\r\n          [components]=\"card.components\"\r\n          [image]=\"card.image\"\r\n        ></app-combination-card>\r\n      </div>\r\n    </div>\r\n    <div @showHide class=\"combinations__first\" *ngIf=\"currentNav === 2\">\r\n      <div app class=\"combinations__card\" *ngFor=\"let card of secondStepCards\">\r\n        <app-combination-card\r\n          [title]=\"card.title\"\r\n          [coefficient]=\"card.coefficient\"\r\n          [calories]=\"card.calories\"\r\n          [proteins]=\"card.proteins\"\r\n          [fats]=\"card.fats\"\r\n          [carbohydrates]=\"card.carbohydrates\"\r\n          [components]=\"card.components\"\r\n          [image]=\"card.image\"\r\n        ></app-combination-card>\r\n      </div>\r\n    </div>\r\n    <div @showHide class=\"combinations__first\" *ngIf=\"currentNav === 3\">\r\n      <div app class=\"combinations__card\" *ngFor=\"let card of thirdStepCards\">\r\n        <app-combination-card\r\n          [title]=\"card.title\"\r\n          [coefficient]=\"card.coefficient\"\r\n          [calories]=\"card.calories\"\r\n          [proteins]=\"card.proteins\"\r\n          [fats]=\"card.fats\"\r\n          [carbohydrates]=\"card.carbohydrates\"\r\n          [components]=\"card.components\"\r\n          [image]=\"card.image\"\r\n        ></app-combination-card>\r\n      </div>\r\n    </div>\r\n    <div @showHide class=\"combinations__first\" *ngIf=\"currentNav === 4\">\r\n      <div app class=\"combinations__card\" *ngFor=\"let card of fourthStepCards\">\r\n        <app-combination-card\r\n          [title]=\"card.title\"\r\n          [coefficient]=\"card.coefficient\"\r\n          [calories]=\"card.calories\"\r\n          [proteins]=\"card.proteins\"\r\n          [fats]=\"card.fats\"\r\n          [carbohydrates]=\"card.carbohydrates\"\r\n          [components]=\"card.components\"\r\n          [image]=\"card.image\"\r\n        ></app-combination-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"combinations__prev\">\r\n    <button [disabled]=\"goPrevDisabled()\" (click)=\"decNav()\" mat-icon-button>\r\n      <mat-icon>arrow_back_ios</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"combinations__next\">\r\n    <button [disabled]=\"goNextDisabled()\" (click)=\"incNav()\" mat-icon-button>\r\n      <mat-icon>arrow_forward_ios</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"combinations__navigation\">\r\n    <div class=\"combinations__navigation-item\" (click)=\"changeCurrentNav(1)\" [class.combinations__navigation-item_active]=\"currentNav === 1\"></div>\r\n    <div class=\"combinations__navigation-item\" (click)=\"changeCurrentNav(2)\" [class.combinations__navigation-item_active]=\"currentNav === 2\"></div>\r\n    <div class=\"combinations__navigation-item\" (click)=\"changeCurrentNav(3)\" [class.combinations__navigation-item_active]=\"currentNav === 3\"></div>\r\n    <div class=\"combinations__navigation-item\" (click)=\"changeCurrentNav(4)\" [class.combinations__navigation-item_active]=\"currentNav === 4\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/profile/component/combinations/combinations.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/profile/component/combinations/combinations.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileCombinationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCombinationsComponent", function() { return ProfileCombinationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/application-constants */ "./src/app/shared/application-constants.ts");
/* harmony import */ var src_app_shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/animations */ "./src/app/shared/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileCombinationsComponent = /** @class */ (function () {
    function ProfileCombinationsComponent() {
        this.currentNav = 1;
        this.firstStepCards = src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__["APP"].firstStepCards;
        this.secondStepCards = src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__["APP"].secondStepCards;
        this.thirdStepCards = src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__["APP"].thirdStepCards;
        this.fourthStepCards = src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__["APP"].fourthStepCards;
        this.animationState = '1';
    }
    ProfileCombinationsComponent.prototype.changeCurrentNav = function (newNav) {
        this.currentNav = newNav;
    };
    ProfileCombinationsComponent.prototype.decNav = function () {
        this.currentNav--;
    };
    ProfileCombinationsComponent.prototype.incNav = function () {
        this.currentNav++;
    };
    ProfileCombinationsComponent.prototype.goPrevDisabled = function () {
        return this.currentNav === 1;
    };
    ProfileCombinationsComponent.prototype.goNextDisabled = function () {
        return this.currentNav === 4;
    };
    ProfileCombinationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-combinations',
            template: __webpack_require__(/*! ./combinations.component.html */ "./src/app/modules/profile/component/combinations/combinations.component.html"),
            styles: [__webpack_require__(/*! ./combinations.component.css */ "./src/app/modules/profile/component/combinations/combinations.component.css")],
            animations: [
                src_app_shared_animations__WEBPACK_IMPORTED_MODULE_2__["showHide"]
            ]
        })
    ], ProfileCombinationsComponent);
    return ProfileCombinationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/profile/component/goal-card/goal-card.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/profile/component/goal-card/goal-card.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".goal-card {\r\n  width: 260px;\r\n  height: 430px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 30px;\r\n  box-sizing: border-box;\r\n  border-radius: 17px;\r\n}\r\n.goal-card__image {\r\n  margin-top: 40px;\r\n}\r\n.goal-card__title {\r\n  margin-top: 25px;\r\n  font-family: 'SFUIDisplay-Medium';\r\n  text-transform: uppercase;\r\n  font-size: 15;\r\n  line-height: 12px;\r\n}\r\n.goal-card__description {\r\n  margin-top: 15px;\r\n  font-family: 'SFUIDisplay-Thin';\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  text-align: center;\r\n  padding: 0 15px;\r\n}\r\n@media screen and (max-width: 1550px) {\r\n  .goal-card {\r\n    height: 415px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9nb2FsLWNhcmQvZ29hbC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9nb2FsLWNhcmQvZ29hbC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29hbC1jYXJkIHtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxufVxyXG4uZ29hbC1jYXJkX19pbWFnZSB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uZ29hbC1jYXJkX190aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LU1lZGl1bSc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE1O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG59XHJcbi5nb2FsLWNhcmRfX2Rlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU0ZVSURpc3BsYXktVGhpbic7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NTBweCkge1xyXG4gIC5nb2FsLWNhcmQge1xyXG4gICAgaGVpZ2h0OiA0MTVweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/profile/component/goal-card/goal-card.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/profile/component/goal-card/goal-card.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"goal-card\">\r\n  <div class=\"goal-card__image\">\r\n    <img [src]=\"'assets/img/profile/' + image\" alt=\"\">\r\n  </div>\r\n  <div class=\"goal-card__title\">{{title}}</div>\r\n  <div class=\"goal-card__description\">{{description}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/profile/component/goal-card/goal-card.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/profile/component/goal-card/goal-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: GoalCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalCardComponent", function() { return GoalCardComponent; });
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

var GoalCardComponent = /** @class */ (function () {
    function GoalCardComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GoalCardComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GoalCardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GoalCardComponent.prototype, "description", void 0);
    GoalCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goal-card',
            template: __webpack_require__(/*! ./goal-card.component.html */ "./src/app/modules/profile/component/goal-card/goal-card.component.html"),
            styles: [__webpack_require__(/*! ./goal-card.component.css */ "./src/app/modules/profile/component/goal-card/goal-card.component.css")]
        })
    ], GoalCardComponent);
    return GoalCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/profile/component/profile-navigation/profile-navigation.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/profile/component/profile-navigation/profile-navigation.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  height: 55px;\r\n  border: 3px solid white;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n}\r\n.navigation__wrapper {\r\n  height: 100%;\r\n}\r\n.navigation__items {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n.navigation__item {\r\n  flex-basis: 33.3%;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: 'SFUIDisplay-Light';\r\n  font-size: 18px;\r\n  line-height: 14px;\r\n  align-items: center;\r\n  height: 100%;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.navigation__item img {\r\n  margin-right: 20px;\r\n}\r\n.navigation__item_active {\r\n  background-color: #f0f0f0;\r\n}\r\n.navigation__item-arrow {\r\n  height: 70px;\r\n  width: 70px;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  border-radius: 3px;\r\n  background-color: #f0f0f0;\r\n  position: absolute;\r\n  right: -13px;\r\n  top: -7px;\r\n  z-index: 2;\r\n}\r\n.navigation__separator {\r\n  height: 70px;\r\n  width: 70px;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  border-radius: 3px;\r\n  background-color: white;\r\n  position: absolute;\r\n  right: -16px;\r\n  top: -7px;\r\n  z-index: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9wcm9maWxlLW5hdmlnYXRpb24vcHJvZmlsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9wcm9maWxlLW5hdmlnYXRpb24vcHJvZmlsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdmlnYXRpb25fX3dyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubmF2aWdhdGlvbl9faXRlbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubmF2aWdhdGlvbl9faXRlbSB7XHJcbiAgZmxleC1iYXNpczogMzMuMyU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LUxpZ2h0JztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2aWdhdGlvbl9faXRlbSBpbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubmF2aWdhdGlvbl9faXRlbV9hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuLm5hdmlnYXRpb25fX2l0ZW0tYXJyb3cge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTNweDtcclxuICB0b3A6IC03cHg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ubmF2aWdhdGlvbl9fc2VwYXJhdG9yIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0xNnB4O1xyXG4gIHRvcDogLTdweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/profile/component/profile-navigation/profile-navigation.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/profile/component/profile-navigation/profile-navigation.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n  <div class=\"navigation__wrapper\">\r\n    <div class=\"navigation__items\">\r\n      <div \r\n        class=\"navigation__item\"\r\n        [class.navigation__item_active]=\"fillGoals()\"\r\n        (click)=\"changeCurrentStep(1)\"\r\n      >\r\n        <img src=\"assets/img/profile/goal.png\">\r\n        Ваша цель\r\n        <div class=\"navigation__item-arrow\"></div>\r\n        <div class=\"navigation__separator\"></div>\r\n      </div>\r\n      <div\r\n        class=\"navigation__item\"\r\n        [class.navigation__item_active]=\"fillParameters()\"\r\n        (click)=\"changeCurrentStep(2)\"\r\n      >\r\n        <img src=\"assets/img/profile/parameters.png\">\r\n        Параметры\r\n        <div class=\"navigation__item-arrow\" [ngStyle]=\"{'background-color': fillParameters() ? '#f0f0f0' : 'white'}\"></div>\r\n        <div class=\"navigation__separator\" [ngStyle]=\"{'background-color': fillParameters() ? 'white' : '#f0f0f0'}\"></div>\r\n      </div>\r\n      <div \r\n        class=\"navigation__item\"\r\n        [class.navigation__item_active]=\"fillCombinations()\"\r\n        (click)=\"changeCurrentStep(3)\"\r\n      ><img src=\"assets/img/profile/combinations.png\">Комбинации</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/profile/component/profile-navigation/profile-navigation.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/profile/component/profile-navigation/profile-navigation.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProfileNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNavigationComponent", function() { return ProfileNavigationComponent; });
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

var ProfileNavigationComponent = /** @class */ (function () {
    function ProfileNavigationComponent() {
        this.changeCurrentStepEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProfileNavigationComponent.prototype.changeCurrentStep = function (newStep) {
        this.changeCurrentStepEvent.emit(newStep);
    };
    ProfileNavigationComponent.prototype.fillGoals = function () {
        return this.currentStep >= 1;
    };
    ProfileNavigationComponent.prototype.fillParameters = function () {
        return this.currentStep >= 2;
    };
    ProfileNavigationComponent.prototype.fillCombinations = function () {
        return this.currentStep >= 3;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProfileNavigationComponent.prototype, "changeCurrentStepEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProfileNavigationComponent.prototype, "currentStep", void 0);
    ProfileNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-navigation',
            template: __webpack_require__(/*! ./profile-navigation.component.html */ "./src/app/modules/profile/component/profile-navigation/profile-navigation.component.html"),
            styles: [__webpack_require__(/*! ./profile-navigation.component.css */ "./src/app/modules/profile/component/profile-navigation/profile-navigation.component.css")]
        })
    ], ProfileNavigationComponent);
    return ProfileNavigationComponent;
}());



/***/ }),

/***/ "./src/app/modules/profile/component/profile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/profile/component/profile.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\r\n  background-image: url('profile-back.jpg');\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.profile__wrapper {\r\n  height: 100%;\r\n  padding-top: 120px;\r\n}\r\n.profile__goal-cards {\r\n  display: flex;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  margin-top: 130px;\r\n}\r\n.profile__goal-card {\r\n  margin-right: 50px;\r\n  transition: .2s;\r\n  cursor: pointer;\r\n  border-radius: 17px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-image: url('goal-back.png');\r\n  background-color: #fff;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n.profile__goal-card:last-child {\r\n  margin-right: 0;\r\n}\r\n.profile__goal-card_selected, .profile__goal-card_selected-directive {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  padding: 0 10px;\r\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\r\n}\r\n.profile__goal-card_selected .profile__goal-card_line {\r\n  height: 3px;\r\n  width: 75px;\r\n  background-color: #61be64;\r\n  margin-top: -3px;\r\n}\r\n.profile__goal-action {\r\n  margin-top: 85px;\r\n  text-align: center;\r\n}\r\n.profile__goal-button {\r\n  border: none;\r\n  background-image: url('button.png');\r\n  background-repeat: no-repeat;\r\n  background-color: transparent;\r\n  background-size: 100% 100%;\r\n  background-position: center center;\r\n  font-family: 'SFUIDisplay-Medium';\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  width: 170px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, .3);\r\n}\r\n.profile__goal-button:hover, .profile__parameters-next-button:hover, .profile__parameters-prev-button:hover, .profile__preferences-add:hover {\r\n  box-shadow: 0 0 10px gray;\r\n}\r\n.profile__goal-button:active, .profile__parameters-next-button:active, .profile__parameters-prev-button:active, .profile__preferences-add:active {\r\n  box-shadow: inset 0 0 5px white;\r\n}\r\n.profile__parameters-prev-button {\r\n  border: none;\r\n  background-color: white;\r\n  font-family: 'SFUIDisplay-Regular';\r\n  font-size: 15x;\r\n  width: 130px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, .3);\r\n}\r\n.profile__parameters-next-button {\r\n  border: none;\r\n  background-image: url('button.png');\r\n  background-repeat: no-repeat;\r\n  background-color: transparent;\r\n  background-size: 100% 100%;\r\n  background-position: center center;\r\n  font-family: 'SFUIDisplay-Regular';\r\n  font-size: 15x;\r\n  color: white;\r\n  width: 130px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, .3);\r\n}\r\n.profile__parameters {\r\n  color: #212121;\r\n  width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n.profile__parameters-actions {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 30px;\r\n}\r\n.profile__parameters-content {\r\n  background-color: #fff;\r\n  margin-top: 40px;\r\n  border-radius: 4px;\r\n}\r\n.profile__personal-data {\r\n  padding: 40px 80px;\r\n}\r\n.profile__personal-data-value {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-top: 1px solid #d8d8d8;\r\n  margin-top: 20px;\r\n  padding-top: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n.profile__personal-data-title {\r\n  font-size: 19px;\r\n  color: #5abd66;\r\n  font-family: 'SFUIDisplay-Medium';\r\n  border-left: 2px solid #5abd66;\r\n  padding: 4px 0;\r\n  margin-left: -80px;\r\n  padding-left: 77px;\r\n}\r\n.profile__personal-data__group {\r\n  flex-basis: 46.3%;\r\n}\r\n.profile__personal-data__group .mat-form-field {\r\n  width: 100%;\r\n}\r\n.profile__personal-data-value2 {\r\n  display: flex;\r\n  margin-bottom: 30px;\r\n}\r\n.profile__personal-data__pregnancy {\r\n  margin-left: 66px;\r\n}\r\n.profile__preferences {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  border-top: 1px solid #d8d8d8;\r\n  margin-top: 20px;\r\n  padding-top: 40px;\r\n}\r\n.profile__preferences-item {\r\n  flex-basis: 16.6%;\r\n  margin-top: 35px;\r\n}\r\n.profile__preferences-item .mat-checkbox {\r\n  font-size: 15px;\r\n  font-family: 'SFUIDisplay-Light';\r\n}\r\n.profile__preferences-add {\r\n  margin-top: 30px;\r\n  flex-basis: 33.3%;\r\n  overflow: hidden;\r\n  box-shadow: 0 0 30px rgba(78, 78, 78, 0.3);\r\n  border-radius: 4px;\r\n}\r\n.profile__preferences-add button {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 15px 0 30px;\r\n  font-size: 15px;\r\n  font-family: 'SFUIDisplay-Regular';\r\n  border: none;\r\n  background-color: transparent;\r\n  background-image: url('button.png');\r\n  color: white;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  position: relative;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\nbutton .mat-icon {\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n.profile__preferences-rect {\r\n  position: absolute;\r\n  right: -14px;\r\n  top: -9px;\r\n  height: 75px;\r\n  width: 75px;\r\n  background-color: #fff;\r\n  z-index: 2;\r\n  -webkit-transform: rotate(30deg);\r\n          transform: rotate(30deg);\r\n}\r\n.profile__parameters-next-button_ok {\r\n  width: 95px;\r\n}\r\n.profile__additional-preferences-wrapper {\r\n  padding: 50px 0;\r\n  position: relative;\r\n}\r\n.profile__additional-preferences {\r\n  padding: 0 50px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.preference__group {\r\n  flex-basis: 50%;\r\n  padding-right: 60px;\r\n  box-sizing: border-box;\r\n}\r\n.preference__group-title {\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  font-family: 'SFUIDisplay-Semibold';\r\n  color: #42b86c;\r\n  border-bottom: 1px solid #d8d8d8;\r\n  padding-bottom: 20px;\r\n  margin-bottom: 25px;\r\n}\r\n.preference__group-items {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 25px;\r\n}\r\n.preference__group-item {\r\n  flex-basis: 33.3%;\r\n  margin-bottom: 25px;\r\n}\r\n.profile__additional-preferences-close {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n  cursor: pointer;\r\n}\r\n.profile__additional-preferences-close .mat-icon:hover {\r\n  text-shadow: 0 0 1px black;\r\n}\r\n@media screen and (max-width: 1550px) {\r\n  .profile__wrapper {\r\n    padding-top: 20px;\r\n  }\r\n  .profile__goal-cards {\r\n    margin-top: 35px;\r\n  }\r\n  .profile__goal-action {\r\n    margin-top: 50px;\r\n  }\r\n  .profile__personal-data {\r\n    padding: 20px 80px;\r\n  }\r\n  .profile__personal-data-value2 {\r\n    margin-bottom: 10px;\r\n  }\r\n  .profile__preferences {\r\n    padding-top: 0;\r\n  }\r\n  .profile__preferences-item {\r\n    margin-top: 20px;\r\n  }\r\n  .combinations {\r\n    margin-top: 0px !important;\r\n  }\r\n  .profile__parameters-content {\r\n    margin-top: 20px;\r\n  }\r\n  .profile__parameters-actions {\r\n    margin-top: 15px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBeUU7RUFDekUsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix1Q0FBc0U7RUFDdEUsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QiwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsd0NBQXdDO0NBQ3pDO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGFBQWE7RUFDYixvQ0FBMkQ7RUFDM0QsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVDQUF1QztDQUN4QztBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxnQ0FBZ0M7Q0FDakM7QUFDRDtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVDQUF1QztDQUN4QztBQUNEO0VBQ0UsYUFBYTtFQUNiLG9DQUEyRDtFQUMzRCw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1Q0FBdUM7Q0FDeEM7QUFDRDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7Q0FDbEM7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJDQUEyQztFQUMzQyxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQ0FBMkQ7RUFDM0QsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQ0FBeUI7VUFBekIseUJBQXlCO0NBQzFCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDckIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFFRDtFQUNFO0lBQ0Usa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxvQkFBb0I7R0FDckI7RUFDRDtJQUNFLGVBQWU7R0FDaEI7RUFDRDtJQUNFLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsMkJBQTJCO0dBQzVCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGlCQUFpQjtHQUNsQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2NvbXBvbmVudC9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Byb2ZpbGUvcHJvZmlsZS1iYWNrLmpwZycpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnByb2ZpbGVfX3dyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbn1cclxuLnByb2ZpbGVfX2dvYWwtY2FyZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMzBweDtcclxufVxyXG4ucHJvZmlsZV9fZ29hbC1jYXJkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgdHJhbnNpdGlvbjogLjJzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wcm9maWxlL2dvYWwtYmFjay5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuLnByb2ZpbGVfX2dvYWwtY2FyZDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLnByb2ZpbGVfX2dvYWwtY2FyZF9zZWxlY3RlZCwgLnByb2ZpbGVfX2dvYWwtY2FyZF9zZWxlY3RlZC1kaXJlY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5wcm9maWxlX19nb2FsLWNhcmRfc2VsZWN0ZWQgLnByb2ZpbGVfX2dvYWwtY2FyZF9saW5lIHtcclxuICBoZWlnaHQ6IDNweDtcclxuICB3aWR0aDogNzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFiZTY0O1xyXG4gIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuLnByb2ZpbGVfX2dvYWwtYWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZmlsZV9fZ29hbC1idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9uLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LU1lZGl1bSc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG59XHJcbi5wcm9maWxlX19nb2FsLWJ1dHRvbjpob3ZlciwgLnByb2ZpbGVfX3BhcmFtZXRlcnMtbmV4dC1idXR0b246aG92ZXIsIC5wcm9maWxlX19wYXJhbWV0ZXJzLXByZXYtYnV0dG9uOmhvdmVyLCAucHJvZmlsZV9fcHJlZmVyZW5jZXMtYWRkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCBncmF5O1xyXG59XHJcbi5wcm9maWxlX19nb2FsLWJ1dHRvbjphY3RpdmUsIC5wcm9maWxlX19wYXJhbWV0ZXJzLW5leHQtYnV0dG9uOmFjdGl2ZSwgLnByb2ZpbGVfX3BhcmFtZXRlcnMtcHJldi1idXR0b246YWN0aXZlLCAucHJvZmlsZV9fcHJlZmVyZW5jZXMtYWRkOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCB3aGl0ZTtcclxufVxyXG4ucHJvZmlsZV9fcGFyYW1ldGVycy1wcmV2LWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU0ZVSURpc3BsYXktUmVndWxhcic7XHJcbiAgZm9udC1zaXplOiAxNXg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbn1cclxuLnByb2ZpbGVfX3BhcmFtZXRlcnMtbmV4dC1idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9uLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LVJlZ3VsYXInO1xyXG4gIGZvbnQtc2l6ZTogMTV4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxufVxyXG4ucHJvZmlsZV9fcGFyYW1ldGVycyB7XHJcbiAgY29sb3I6ICMyMTIxMjE7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ucHJvZmlsZV9fcGFyYW1ldGVycy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5wcm9maWxlX19wYXJhbWV0ZXJzLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnByb2ZpbGVfX3BlcnNvbmFsLWRhdGEge1xyXG4gIHBhZGRpbmc6IDQwcHggODBweDtcclxufVxyXG4ucHJvZmlsZV9fcGVyc29uYWwtZGF0YS12YWx1ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnByb2ZpbGVfX3BlcnNvbmFsLWRhdGEtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogIzVhYmQ2NjtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LU1lZGl1bSc7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNWFiZDY2O1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDc3cHg7XHJcbn1cclxuLnByb2ZpbGVfX3BlcnNvbmFsLWRhdGFfX2dyb3VwIHtcclxuICBmbGV4LWJhc2lzOiA0Ni4zJTtcclxufVxyXG4ucHJvZmlsZV9fcGVyc29uYWwtZGF0YV9fZ3JvdXAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucHJvZmlsZV9fcGVyc29uYWwtZGF0YS12YWx1ZTIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ucHJvZmlsZV9fcGVyc29uYWwtZGF0YV9fcHJlZ25hbmN5IHtcclxuICBtYXJnaW4tbGVmdDogNjZweDtcclxufVxyXG4ucHJvZmlsZV9fcHJlZmVyZW5jZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuLnByb2ZpbGVfX3ByZWZlcmVuY2VzLWl0ZW0ge1xyXG4gIGZsZXgtYmFzaXM6IDE2LjYlO1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLnByb2ZpbGVfX3ByZWZlcmVuY2VzLWl0ZW0gLm1hdC1jaGVja2JveCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU0ZVSURpc3BsYXktTGlnaHQnO1xyXG59XHJcbi5wcm9maWxlX19wcmVmZXJlbmNlcy1hZGQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZmxleC1iYXNpczogMzMuMyU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDc4LCA3OCwgNzgsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5wcm9maWxlX19wcmVmZXJlbmNlcy1hZGQgYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDE1cHggMCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LVJlZ3VsYXInO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnV0dG9uLnBuZycpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5idXR0b24gLm1hdC1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4ucHJvZmlsZV9fcHJlZmVyZW5jZXMtcmVjdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTRweDtcclxuICB0b3A6IC05cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgei1pbmRleDogMjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbn1cclxuLnByb2ZpbGVfX3BhcmFtZXRlcnMtbmV4dC1idXR0b25fb2sge1xyXG4gIHdpZHRoOiA5NXB4O1xyXG59XHJcbi5wcm9maWxlX19hZGRpdGlvbmFsLXByZWZlcmVuY2VzLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2ZpbGVfX2FkZGl0aW9uYWwtcHJlZmVyZW5jZXMge1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ucHJlZmVyZW5jZV9fZ3JvdXAge1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnByZWZlcmVuY2VfX2dyb3VwLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ1NGVUlEaXNwbGF5LVNlbWlib2xkJztcclxuICBjb2xvcjogIzQyYjg2YztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5wcmVmZXJlbmNlX19ncm91cC1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4ucHJlZmVyZW5jZV9fZ3JvdXAtaXRlbSB7XHJcbiAgZmxleC1iYXNpczogMzMuMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4ucHJvZmlsZV9fYWRkaXRpb25hbC1wcmVmZXJlbmNlcy1jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByb2ZpbGVfX2FkZGl0aW9uYWwtcHJlZmVyZW5jZXMtY2xvc2UgLm1hdC1pY29uOmhvdmVyIHtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDFweCBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU1MHB4KSB7XHJcbiAgLnByb2ZpbGVfX3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19nb2FsLWNhcmRzIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19nb2FsLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAucHJvZmlsZV9fcGVyc29uYWwtZGF0YSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDgwcHg7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19wZXJzb25hbC1kYXRhLXZhbHVlMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAucHJvZmlsZV9fcHJlZmVyZW5jZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19wcmVmZXJlbmNlcy1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5jb21iaW5hdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19wYXJhbWV0ZXJzLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLnByb2ZpbGVfX3BhcmFtZXRlcnMtYWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/profile/component/profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/profile/component/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\r\n  <div class=\"profile__wrapper\">\r\n    <app-profile-navigation\r\n      [currentStep]=\"currentStep\"\r\n      (changeCurrentStepEvent)=\"reactOnChangeCurrentStepEvent($event)\"\r\n    ></app-profile-navigation>\r\n    <div class=\"profile__steps\">\r\n      <div class=\"profile__goal\" *ngIf=\"currentStep === 1\">\r\n        <div class=\"profile__goal-cards\">\r\n          <div\r\n            appHoverScale\r\n            class=\"profile__goal-card\"\r\n            [class.profile__goal-card_selected]=\"firstGoalSelected()\"\r\n            (click)=\"changeGoal(1)\"\r\n          >\r\n            <app-goal-card\r\n              [image]=\"selectedGoal === 1 ? 'first-card-active.png' : 'first-card.png'\"\r\n              [title]=\"'похудеть'\"\r\n              [description]=\"'Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy.'\"\r\n            ></app-goal-card>\r\n            <div class=\"profile__goal-card_line\"></div>\r\n          </div>\r\n          <div\r\n            appHoverScale\r\n            class=\"profile__goal-card\"\r\n            [class.profile__goal-card_selected]=\"secondGoalSelected()\"\r\n            (click)=\"changeGoal(2)\"\r\n          >\r\n            <app-goal-card\r\n              [image]=\"selectedGoal === 2 ? 'second-card-active.png' : 'second-card.png'\"\r\n              [title]=\"'баланс'\"\r\n              [description]=\"'Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy.'\"\r\n            ></app-goal-card>\r\n            <div class=\"profile__goal-card_line\"></div>\r\n          </div>\r\n          <div\r\n            appHoverScale\r\n            class=\"profile__goal-card\"\r\n            [class.profile__goal-card_selected]=\"thirdGoalSelected()\"\r\n            (click)=\"changeGoal(3)\"\r\n          >\r\n            <app-goal-card\r\n              [image]=\"selectedGoal === 3 ? 'third-card-active.png' : 'third-card.png'\"\r\n              [title]=\"'набрать'\"\r\n              [description]=\"'Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy.'\"\r\n            ></app-goal-card>\r\n            <div class=\"profile__goal-card_line\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"profile__goal-action\">\r\n          <button class=\"profile__goal-button\" (click)=\"reactOnChangeCurrentStepEvent(2)\">Продолжить</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"profile__parameters\" *ngIf=\"currentStep === 2\">\r\n        <div class=\"profile__parameters-content\">\r\n          <div id=\"profile__personal-data\" class=\"profile__personal-data\" *ngIf=\"!addPreferencesVisibility\">\r\n            <div class=\"profile__personal-data-title\">Ваши Данные</div>\r\n            <div class=\"profile__personal-data-value\">\r\n              <div class=\"profile__personal-data__male\">\r\n                  <mat-form-field>\r\n                    <mat-select [(ngModel)]=\"male\" placeholder=\"Пол\">\r\n                      <mat-option [value]=\"'Мужской'\">Мужской</mat-option>\r\n                      <mat-option [value]=\"'Женский'\">Женский</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"profile__personal-data__age\">\r\n                  <mat-form-field>\r\n                    <mat-select [(ngModel)]=\"age\" placeholder=\"Возраст\">\r\n                      <mat-option *ngFor=\"let age of ages\" [value]=\"age\">\r\n                        {{age}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"profile__personal-data__height\">\r\n                  <mat-form-field>\r\n                    <input [(ngModel)]=\"height\" matInput placeholder=\"Рост\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"profile__personal-data__weight\">\r\n                  <mat-form-field>\r\n                    <input [(ngModel)]=\"weight\" matInput placeholder=\"Вес\">\r\n                  </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"profile__personal-data-value2\">\r\n              <div class=\"profile__personal-data__group\">\r\n                  <mat-form-field>\r\n                    <mat-select [(ngModel)]=\"group\" placeholder=\"Группа труда\">\r\n                      <mat-option *ngFor=\"let group of groups\" [value]=\"group\">\r\n                        {{group}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"profile__personal-data__pregnancy\">\r\n                  <mat-form-field>\r\n                    <mat-select [(ngModel)]=\"pregnancy\" placeholder=\"Беременность\">\r\n                      <mat-option [value]=\"'Да'\">Да</mat-option>\r\n                      <mat-option [value]=\"'Нет'\">Нет</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"profile__personal-data-title\">Ваши Предпочтения</div>\r\n            <div class=\"profile__preferences\">\r\n              <div class=\"profile__preferences-item\" *ngFor=\"let preference of preferences\">\r\n                <mat-checkbox [(ngModel)]=\"preference.selected\">{{preference.name}}</mat-checkbox>\r\n              </div>\r\n              <div (click)=\"toggleAddPreferencesVisibility()\" class=\"profile__preferences-add\">\r\n                <button>Добавить продукты <div class=\"profile__preferences-rect\"></div> <mat-icon color=\"accent\">add</mat-icon></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n            <div class=\"profile__additional-preferences-wrapper\" *ngIf=\"addPreferencesVisibility\">\r\n              <div class=\"profile__additional-preferences-close\" (click)=\"closeAdditionalPreferences()\">\r\n                <mat-icon>close</mat-icon>\r\n              </div>\r\n              <perfect-scrollbar [ngStyle]=\"{'max-height': scrollHeight + 'px'}\">\r\n                <div class=\"profile__additional-preferences\">\r\n                  <div class=\"preference__group\" *ngFor=\"let group of additionalGroups\">\r\n                    <div class=\"preference__group-title\">{{group.title}}</div>\r\n                    <div class=\"preference__group-items\">\r\n                      <div class=\"preference__group-item\" *ngFor=\"let item of group.items\">\r\n                        <mat-checkbox [(ngModel)]=\"item.selected\">{{item.name}}</mat-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </perfect-scrollbar>\r\n            </div>\r\n        </div>\r\n        <div class=\"profile__parameters-actions\">\r\n          <button class=\"profile__parameters-prev-button\" (click)=\"reactOnChangeCurrentStepEvent(1)\">Назад</button>\r\n          <button class=\"profile__parameters-next-button_ok profile__parameters-next-button\" *ngIf=\"addPreferencesVisibility\" (click)=\"saveAdditionalPreferences()\">Ок</button>\r\n          <button class=\"profile__parameters-next-button\" (click)=\"reactOnChangeCurrentStepEvent(3)\">Дальше</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"profile__combinations\" *ngIf=\"currentStep === 3\">\r\n        <app-profile-combinations></app-profile-combinations>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/profile/component/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/profile/component/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/application-constants */ "./src/app/shared/application-constants.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.currentStep = 1;
        this.selectedGoal = 2;
        this.ages = src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__["APP"].ages;
        this.groups = src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__["APP"].groups;
        this.preferences = src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__["APP"].preferences;
        this.additionalGroups = src_app_shared_application_constants__WEBPACK_IMPORTED_MODULE_1__["APP"].additionalGroups;
        this.addPreferencesVisibility = false;
    }
    ProfileComponent.prototype.closeAdditionalPreferences = function () {
        this.additionalGroups = this.additionalGroups.map(function (group) {
            group.items.forEach(function (item) { return item.selected = false; });
            return group;
        });
        this.toggleAddPreferencesVisibility();
    };
    ProfileComponent.prototype.saveAdditionalPreferences = function () {
        var _this = this;
        this.additionalGroups.forEach(function (group) {
            group.items.forEach(function (item) {
                if (item.selected) {
                    _this.preferences.push(__assign({}, item));
                }
            });
        });
        this.closeAdditionalPreferences();
    };
    ProfileComponent.prototype.reactOnChangeCurrentStepEvent = function (newStep) {
        this.currentStep = newStep;
    };
    ProfileComponent.prototype.changeGoal = function (newGoal) {
        this.selectedGoal = newGoal;
    };
    ProfileComponent.prototype.firstGoalSelected = function () {
        return this.selectedGoal === 1;
    };
    ProfileComponent.prototype.secondGoalSelected = function () {
        return this.selectedGoal === 2;
    };
    ProfileComponent.prototype.thirdGoalSelected = function () {
        return this.selectedGoal === 3;
    };
    ProfileComponent.prototype.toggleAddPreferencesVisibility = function () {
        var element = document.getElementById('profile__personal-data');
        if (element) {
            this.scrollHeight = element.clientHeight - 100;
        }
        this.addPreferencesVisibility = !this.addPreferencesVisibility;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/modules/profile/component/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/modules/profile/component/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/profile/profile-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/profile/profile-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/profile.component */ "./src/app/modules/profile/component/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'profile', component: _component_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] }
                ])
            ]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/modules/profile/profile-routing.module.ts");
/* harmony import */ var _component_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/profile.component */ "./src/app/modules/profile/component/profile.component.ts");
/* harmony import */ var _component_profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/profile-navigation/profile-navigation.component */ "./src/app/modules/profile/component/profile-navigation/profile-navigation.component.ts");
/* harmony import */ var _component_goal_card_goal_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/goal-card/goal-card.component */ "./src/app/modules/profile/component/goal-card/goal-card.component.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _component_combinations_combinations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/combinations/combinations.component */ "./src/app/modules/profile/component/combinations/combinations.component.ts");
/* harmony import */ var _component_combinations_combination_card_combination_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/combinations/combination-card/combination-card.component */ "./src/app/modules/profile/component/combinations/combination-card/combination-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
                src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"],
                src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarModule"]
            ],
            declarations: [
                _component_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _component_profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_5__["ProfileNavigationComponent"],
                _component_goal_card_goal_card_component__WEBPACK_IMPORTED_MODULE_6__["GoalCardComponent"],
                _component_combinations_combinations_component__WEBPACK_IMPORTED_MODULE_9__["ProfileCombinationsComponent"],
                _component_combinations_combination_card_combination_card_component__WEBPACK_IMPORTED_MODULE_10__["CombinationCardComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            exports: [
                _component_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/*! exports provided: routerAnimations, showHide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerAnimations", function() { return routerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHide", function() { return showHide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Main, Sources => Main, Feedback => Main, Sources => About, Feedback => About, Feedback => Sources', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '0%' }))
            ])
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Main => About, Main => Sources, Main => Feedback, About => Sources, About => Feedback, Sources => Feedback', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '100%',
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ bottom: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ bottom: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ bottom: '0%' }))
            ])
        ]),
    ])
]);
var showHide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showHide', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(-150%)',
            position: 'absolute',
            top: '50px',
            left: '0'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(150%)' }))
    ]),
]);


/***/ }),

/***/ "./src/app/shared/application-constants.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/application-constants.ts ***!
  \*************************************************/
/*! exports provided: APP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP", function() { return APP; });
var APP = {
    pages: {
        main: '/home/main',
        about: '/home/about',
        sources: '/home/sources',
        feedback: '/home/feedback'
    },
    firstStepCards: [
        {
            title: 'комбинация №1',
            coefficient: 48,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: 'yellow-back.png'
        },
        {
            title: 'комбинация №2',
            coefficient: 72,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: 'blue-back.png'
        },
        {
            title: 'комбинация №2',
            coefficient: 25,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: 'red-back.png'
        }
    ],
    secondStepCards: [
        {
            title: 'комбинация №1',
            coefficient: 48,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: '3(1).png'
        },
        {
            title: 'комбинация №2',
            coefficient: 72,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: 'purple-back.png'
        },
        {
            title: 'комбинация №2',
            coefficient: 25,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: 'burgundy-back.png'
        }
    ],
    thirdStepCards: [
        {
            title: 'комбинация №1',
            coefficient: 48,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: '3(1).png'
        },
        {
            title: 'комбинация №2',
            coefficient: 72,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: '3(2).png'
        },
        {
            title: 'комбинация №2',
            coefficient: 25,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: '3(3).png'
        }
    ],
    fourthStepCards: [
        {
            title: 'комбинация №1',
            coefficient: 48,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: '4(1).png'
        },
        {
            title: 'комбинация №2',
            coefficient: 72,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: '4(2).png'
        },
        {
            title: 'комбинация №2',
            coefficient: 25,
            calories: 105,
            proteins: 1.09,
            fats: 0.33,
            carbohydrates: 22.84,
            components: [
                'Форель',
                'Картофель',
                'Укроп',
                'Лосось',
                'Чеснок',
                'Базилик',
                'Сёмга',
                'Помидор',
                'Кинза'
            ],
            image: '4(3).png'
        }
    ],
    ages: [15, 16, 17, 18, 19, 20, 21, 22, 23],
    groups: ['Первая группу', 'Работник тяжелого физического труда', 'Третья группа'],
    preferences: [
        { name: 'Мясо', selected: false },
        { name: 'Рыба', selected: false },
        { name: 'Фрукты', selected: false },
        { name: 'Овощи', selected: false },
        { name: 'Зелень', selected: false },
        { name: 'Молочное', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false },
        { name: 'Группа', selected: false }
    ],
    additionalGroups: [
        {
            title: 'группа 1',
            items: [
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Мазик', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false }
            ]
        },
        {
            title: 'группа 2',
            items: [
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Курица', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false }
            ]
        },
        {
            title: 'группа 3',
            items: [
                { name: 'Продукт', selected: false },
                { name: 'Банан', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false }
            ]
        },
        {
            title: 'группа 4',
            items: [
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false }
            ]
        },
        {
            title: 'группа 5',
            items: [
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false }
            ]
        },
        {
            title: 'группа 6',
            items: [
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false },
                { name: 'Продукт', selected: false }
            ]
        }
    ]
};


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ],
            exports: [
                _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/router.helper.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/router.helper.ts ***!
  \*****************************************/
/*! exports provided: RouterHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterHelper", function() { return RouterHelper; });
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


var RouterHelper = /** @class */ (function () {
    function RouterHelper(router) {
        this.router = router;
    }
    RouterHelper.prototype.navigateToPage = function (url) {
        this.router.navigate([url]);
    };
    RouterHelper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouterHelper);
    return RouterHelper;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\haltura\какое-то спортивное питание\sport\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
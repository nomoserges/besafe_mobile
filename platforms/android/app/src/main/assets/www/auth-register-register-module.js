(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"],{

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/auth/register/register.page.html":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title text-center >\r\n      Get an account\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form  #form=\"ngForm\" (ngSubmit)=\"register(form)\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"6\" size-sm=\"6\" size-xs=\"12\">\r\n          <div padding>\r\n            <!--  Fistname and lastname block  -->\r\n            <ion-row>\r\n              <ion-col align-self-center>\r\n                <ion-col align-self-center size-md=\"6\" size-lg=\"6\" size-sm=\"6\" size-xs=\"12\">\r\n                  <ion-item>\r\n                    <ion-input name=\"u_firstname\" type=\"text\" placeholder=\"Firstname\" ngModel required></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col align-self-center size-md=\"6\" size-lg=\"6\" size-sm=\"6\" size-xs=\"12\">\r\n                  <ion-item>\r\n                    <ion-input name=\"u_lastname\" type=\"text\" placeholder=\"Lastname\" ngModel required></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!--  Pseudo block  -->\r\n            <ion-row>\r\n              <ion-col align-self-center>\r\n                <ion-item>\r\n                  <ion-input name=\"u_pseudo\" type=\"text\" placeholder=\"Email or phone\" ngModel required></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!--  Password block  -->\r\n            <ion-row>\r\n              <ion-col align-self-center size-md=\"6\" size-lg=\"6\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-item>\r\n                  <ion-input name=\"u_password\" type=\"password\" \r\n                  placeholder=\"Password\" ngModel required show-password></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col align-self-center size-md=\"6\" size-lg=\"6\" size-sm=\"6\" size-xs=\"12\">\r\n                <ion-item>\r\n                    <ion-input name=\"u_confirm_password\" type=\"password\" placeholder=\"Confirm\" ngModel required></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <div padding>\r\n            <ion-button type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Register</ion-button>\r\n          </div>\r\n          <div text-center align-self-center padding style='font-size: 80%;'>\r\n            Already have an account ? <a routerLink='/login'>Sign in</a>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/auth/register/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9FOlxcd2FtcDY0XFx3d3dcXGJlc2FmZV9tb2JpbGUvc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, router, storage, toastController) {
        this.authService = authService;
        this.router = router;
        this.storage = storage;
        this.toastController = toastController;
    }
    RegisterPage.prototype.presentToast = function (toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: toastMessage,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        var loginState;
        loginState = this.authService.isLoggedIn();
        loginState.then(function (val) {
            if (val === null || val === undefined) {
            }
            else {
                _this.router.navigateByUrl('home');
            }
        });
    };
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        this.authService.register(form.value).subscribe(function (res) {
            if (res['msgType'] === "error") {
                _this.presentToast(res['msgBody']);
            }
            else {
                _this.storage.set("ACCESS_TOKEN", res['msgData']['access_token']);
                _this.storage.set("EXPIRES_IN", res['msgData']['expires_in']);
                _this.storage.set("userid", res['msgData']['userid']);
                _this.router.navigateByUrl('home');
            }
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-register-register-module.js.map
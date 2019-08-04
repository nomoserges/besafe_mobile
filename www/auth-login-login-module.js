(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.page.html":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" padding>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div text-center style=\"margin-top:auto;\">\r\n            <ion-thumbnail style=\"width:128px;height:128px;margin: auto;display: block;\">\r\n              <img src=\"../../../assets/besafe_logo.png\" size=\"128\" class=\"auth-logo-circle\">\r\n            </ion-thumbnail>\r\n          </div>\r\n          <div padding>\r\n            <ion-item>\r\n              <ion-input name=\"u_pseudo\" type=\"text\" placeholder=\"Email or phone\" ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-input name=\"u_password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div padding>\r\n            <ion-button type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Login</ion-button>\r\n          </div>\r\n          <div text-center align-self-center padding style='font-size: 80%;'>\r\n            Need an account ? <a routerLink='/register'>Register here</a>\r\n          </div>\r\n          <div text-center align-self-center padding style='font-size: 80%;'>\r\n            <a routerLink='/home'>Loss password ?</a>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n\nion-button {\n  --background: #062f77; }\n\na {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9FOlxcd2FtcDY0XFx3d3dcXGJlc2FmZV9tb2JpbGUvc3JjXFxhcHBcXGF1dGhcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLGFBQVEsRUFBQTs7QUFFWjtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MmY3NztcclxufVxyXG5he1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(authService, router, storage, toastController) {
        this.authService = authService;
        this.router = router;
        this.storage = storage;
        this.toastController = toastController;
    }
    LoginPage.prototype.presentToast = function (toastMessage) {
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
    LoginPage.prototype.ngOnInit = function () {
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
    LoginPage.prototype.login = function (form) {
        var _this = this;
        this.authService.login(form.value).subscribe(function (res) {
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module.js.map
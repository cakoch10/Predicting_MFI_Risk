webpackJsonp([0],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    // login() {
    //   this.http
    //     .post("http://localhost:3000/login", {
    //       email: this.email,
    //       password: this.password
    //     })
    LoginPage.prototype.login = function () {
        var _this = this;
        this.http
            .post("https://hide-n-seek-mobile.herokuapp.com/login", {
            email: this.email,
            password: this.password
        })
            .subscribe(function (result) {
            console.log(result);
            var jwtResponse = result.json();
            var token = jwtResponse.token;
            console.log(token);
            localStorage.setItem("TOKEN", token);
            // let t = localStorage.getItem("TOKEN");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.navigateToLanding = function () {
        console.log("Navigating...");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title style="text-align: center; font-size: 100px; font-family: \'Sigmar One\', cursive;">\n            Login\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<head>\n    <link href=\'https://fonts.googleapis.com/css?family=Sigmar+One\' rel=\'stylesheet\' type=\'text/css\'>\n\n    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\n\n    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">\n\n</head>\n\n<ion-content style="background-color: rgb (204, 203, 203);" padding>\n    <p>\n        <img src="../../assets/imgs/banco_solidario.png" class="boxed" style=\'width: 100%; max-width: 600px \' border="0" alt="Null">\n      </p>\n\n    <ion-row style="height:8rem"></ion-row>\n\n    <div style="border: black 2px" class="centerbox colorbox" padding>\n\n        <ion-list class="widthbox">\n\n            <ion-item>\n                <ion-input [(ngModel)]="email" type="text" placeholder="email address"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-input [(ngModel)]="password" type="password" placeholder="Password"></ion-input>\n              </ion-item>\n\n        </ion-list>\n\n        <button ion-button full color="tertiary" (click)="login()" full>Login</button>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.splash = true;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4100);
    };
    HomePage.prototype.navigateToRegistration = function () {
        console.log("Navigating...");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registration_registration__["a" /* RegistrationPage */]);
    };
    HomePage.prototype.navigateToLogin = function () {
        console.log("Navigating...");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/home/home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n    <div class="flb">\n      <div class="Aligner-item Aligner-item--top"></div>\n      <img src="../../assets/imgs/banco_solidario.png">\n      <div class="Aligner-item Aligner-item--bottom"></div>\n    </div>\n  </div>\n\n<head>\n  <link href=\'https://fonts.googleapis.com/css?family=Sigmar+One\' rel=\'stylesheet\' type=\'text/css\'>\n\n  <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\n\n  <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">\n\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n</head>\n\n\n\n<ion-content padding>\n    <ion-row style="height:5rem"></ion-row>\n\n\n  <ion-row style="height:1rem"></ion-row>\n\n  <div class="content">\n    <div class="inner">\n      <p>\n        <img src="../../assets/imgs/banco_solidario.png" class="boxed" style=\'width: 100%; max-width: 700px \' border="0" alt="Null">\n      </p>\n\n      <ion-row style="height:10rem"></ion-row>\n\n    </div>\n  </div>\n\n  <ion-row style="height:5rem"></ion-row>\n\n\n  <div>\n    <button ion-button round outline color="tertiary" (click)="navigateToLogin()">Login</button>\n    <button ion-button round outline color="tertiary" (click)="navigateToRegistration()">Register</button>\n  </div>\n  \n</ion-content>'/*ion-inline-end:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    RegistrationPage.prototype.registration = function () {
        var _this = this;
        this.http.post('https://hide-n-seek-mobile.herokuapp.com/registration', {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            confirmpassword: this.confirmpassword,
            phone: this.phone,
            username: this.username
        }).subscribe(function (result) {
            console.log(result);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    RegistrationPage.prototype.navigateToLogin = function () {
        console.log("Navigating to LoginPage...");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/registration/registration.html"*/'\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content style="background-color: rgb(204, 203, 203);" padding>\n\n    <div class="inner">\n      <p>\n        <img src="../../assets/imgs/banco_solidario.png" class="boxed" style=\'width: 100%; max-width: 600px \' border="0" alt="Null">\n      </p>\n\n    </div>\n    <ion-row style="height: 4rem"></ion-row>\n\n    <div class="centerbox colorbox" padding>\n      <ion-list class="centerbox">\n  \n        <ion-item>\n          <ion-input type="text" [(ngModel)]="firstname" placeholder="First Name">First Name</ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input type="text" [(ngModel)]="lastname" placeholder="Last Name">Last Name</ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="username" placeholder="username">username</ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input type="text"[(ngModel)]="email" placeholder="Email">Email</ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input type="password" [(ngModel)]="password" placeholder="Password">Password</ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input type="password" [(ngModel)]="confirmpassword" placeholder="Confirm Password">Password</ion-input>\n        </ion-item>\n  \n      </ion-list>\n  \n      <button ion-button full round large color="tertiary" (click)="registration()" full>REGISTER!</button>\n  \n    </div>\n  \n  </ion-content>\n  \n  '/*ion-inline-end:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/registration/registration.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object])
    ], RegistrationPage);
    return RegistrationPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/landing/landing.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Survey Page</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea large></ion-textarea>\n    </ion-item>\n  </ion-content>\n  '/*ion-inline-end:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.initTimer();
    };
    TimerComponent.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerComponent.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    TimerComponent.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerComponent.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerComponent.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerComponent.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TimerComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "timeInSeconds", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timer',template:/*ion-inline-start:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/timer/timer.html"*/'\n    <ion-card *ngIf="timer">\n        <ion-item class="no-bottom-border item">\n            <button ion-button *ngIf="timeInSeconds && timeInSeconds > 0" large full clear class="timer-button timer-text">{{timer.displayTime}}</button>\n        </ion-item>\n        <!-- <ion-item class="no-bottom-border" *ngIf="timeInSeconds && timeInSeconds > 0">\n            <button ion-button icon-left clear color="danger" small (click)="initTimer()" item-left *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n                <ion-icon name="refresh"></ion-icon>\n                Reset\n            </button>         \n        </ion-item> -->\n    </ion-card>  \n     \n    <style>\n      .timer-button {\n        font-size: 3rem !important;\n        height: 1em !important;\n      }\n      \n      .no-bottom-border.item .item-inner {\n          border-bottom: none !important;\n      }\n    </style>\n'/*ion-inline-end:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/timer/timer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(507);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_landing_landing__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_maps_maps__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_agm_core__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_timer_timer__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { ComponentsModule } from "../components/components.module";

// import { MapsPage } from "../pages/maps/maps";



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_timer_timer__["a" /* TimerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__node_modules_agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCFs3pRqf9Rqxx7SItWDX9hK_XobVgCLQk',
                    libraries: ['geometry'],
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, { links: [
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], name: "login", segment: "login" },
                        { component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], name: "home", segment: "home" },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_landing_landing__["a" /* LandingPage */], name: "landing", segment: "landing" },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__["a" /* PaymentPage */], name: "payment", segment: "payment" },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_maps_maps__["a" /* MapsPage */], name: "maps", segment: "maps" },
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__["a" /* RegistrationPage */], name: "registration", segment: "registration" }
                    ] })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_timer_timer__["a" /* TimerComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/JonahDeich/Desktop/BankoMobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/JonahDeich/Desktop/BankoMobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { MapPage } from '../map/map';


var PaymentPage = /** @class */ (function () {
    function PaymentPage(cd, navCtrl, navParams, http) {
        this.cd = cd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.cardHandler = this.onChange.bind(this);
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
        this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    PaymentPage.prototype.ngAfterViewInit = function () {
        var style = {
            base: {
                lineHeight: '24px',
                fontFamily: 'monospace',
                fontSmoothing: 'antialiased',
                fontSize: '19px',
                '::placeholder': {
                    color: 'purple'
                }
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
    };
    PaymentPage.prototype.ngOnDestroy = function () {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    };
    PaymentPage.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = null;
        }
        this.cd.detectChanges();
    };
    PaymentPage.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, token, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, stripe.createToken(this.card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        if (error) {
                            console.log('Something is wrong:', error);
                        }
                        else {
                            console.log('Success!', token);
                            this.charge_id = token.id;
                            this.payment();
                            // ...send the token to the your backend to process the charge
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentPage.prototype.payment = function () {
        var _this = this;
        this.http
            .post("http://localhost:3000/payment?jwt=" + localStorage.getItem("TOKEN"), {
            //firstname: this.firstname,
            //lastname: this.lastname,
            amount: this.amount,
            currency: this.currency,
            //date: this.date,
            token: this.charge_id,
        })
            .subscribe(function (result) {
            console.log(result);
            _this.navCtrl.push("MapPage");
        }, function (err) {
            console.log(err);
        });
    };
    PaymentPage.prototype.ionViewLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('cardInfo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PaymentPage.prototype, "cardInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], PaymentPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], PaymentPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], PaymentPage.prototype, "lineCanvas", void 0);
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/payment/payment.html"*/'\n <ion-header>\n\n  <ion-navbar>\n    <ion-title>payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<form #checkout="ngForm" (ngSubmit)="onSubmit(checkout)" class="checkout">\n  <div class="form-row">\n    <label for="card-info">Card Info</label>\n    <div id="card-info" #cardInfo></div>\n\n    <div id="card-errors" role="alert" *ngIf="error">{{ error }}</div>\n  </div>\n  \n  <button type="submit">Submit</button>\n</form>\n \n<ion-content>\n \n    <ion-card>\n      <ion-card-header>\n        Bar Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n \n    <ion-card>\n      <ion-card-header>\n        Doughnut Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n \n    <ion-card>\n      <ion-card-header>\n        Line Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n \n</ion-content>\n\n</ion-content> \n'/*ion-inline-end:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 278,
	"./af.js": 278,
	"./ar": 279,
	"./ar-dz": 280,
	"./ar-dz.js": 280,
	"./ar-kw": 281,
	"./ar-kw.js": 281,
	"./ar-ly": 282,
	"./ar-ly.js": 282,
	"./ar-ma": 283,
	"./ar-ma.js": 283,
	"./ar-sa": 284,
	"./ar-sa.js": 284,
	"./ar-tn": 285,
	"./ar-tn.js": 285,
	"./ar.js": 279,
	"./az": 286,
	"./az.js": 286,
	"./be": 287,
	"./be.js": 287,
	"./bg": 288,
	"./bg.js": 288,
	"./bm": 289,
	"./bm.js": 289,
	"./bn": 290,
	"./bn.js": 290,
	"./bo": 291,
	"./bo.js": 291,
	"./br": 292,
	"./br.js": 292,
	"./bs": 293,
	"./bs.js": 293,
	"./ca": 294,
	"./ca.js": 294,
	"./cs": 295,
	"./cs.js": 295,
	"./cv": 296,
	"./cv.js": 296,
	"./cy": 297,
	"./cy.js": 297,
	"./da": 298,
	"./da.js": 298,
	"./de": 299,
	"./de-at": 300,
	"./de-at.js": 300,
	"./de-ch": 301,
	"./de-ch.js": 301,
	"./de.js": 299,
	"./dv": 302,
	"./dv.js": 302,
	"./el": 303,
	"./el.js": 303,
	"./en-au": 304,
	"./en-au.js": 304,
	"./en-ca": 305,
	"./en-ca.js": 305,
	"./en-gb": 306,
	"./en-gb.js": 306,
	"./en-ie": 307,
	"./en-ie.js": 307,
	"./en-il": 308,
	"./en-il.js": 308,
	"./en-nz": 309,
	"./en-nz.js": 309,
	"./eo": 310,
	"./eo.js": 310,
	"./es": 311,
	"./es-do": 312,
	"./es-do.js": 312,
	"./es-us": 313,
	"./es-us.js": 313,
	"./es.js": 311,
	"./et": 314,
	"./et.js": 314,
	"./eu": 315,
	"./eu.js": 315,
	"./fa": 316,
	"./fa.js": 316,
	"./fi": 317,
	"./fi.js": 317,
	"./fo": 318,
	"./fo.js": 318,
	"./fr": 319,
	"./fr-ca": 320,
	"./fr-ca.js": 320,
	"./fr-ch": 321,
	"./fr-ch.js": 321,
	"./fr.js": 319,
	"./fy": 322,
	"./fy.js": 322,
	"./gd": 323,
	"./gd.js": 323,
	"./gl": 324,
	"./gl.js": 324,
	"./gom-latn": 325,
	"./gom-latn.js": 325,
	"./gu": 326,
	"./gu.js": 326,
	"./he": 327,
	"./he.js": 327,
	"./hi": 328,
	"./hi.js": 328,
	"./hr": 329,
	"./hr.js": 329,
	"./hu": 330,
	"./hu.js": 330,
	"./hy-am": 331,
	"./hy-am.js": 331,
	"./id": 332,
	"./id.js": 332,
	"./is": 333,
	"./is.js": 333,
	"./it": 334,
	"./it.js": 334,
	"./ja": 335,
	"./ja.js": 335,
	"./jv": 336,
	"./jv.js": 336,
	"./ka": 337,
	"./ka.js": 337,
	"./kk": 338,
	"./kk.js": 338,
	"./km": 339,
	"./km.js": 339,
	"./kn": 340,
	"./kn.js": 340,
	"./ko": 341,
	"./ko.js": 341,
	"./ky": 342,
	"./ky.js": 342,
	"./lb": 343,
	"./lb.js": 343,
	"./lo": 344,
	"./lo.js": 344,
	"./lt": 345,
	"./lt.js": 345,
	"./lv": 346,
	"./lv.js": 346,
	"./me": 347,
	"./me.js": 347,
	"./mi": 348,
	"./mi.js": 348,
	"./mk": 349,
	"./mk.js": 349,
	"./ml": 350,
	"./ml.js": 350,
	"./mn": 351,
	"./mn.js": 351,
	"./mr": 352,
	"./mr.js": 352,
	"./ms": 353,
	"./ms-my": 354,
	"./ms-my.js": 354,
	"./ms.js": 353,
	"./mt": 355,
	"./mt.js": 355,
	"./my": 356,
	"./my.js": 356,
	"./nb": 357,
	"./nb.js": 357,
	"./ne": 358,
	"./ne.js": 358,
	"./nl": 359,
	"./nl-be": 360,
	"./nl-be.js": 360,
	"./nl.js": 359,
	"./nn": 361,
	"./nn.js": 361,
	"./pa-in": 362,
	"./pa-in.js": 362,
	"./pl": 363,
	"./pl.js": 363,
	"./pt": 364,
	"./pt-br": 365,
	"./pt-br.js": 365,
	"./pt.js": 364,
	"./ro": 366,
	"./ro.js": 366,
	"./ru": 367,
	"./ru.js": 367,
	"./sd": 368,
	"./sd.js": 368,
	"./se": 369,
	"./se.js": 369,
	"./si": 370,
	"./si.js": 370,
	"./sk": 371,
	"./sk.js": 371,
	"./sl": 372,
	"./sl.js": 372,
	"./sq": 373,
	"./sq.js": 373,
	"./sr": 374,
	"./sr-cyrl": 375,
	"./sr-cyrl.js": 375,
	"./sr.js": 374,
	"./ss": 376,
	"./ss.js": 376,
	"./sv": 377,
	"./sv.js": 377,
	"./sw": 378,
	"./sw.js": 378,
	"./ta": 379,
	"./ta.js": 379,
	"./te": 380,
	"./te.js": 380,
	"./tet": 381,
	"./tet.js": 381,
	"./tg": 382,
	"./tg.js": 382,
	"./th": 383,
	"./th.js": 383,
	"./tl-ph": 384,
	"./tl-ph.js": 384,
	"./tlh": 385,
	"./tlh.js": 385,
	"./tr": 386,
	"./tr.js": 386,
	"./tzl": 387,
	"./tzl.js": 387,
	"./tzm": 388,
	"./tzm-latn": 389,
	"./tzm-latn.js": 389,
	"./tzm.js": 388,
	"./ug-cn": 390,
	"./ug-cn.js": 390,
	"./uk": 391,
	"./uk.js": 391,
	"./ur": 392,
	"./ur.js": 392,
	"./uz": 393,
	"./uz-latn": 394,
	"./uz-latn.js": 394,
	"./uz.js": 393,
	"./vi": 395,
	"./vi.js": 395,
	"./x-pseudo": 396,
	"./x-pseudo.js": 396,
	"./yo": 397,
	"./yo.js": 397,
	"./zh-cn": 398,
	"./zh-cn.js": 398,
	"./zh-hk": 399,
	"./zh-hk.js": 399,
	"./zh-tw": 400,
	"./zh-tw.js": 400
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 580;

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_agm_core__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timer_timer__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapsPage = /** @class */ (function () {
    function MapsPage(loader, alertCtrl) {
        var _this = this;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.splash = true;
        this.userLocation = {
            lat: 0,
            lng: 0
        };
        this.boundaryCenter = { lat: 0, lng: 0 };
        this.center = {
            lat: 6.435838,
            lng: 3.451384,
        };
        // This array of latLngs represents the polygon around our ranch
        this.polygon = [
            { lat: -33.90409, lng: 18.42013 },
            { lat: -33.90417, lng: 18.41928 },
            { lat: -33.90466, lng: 18.41881 },
            { lat: -33.90535, lng: 18.41886 },
            { lat: -33.90577, lng: 18.41953 },
            { lat: -33.90571, lng: 18.42054 },
            { lat: -33.90517, lng: 18.42091 },
            { lat: -33.90451, lng: 18.42083 }
        ];
        this.inside = { lat: -33.90459, lng: 18.41994 };
        this.outside = { lat: -33.90718, lng: 18.41815 };
        console.log('MAPS IS HERE');
        navigator.geolocation.getCurrentPosition(function (position) {
            return _this.userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    }
    MapsPage.prototype.ngOnInit = function () {
        var _this = this;
        // Wait for the google maps script to be loaded before using the "google" keyword
        this.loader.load().then(function () {
            _this.area = new google.maps.Polygon({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                paths: _this.polygon
            });
        });
        // Create a LatLng using the position returned from the pusher event
        var latLng = new google.maps.LatLng(this.inside.lat, this.inside.lng);
        setTimeout(function () {
            if (!google.maps.geometry.poly.containsLocation(latLng, _this.area)) {
                // Show alert if user has left the polygon
                var alert_1 = _this.alertCtrl.create({
                    title: 'Please enter the game boundaries!',
                    subTitle: 'You are out of bounds.',
                    buttons: ['Ok']
                });
                alert_1.present();
                _this.timer.initTimer();
            }
            else {
                _this.timer.startTimer();
            }
        }, 1000);
        // Check if the location is outside the polygon
    };
    MapsPage.prototype.setLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            return _this.boundaryCenter = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__timer_timer__["a" /* TimerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__timer_timer__["a" /* TimerComponent */])
    ], MapsPage.prototype, "timer", void 0);
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'maps-page',template:/*ion-inline-start:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/maps/maps.html"*/'\n<ion-header style="color: blue">\n<!--     \n      <ion-buttons end>\n       <button ion-button (click)="setLocation()"><ion-icon name="add"></ion-icon> Set Boundary</button>\n      </ion-buttons>   -->\n    \n    <timer #timer timeInSeconds="3600"></timer>\n  </ion-header>\n  \n  \n  <ion-content>\n\n    <agm-map [latitude]="outside.lat" [longitude]="outside.lng" [zoom]=\'16\'>\n      <agm-marker [latitude]="inside.lat" [longitude]="inside.lng" [markerDraggable]=\'true\'></agm-marker>\n      <agm-polygon [paths]=\'polygon\'></agm-polygon>\n      <!-- <agm-circle *ngIf="boundaryCenter" [latitude]="boundaryCenter.lat" [longitude]="boundaryCenter.lng" \n      [radius]="5000"\n      [fillColor]="\'red\'">\n  </agm-circle> -->\n    </agm-map>\n\n  \n</ion-content> \n'/*ion-inline-end:"/Users/JonahDeich/Desktop/BankoMobile/src/pages/maps/maps.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ })

},[502]);
//# sourceMappingURL=main.js.map
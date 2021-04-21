function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert/alert.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert/alert.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-circle-fill\" viewBox=\"0 0 16 16\" [ngStyle]=\"getStyle()\">\n    <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/>\n</svg>\n<span class=\"messgae-display\">{{message}}</span>\n<div mat-dialog-actions>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"closeAlert()\">Ok</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/connection-card/connection-card.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/connection-card/connection-card.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsConnectionCardConnectionCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" *ngIf=\"connection\">\n    <div class=\"card-body\">\n            <div>\n                <img [src]=\"getSource()\" alt=\"Profile Pic\">\n            </div>\n            <div class=\"connection-details\">\n                <span class=\"connection-name\" (click)=\"displayPortfolio()\"><h6>{{connection.name}}</h6></span>\n                <span class=\"desc\">{{connection.email}}</span>\n            </div>\n        \n    </div>\n    <div class=\"card-footer btn\"  (click)=\"emitAction()\">\n        <span *ngIf=\"!connection.following\">+ Follow</span>\n        <span *ngIf=\"connection.following\">- Unfollow</span>\n        <span *ngIf=\"processing\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/portfolio-modal/portfolio-modal.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/portfolio-modal/portfolio-modal.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsPortfolioModalPortfolioModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\n<div class=\"row\">\n    <div class=\"col-4 d-flex justify-content-center\" style=\"border-color: 1px solid black;\">\n        <div class=\"profile-pic-section\">\n            <img class=\"profile-pic\" [src]=\"getProfilePictureSrource()\" alt=\"Profile-picture\">\n            <div class=\"connection-section d-flex justify-content-center\" *ngIf=\"!portfolio.isSameUser\">\n                <button class=\"btn btn-primary btn-sm\" *ngIf=\"!portfolio.isFollowing\" (click)=\"follow()\" [disabled]=\"connetionProcessing\">\n                     + Follow \n                     <span *ngIf=\"connetionProcessing\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                </button>\n                <button class=\"btn btn-primary btn-sm\" *ngIf=\"portfolio.isFollowing\" (click)=\"unfollow()\" [disabled]=\"connetionProcessing\"> \n                    - Unfollow \n                    <span *ngIf=\"connetionProcessing\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                </button>\n            </div>\n            <div class=\"interest-section\">\n                <h5>Interests</h5>\n                <hr style=\"margin:0.25rem\">\n                <h6><span class=\"badge badge-pill badge-primary\"\n                    *ngFor=\"let domain of portfolio.domains\">\n                        {{domain.name}}\n                </span></h6>        \n            </div>\n            <div class=\"card\">\n                <div class=\"card-body stat-section\">\n                    <div class=\"stat-row\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-hand-thumbs-up-fill\" viewBox=\"0 0 16 16\">\n                            <path d=\"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z\"/>\n                        </svg>\n                        <span class=\"stat-label\">Likes : </span> \n                        <span class=\"stat-value\">{{portfolio.totalLikes}}</span>\n                    </div>\n                    <hr style=\"margin:0.25rem\">\n\n                    <div class=\"stat-row\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-person-plus-fill\" viewBox=\"0 0 16 16\">\n                            <path d=\"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n                            <path fill-rule=\"evenodd\" d=\"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z\"/>\n                          </svg>\n                        <span class=\"stat-label\">Following : </span> \n                        <span class=\"stat-value\">{{portfolio.totalFollowing}}</span>\n                    </div>\n                    <hr style=\"margin:0.25rem\">\n\n                    <div class=\"stat-row\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-people-fill\" viewBox=\"0 0 16 16\">\n                            <path d=\"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n                            <path fill-rule=\"evenodd\" d=\"M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z\"/>\n                            <path d=\"M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z\"/>\n                          </svg>\n                        <span class=\"stat-label\">Followers : </span> \n                        <span class=\"stat-value\">{{portfolio.totalFollowers}}</span>\n                    </div>\n                    <hr style=\"margin:0.25rem\">\n                </div>\n            </div>\n            \n            \n        </div>\n    </div>\n    <div class=\"col-8\" style=\"border-color: 1px solid black;\">\n        <div class=\"basic-info-section\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"info-row\">\n                        <span class=\"info-label\">Name : </span>\n                        <span class=\"info-value\">{{portfolio.basicDetails.name}}</span>\n                    </div>\n                    <hr style=\"margin:0.25rem\">\n                    <div class=\"info-row\">\n                        <span class=\"info-label\">State : </span>\n                        <span class=\"info-value\">{{portfolio.basicDetails.state}}</span>\n                    </div>\n                    <hr style=\"margin:0.25rem\">\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"info-row\">\n                        <span class=\"info-label\">Email : </span>\n                        <span class=\"info-value\">{{portfolio.basicDetails.email}}</span>\n                    </div>\n                    <hr style=\"margin:0.25rem\">\n                    <div class=\"info-row\">\n                        <span class=\"info-label\">Country : </span>\n                        <span class=\"info-value\">{{portfolio.basicDetails.country}}</span>\n                    </div>\n                    <hr style=\"margin:0.25rem\">\n                </div>\n\n            </div>\n            \n        </div>\n        <div class=\"accomplishments-section\">\n            <h6>Accomplishments</h6>\n            <hr style=\"margin:0.25rem\">\n            <div class=\"card accomplishment-card\" *ngFor=\"let accomplishment of portfolio.basicDetails.accomplishments; let idx = index\">\n                <div class=\"card-body\">\n                    <div class=\"accomplishment-title\">{{accomplishment.title}}</div>\n                    <hr style=\"margin:0.25rem\">\n                    <div class='row'>\n                        <div class=\"col-10 accomplishment-date-section\">{{accomplishment.date | date:'medium'}}</div>\n                    </div>\n                    <div class=\"accomplishment-description\">{{accomplishment.description}}</div>\n                    \n                </div>\n            </div>\n\n        </div>\n        <div class=\"post-showcase-section\">\n            <h6>Posts</h6>\n            <hr style=\"margin:0.25rem\">\n            <div class=\"card post-card\" *ngFor=\"let post of portfolio.posts;let idx=index\">\n                <div class=\"card-body post-card-body\">\n                    <span class=\"post-title\">{{post.title}}</span>\n                    <div style=\"float: right;\"><img class=\"post-profile-pic\"[src]=\"getProfilePicSource(idx)\" alt=\"Profile Picture\"></div>\n                    <hr style=\"margin:0.5rem\">\n                    <div class=\"post-description\">{{post.description}}</div>\n                    <div style=\"float:right\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye-fill\" viewBox=\"0 0 16 16\" (click)=\"viewDetails(idx)\">\n                            <path d=\"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z\"/>\n                            <path d=\"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"/>\n                        </svg>    \n                    </div>\n                </div>\n            </div>\n            \n        </div>\n\n    </div>\n</div>\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/post-card/post-card.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/post-card/post-card.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsPostCardPostCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" *ngIf=\"post\">\n    <div class=\"card-header\">\n        <span class=\"post-title\">{{post.title}}</span>\n        <div style=\"float: right;\">\n            <img class=\"profile-pic\"[src]=\"getProfilePicSource()\" alt=\"Profile Picture\" (click)=\"displayPortfolio()\">\n        </div>\n    </div>\n    <div class=\"card-body\">\n          <img class=\"post-content\" [src]=\"getContentSource()\" *ngIf=\"getContentType() == 'image'\">\n            \n            <video class=\"post-content\" *ngIf=\"getContentType() == 'video'\" controls>\n                <source [src]=\"getContentSource()\">\n            </video>\n\n            <audio class=\"post-content\" *ngIf=\"getContentType() == 'audio'\" controls>\n                <source [src]=\"getContentSource()\">\n            </audio>\n\n        <p class=\"post-description\"> {{post.description}} </p>\n    </div>\n    <div class=\"card-footer\">\n        <span style=\"font-size:small\" (click)=\"increaseLikes()\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-hand-thumbs-up-fill\" viewBox=\"0 0 16 16\" [ngClass]= \"{ userNotLiked : !post.userLike}\">\n                <path d=\"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z\"/>\n            </svg>\n            {{post.likes}}\n        </span>\n        \n        <div style=\"float:right\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye-fill\" viewBox=\"0 0 16 16\" (click)=\"viewDetails()\">\n                <path d=\"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z\"/>\n                <path d=\"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z\"/>\n            </svg>    \n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/post-detail/post-detail.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/post-detail/post-detail.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsPostDetailPostDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-6\">\n        <img class=\"post-content\" [src]=\"getContentSource()\" *ngIf=\"getContentType() == 'image'\">\n            \n        <video class=\"post-content\" *ngIf=\"getContentType() == 'video'\" controls>\n            <source [src]=\"getContentSource()\">\n        </video>\n\n        <audio class=\"post-content\" *ngIf=\"getContentType() == 'audio'\" controls>\n            <source [src]=\"getContentSource()\">\n        </audio>\n        <p class=\"post-description\"> {{post.description}} </p>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"post-header\">\n            <span class=\"post-title\">{{post.title}}</span>\n            <div style=\"float: right;\">\n                <img class=\"profile-pic\"[src]=\"getProfilePicSource()\" alt=\"Profile Picture\" (click)=\"displayPortfolio(post.owner)\">\n            </div>\n        </div>\n        <hr>\n        <div class=\"post-stat\">\n            <span style=\"font-size:small\" (click)=\"increaseLikes()\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-hand-thumbs-up-fill\" viewBox=\"0 0 16 16\" [ngClass]= \"{ userNotLiked : !post.userLike}\">\n                    <path d=\"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z\"/>\n                </svg>\n                {{post.likes}}\n            </span>\n        </div>\n        <div class=\"post-comment\">\n            <div class=\"comment-section\" *ngFor=\"let comment of comments; let idx=index\">\n                <img class=\"comment-owner-profile-pic\"[src]=\"getCommentOwnerProfilePicSource(idx)\" alt=\"Profile Picture\">\n                <span class=\"comment-owner-name\" (click)=\"displayPortfolio(comment.owner)\">{{comment.owner_name}}</span>\n                <div class=\"comment-date\">{{comment.createdAt | date : 'medium'}}</div>\n                <div class=\"comment\"> {{comment.comment}}</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<mat-dialog-actions align=\"end\">\n    <div class=\"input-group input-group-sm mb-3\">\n        <input class=\"form-control\" type=\"text\" [(ngModel)] = \"comment\"\n        placeholder=\"Leave a comment\" aria-label=\"\" aria-describedby=\"postComment\">\n        <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" id=\"postComment\" [disabled]=\"posting\" (click)=\"postComment()\">\n                Post\n                <span *ngIf=\"posting\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n  </mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/forget-password/forget-password.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/forget-password/forget-password.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsForgetPasswordForgetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"forget-password-container\">\n\n    <div class=\"container-header\">\n        <h2 class=\"header-content\"> Forget Password </h2>\n    </div>\n    <hr>\n    <div class=\"container-body\">\n        <form [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"updatePassword()\">\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"email-label\">Email</span>\n                </div>\n                <input class=\"form-control \" type=\"email\" formControlName=\"email\" \n                placeholder=\"abc@xyz.com\" aria-label=\"Recipient's \" aria-describedby=\"email-label\">\n                \n            </div>\n            <div class=\"d-flex justify-content-center\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\" type=\"submit\" >\n                    Update Password\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                </button>\n            </div>        \n        </form>\n    </div>\n    <div class=\"contain-footer\">\n        <div class=\"d-flex justify-content-center\"><a routerLink=\"/login\">Login</a></div>\n    </div>\n    \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-container \">\n\n<div class=\"container-header\">\n    <h2 class=\"header-content\"> Login </h2>\n</div>\n<hr>\n<div class=\"container-body\">\n\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <div class=\"input-group input-group-sm mt-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"email-label\">Email</span>\n            </div>\n            <input class=\"form-control \" type=\"email\" \n            formControlName = 'email'\n            placeholder=\"abc@xyz.com\" aria-label=\"Recipient's \" aria-describedby=\"email-label\">\n        </div>\n        <span *ngIf=\"loginForm.get('email').touched && !loginForm.get('email').valid\" \n                class=\"error\">Invalid Email Provided</span>\n\n        <div class=\"input-group input-group-sm mt-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"pass-label\">Password</span>\n            </div>\n            <input class=\"form-control\" type=\"password\" \n            formControlName = 'password'\n            placeholder=\"\" aria-label=\"Recipient's \" aria-describedby=\"pass-label\">\n        </div>\n        <div class=\"d-flex justify-content-center mt-3\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\" type=\"submit\">\n                Log In\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                \n            </button>        \n        </div>\n    </form>\n\n</div>\n<div class=\"contain-footer\">\n    <div class=\"d-flex justify-content-center\"><a routerLink=\"/forgetPassword\">Forgot Password</a></div>\n    <div class=\"d-flex justify-content-center\"><a routerLink=\"/register\">Register User</a></div>\n</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/register-user/register-user.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/register-user/register-user.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsRegisterUserRegisterUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"register-container\">\n\n    <div class=\"container-header\">\n        <h2 class=\"header-content\"> Register </h2>\n    </div>\n    <hr>\n    <div class=\"container-body\">\n        <div class=\"d-flex justify-content-center\">\n            <label class=\"hoverable\" for=\"fileInput\">\n                <img [src]=\"getSource() \"> \n                <div class=\"hover-text\">Choose file</div>\n                <div class=\"background\"></div>\n            </label>\n            <br/>\n            <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n        </div>\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\n            <div class=\"input-group input-group-sm mt-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"fullName-label\">Full Name</span>\n                </div>\n                <input class=\"form-control \" type=\"text\" formControlName=\"name\" \n                placeholder=\"John Doe\" aria-label=\"Recipient's \" aria-describedby=\"fullName-label\">                \n            </div>            \n            <span *ngIf=\"registerForm.get('name').touched && !registerForm.get('name').valid\" \n                class=\"error\">Invalid Full Name Provided</span>\n\n            <div class=\"input-group input-group-sm mt-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"dob-label\">Date of Birth</span>\n                </div>\n                <input class=\"form-control \" type=\"date\" formControlName=\"dob\" \n                placeholder=\"\" aria-label=\"Recipient's \" aria-describedby=\"dob-label\">                \n            </div>\n            <span *ngIf=\"registerForm.get('dob').touched && !registerForm.get('dob').valid\" \n                class=\"error\">Invalid Date of Birth Provided</span>\n\n            <div class=\"input-group input-group-sm mt-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"email-label\">Email</span>\n                </div>\n                <input class=\"form-control \" type=\"email\" formControlName=\"email\" \n                placeholder=\"abc@xyz.com\" aria-label=\"Recipient's \" aria-describedby=\"email-label\">                \n            </div>\n            <span *ngIf=\"registerForm.get('email').touched && !registerForm.get('email').valid\" \n                class=\"error\">Invalid Email Provided</span>\n\n            <div class=\"input-group input-group-sm mt-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"pass-label\">Password</span>\n                </div>\n                <input class=\"form-control \" type=\"password\" formControlName=\"pass\" \n                placeholder=\"\" aria-label=\"Recipient's \" aria-describedby=\"pass-label\">             \n            </div>\n            <span *ngIf=\"registerForm.get('pass').touched && !registerForm.get('pass').valid\" \n                class=\"error\">Either no Password provided or Password is weak</span>\n\n            <div class=\"input-group input-group-sm mt-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"confPass-label\">Confirm Password</span>\n                </div>\n                <input class=\"form-control \" type=\"password\" formControlName=\"confirmPassword\" \n                placeholder=\"\" aria-label=\"Recipient's \" aria-describedby=\"confPass-label\">                \n            </div>\n            <span *ngIf=\"registerForm.get('confirmPassword').touched && !registerForm.get('confirmPassword').valid\" \n                class=\"error\">Confirm Password does not match actual Password</span>\n\n\n            <div class=\"d-flex justify-content-center mt-3\">\n                <button [disabled]=\"loading || !registerForm.valid\" class=\"btn btn-primary\" type=\"submit\" >\n                    Register\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                </button>\n            </div>        \n        </form>\n    </div>\n    <div class=\"contain-footer\">\n        <div class=\"d-flex justify-content-center\"><a routerLink=\"/login\">Cancel</a></div>\n    </div>\n    \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/connections.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/connections.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserConnectionsConnectionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-2\">\n\n        <div class=\"card\">\n            <div class=\"card-body\">                \n                <nav class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"following\">Following</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"follower\">Follower</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"newconnections\">New Connections</a>\n                    </li>\n                </nav>\n            </div>\n            \n        </div>\n\n    </div>\n    <div class=\"col-8\">\n        <div class=\"card router-content\">\n            <div class=\"card-body\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n\n    <ng-template #loadingBlock>\n        <div class=\"d-flex justify-content-center\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n    </ng-template>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/follower/follower.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/follower/follower.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserConnectionsFollowerFollowerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!loading; else loadingSection\">\n    <div class=\"row\" *ngFor=\"let idx_i of counter(searchGroupContentCount)\">\n        <div class=\"col-4\" *ngFor=\"let idx_j of counter(groupCount)\">\n            <connection-card [connection]=\"connections[idx_i*groupCount+idx_j]\" \n            (followUnfollow)=\"connectionAction($event, idx_i*groupCount+idx_j)\"\n            [processing]=\"processing[idx_i*groupCount+idx_j]\"></connection-card>\n        </div>\n    </div>\n</div>\n<ng-template #loadingSection>\n    <div class=\"spinner-border text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/following/following.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/following/following.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserConnectionsFollowingFollowingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!loading; else loadingSection\">\n    <div class=\"row\" *ngFor=\"let idx_i of counter(searchGroupContentCount)\">\n        <div class=\"col-4\" *ngFor=\"let idx_j of counter(groupCount)\">\n            <connection-card [connection]=\"connections[idx_i*groupCount+idx_j]\" \n            (followUnfollow)=\"connectionAction($event, idx_i*groupCount+idx_j)\"\n            [processing]=\"processing[idx_i*groupCount+idx_j]\"></connection-card>\n        </div>\n    </div>\n</div>\n<ng-template #loadingSection>\n    <div class=\"spinner-border text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/new-connections/new-connections.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/new-connections/new-connections.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserConnectionsNewConnectionsNewConnectionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"searchForm\" (ngSubmit)=\"searchConnections()\">\n    <div class=\"input-group input-group-sm mb-3\">\n        <input class=\"form-control\" type=\"text\" formControlName=\"search\"\n        placeholder=\"Search by name or email id of connection\" \n        aria-label=\"\" aria-describedby=\"searchConnection\">\n        <div class=\"input-group-append\">\n            <button class=\"btn btn-primary input-group-text\" id=\"searchConnection\"\n            type=\"submit\" [disabled]=\"loading\">Search\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n</form>\n<div class=\"row\" *ngFor=\"let idx_i of counter(searchGroupContentCount)\">\n    <div class=\"col-4\" *ngFor=\"let idx_j of counter(groupCount)\">\n        <connection-card [connection]=\"connections[idx_i*groupCount+idx_j]\" \n        (followUnfollow)=\"connectionAction($event, idx_i*groupCount+idx_j)\"\n        [processing]=\"processing[idx_i*groupCount+idx_j]\"></connection-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/feeds/feeds.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/feeds/feeds.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserFeedsFeedsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-2\">\n\n        <div class=\"card\">\n            <div class=\"card-body\" *ngIf=\"!domainLoading; else loadingBlock\">                \n                <nav class=\"nav flex-column\">\n                    <li class=\"nav-item\" *ngFor=\"let domain of domains; let idx=index\">\n                        <a class=\"nav-link\" (click)=\"loadPosts(idx)\">\n                            {{domain.name}}\n                        </a>\n                    </li>\n                </nav>\n            </div>\n            \n        </div>\n\n    </div>\n    <div class=\"col-8\">\n        <div class=\"card\">\n            <div class=\"card-body\" *ngIf=\"!postsLoading; else loadingBlock\">\n                <div class=\"card-title\">\n                    <button class=\"btn btn-primary previous\" (click)=\"movePrevious()\"> &lt; </button>\n                    <button class=\"btn btn-primary next\" (click)=\"moveNext()\"> &gt; </button>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <post-card [post]=\"posts[currentIndex]\"></post-card>\n                    </div>\n                    <div class=\"col-6\">\n                        <post-card [post]=\"posts[currentIndex+1]\"></post-card>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <ng-template #loadingBlock>\n        <div class=\"d-flex justify-content-center\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n    </ng-template>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/accomplishments/accomplishments.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/accomplishments/accomplishments.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserProfileAccomplishmentsAccomplishmentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"accomplishmentForm\">\n    \n    <div class=\"input-group input-group-sm mb-3\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"title\">Title</span>\n        </div>\n        <input class=\"form-control\" type=\"text\" formControlName = 'title'\n        placeholder=\"\" aria-label=\"\" aria-describedby=\"title\">\n    </div>\n\n    <div class=\"input-group input-group-sm mb-3\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"description\">Description</span>\n        </div>\n        <textarea class=\"form-control\" type=\"text\" formControlName = 'description'\n        placeholder=\"\" aria-label=\"\" aria-describedby=\"description\"></textarea>\n    </div>\n\n    <div class=\"input-group input-group-sm mb-3\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"accomplishmentDate\">Accomplishment Date</span>\n        </div>\n        <input class=\"form-control\" type=\"date\" formControlName = 'accomplishmentDate'\n        placeholder=\"\" aria-label=\"\" aria-describedby=\"accomplishmentDate\">\n    </div>\n    \n    <button [disabled]=\"addingAccomplishment || !accomplishmentForm.valid\" class=\"btn btn-primary btn-sm\" type=\"submit\" (click)=\"addAccomplishment()\">\n        Add Accomplishment\n        <span *ngIf=\"addingAccomplishment\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n    </button> \n\n</form>\n<hr/>\n<div *ngIf=\"!loading ; else loadingTemplate\">\n    <div class=\"card mb-3\" *ngFor=\"let accomplishment of accomplishments; let idx = index\">\n        <div class=\"card-body\">\n            <h6>{{accomplishment.title}}</h6>\n            <hr class=\"accomplishment-line\">\n            <div class='row'>\n                <div class=\"col-10 date-section\">{{accomplishment.date | date:'medium'}}</div>\n                <div class=\"col-2 operation-section\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash-fill\" viewBox=\"0 0 16 16\" (click)=\"deleteAccomplishment(idx)\">\n                        <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"/>\n                      </svg>\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pencil-fill\" viewBox=\"0 0 16 16\" (click)=\"updateAccomplishment(idx)\">\n                        <path d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n                      </svg>\n                </div>\n            </div>\n            <div class=\"accomplishment-description\">{{accomplishment.description}}</div>\n            \n        </div>\n    </div>\n</div>\n<ng-template #loadingTemplate>\n    <div class=\"spinner-border text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/basic-details/basic-details.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/basic-details/basic-details.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserProfileBasicDetailsBasicDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div *ngIf=\"!formLoading; else loadingTemplate\">\n<form [formGroup]=\"basicDetailsForm\">\n\n    <div *ngIf=\"!uploading; else loadingTemplate\">\n        <label class=\"hoverable\" for=\"fileInput\">\n            <img [src]=\"getSource() \"> \n            <div class=\"hover-text\">Choose file</div>\n            <div class=\"background\"></div>\n        </label>\n        <br/>\n        <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n    </div>\n    <h5>Basic Information</h5>\n    <hr/>\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"name\">Name</span>\n                </div>\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\"\n                placeholder=\"\" aria-label=\"\" aria-describedby=\"name\">    \n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" [disabled]=\"!basicDetailsForm.get('name').valid || editableFeilds['name']\"\n                    (click)=\"saveDetails({name : basicDetailsForm.get('name').value}, 'name')\">\n                        save\n                        <span *ngIf=\"editableFeilds['name']\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    </button>\n                </div>\n            </div>\n\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"dob\">Date of Birth</span>\n                </div>\n                <input class=\"form-control\" type=\"date\" [disabled]=true [value]=\"nonEditableFeilds.dob\"\n                placeholder=\"\" aria-label=\"\" aria-describedby=\"dob\">        \n            </div>\n\n        </div>\n        <div class=\"col-6\">\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"email\">Email</span>\n                </div>\n                <input class=\"form-control\" type=\"text\" [disabled]=true [value]='nonEditableFeilds.email'\n                placeholder=\"\" aria-label=\"\" aria-describedby=\"email\">        \n            </div>\n\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"mobileNumber\">Mobile Number</span>\n                </div>\n                <input class=\"form-control\" type=\"text\"  formControlName=\"mobileNumber\"\n                placeholder=\"\" aria-label=\"\" aria-describedby=\"mobileNumber\">\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" [disabled]=\"!basicDetailsForm.get('mobileNumber').valid || editableFeilds['mobileNumber']\"\n                    (click)=\"saveDetails({mobileNumber : basicDetailsForm.get('mobileNumber').value}, 'mobileNumber')\">\n                        save\n                        <span *ngIf=\"editableFeilds['mobileNumber']\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <h5>Address Information</h5>\n    <hr/>\n    <div class=\"row\">\n        <div class=\"col-6\">\n\n            \n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"addressLine1\">Address Line 1</span>\n                </div>\n                <input class=\"form-control\" type=\"text\" formControlName=\"addressLine1\"\n                placeholder=\"\" aria-label=\"\" aria-describedby=\"addressLine1\">  \n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" [disabled]=\"!basicDetailsForm.get('addressLine1').valid || editableFeilds['addressLine1']\"\n                    (click)=\"saveDetails({addressLine1 : basicDetailsForm.get('addressLine1').value}, 'addressLine1')\">\n                        save\n                        <span *ngIf=\"editableFeilds['addressLine1']\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    </button>\n                </div>      \n            </div>\n            \n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"country\">Country</span>\n                </div>\n                <input class=\"form-control\" type=\"text\" formControlName=\"country\"\n                placeholder=\"\" aria-label=\"\" aria-describedby=\"country\">  \n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" [disabled]=\"!basicDetailsForm.get('country').valid || editableFeilds['country']\"\n                    (click)=\"saveDetails({country : basicDetailsForm.get('country').value}, 'country')\">\n                        save\n                        <span *ngIf=\"editableFeilds['country']\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    </button>      \n                </div>\n            </div>\n            \n\n        </div>\n        <div class=\"col-6\">\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"state\">State</span>\n                </div>\n                <input class=\"form-control\" type=\"text\" formControlName=\"state\"\n                placeholder=\"\" aria-label=\"\" aria-describedby=\"state\">  \n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" [disabled]=\"!basicDetailsForm.get('state').valid || editableFeilds['state']\"\n                    (click)=\"saveDetails({state : basicDetailsForm.get('state').value}, 'state')\">\n                        save\n                        <span *ngIf=\"editableFeilds['state']\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    </button>  \n                </div>    \n            </div>\n        \n        </div>\n        \n\n    </div>\n\n    <h5>Interests</h5>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"interest\">Interest</span>\n                </div>\n                <select class=\"form-control\" formControlName='interest'\n                placeholder=\"\" aria-label=\"\" aria-describedby=\"interest\">  \n                    <option *ngFor=\"let domain of domains\" value=\"{{domain.id}}\">{{domain.name}}</option>\n                </select>   \n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" [disabled]=\"!basicDetailsForm.get('interest').valid || editableFeilds['interest']\"\n                    (click)=\"addInterest()\">\n                        Add\n                        <span *ngIf=\"editableFeilds['interest']\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    </button>  \n                </div> \n            </div>\n            <span class=\"btn btn-primary badge-btn btn-sm\" *ngFor=\"let domainInterest of userDomainInterests; let idx = index\">\n                {{domainInterest.name}} <span class= \"badge badge-light\" (click)=\"delete(idx)\">X</span>\n            </span>\n        </div>\n\n    </div>\n\n\n\n\n</form>\n</div>\n\n<ng-template #loadingTemplate>\n    <div class=\"spinner-border text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/portfolio/portfolio.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/portfolio/portfolio.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserProfilePortfolioPortfolioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"input-group input-group-sm mb-3\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"portfolioLink\">Your Portfolio Id</span>\n    </div>\n    <input class=\"form-control\" type=\"text\" [disabled]=\"true\" [(ngModel)]=\"loggedInUserPortfolioId\"\n    placeholder=\"\" aria-label=\"\" aria-describedby=\"portfolioLink\">\n</div>\n\n<div class=\"input-group input-group-sm mb-3\">\n    <input class=\"form-control\" type=\"text\" [(ngModel)] = \"portfolioId\"\n    placeholder=\"Enter Portfolio Link\" aria-label=\"\" aria-describedby=\"generate-btn\">\n    <div class=\"input-group-prepend\">\n        <button class=\"btm btn-primary\" id=\"generate-btn\"\n        (click)=\"generatePortfolio()\">View Portfolio</button>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/profile.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/profile.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-2\">\n\n        <div class=\"card\">\n            <div class=\"card-body\">                \n                <nav class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"basicdetails\">Basic Details</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"accomplishments\">Accomplishments</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"portfolio\">Portfolio</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"settings\">Settings</a>\n                    </li>\n                </nav>\n            </div>\n            \n        </div>\n\n    </div>\n    <div class=\"col-8\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n\n    <ng-template #loadingBlock>\n        <div class=\"d-flex justify-content-center\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n    </ng-template>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/settings/settings.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/settings/settings.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserProfileSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Update Password</h5>\n        <hr>\n        <form [formGroup]=\"upadtePasswordForm\" (ngSubmit)=\"updatePassword()\">\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"password\">Password</span>\n                </div>\n                <input class=\"form-control\" type=\"password\" placeholder=\"\" \n                formControlName=\"password\" aria-label=\"\" aria-describedby=\"password\">\n            </div>\n            <div class=\"input-group input-group-sm mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"password\">Confirm Password</span>\n                </div>\n                <input class=\"form-control\" type=\"password\" placeholder=\"\" \n                formControlName=\"confirmPassword\" aria-label=\"\" aria-describedby=\"password\">\n            </div>\n            <button class=\"btn btn-primary btn-sm\" type=\"submit\" [disabled]=\"loading\">\n                Update Password\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            </button>\n        </form>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/new-uploads/new-uploads.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/new-uploads/new-uploads.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserUploadsNewUploadsNewUploadsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!loading; else loadingTemplate\">\n    <form [formGroup]=\"newUploadForm\">\n\n        <div class=\"form-check form-switch mb-3\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"includeInProtfolio\" \n            formControlElement='portfolioInclude'/>\n            <label class=\"form-check-label\" for=\"includeInProtfolio\">\n                Include In Portfolio</label>\n        </div>\n\n        <div class=\"input-group input-group-sm mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"title\">Title</span>\n            </div>\n            <input class=\"form-control\" type=\"text\" formControlName=\"title\"\n            placeholder=\"\" aria-label=\"\" aria-describedby=\"title\">\n        </div>\n\n        <div class=\"input-group input-group-sm mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"description\">Description</span>\n            </div>\n            <textarea class=\"form-control\" type=\"text\" formControlName=\"description\"\n            placeholder=\"\" aria-label=\"\" aria-describedby=\"description\"></textarea>\n        </div>\n\n        <div class=\"input-group input-group-sm mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"interest\">Domains</span>\n            </div>\n            <select class=\"form-control\" type=\"file\" formControlName='interest'\n            placeholder=\"\" aria-label=\"\" aria-describedby=\"interest\">\n                <option *ngFor=\"let domain of domains; let idx=index\" \n                value=\"{{domain.id}}\">{{domain.name}}</option>\n            </select>\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-primary\" id=\"interest-btn\" \n                (click)=\"addInterest()\">Add</button>\n            </div>\n        </div>\n        <span class=\"btn btn-primary badge-btn btn-sm\" *ngFor=\"let domainInterest of userDomainInterests; let idx = index\">\n            {{domainInterest.name}} <span class= \"badge badge-light\" (click)=\"delete(idx)\">X</span>\n        </span>\n\n        <div class=\"input-group input-group-sm mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"fileUpload\">File Upload</span>\n            </div>\n            <input class=\"form-control\" type=\"file\" formControlName=\"fileUpload\"\n            placeholder=\"\" aria-label=\"\" aria-describedby=\"fileUpload\" (change)=\"onSelectFile($event)\">\n        </div>\n\n        <button [disabled]=\"uploading || !newUploadForm.valid\" class=\"btn btn-primary btn-sm\" type=\"submit\" (click)=\"uploadPost()\">\n            Upload Post\n            <span *ngIf=\"uploading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n        </button>\n\n    </form>\n</div>\n<ng-template #loadingTemplate>\n    <div class=\"spinner-border text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserUploadsPreviousUploadsPreviousUploadsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div *ngIf=\"!postsLoading; else loadingBlock\"> \n<div class=\"card-title\">\n    <button class=\"btn btn-primary previous\" (click)=\"movePrevious()\"> &lt; </button>\n    <button class=\"btn btn-primary next\" (click)=\"moveNext()\"> &gt; </button>\n</div>\n<div class=\"row\">\n    <div class=\"col-6\">\n        <div class=\"card\" *ngIf=\"posts[currentIndex]\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-10\">\n                        <div class=\"form-check\">\n                            <input type=\"checkbox\" class=\"form-check-input\" id=\"portfolioCheck\" *ngIf=\"!postsProcessing[currentIndex]; else processingBlock \"\n                            [checked]=\"posts[currentIndex].portfolio\" (click)=\"changePortfolioStatus(currentIndex)\">\n                            <label class=\"form-check-label\" for=\"portfolioCheck\">Include in Portfolio</label>\n                        </div>\n                    </div>\n                    <div class=\"col-2\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash-fill\" viewBox=\"0 0 16 16\" (click)=\"deletePost(currentIndex)\" *ngIf=\"!postsProcessing[currentIndex]; else processingBlock \">\n                            <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"/>\n                        </svg>\n                    </div>\n                </div>\n                <post-card [post]=\"posts[currentIndex]\"></post-card>\n            </div>\n        </div>\n        \n    </div>\n    <div class=\"col-6\">\n        <div class=\"card\" *ngIf=\"posts[currentIndex+1]\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-10\">\n                        <div class=\"form-check\">\n                            <input type=\"checkbox\" class=\"form-check-input\" id=\"portfolioCheck\" *ngIf=\"!postsProcessing[currentIndex+1]; else processingBlock \"\n                            [checked]=\"posts[currentIndex+1].portfolio\" (click)=\"changePortfolioStatus(currentIndex+1)\">\n                            <label class=\"form-check-label\" for=\"portfolioCheck\">Include in Portfolio</label>\n                        </div>\n                    </div>\n                    <div class=\"col-2\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash-fill\" viewBox=\"0 0 16 16\" (click)=\"deletePost(currentIndex+1)\" *ngIf=\"!postsProcessing[currentIndex+1]; else processingBlock \">\n                            <path d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"/>\n                        </svg>\n                    </div>\n                </div>\n                <post-card [post]=\"posts[currentIndex+1]\"></post-card>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<ng-template #loadingBlock>\n    <div class=\"d-flex justify-content-center\">\n        <div class=\"spinner-border text-primary\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #processingBlock>\n    <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Loading...</span>\n</ng-template>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/uploads.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/uploads.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserUploadsUploadsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-2\">\n\n        <div class=\"card\">\n            <div class=\"card-body\">                \n                <nav class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"newuploads\">New Upload</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"previousuploads\">Previous Uploads</a>\n                    </li>\n                </nav>\n            </div>\n            \n        </div>\n\n    </div>\n    <div class=\"col-8\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n\n    <ng-template #loadingBlock>\n        <div class=\"d-flex justify-content-center\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n    </ng-template>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/user.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/user.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentsUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n    <a class=\"navbar-brand d-none d-lg-inline-block\" href=\"#\">\n        <img class=\"logo\" [src]=\"getLogoSource()\" \n        alt=\"logo\">    \n    </a>\n    <a class=\"navbar-brand-two mx-auto d-lg-none d-inline-block\" routerLink=\"/\">\n        <img class=\"logo\" [src]=\"getLogoSource()\" \n        alt=\"logo\">\n    </a>            \n    <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"top-navbar\">\n        <ul class=\"navbar-nav ml-auto flex-nowrap\">\n            <li class=\"nav-item\">\n                <a href=\"feeds\" class=\"nav-link m-2 menu-item\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n                        <path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>\n                        <path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>\n                      </svg>\n                    <br>Feeds</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"connections\" class=\"nav-link m-2 menu-item\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-people-fill\" viewBox=\"0 0 16 16\">\n                        <path d=\"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n                        <path fill-rule=\"evenodd\" d=\"M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z\"/>\n                        <path d=\"M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z\"/>\n                      </svg>\n                    <br>Connections</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"profile\" class=\"nav-link m-2 menu-item\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-person-square\" viewBox=\"0 0 16 16\">\n                        <path d=\"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z\"/>\n                        <path d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z\"/>\n                      </svg>\n                      <br>Profile</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"uploads\" class=\"nav-link m-2 menu-item\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-capslock-fill\" viewBox=\"0 0 16 16\">\n                        <path d=\"M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1z\"/>\n                      </svg>\n                      <br>Uploads</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link m-2 menu-item\" (click)=\"logout()\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-door-open-fill\" viewBox=\"0 0 16 16\">\n                        <path d=\"M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z\"/>\n                      </svg>\n                      <br>Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"currentUser; else notLoggedIn\">\n    <user *ngIf=\"!logginOut\" (logoutEmitter)=\"logout()\"></user>\n    <div *ngIf=\"logginOut\"  class=\"spinner-border text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n</div>\n<ng-template #notLoggedIn>\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"welcome-section\">\n                <img class=\"logo\" [src]=\"getLogoSource()\" \n                alt=\"logo\">           \n            </div>\n        </div>\n        <div class=\"col-6\">\n            <div class=\"card router-oulet\">\n                <div class=\"card-body\">\n                    <router-outlet></router-outlet>                    \n                </div>\n\n            </div>\n        </div>\n    </div>\n    \n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/_components/alert/alert.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/_components/alert/alert.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsAlertAlertComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".messgae-display{\n    font-size: small;\n    font-weight: 500;\n}\n\nsvg{\n    margin : 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzZ2FlLWRpc3BsYXl7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5zdmd7XG4gICAgbWFyZ2luIDogMXJlbVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_components/alert/alert.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/_components/alert/alert.component.ts ***!
    \******************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcApp_componentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_model_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_model/alert */
    "./src/app/_model/alert.ts");

    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent(dialogRef, data) {
        _classCallCheck(this, AlertComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.message = data.message;
        this.type = data.type;
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getStyle",
        value: function getStyle() {
          if (this.type == src_app_model_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].warning) {
            return {
              'color': 'yellow'
            };
          } else if (this.type == src_app_model_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].success) {
            return {
              'color': 'green'
            };
          } else if (this.type == src_app_model_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].error) {
            return {
              'color': 'red'
            };
          } else {
            return {
              'color': 'white'
            };
          }
        }
      }, {
        key: "closeAlert",
        value: function closeAlert() {
          this.dialogRef.close();
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert/alert.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alert.component.css */
      "./src/app/_components/alert/alert.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AlertComponent);
    /***/
  },

  /***/
  "./src/app/_components/connection-card/connection-card.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/_components/connection-card/connection-card.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsConnectionCardConnectionCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\n    height : 200px;\n    width : 250px;\n    margin-top: 10px;\n}\n.card-body{\n    height : 150px\n}\n.card-footer{\n    height : 30px;\n    padding : 2px;\n    opacity : 0.7\n    \n}\n.card-footer:hover{\n    opacity: 1;\n}\nimg{\n    width : 70px;\n    height : 70px;\n    border-radius: 50%;\n    font-size: small;\n}\n.desc{\n    font-size: small;\n    color : gray\n}\n.col-4, .col-6{\n    padding : 0px;\n    margin-left : 5px;\n    margin-right : 5px\n}\nh6{\n    font-weight: bold;\n    margin-bottom: 0px;\n    margin-top : 5px\n}\n.connection-name{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvY29ubmVjdGlvbi1jYXJkL2Nvbm5lY3Rpb24tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2I7O0FBRUo7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQjtBQUNKO0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9jb25uZWN0aW9uLWNhcmQvY29ubmVjdGlvbi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBoZWlnaHQgOiAyMDBweDtcbiAgICB3aWR0aCA6IDI1MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZC1ib2R5e1xuICAgIGhlaWdodCA6IDE1MHB4XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBoZWlnaHQgOiAzMHB4O1xuICAgIHBhZGRpbmcgOiAycHg7XG4gICAgb3BhY2l0eSA6IDAuN1xuICAgIFxufVxuXG4uY2FyZC1mb290ZXI6aG92ZXJ7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuaW1ne1xuICAgIHdpZHRoIDogNzBweDtcbiAgICBoZWlnaHQgOiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uZGVzY3tcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yIDogZ3JheVxufVxuXG4uY29sLTQsIC5jb2wtNntcbiAgICBwYWRkaW5nIDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0IDogNXB4O1xuICAgIG1hcmdpbi1yaWdodCA6IDVweFxufVxuXG5cbmg2e1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wIDogNXB4XG59XG5cbi5jb25uZWN0aW9uLW5hbWV7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_components/connection-card/connection-card.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/_components/connection-card/connection-card.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ConnectionCardComponent */

  /***/
  function srcApp_componentsConnectionCardConnectionCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionCardComponent", function () {
      return ConnectionCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/portfolio.service */
    "./src/app/_services/portfolio.service.ts");
    /* harmony import */


    var src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/assets/apiPaths */
    "./src/assets/apiPaths.ts");

    var ConnectionCardComponent = /*#__PURE__*/function () {
      function ConnectionCardComponent(portfolioService) {
        _classCallCheck(this, ConnectionCardComponent);

        this.portfolioService = portfolioService;
        this.followUnfollow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ConnectionCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getSource",
        value: function getSource() {
          if (this.connection && this.connection.profilePicUrl) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath('getFile', this.connection.profilePicUrl);
          }

          return '../../assets/images/default_profile_pic.png';
        }
      }, {
        key: "emitAction",
        value: function emitAction() {
          this.followUnfollow.emit(this.connection);
        }
      }, {
        key: "displayPortfolio",
        value: function displayPortfolio() {
          this.portfolioService.generatePortfolioView(this.connection.id);
        }
      }]);

      return ConnectionCardComponent;
    }();

    ConnectionCardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConnectionCardComponent.prototype, "connection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConnectionCardComponent.prototype, "processing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ConnectionCardComponent.prototype, "followUnfollow", void 0);
    ConnectionCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'connection-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./connection-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/connection-card/connection-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./connection-card.component.css */
      "./src/app/_components/connection-card/connection-card.component.css"))["default"]]
    })], ConnectionCardComponent);
    /***/
  },

  /***/
  "./src/app/_components/portfolio-modal/portfolio-modal.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/_components/portfolio-modal/portfolio-modal.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsPortfolioModalPortfolioModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-pic{\n    height : 200px;\n    width : 200px;\n    border-radius: 50%;\n    margin : 1rem\n}\n\n.interest-section{\n    margin : 1rem;\n    font-size:small;\n}\n\n.badge{\n    margin : 0.25rem\n}\n\n.stat-section{\n    width: 30vh;\n}\n\n.stat-label, .info-label{\n    font-size: 15px;\n    color: gray;\n}\n\n.stat-value, .info-value{\n    font-size: 15px;\n    float:right\n\n}\n\n.bi-hand-thumbs-up-fill{\n    color: blue;\n}\n\nsvg{\n    margin : 0.25rem\n}\n\n.accomplishments-section, .post-showcase-section{\n    margin : 0.5rem\n}\n\n.accomplishment-date-section{\n    font-size: small;\n    color: gray;\n}\n\n.accomplishment-card{\n    margin : 0.25rem\n}\n\n.accomplishment-description{\n    font-size: small;\n}\n\n.accomplishment-title{\n    font-weight: bold;\n    font-size : small\n}\n\n.post-profile-pic{\n    width : 30px;\n    height: 30px;\n    border-radius: 50%;\n}\n\n.post-title{\n    font-size: small;\n    font-weight : bold\n}\n\n.post-card{\n    margin-bottom :0.25rem\n}\n\n.post-card-body{\n    padding:0.5rem\n}\n\n.post-description{\n    font-size: small;\n}\n\n.bi-eye-fill{\n    color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcG9ydGZvbGlvLW1vZGFsL3BvcnRmb2xpby1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7O0FBRUo7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvcG9ydGZvbGlvLW1vZGFsL3BvcnRmb2xpby1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcGlje1xuICAgIGhlaWdodCA6IDIwMHB4O1xuICAgIHdpZHRoIDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbiA6IDFyZW1cbn1cblxuLmludGVyZXN0LXNlY3Rpb257XG4gICAgbWFyZ2luIDogMXJlbTtcbiAgICBmb250LXNpemU6c21hbGw7XG59XG5cbi5iYWRnZXtcbiAgICBtYXJnaW4gOiAwLjI1cmVtXG59XG5cbi5zdGF0LXNlY3Rpb257XG4gICAgd2lkdGg6IDMwdmg7XG59XG5cbi5zdGF0LWxhYmVsLCAuaW5mby1sYWJlbHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5zdGF0LXZhbHVlLCAuaW5mby12YWx1ZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZmxvYXQ6cmlnaHRcblxufVxuXG4uYmktaGFuZC10aHVtYnMtdXAtZmlsbHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuc3Zne1xuICAgIG1hcmdpbiA6IDAuMjVyZW1cbn1cblxuLmFjY29tcGxpc2htZW50cy1zZWN0aW9uLCAucG9zdC1zaG93Y2FzZS1zZWN0aW9ue1xuICAgIG1hcmdpbiA6IDAuNXJlbVxufVxuXG4uYWNjb21wbGlzaG1lbnQtZGF0ZS1zZWN0aW9ue1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5hY2NvbXBsaXNobWVudC1jYXJke1xuICAgIG1hcmdpbiA6IDAuMjVyZW1cbn1cblxuLmFjY29tcGxpc2htZW50LWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5hY2NvbXBsaXNobWVudC10aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemUgOiBzbWFsbFxufVxuXG4ucG9zdC1wcm9maWxlLXBpY3tcbiAgICB3aWR0aCA6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnBvc3QtdGl0bGV7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodCA6IGJvbGRcbn1cblxuLnBvc3QtY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tIDowLjI1cmVtXG59XG5cbi5wb3N0LWNhcmQtYm9keXtcbiAgICBwYWRkaW5nOjAuNXJlbVxufVxuXG4ucG9zdC1kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uYmktZXllLWZpbGx7XG4gICAgY29sb3I6IGdyZWVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_components/portfolio-modal/portfolio-modal.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/_components/portfolio-modal/portfolio-modal.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PortfolioModalComponent */

  /***/
  function srcApp_componentsPortfolioModalPortfolioModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioModalComponent", function () {
      return PortfolioModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_model_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_model/portfolio */
    "./src/app/_model/portfolio.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_post_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/post-detail.service */
    "./src/app/_services/post-detail.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");
    /* harmony import */


    var src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/assets/apiPaths */
    "./src/assets/apiPaths.ts");

    var PortfolioModalComponent = /*#__PURE__*/function () {
      function PortfolioModalComponent(dialogRef, data, postDetailService, userService, alerService) {
        _classCallCheck(this, PortfolioModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.postDetailService = postDetailService;
        this.userService = userService;
        this.alerService = alerService;
        this.portfolio = new src_app_model_portfolio__WEBPACK_IMPORTED_MODULE_3__["Portfolio"]();
        this.connetionProcessing = false;
        this.portfolio = data;
        console.log(this.portfolio);
      }

      _createClass(PortfolioModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProfilePictureSrource",
        value: function getProfilePictureSrource() {
          if (this.portfolio.basicDetails.profilePicUrl) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__["ApiPaths"].getApiPath("getFile", this.portfolio.basicDetails.profilePicUrl);
          }

          return '../../../assets/images/default_profile_pic.png';
        }
      }, {
        key: "follow",
        value: function follow() {
          var _this = this;

          this.connetionProcessing = true;
          this.userService.follow(this.portfolio.basicDetails.id).then(function (response) {
            _this.portfolio.isFollowing = !_this.portfolio.isFollowing;
            _this.portfolio.totalFollowers = _this.portfolio.totalFollowers + 1;
          })["catch"](function (error) {
            _this.alerService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('updateConnectionError'));
          })["finally"](function () {
            return _this.connetionProcessing = false;
          });
        }
      }, {
        key: "unfollow",
        value: function unfollow() {
          var _this2 = this;

          this.connetionProcessing = true;
          this.userService.unfollow(this.portfolio.basicDetails.id).then(function (response) {
            _this2.portfolio.isFollowing = !_this2.portfolio.isFollowing;
            _this2.portfolio.totalFollowers = _this2.portfolio.totalFollowers - 1;
          })["catch"](function (error) {
            _this2.alerService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('updateConnectionError'));
          })["finally"](function () {
            return _this2.connetionProcessing = false;
          });
        }
      }, {
        key: "getProfilePicSource",
        value: function getProfilePicSource(idx) {
          if (this.portfolio.posts[idx].profilePicUrl) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__["ApiPaths"].getApiPath("getFile", this.portfolio.posts[idx].profilePicUrl);
          }

          return '../../../assets/images/default_profile_pic.png';
        }
      }, {
        key: "viewDetails",
        value: function viewDetails(idx) {
          this.postDetailService.generateDetailView(this.portfolio.posts[idx]);
        }
      }]);

      return PortfolioModalComponent;
    }();

    PortfolioModalComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_model_portfolio__WEBPACK_IMPORTED_MODULE_3__["Portfolio"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_services_post_detail_service__WEBPACK_IMPORTED_MODULE_5__["PostDetailService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    PortfolioModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/portfolio-modal/portfolio-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio-modal.component.css */
      "./src/app/_components/portfolio-modal/portfolio-modal.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], PortfolioModalComponent);
    /***/
  },

  /***/
  "./src/app/_components/post-card/post-card.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/_components/post-card/post-card.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsPostCardPostCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-pic{\n    height : 50px;\n    width: 50px;\n    border-radius: 50%;\n    font-size : small;\n    cursor: pointer;\n}\n\n.col-2{\n    padding : 0px\n}\n\n.post-title{\n    font-size: medium;\n    font-weight : bold\n}\n\n.post-description{\n    font-size: small;\n    overflow-y: auto;\n    padding-top: 5px;\n}\n\n.post-content{\n    max-width: 100%;\n}\n\n.bi-eye-fill{\n    color: green;\n    cursor: pointer;\n}\n\n.bi-hand-thumbs-up-fill{\n    color : blue;\n    cursor: pointer\n}\n\n.card-footer{\n    height : 30px;\n    padding-top : 2px;\n    padding-bottom : 2px;\n    padding-left : 1rem;\n    padding-right : 1rem;\n    background-color: white;\n    border-top: 1px solid white;\n}\n\n.userNotLiked{\n    opacity : 0.5\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcG9zdC1jYXJkL3Bvc3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3Bvc3QtY2FyZC9wb3N0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBpY3tcbiAgICBoZWlnaHQgOiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemUgOiBzbWFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2wtMntcbiAgICBwYWRkaW5nIDogMHB4XG59XG5cbi5wb3N0LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0IDogYm9sZFxufVxuXG4ucG9zdC1kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnBvc3QtY29udGVudHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5iaS1leWUtZmlsbHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmktaGFuZC10aHVtYnMtdXAtZmlsbHtcbiAgICBjb2xvciA6IGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBoZWlnaHQgOiAzMHB4O1xuICAgIHBhZGRpbmctdG9wIDogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tIDogMnB4O1xuICAgIHBhZGRpbmctbGVmdCA6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodCA6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4udXNlck5vdExpa2Vke1xuICAgIG9wYWNpdHkgOiAwLjVcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/_components/post-card/post-card.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/_components/post-card/post-card.component.ts ***!
    \**************************************************************/

  /*! exports provided: PostCardComponent */

  /***/
  function srcApp_componentsPostCardPostCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCardComponent", function () {
      return PostCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_model_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_model/like */
    "./src/app/_model/like.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/feeds.service */
    "./src/app/_services/feeds.service.ts");
    /* harmony import */


    var src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/portfolio.service */
    "./src/app/_services/portfolio.service.ts");
    /* harmony import */


    var src_app_services_post_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/post-detail.service */
    "./src/app/_services/post-detail.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");
    /* harmony import */


    var src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/assets/apiPaths */
    "./src/assets/apiPaths.ts");

    var PostCardComponent = /*#__PURE__*/function () {
      function PostCardComponent(feedsService, postDetailService, portfolioService, alertService) {
        _classCallCheck(this, PostCardComponent);

        this.feedsService = feedsService;
        this.postDetailService = postDetailService;
        this.portfolioService = portfolioService;
        this.alertService = alertService;
        this.likeLoading = false;
      }

      _createClass(PostCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.post);
        }
      }, {
        key: "getProfilePicSource",
        value: function getProfilePicSource() {
          if (this.post.profilePicUrl) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__["ApiPaths"].getApiPath("getFile", this.post.profilePicUrl);
          }

          return '../../../assets/images/default_profile_pic.png';
        }
      }, {
        key: "getContentType",
        value: function getContentType() {
          if (this.post.contentType) {
            return this.post.contentType.split("/")[0];
          }

          return null;
        }
      }, {
        key: "getContentSource",
        value: function getContentSource() {
          if (this.post.filenames.length > 0 && this.post.filenames[0]) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__["ApiPaths"].getApiPath("getFile", this.post.filenames[0]);
          }

          return null;
        }
      }, {
        key: "increaseLikes",
        value: function increaseLikes() {
          var _this3 = this;

          this.likeLoading = true;
          var data = new src_app_model_like__WEBPACK_IMPORTED_MODULE_2__["Like"]();
          data.parent_id = this.post.id;
          data.parent_type = "Post";
          this.feedsService.increaseLikes(data).then(function (response) {
            console.log(response);
            _this3.post.likes = response.likes;
            _this3.post.userLike = response.user_like;
          })["catch"](function (error) {
            _this3.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('updateLikeError'));
          })["finally"](function () {
            _this3.likeLoading = false;
          });
        }
      }, {
        key: "viewDetails",
        value: function viewDetails() {
          this.postDetailService.generateDetailView(this.post);
        }
      }, {
        key: "displayPortfolio",
        value: function displayPortfolio() {
          this.portfolioService.generatePortfolioView(this.post.owner);
        }
      }]);

      return PostCardComponent;
    }();

    PostCardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_4__["FeedsService"]
      }, {
        type: src_app_services_post_detail_service__WEBPACK_IMPORTED_MODULE_6__["PostDetailService"]
      }, {
        type: src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_5__["PortfolioService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PostCardComponent.prototype, "post", void 0);
    PostCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'post-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/post-card/post-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-card.component.css */
      "./src/app/_components/post-card/post-card.component.css"))["default"]]
    })], PostCardComponent);
    /***/
  },

  /***/
  "./src/app/_components/post-detail/post-detail.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/_components/post-detail/post-detail.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsPostDetailPostDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-pic{\n    height : 50px;\n    width: 50px;\n    border-radius: 50%;\n    cursor : pointer;\n    font-size: small;\n\n}\n\n.post-title{\n    font-size: medium;\n    font-weight : bold\n}\n\nhr{\n    margin : 0.25rem\n}\n\n.post-header{\n    min-height : 10vh\n}\n\n.bi-hand-thumbs-up-fill{\n    color : blue;\n    cursor : pointer;\n}\n\n.userNotLiked{\n    opacity : 0.5\n}\n\n.post-stat{\n    margin-bottom : 0.25rem\n}\n\n.comment-owner-profile-pic{\n    height : 30px;\n    width: 30px;\n    border-radius: 50%;\n    margin : 0.1rem;\n    font-size : small;\n}\n\n.comment-date{\n    float: right;\n    font-size: small;\n    color : lightgray\n}\n\n.comment-owner-name{\n    font-size: small;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.comment{\n    font-size : small\n}\n\n.comment-section{\n    margin-bottom : 0.25rem;\n    border-bottom : 1px solid lightgray\n}\n\nmat-dialog-actions{\n    height:30px;\n    padding-top : 15px;\n    padding-bottom : 0px;\n}\n\n.post-comment{\n    height : 50vh;\n    overflow-y: auto;\n}\n\n.post-description{\n    font-size: small;\n    overflow-y: auto;\n    padding-top: 5px;\n}\n\n.post-content{\n    max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcGlje1xuICAgIGhlaWdodCA6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvciA6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcblxufVxuXG4ucG9zdC10aXRsZXtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodCA6IGJvbGRcbn1cblxuaHJ7XG4gICAgbWFyZ2luIDogMC4yNXJlbVxufVxuXG4ucG9zdC1oZWFkZXJ7XG4gICAgbWluLWhlaWdodCA6IDEwdmhcbn1cblxuLmJpLWhhbmQtdGh1bWJzLXVwLWZpbGx7XG4gICAgY29sb3IgOiBibHVlO1xuICAgIGN1cnNvciA6IHBvaW50ZXI7XG59XG5cbi51c2VyTm90TGlrZWR7XG4gICAgb3BhY2l0eSA6IDAuNVxufVxuXG4ucG9zdC1zdGF0e1xuICAgIG1hcmdpbi1ib3R0b20gOiAwLjI1cmVtXG59XG5cbi5jb21tZW50LW93bmVyLXByb2ZpbGUtcGlje1xuICAgIGhlaWdodCA6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbiA6IDAuMXJlbTtcbiAgICBmb250LXNpemUgOiBzbWFsbDtcbn1cblxuLmNvbW1lbnQtZGF0ZXtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvciA6IGxpZ2h0Z3JheVxufVxuXG4uY29tbWVudC1vd25lci1uYW1le1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbWVudHtcbiAgICBmb250LXNpemUgOiBzbWFsbFxufVxuLmNvbW1lbnQtc2VjdGlvbntcbiAgICBtYXJnaW4tYm90dG9tIDogMC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkIGxpZ2h0Z3JheVxufVxuXG5tYXQtZGlhbG9nLWFjdGlvbnN7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgcGFkZGluZy10b3AgOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tIDogMHB4O1xufVxuXG4ucG9zdC1jb21tZW50e1xuICAgIGhlaWdodCA6IDUwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnBvc3QtZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5wb3N0LWNvbnRlbnR7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_components/post-detail/post-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/_components/post-detail/post-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: PostDetailComponent */

  /***/
  function srcApp_componentsPostDetailPostDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function () {
      return PostDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_model_like__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_model/like */
    "./src/app/_model/like.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/feeds.service */
    "./src/app/_services/feeds.service.ts");
    /* harmony import */


    var src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/portfolio.service */
    "./src/app/_services/portfolio.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");
    /* harmony import */


    var src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/assets/apiPaths */
    "./src/assets/apiPaths.ts");

    var PostDetailComponent = /*#__PURE__*/function () {
      function PostDetailComponent(dialogRef, data, feedsService, portfolioService, alertService) {
        _classCallCheck(this, PostDetailComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.feedsService = feedsService;
        this.portfolioService = portfolioService;
        this.alertService = alertService;
        this.posting = false;
        this.likeLoading = false;
        this.post = data.post;
        this.comments = data.comments;
      }

      _createClass(PostDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProfilePicSource",
        value: function getProfilePicSource() {
          if (this.post.profilePicUrl) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__["ApiPaths"].getApiPath("getFile", this.post.profilePicUrl);
          }

          return '../../assets/images/default_profile_pic.png';
        }
      }, {
        key: "getCommentOwnerProfilePicSource",
        value: function getCommentOwnerProfilePicSource(idx) {
          var filename = this.comments[idx].owner_pic;

          if (filename) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__["ApiPaths"].getApiPath("getFile", filename);
          }

          return '../../assets/images/default_profile_pic.png';
        }
      }, {
        key: "postComment",
        value: function postComment() {
          var _this4 = this;

          this.posting = true;
          this.feedsService.postComment(this.comment, this.post.id).then(function (response) {
            var comment = _this4.feedsService.getCommentFromResponse(response);

            _this4.comments.unshift(comment);

            _this4.comment = null;
          })["catch"](function (error) {
            _this4.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('commentPostError'));
          })["finally"](function () {
            _this4.posting = false;
          });
        }
      }, {
        key: "getContentType",
        value: function getContentType() {
          if (this.post.contentType) {
            return this.post.contentType.split("/")[0];
          }

          return null;
        }
      }, {
        key: "getContentSource",
        value: function getContentSource() {
          if (this.post.filenames.length > 0 && this.post.filenames[0]) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_8__["ApiPaths"].getApiPath("getFile", this.post.filenames[0]);
          }

          return null;
        }
      }, {
        key: "increaseLikes",
        value: function increaseLikes() {
          var _this5 = this;

          this.likeLoading = true;
          var data = new src_app_model_like__WEBPACK_IMPORTED_MODULE_3__["Like"]();
          data.parent_id = this.post.id;
          data.parent_type = "Post";
          this.feedsService.increaseLikes(data).then(function (response) {
            _this5.post.likes = response.likes;
            _this5.post.userLike = response.user_like;
          })["catch"](function (error) {
            _this5.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('updateLikeError'));
          })["finally"](function () {
            _this5.likeLoading = false;
          });
        }
      }, {
        key: "displayPortfolio",
        value: function displayPortfolio(userId) {
          this.portfolioService.generatePortfolioView(userId);
        }
      }]);

      return PostDetailComponent;
    }();

    PostDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_5__["FeedsService"]
      }, {
        type: src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_6__["PortfolioService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/post-detail/post-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-detail.component.css */
      "./src/app/_components/post-detail/post-detail.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], PostDetailComponent);
    /***/
  },

  /***/
  "./src/app/_helpers/Validators/OnAfterCurrentDateValidator.ts":
  /*!********************************************************************!*\
    !*** ./src/app/_helpers/Validators/OnAfterCurrentDateValidator.ts ***!
    \********************************************************************/

  /*! exports provided: afterCurrentDate */

  /***/
  function srcApp_helpersValidatorsOnAfterCurrentDateValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "afterCurrentDate", function () {
      return afterCurrentDate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function afterCurrentDate() {
      return function (control) {
        if (!control.valid) return null;
        var inputDate = new Date(control.value);
        inputDate.setHours(0, 0, 0, 0);
        var currentDate = new Date(Date.now());
        currentDate.setHours(0, 0, 0, 0);

        if (inputDate >= currentDate) {
          return {
            invalidDate: true
          };
        }

        return null;
      };
    }
    /***/

  },

  /***/
  "./src/app/_helpers/Validators/confirmPasswordMatchValidator.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/_helpers/Validators/confirmPasswordMatchValidator.ts ***!
    \**********************************************************************/

  /*! exports provided: confirmPasswordValidator */

  /***/
  function srcApp_helpersValidatorsConfirmPasswordMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function () {
      return confirmPasswordValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function confirmPasswordValidator(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/_helpers/auth.gaurd.ts":
  /*!****************************************!*\
    !*** ./src/app/_helpers/auth.gaurd.ts ***!
    \****************************************/

  /*! exports provided: AuthGaurd */

  /***/
  function srcApp_helpersAuthGaurdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGaurd", function () {
      return AuthGaurd;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");

    var AuthGaurd = /*#__PURE__*/function () {
      function AuthGaurd(router, authenticationService) {
        _classCallCheck(this, AuthGaurd);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGaurd, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          //indicating user is logged in 
          if (this.authenticationService.getLoggedInUser()) {
            return true;
          } //user is not logged in. navigate user to login page


          this.router.navigate(["/login"], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGaurd;
    }();

    AuthGaurd.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGaurd = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGaurd);
    /***/
  },

  /***/
  "./src/app/_helpers/jwt.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helpers/jwt.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: jwtInterceptor */

  /***/
  function srcApp_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jwtInterceptor", function () {
      return jwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");

    var jwtInterceptor = /*#__PURE__*/function () {
      function jwtInterceptor(authenticationService) {
        _classCallCheck(this, jwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(jwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          if (this.authenticationService.getLoggedInUser() && this.authenticationService.getLoggedInUser().token) {
            request = request.clone({
              setHeaders: {
                Authorization: 'Bearer ' + this.authenticationService.getLoggedInUser().token
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return jwtInterceptor;
    }();

    jwtInterceptor.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    jwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], jwtInterceptor);
    /***/
  },

  /***/
  "./src/app/_model/Comment.ts":
  /*!***********************************!*\
    !*** ./src/app/_model/Comment.ts ***!
    \***********************************/

  /*! exports provided: Comment */

  /***/
  function srcApp_modelCommentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comment", function () {
      return Comment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Comment = function Comment() {
      _classCallCheck(this, Comment);
    };
    /***/

  },

  /***/
  "./src/app/_model/accomplishment.ts":
  /*!******************************************!*\
    !*** ./src/app/_model/accomplishment.ts ***!
    \******************************************/

  /*! exports provided: Accomplishment */

  /***/
  function srcApp_modelAccomplishmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Accomplishment", function () {
      return Accomplishment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Accomplishment = function Accomplishment() {
      _classCallCheck(this, Accomplishment);
    };
    /***/

  },

  /***/
  "./src/app/_model/alert.ts":
  /*!*********************************!*\
    !*** ./src/app/_model/alert.ts ***!
    \*********************************/

  /*! exports provided: AlertType, Alert */

  /***/
  function srcApp_modelAlertTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return AlertType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AlertType;

    (function (AlertType) {
      AlertType[AlertType["warning"] = -1] = "warning";
      AlertType[AlertType["error"] = 0] = "error";
      AlertType[AlertType["success"] = 1] = "success";
    })(AlertType || (AlertType = {}));

    var Alert = function Alert() {
      _classCallCheck(this, Alert);
    };
    /***/

  },

  /***/
  "./src/app/_model/connection.ts":
  /*!**************************************!*\
    !*** ./src/app/_model/connection.ts ***!
    \**************************************/

  /*! exports provided: Connection */

  /***/
  function srcApp_modelConnectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Connection", function () {
      return Connection;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Connection = function Connection() {
      _classCallCheck(this, Connection);
    };
    /***/

  },

  /***/
  "./src/app/_model/domain.ts":
  /*!**********************************!*\
    !*** ./src/app/_model/domain.ts ***!
    \**********************************/

  /*! exports provided: Domain */

  /***/
  function srcApp_modelDomainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Domain", function () {
      return Domain;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Domain = function Domain() {
      _classCallCheck(this, Domain);
    };
    /***/

  },

  /***/
  "./src/app/_model/like.ts":
  /*!********************************!*\
    !*** ./src/app/_model/like.ts ***!
    \********************************/

  /*! exports provided: Like */

  /***/
  function srcApp_modelLikeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Like", function () {
      return Like;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Like = function Like() {
      _classCallCheck(this, Like);
    };
    /***/

  },

  /***/
  "./src/app/_model/loggedInUser.ts":
  /*!****************************************!*\
    !*** ./src/app/_model/loggedInUser.ts ***!
    \****************************************/

  /*! exports provided: LoogedInUser */

  /***/
  function srcApp_modelLoggedInUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoogedInUser", function () {
      return LoogedInUser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LoogedInUser = function LoogedInUser() {
      _classCallCheck(this, LoogedInUser);
    };
    /***/

  },

  /***/
  "./src/app/_model/portfolio.ts":
  /*!*************************************!*\
    !*** ./src/app/_model/portfolio.ts ***!
    \*************************************/

  /*! exports provided: Portfolio */

  /***/
  function srcApp_modelPortfolioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portfolio", function () {
      return Portfolio;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Portfolio = function Portfolio() {
      _classCallCheck(this, Portfolio);
    };
    /***/

  },

  /***/
  "./src/app/_model/post.ts":
  /*!********************************!*\
    !*** ./src/app/_model/post.ts ***!
    \********************************/

  /*! exports provided: Post */

  /***/
  function srcApp_modelPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Post = function Post() {
      _classCallCheck(this, Post);
    };
    /***/

  },

  /***/
  "./src/app/_model/uploadPost.ts":
  /*!**************************************!*\
    !*** ./src/app/_model/uploadPost.ts ***!
    \**************************************/

  /*! exports provided: UploadPost */

  /***/
  function srcApp_modelUploadPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadPost", function () {
      return UploadPost;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UploadPost = function UploadPost() {
      _classCallCheck(this, UploadPost);
    };
    /***/

  },

  /***/
  "./src/app/_model/user.ts":
  /*!********************************!*\
    !*** ./src/app/_model/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcApp_modelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/_services/alert.service.ts":
  /*!********************************************!*\
    !*** ./src/app/_services/alert.service.ts ***!
    \********************************************/

  /*! exports provided: AlertService */

  /***/
  function srcApp_servicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_components/alert/alert.component */
    "./src/app/_components/alert/alert.component.ts");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(dialog) {
        _classCallCheck(this, AlertService);

        this.dialog = dialog;
      }

      _createClass(AlertService, [{
        key: "generateAlert",
        value: function generateAlert(data) {
          var config = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          config.data = data;
          config.disableClose = true;
          this.dialog.open(_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], config);
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/assets/apiPaths */
    "./src/assets/apiPaths.ts");
    /* harmony import */


    var _model_loggedInUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_model/loggedInUser */
    "./src/app/_model/loggedInUser.ts");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        var loggedInUser = null;

        if (localStorage.getItem("loggedInUser")) {
          var user = JSON.parse(localStorage.getItem("loggedInUser"));
          loggedInUser = this.createLoggedInUserFromResponse(user);
        }

        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](loggedInUser);
      }

      _createClass(AuthenticationService, [{
        key: "createLoggedInUserFromResponse",
        value: function createLoggedInUserFromResponse(response) {
          var loggedInUser = new _model_loggedInUser__WEBPACK_IMPORTED_MODULE_5__["LoogedInUser"]();
          loggedInUser.email = response.user.email;
          loggedInUser.id = response.user._id;
          loggedInUser.token = response.token;
          return loggedInUser;
        }
      }, {
        key: "setLoggedInUser",
        value: function setLoggedInUser(response) {
          var loggedInUser = this.createLoggedInUserFromResponse(response);
          this.currentUserSubject.next(loggedInUser);
        }
      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var data = {
            email: email,
            password: password
          };
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_4__["ApiPaths"].getApiPath("login", undefined), data).toPromise();
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.currentUserSubject.next(null);
        }
      }, {
        key: "forgetPassword",
        value: function forgetPassword(email) {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_4__["ApiPaths"].getApiPath("forgetPassword", undefined), {
            email: email
          }).toPromise();
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/_services/feeds.service.ts":
  /*!********************************************!*\
    !*** ./src/app/_services/feeds.service.ts ***!
    \********************************************/

  /*! exports provided: FeedsService */

  /***/
  function srcApp_servicesFeedsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedsService", function () {
      return FeedsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/assets/apiPaths */
    "./src/assets/apiPaths.ts");
    /* harmony import */


    var _model_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_model/Comment */
    "./src/app/_model/Comment.ts");
    /* harmony import */


    var _model_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_model/domain */
    "./src/app/_model/domain.ts");
    /* harmony import */


    var _model_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_model/post */
    "./src/app/_model/post.ts");

    var FeedsService = /*#__PURE__*/function () {
      function FeedsService(http) {
        _classCallCheck(this, FeedsService);

        this.http = http;
      }

      _createClass(FeedsService, [{
        key: "getDomainFromResponse",
        value: function getDomainFromResponse(responseDomain) {
          var domain = new _model_domain__WEBPACK_IMPORTED_MODULE_5__["Domain"]();
          domain.id = responseDomain._id;
          domain.name = responseDomain.name;
          domain.description = responseDomain.description;
          return domain;
        }
      }, {
        key: "convertToPost",
        value: function convertToPost(postResponse) {
          var post = new _model_post__WEBPACK_IMPORTED_MODULE_6__["Post"]();
          post.id = postResponse._id;
          post.title = postResponse.title;
          post.description = postResponse.description;
          post.likes = postResponse.likes;
          post.userLike = postResponse.user_like;
          post.portfolio = postResponse.portfolio;
          post.filenames = postResponse.filenames;
          post.domainIds = postResponse.domain_ids;
          post.parentPost = postResponse.parentPost;
          post.owner = postResponse.owner;
          post.createdAt = postResponse.createdAt;
          post.profilePicUrl = postResponse.profilePicUrl;
          post.contentType = postResponse.contentType;
          return post;
        }
      }, {
        key: "getCommentFromResponse",
        value: function getCommentFromResponse(response) {
          var comment = new _model_Comment__WEBPACK_IMPORTED_MODULE_4__["Comment"]();
          comment.id = response.id;
          comment.comment = response.comment;
          comment.createdAt = new Date(response.createdAt);
          comment.likes = response.likes;
          comment.owner = response.owner;
          comment.owner_name = response.owner_name;
          comment.owner_pic = response.owner_pic;
          comment.post_id = response.post_id;
          comment.user_like = response.user_Like;
          return comment;
        }
      }, {
        key: "getAllDomains",
        value: function getAllDomains() {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("getAllDomains", undefined)).toPromise();
        }
      }, {
        key: "getPostsByDomainId",
        value: function getPostsByDomainId(domain) {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("postByDomainId", domain.id)).toPromise();
        }
      }, {
        key: "getAllPost",
        value: function getAllPost() {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("allPost", undefined)).toPromise();
        }
      }, {
        key: "increaseLikes",
        value: function increaseLikes(data) {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("increaseLike", undefined), data).toPromise();
        }
      }, {
        key: "getComments",
        value: function getComments(postId) {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath('getComments', postId)).toPromise();
        }
      }, {
        key: "postComment",
        value: function postComment(comment, postId) {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath('postComment', undefined), {
            comment: comment,
            post_id: postId
          }).toPromise();
        }
      }, {
        key: "getAllUserPosts",
        value: function getAllUserPosts() {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath('getAllUserPosts', undefined)).toPromise();
        }
      }, {
        key: "updatePostByPostId",
        value: function updatePostByPostId(postId, data) {
          debugger;
          return this.http.patch(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("upadatePostByPostId", postId), data).toPromise();
        }
      }, {
        key: "deletePostsByPostId",
        value: function deletePostsByPostId(postId) {
          return this.http["delete"](src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("deletePostByPostId", postId)).toPromise();
        }
      }]);

      return FeedsService;
    }();

    FeedsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    FeedsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], FeedsService);
    /***/
  },

  /***/
  "./src/app/_services/portfolio.service.ts":
  /*!************************************************!*\
    !*** ./src/app/_services/portfolio.service.ts ***!
    \************************************************/

  /*! exports provided: PortfolioService */

  /***/
  function srcApp_servicesPortfolioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioService", function () {
      return PortfolioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");
    /* harmony import */


    var _components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_components/portfolio-modal/portfolio-modal.component */
    "./src/app/_components/portfolio-modal/portfolio-modal.component.ts");
    /* harmony import */


    var _model_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_model/portfolio */
    "./src/app/_model/portfolio.ts");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var _feeds_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./feeds.service */
    "./src/app/_services/feeds.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");

    var PortfolioService = /*#__PURE__*/function () {
      function PortfolioService(modal, userService, feedsService, alertService) {
        _classCallCheck(this, PortfolioService);

        this.modal = modal;
        this.userService = userService;
        this.feedsService = feedsService;
        this.alertService = alertService;
      }

      _createClass(PortfolioService, [{
        key: "formPortfolio",
        value: function formPortfolio(response) {
          var portfolio = new _model_portfolio__WEBPACK_IMPORTED_MODULE_5__["Portfolio"]();
          portfolio.basicDetails = this.userService.formUserFromResponse(response.user);
          portfolio.isFollowing = response.isFollowing;
          portfolio.isSameUser = response.isSameUser;
          portfolio.posts = null;
          portfolio.totalFollowers = response.totalFollowers;
          portfolio.totalFollowing = response.totalFollowing;
          portfolio.totalLikes = response.totalLikes;
          portfolio.domains = new Array();

          for (var idx in response.domains) {
            portfolio.domains.push(this.feedsService.getDomainFromResponse(response.domains[idx]));
          }

          portfolio.posts = new Array();

          for (var _idx in response.portfolioPosts) {
            portfolio.posts.push(this.feedsService.convertToPost(response.portfolioPosts[_idx]));
          }

          return portfolio;
        }
      }, {
        key: "generatePortfolioView",
        value: function generatePortfolioView(userId) {
          var _this6 = this;

          this.userService.getUserPortFolio(userId).then(function (response) {
            _this6.portfolio = _this6.formPortfolio(response);
            console.log(_this6.portfolio);
            var modalConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            modalConfig.data = _this6.portfolio;
            modalConfig.minHeight = "500px";
            modalConfig.width = "80%";

            _this6.modal.open(_components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioModalComponent"], modalConfig);
          })["catch"](function (error) {
            _this6.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_3__["AlertMessage"].getAletMessage('PortfolioDisplayError'));
          })["finally"](function () {});
        }
      }]);

      return PortfolioService;
    }();

    PortfolioService.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }, {
        type: _feeds_service__WEBPACK_IMPORTED_MODULE_7__["FeedsService"]
      }, {
        type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }];
    };

    PortfolioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PortfolioService);
    /***/
  },

  /***/
  "./src/app/_services/post-detail.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/post-detail.service.ts ***!
    \**************************************************/

  /*! exports provided: PostDetailService */

  /***/
  function srcApp_servicesPostDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailService", function () {
      return PostDetailService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_components/post-detail/post-detail.component */
    "./src/app/_components/post-detail/post-detail.component.ts");
    /* harmony import */


    var _feeds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./feeds.service */
    "./src/app/_services/feeds.service.ts");

    var PostDetailService = /*#__PURE__*/function () {
      function PostDetailService(modal, feedsService) {
        _classCallCheck(this, PostDetailService);

        this.modal = modal;
        this.feedsService = feedsService;
      }

      _createClass(PostDetailService, [{
        key: "generateDetailView",
        value: function generateDetailView(post) {
          var _this7 = this;

          this.feedsService.getComments(post.id).then(function (response) {
            var comments = new Array();

            for (var idx in response) {
              var comment = _this7.feedsService.getCommentFromResponse(response[idx]);

              comments.push(comment);
            }

            var modalConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            modalConfig.width = '90%';
            modalConfig.height = '80%';
            modalConfig.data = {
              post: post,
              comments: comments
            };

            _this7.modal.open(_components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__["PostDetailComponent"], modalConfig);
          })["catch"](function (error) {
            console.log(error);
          })["finally"]();
        }
      }]);

      return PostDetailService;
    }();

    PostDetailService.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _feeds_service__WEBPACK_IMPORTED_MODULE_4__["FeedsService"]
      }];
    };

    PostDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostDetailService);
    /***/
  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/assets/apiPaths */
    "./src/assets/apiPaths.ts");
    /* harmony import */


    var _model_accomplishment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_model/accomplishment */
    "./src/app/_model/accomplishment.ts");
    /* harmony import */


    var _model_connection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_model/connection */
    "./src/app/_model/connection.ts");
    /* harmony import */


    var _model_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_model/user */
    "./src/app/_model/user.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getUserDataFromRegistrationForm",
        value: function getUserDataFromRegistrationForm(registerForm) {
          var user = new _model_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
          user.name = registerForm.get('name').value;
          user.email = registerForm.get('email').value;
          user.password = registerForm.get('pass').value;
          user.dob = registerForm.get('dob').value;
          return user;
        }
      }, {
        key: "formConnection",
        value: function formConnection(response) {
          var connection = new _model_connection__WEBPACK_IMPORTED_MODULE_5__["Connection"]();
          connection.id = response._id;
          connection.name = response.name;
          connection.email = response.email;
          connection.profilePicUrl = response.profilePicUrl;
          connection.following = response.following;
          return connection;
        }
      }, {
        key: "formAccomplishmentFromResponse",
        value: function formAccomplishmentFromResponse(response) {
          console.log(response);
          var accomplishment = new _model_accomplishment__WEBPACK_IMPORTED_MODULE_4__["Accomplishment"]();
          accomplishment.id = response._id;
          accomplishment.title = response.title;
          accomplishment.description = response.description;
          accomplishment.date = response.date;
          return accomplishment;
        }
      }, {
        key: "formUserFromResponse",
        value: function formUserFromResponse(response) {
          var user = new _model_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
          user.id = response._id;
          user.name = response.name;
          user.email = response.email;
          user.dob = response.dob;
          user.addressLine1 = response.addressLine1;
          user.state = response.state;
          user.country = response.country;
          user.mobileNumber = response.mobileNumber;
          user.domain_ids = response.domain_ids;
          user.profilePicUrl = response.profilePicUrl;
          user.accomplishments = new Array();

          for (var idx in response.accomplishments) {
            user.accomplishments.push(this.formAccomplishmentFromResponse(response.accomplishments[idx]));
          }

          return user;
        }
      }, {
        key: "registerUser",
        value: function registerUser(registerForm) {
          var user = this.getUserDataFromRegistrationForm(registerForm);
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("registerUser", undefined), user).toPromise();
        }
      }, {
        key: "searchConnections",
        value: function searchConnections(searchString) {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("searchConnections", searchString)).toPromise();
        }
      }, {
        key: "unfollow",
        value: function unfollow(userId) {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("unfollow", userId), null).toPromise();
        }
      }, {
        key: "follow",
        value: function follow(userId) {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("follow", userId), null).toPromise();
        }
      }, {
        key: "searchFolloweeConnections",
        value: function searchFolloweeConnections() {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("getFollowees", undefined)).toPromise();
        }
      }, {
        key: "searchFollowerConnections",
        value: function searchFollowerConnections() {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("getFollowers", undefined)).toPromise();
        }
      }, {
        key: "updateUser",
        value: function updateUser(data) {
          return this.http.patch(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("updateUser", undefined), data).toPromise();
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("getUserDetails", undefined)).toPromise();
        }
      }, {
        key: "getUserInterests",
        value: function getUserInterests() {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("getUserInterests", undefined)).toPromise();
        }
      }, {
        key: "fileUpload",
        value: function fileUpload(formData) {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("fileUpload", undefined), formData).toPromise();
        }
      }, {
        key: "uploadPost",
        value: function uploadPost(data) {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("uploadPost", undefined), data).toPromise();
        }
      }, {
        key: "profilePicUpload",
        value: function profilePicUpload(formData) {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("profilePicUpload", undefined), formData).toPromise();
        }
      }, {
        key: "logoutAllSessions",
        value: function logoutAllSessions() {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("logoutAllSession", undefined), null).toPromise();
        }
      }, {
        key: "logoutSession",
        value: function logoutSession() {
          return this.http.post(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("logout", undefined), null).toPromise();
        }
      }, {
        key: "getUserPortFolio",
        value: function getUserPortFolio(userId) {
          return this.http.get(src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_3__["ApiPaths"].getApiPath("getUserPortfolio", userId)).toPromise();
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/app-components/forget-password/forget-password.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/app-components/forget-password/forget-password.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsForgetPasswordForgetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-content{\n    color : blue;\n    text-align: center;\n}\n\n.contain-footer{\n    margin-top: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb21wb25lbnRzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGVudHtcbiAgICBjb2xvciA6IGJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbi1mb290ZXJ7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app-components/forget-password/forget-password.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/app-components/forget-password/forget-password.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ForgetPasswordComponent */

  /***/
  function srcAppAppComponentsForgetPasswordForgetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
      return ForgetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var ForgetPasswordComponent = /*#__PURE__*/function () {
      function ForgetPasswordComponent(authenticationService, alerService) {
        _classCallCheck(this, ForgetPasswordComponent);

        this.authenticationService = authenticationService;
        this.alerService = alerService;
        this.loading = false;
      }

      _createClass(ForgetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
          });
        }
      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this8 = this;

          if (!this.forgetPasswordForm.valid) return false;
          this.loading = true;
          var updatePassPromise = this.authenticationService.forgetPassword(this.forgetPasswordForm.get('email').value);
          updatePassPromise.then(function (response) {
            _this8.alerService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage('forgetPasswordSuccess'));
          })["catch"](function (error) {
            _this8.alerService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage('forgetPasswordError'));
          })["finally"](function () {
            _this8.loading = false;
          });
        }
      }]);

      return ForgetPasswordComponent;
    }();

    ForgetPasswordComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forget-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/forget-password/forget-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forget-password.component.css */
      "./src/app/app-components/forget-password/forget-password.component.css"))["default"]]
    })], ForgetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/app-components/login/login.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/app-components/login/login.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-content{\n    color : blue;\n    text-align: center;\n}\n\n.contain-footer{\n    margin-top: 2rem;\n}\n\n.mt-3{\n    margin-top: 1rem;\n}\n\n.error{\n    color : red;\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLWNvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGVudHtcbiAgICBjb2xvciA6IGJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbi1mb290ZXJ7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm10LTN7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmVycm9ye1xuICAgIGNvbG9yIDogcmVkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app-components/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/app-components/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authenticationService, router, route, alertService) {
        _classCallCheck(this, LoginComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.loading = false; //If user is already logged in then redirect to home page

        if (this.authenticationService.getLoggedInUser()) {
          this.router.navigate(["/"]);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "login",
        value: function login() {
          var _this9 = this;

          if (!this.loginForm.valid) return false;
          this.loading = true;
          var loginPromise = this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
          loginPromise.then(function (response) {
            localStorage.setItem("loggedInUser", JSON.stringify(response));

            _this9.authenticationService.setLoggedInUser(response);

            _this9.router.navigate([_this9.returnUrl]);
          })["catch"](function (error) {
            debugger;

            _this9.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_6__["AlertMessage"].getAletMessage('invalidLogin'));

            _this9.loading = false;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/app-components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/app-components/register-user/register-user.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/app-components/register-user/register-user.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsRegisterUserRegisterUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-content{\n    color : blue;\n    text-align: center;\n}\n\n.contain-footer{\n    margin-top: 2rem;\n}\n\np {\n    font-family: Lato;\n  }\n\nimg {\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n  }\n\n.hoverable{\n    position: relative;\n    display: block;\n    cursor: pointer;\n    height: 200px;\n    width: 200px;\n    border: 5px solid #000;\n    border-radius: 50%;\n  }\n\n.hoverable .hover-text{\n    position: absolute;\n    display: none;\n    top: 50%;\n    left:  50%;\n    transform: translate(-50%,-50%);   \n    z-index: 2;\n  }\n\n.hoverable .background{\n    position: absolute;\n    display: none;\n    top: 0;\n    left:  0;\n    bottom: 0;\n    right: 0;\n    background-color:rgba(255, 255, 255, 0.5);\n    pointer-events: none;\n    border-radius: 50%;\n    z-index: 1;\n  }\n\n.hoverable:hover .hover-text{\n    display: block;\n  }\n\n.hoverable:hover .background{\n    display: block;\n  }\n\n#fileInput{\n    display: none;\n  }\n\n.error{\n    color: red;\n    font-size: small;\n  }\n\n.mt-3{\n    margin-top : 1rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvcmVnaXN0ZXItdXNlci9yZWdpc3Rlci11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLHlDQUF5QztJQUN6QyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGNBQWM7RUFDaEI7O0FBQ0E7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb21wb25lbnRzL3JlZ2lzdGVyLXVzZXIvcmVnaXN0ZXItdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250ZW50e1xuICAgIGNvbG9yIDogYmx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluLWZvb3RlcntcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgfVxuICBcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5ob3ZlcmFibGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAuaG92ZXJhYmxlIC5ob3Zlci10ZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6ICA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgICBcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5ob3ZlcmFibGUgLmJhY2tncm91bmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6ICAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAuaG92ZXJhYmxlOmhvdmVyIC5ob3Zlci10ZXh0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ob3ZlcmFibGU6aG92ZXIgLmJhY2tncm91bmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gICNmaWxlSW5wdXR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cblxuICAubXQtM3tcbiAgICBtYXJnaW4tdG9wIDogMXJlbTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app-components/register-user/register-user.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/app-components/register-user/register-user.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RegisterUserComponent */

  /***/
  function srcAppAppComponentsRegisterUserRegisterUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function () {
      return RegisterUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_Validators_OnAfterCurrentDateValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_helpers/Validators/OnAfterCurrentDateValidator */
    "./src/app/_helpers/Validators/OnAfterCurrentDateValidator.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");
    /* harmony import */


    var _helpers_Validators_confirmPasswordMatchValidator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../_helpers/Validators/confirmPasswordMatchValidator */
    "./src/app/_helpers/Validators/confirmPasswordMatchValidator.ts");

    var RegisterUserComponent = /*#__PURE__*/function () {
      function RegisterUserComponent(userService, alertService, datePipe) {
        _classCallCheck(this, RegisterUserComponent);

        this.userService = userService;
        this.alertService = alertService;
        this.datePipe = datePipe;
        this.loading = false;
      }

      _createClass(RegisterUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z][a-zA-Z\\s]+$")]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_app_helpers_Validators_OnAfterCurrentDateValidator__WEBPACK_IMPORTED_MODULE_4__["afterCurrentDate"]]),
            'pass': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^.{8,}$")]),
            'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'profilePicUrl': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [])
          });
          this.registerForm.setValidators(Object(_helpers_Validators_confirmPasswordMatchValidator__WEBPACK_IMPORTED_MODULE_8__["confirmPasswordValidator"])('pass', 'confirmPassword'));
        }
      }, {
        key: "register",
        value: function register() {
          var _this10 = this;

          if (!this.registerForm.valid) return false;
          this.loading = true;
          var formData = new FormData();
          formData.append('file', this.profilePic);
          this.userService.profilePicUpload(formData).then(function (response) {
            _this10.registerForm.get('profilePicUrl').setValue(response.file.filename);

            var registrationPromise = _this10.userService.registerUser(_this10.registerForm);

            registrationPromise.then(function (response) {
              _this10.registerForm.reset();

              for (var idx in _this10.registerForm.controls) {
                _this10.registerForm.controls[idx].setErrors(null);
              }

              _this10.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('registrationSuccess'));
            })["catch"](function (error) {
              _this10.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('registrationError'));
            });
          })["catch"](function (error) {
            _this10.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('fileUploadError'));
          })["finally"](function () {
            _this10.loading = false;
          });
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          if (event.target.files && event.target.files[0]) {
            this.profilePic = event.target.files[0];
          }
        }
      }, {
        key: "getSource",
        value: function getSource() {
          return '../../assets/images/default_profile_pic.png';
        }
      }]);

      return RegisterUserComponent;
    }();

    RegisterUserComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }];
    };

    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-register-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/register-user/register-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-user.component.css */
      "./src/app/app-components/register-user/register-user.component.css"))["default"]]
    })], RegisterUserComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/connections/connections.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/app-components/user/connections/connections.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserConnectionsConnectionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    min-height : 80vh;\n}\n\n.router-content{\n    width: 150vh;\n}\n\na.nav-link{\n    font-size: small;\n    font-weight: bold;\n    padding-left : 0px;\n    \n}\n\nli.nav-item:hover{\n    border-bottom: 1px solid lightblue;\n    cursor: pointer;\n}\n\n.btn{\n    border-radius: 50%;\n}\n\n.btn.next{\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci9jb25uZWN0aW9ucy9jb25uZWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29tcG9uZW50cy91c2VyL2Nvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi1oZWlnaHQgOiA4MHZoO1xufVxuXG4ucm91dGVyLWNvbnRlbnR7XG4gICAgd2lkdGg6IDE1MHZoO1xufVxuXG5cbmEubmF2LWxpbmt7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQgOiAwcHg7XG4gICAgXG59XG5cbmxpLm5hdi1pdGVtOmhvdmVye1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJ0bi5uZXh0e1xuICAgIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app-components/user/connections/connections.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/app-components/user/connections/connections.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ConnectionsComponent */

  /***/
  function srcAppAppComponentsUserConnectionsConnectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionsComponent", function () {
      return ConnectionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConnectionsComponent = /*#__PURE__*/function () {
      function ConnectionsComponent() {
        _classCallCheck(this, ConnectionsComponent);
      }

      _createClass(ConnectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConnectionsComponent;
    }();

    ConnectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-connections',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./connections.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/connections.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./connections.component.css */
      "./src/app/app-components/user/connections/connections.component.css"))["default"]]
    })], ConnectionsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/connections/follower/follower.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/app-components/user/connections/follower/follower.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserConnectionsFollowerFollowerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb21wb25lbnRzL3VzZXIvY29ubmVjdGlvbnMvZm9sbG93ZXIvZm9sbG93ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app-components/user/connections/follower/follower.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/app-components/user/connections/follower/follower.component.ts ***!
    \********************************************************************************/

  /*! exports provided: FollowerComponent */

  /***/
  function srcAppAppComponentsUserConnectionsFollowerFollowerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowerComponent", function () {
      return FollowerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var FollowerComponent = /*#__PURE__*/function () {
      function FollowerComponent(userService, alertService) {
        _classCallCheck(this, FollowerComponent);

        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.searchGroupContentCount = 0;
        this.connections = new Array();
        this.groupCount = 3;
      }

      _createClass(FollowerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchConnections();
        }
      }, {
        key: "searchConnections",
        value: function searchConnections() {
          var _this11 = this;

          this.loading = true;
          var searchPromise = this.userService.searchFollowerConnections();
          searchPromise.then(function (response) {
            _this11.processing = new Array(response.followers.length);

            if (response.followers.length % _this11.groupCount == 0) {
              _this11.searchGroupContentCount = response.followers.length / _this11.groupCount;
            } else {
              _this11.searchGroupContentCount = Math.floor(response.followers.length / _this11.groupCount) + 1;
            }

            _this11.connections = new Array();

            for (var idx in response.followers) {
              var connection = _this11.userService.formConnection(response.followers[idx]);

              _this11.connections.push(connection);
            }
          })["catch"](function (error) {
            _this11.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage('searchConnectionError'));
          })["finally"](function () {
            _this11.loading = false;
          });
        }
      }, {
        key: "counter",
        value: function counter(end) {
          return new Array(end).fill(0).map(function (val, idx) {
            return idx;
          });
        }
      }, {
        key: "connectionAction",
        value: function connectionAction(connection, idx) {
          var _this12 = this;

          if (this.connections[idx].following) {
            this.processing[idx] = true;
            this.userService.unfollow(this.connections[idx].id).then(function (response) {
              _this12.connections[idx].following = !_this12.connections[idx].following;
            })["catch"](function (error) {
              _this12.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage('updateConnectionError'));
            })["finally"](function () {
              _this12.processing[idx] = false;
            });
          } else {
            this.processing[idx] = true;
            this.userService.follow(this.connections[idx].id).then(function (response) {
              _this12.connections[idx].following = !_this12.connections[idx].following;
            })["catch"](function (error) {
              _this12.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage('updateConnectionError'));
            })["finally"](function () {
              _this12.processing[idx] = false;
            });
          }
        }
      }]);

      return FollowerComponent;
    }();

    FollowerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    FollowerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-follower',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./follower.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/follower/follower.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./follower.component.css */
      "./src/app/app-components/user/connections/follower/follower.component.css"))["default"]]
    })], FollowerComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/connections/following/following.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/app-components/user/connections/following/following.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserConnectionsFollowingFollowingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb21wb25lbnRzL3VzZXIvY29ubmVjdGlvbnMvZm9sbG93aW5nL2ZvbGxvd2luZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app-components/user/connections/following/following.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/app-components/user/connections/following/following.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: FollowingComponent */

  /***/
  function srcAppAppComponentsUserConnectionsFollowingFollowingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowingComponent", function () {
      return FollowingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var FollowingComponent = /*#__PURE__*/function () {
      function FollowingComponent(userService, alertService) {
        _classCallCheck(this, FollowingComponent);

        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.searchGroupContentCount = 0;
        this.connections = new Array();
        this.groupCount = 3;
      }

      _createClass(FollowingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchConnections();
        }
      }, {
        key: "searchConnections",
        value: function searchConnections() {
          var _this13 = this;

          this.loading = true;
          var searchPromise = this.userService.searchFolloweeConnections();
          searchPromise.then(function (response) {
            console.log(response.followees);
            _this13.processing = new Array(response.followees.length);

            if (response.followees.length % _this13.groupCount == 0) {
              _this13.searchGroupContentCount = response.followees.length / _this13.groupCount;
            } else {
              _this13.searchGroupContentCount = Math.floor(response.followees.length / _this13.groupCount) + 1;
            }

            _this13.connections = new Array();

            for (var idx in response.followees) {
              var connection = _this13.userService.formConnection(response.followees[idx]);

              _this13.connections.push(connection);
            }
          })["catch"](function (error) {
            _this13.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage('searchConnectionError'));
          })["finally"](function () {
            _this13.loading = false;
          });
        }
      }, {
        key: "counter",
        value: function counter(end) {
          return new Array(end).fill(0).map(function (val, idx) {
            return idx;
          });
        }
      }, {
        key: "connectionAction",
        value: function connectionAction(connection, idx) {
          var _this14 = this;

          if (this.connections[idx].following) {
            this.processing[idx] = true;
            this.userService.unfollow(this.connections[idx].id).then(function (response) {
              _this14.connections[idx].following = !_this14.connections[idx].following;
            })["catch"](function (error) {
              _this14.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage('updateConnectionError'));
            })["finally"](function () {
              _this14.processing[idx] = false;
            });
          } else {
            this.processing[idx] = true;
            this.userService.follow(this.connections[idx].id).then(function (response) {
              _this14.connections[idx].following = !_this14.connections[idx].following;
            })["catch"](function (error) {
              _this14.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage('updateConnectionError'));
            })["finally"](function () {
              _this14.processing[idx] = false;
            });
          }
        }
      }]);

      return FollowingComponent;
    }();

    FollowingComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    FollowingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-following',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./following.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/following/following.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./following.component.css */
      "./src/app/app-components/user/connections/following/following.component.css"))["default"]]
    })], FollowingComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/connections/new-connections/new-connections.component.css":
  /*!***********************************************************************************************!*\
    !*** ./src/app/app-components/user/connections/new-connections/new-connections.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserConnectionsNewConnectionsNewConnectionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-4{\n    padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci9jb25uZWN0aW9ucy9uZXctY29ubmVjdGlvbnMvbmV3LWNvbm5lY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29tcG9uZW50cy91c2VyL2Nvbm5lY3Rpb25zL25ldy1jb25uZWN0aW9ucy9uZXctY29ubmVjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtNHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app-components/user/connections/new-connections/new-connections.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/app-components/user/connections/new-connections/new-connections.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: NewConnectionsComponent */

  /***/
  function srcAppAppComponentsUserConnectionsNewConnectionsNewConnectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewConnectionsComponent", function () {
      return NewConnectionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var NewConnectionsComponent = /*#__PURE__*/function () {
      function NewConnectionsComponent(userService, alertService) {
        _classCallCheck(this, NewConnectionsComponent);

        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.searchGroupContentCount = 0;
        this.connections = new Array();
        this.groupCount = 3;
      }

      _createClass(NewConnectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'search': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "searchConnections",
        value: function searchConnections() {
          var _this15 = this;

          if (!this.searchForm.valid) {
            return false;
          }

          this.loading = true;
          var searchPromise = this.userService.searchConnections(this.searchForm.get('search').value);
          searchPromise.then(function (response) {
            _this15.processing = new Array(response.userSearchResult.length);

            if (response.userSearchResult.length % _this15.groupCount == 0) {
              _this15.searchGroupContentCount = response.userSearchResult.length / _this15.groupCount;
            } else {
              _this15.searchGroupContentCount = Math.floor(response.userSearchResult.length / _this15.groupCount) + 1;
            }

            _this15.connections = new Array();

            for (var idx in response.userSearchResult) {
              var connection = _this15.userService.formConnection(response.userSearchResult[idx]);

              _this15.connections.push(connection);
            }
          })["catch"](function (error) {
            _this15.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage('searchConnectionError'));
          })["finally"](function () {
            _this15.loading = false;
          });
        }
      }, {
        key: "counter",
        value: function counter(end) {
          return new Array(end).fill(0).map(function (val, idx) {
            return idx;
          });
        }
      }, {
        key: "connectionAction",
        value: function connectionAction(connection, idx) {
          var _this16 = this;

          if (this.connections[idx].following) {
            this.processing[idx] = true;
            this.userService.unfollow(this.connections[idx].id).then(function (response) {
              _this16.connections[idx].following = !_this16.connections[idx].following;
            })["catch"](function (error) {
              _this16.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage('updateConnectionError'));
            })["finally"](function () {
              _this16.processing[idx] = false;
            });
          } else {
            this.processing[idx] = true;
            this.userService.follow(this.connections[idx].id).then(function (response) {
              _this16.connections[idx].following = !_this16.connections[idx].following;
            })["catch"](function (error) {
              _this16.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage('updateConnectionError'));
            })["finally"](function () {
              _this16.processing[idx] = false;
            });
          }
        }
      }]);

      return NewConnectionsComponent;
    }();

    NewConnectionsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    NewConnectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-connections',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-connections.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/connections/new-connections/new-connections.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-connections.component.css */
      "./src/app/app-components/user/connections/new-connections/new-connections.component.css"))["default"]]
    })], NewConnectionsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/feeds/feeds.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/app-components/user/feeds/feeds.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserFeedsFeedsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    min-height : 80vh;\n}\n\n\na.nav-link{\n    font-size: small;\n    font-weight: bold;\n    padding-left : 0px;\n    \n}\n\n\nli.nav-item:hover{\n    border-bottom: 1px solid lightblue;\n    cursor: pointer;\n}\n\n\n.btn{\n    border-radius: 50%;\n}\n\n\n.btn.next{\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci9mZWVkcy9mZWVkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7OztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29tcG9uZW50cy91c2VyL2ZlZWRzL2ZlZWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi1oZWlnaHQgOiA4MHZoO1xufVxuXG5cbmEubmF2LWxpbmt7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQgOiAwcHg7XG4gICAgXG59XG5cbmxpLm5hdi1pdGVtOmhvdmVye1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJ0bi5uZXh0e1xuICAgIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app-components/user/feeds/feeds.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/app-components/user/feeds/feeds.component.ts ***!
    \**************************************************************/

  /*! exports provided: FeedsComponent */

  /***/
  function srcAppAppComponentsUserFeedsFeedsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedsComponent", function () {
      return FeedsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_model_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_model/domain */
    "./src/app/_model/domain.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/feeds.service */
    "./src/app/_services/feeds.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var FeedsComponent = /*#__PURE__*/function () {
      function FeedsComponent(feedsService, alertService) {
        _classCallCheck(this, FeedsComponent);

        this.feedsService = feedsService;
        this.alertService = alertService;
        this.currentIndex = 0;
        this.domainLoading = false;
        this.postsLoading = false;
        this.domains = new Array();
        this.posts = new Array();
        var allDOmain = new src_app_model_domain__WEBPACK_IMPORTED_MODULE_2__["Domain"]();
        allDOmain.name = "All";
        this.domains.push(allDOmain);
      }

      _createClass(FeedsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.currentIndex = 0;
          this.domainLoading = true;
          this.postsLoading = true;
          var domainPromise = this.feedsService.getAllDomains();
          domainPromise.then(function (response) {
            for (var idx in response) {
              var domain = _this17.feedsService.getDomainFromResponse(response[idx]);

              _this17.domains.push(domain);
            }

            _this17.loadPosts(0);
          })["catch"](function (error) {
            _this17.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage('serverDataFetchError'));
          })["finally"](function () {
            _this17.domainLoading = false;
          });
        }
      }, {
        key: "loadPosts",
        value: function loadPosts(idx) {
          var _this18 = this;

          this.postsLoading = true;
          this.posts = new Array();

          if (idx != 0) {
            this.feedsService.getPostsByDomainId(this.domains[idx]).then(function (response) {
              for (var _idx2 in response) {
                var post = _this18.feedsService.convertToPost(response[_idx2]);

                _this18.posts.push(post);
              }
            })["catch"](function (error) {
              _this18.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage('serverDataFetchError'));
            })["finally"](function () {
              _this18.postsLoading = false;
            });
          } else {
            this.feedsService.getAllPost().then(function (response) {
              for (var _idx3 in response) {
                var post = _this18.feedsService.convertToPost(response[_idx3]);

                _this18.posts.push(post);
              }
            })["catch"](function (error) {
              _this18.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage('serverDataFetchError'));
            })["finally"](function () {
              _this18.postsLoading = false;
            });
          }
        }
      }, {
        key: "movePrevious",
        value: function movePrevious() {
          if (this.currentIndex == 0) return;
          this.currentIndex = this.currentIndex - 1;
        }
      }, {
        key: "moveNext",
        value: function moveNext() {
          if (this.currentIndex == this.posts.length - 2 || this.currentIndex == this.posts.length - 1) return;
          this.currentIndex = this.currentIndex + 1;
        }
      }]);

      return FeedsComponent;
    }();

    FeedsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_4__["FeedsService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    FeedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feeds',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feeds.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/feeds/feeds.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feeds.component.css */
      "./src/app/app-components/user/feeds/feeds.component.css"))["default"]]
    })], FeedsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/accomplishments/accomplishments.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/app-components/user/profile/accomplishments/accomplishments.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserProfileAccomplishmentsAccomplishmentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "textarea{\n    height : 100px\n}\n\nhr.accomplishment-line{\n    margin-top : 0.25rem;\n    margin-bottom : 0.25rem;\n}\n\n.operation-section{\n    float: right;\n}\n\nsvg{\n    margin : 3px\n}\n\n.bi-trash-fill{\n    color : red\n}\n\n.bi-pencil-fill{\n    color : green\n}\n\n.date-section{\n    font-size: small;\n    color: gray;\n}\n\nh6{\n    font-weight: bold;\n}\n\n.accomplishment-description{\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci9wcm9maWxlL2FjY29tcGxpc2htZW50cy9hY2NvbXBsaXNobWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvYWNjb21wbGlzaG1lbnRzL2FjY29tcGxpc2htZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWF7XG4gICAgaGVpZ2h0IDogMTAwcHhcbn1cblxuaHIuYWNjb21wbGlzaG1lbnQtbGluZXtcbiAgICBtYXJnaW4tdG9wIDogMC4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tIDogMC4yNXJlbTtcbn1cblxuLm9wZXJhdGlvbi1zZWN0aW9ue1xuICAgIGZsb2F0OiByaWdodDtcbn1cbnN2Z3tcbiAgICBtYXJnaW4gOiAzcHhcbn1cblxuLmJpLXRyYXNoLWZpbGx7XG4gICAgY29sb3IgOiByZWRcbn1cblxuLmJpLXBlbmNpbC1maWxse1xuICAgIGNvbG9yIDogZ3JlZW5cbn1cblxuLmRhdGUtc2VjdGlvbntcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG5oNntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFjY29tcGxpc2htZW50LWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/accomplishments/accomplishments.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/app-components/user/profile/accomplishments/accomplishments.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: AccomplishmentsComponent */

  /***/
  function srcAppAppComponentsUserProfileAccomplishmentsAccomplishmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccomplishmentsComponent", function () {
      return AccomplishmentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_model_accomplishment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_model/accomplishment */
    "./src/app/_model/accomplishment.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var AccomplishmentsComponent = /*#__PURE__*/function () {
      function AccomplishmentsComponent(userService, datepipe, alertService) {
        _classCallCheck(this, AccomplishmentsComponent);

        this.userService = userService;
        this.datepipe = datepipe;
        this.alertService = alertService;
        this.addingAccomplishment = false;
        this.loading = false;
        this.accomplishments = new Array();
      }

      _createClass(AccomplishmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.accomplishmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'accomplishmentDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
          this.loading = true;
          this.userService.getUserDetails().then(function (response) {
            debugger;

            var user = _this19.userService.formUserFromResponse(response);

            _this19.accomplishments = user.accomplishments;
          })["catch"](function (error) {
            _this19.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('serverDataFetchError'));
          })["finally"](function () {
            _this19.loading = false;
          });
        }
      }, {
        key: "addAccomplishment",
        value: function addAccomplishment() {
          var accomplishmentToBeSaved = Array.from(this.accomplishments);
          this.addingAccomplishment = true;
          var accomplishment = new src_app_model_accomplishment__WEBPACK_IMPORTED_MODULE_4__["Accomplishment"]();
          accomplishment.title = this.accomplishmentForm.get('title').value;
          accomplishment.description = this.accomplishmentForm.get('description').value;
          accomplishment.date = new Date(this.accomplishmentForm.get('accomplishmentDate').value);
          accomplishmentToBeSaved.push(accomplishment);
          this.saveAccomplishment(accomplishmentToBeSaved);
        }
      }, {
        key: "saveAccomplishment",
        value: function saveAccomplishment(accomplishmentToBeSaved) {
          var _this20 = this;

          this.userService.updateUser({
            'accomplishments': accomplishmentToBeSaved
          }).then(function (response) {
            _this20.accomplishments = Array.from(accomplishmentToBeSaved);

            _this20.accomplishmentForm.reset();
          })["catch"](function (error) {
            _this20.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('accomplishmentSaveError'));
          })["finally"](function () {
            _this20.addingAccomplishment = false;
          });
        }
      }, {
        key: "deleteAccomplishment",
        value: function deleteAccomplishment(idx) {
          var accomplishmentToBeSaved = Array.from(this.accomplishments);
          accomplishmentToBeSaved.splice(idx, 1);
          this.saveAccomplishment(accomplishmentToBeSaved);
        }
      }, {
        key: "updateAccomplishment",
        value: function updateAccomplishment(idx) {
          this.accomplishmentForm.get('title').setValue(this.accomplishments[idx].title);
          this.accomplishmentForm.get('description').setValue(this.accomplishments[idx].description);
          this.accomplishmentForm.get('accomplishmentDate').setValue(this.datepipe.transform(this.accomplishments[idx].date, 'yyyy-MM-dd'));
          this.accomplishments.splice(idx, 1);
        }
      }]);

      return AccomplishmentsComponent;
    }();

    AccomplishmentsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    AccomplishmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-accomplishments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accomplishments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/accomplishments/accomplishments.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accomplishments.component.css */
      "./src/app/app-components/user/profile/accomplishments/accomplishments.component.css"))["default"]]
    })], AccomplishmentsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/basic-details/basic-details.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/app-components/user/profile/basic-details/basic-details.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserProfileBasicDetailsBasicDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n    font-family: Lato;\n  }\n  \n  img {\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n  }\n  \n  .hoverable{\n    position: relative;\n    display: block;\n    cursor: pointer;\n    height: 200px;\n    width: 200px;\n    border: 5px solid #000;\n    border-radius: 50%;\n  }\n  \n  .hoverable .hover-text{\n    position: absolute;\n    display: none;\n    top: 50%;\n    left:  50%;\n    transform: translate(-50%,-50%);   \n    z-index: 2;\n  }\n  \n  .hoverable .background{\n    position: absolute;\n    display: none;\n    top: 0;\n    left:  0;\n    bottom: 0;\n    right: 0;\n    background-color:rgba(255, 255, 255, 0.5);\n    pointer-events: none;\n    border-radius: 50%;\n    z-index: 1;\n  }\n  \n  .hoverable:hover .hover-text{\n    display: block;\n  }\n  \n  .hoverable:hover .background{\n    display: block;\n  }\n  \n  #fileInput{\n    display: none;\n  }\n  \n  .badge-btn{\n      margin : 5px\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci9wcm9maWxlL2Jhc2ljLWRldGFpbHMvYmFzaWMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLFVBQVU7RUFDWjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLHlDQUF5QztJQUN6QyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO01BQ0k7RUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9iYXNpYy1kZXRhaWxzL2Jhc2ljLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB9XG4gIFxuICBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmhvdmVyYWJsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5ob3ZlcmFibGUgLmhvdmVyLXRleHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogIDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpOyAgIFxuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmhvdmVyYWJsZSAuYmFja2dyb3VuZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogIDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC5ob3ZlcmFibGU6aG92ZXIgLmhvdmVyLXRleHR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhvdmVyYWJsZTpob3ZlciAuYmFja2dyb3VuZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgI2ZpbGVJbnB1dHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJhZGdlLWJ0bntcbiAgICAgIG1hcmdpbiA6IDVweFxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/basic-details/basic-details.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/app-components/user/profile/basic-details/basic-details.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: BasicDetailsComponent */

  /***/
  function srcAppAppComponentsUserProfileBasicDetailsBasicDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicDetailsComponent", function () {
      return BasicDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_model/user */
    "./src/app/_model/user.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/feeds.service */
    "./src/app/_services/feeds.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");
    /* harmony import */


    var src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/assets/apiPaths */
    "./src/assets/apiPaths.ts");

    var BasicDetailsComponent = /*#__PURE__*/function () {
      function BasicDetailsComponent(userService, feedsService, alertService, datepipe) {
        _classCallCheck(this, BasicDetailsComponent);

        this.userService = userService;
        this.feedsService = feedsService;
        this.alertService = alertService;
        this.datepipe = datepipe;
        this.formLoading = false;
        this.uploading = false;
        this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.domains = new Array();
        this.nonEditableFeilds = {};
        this.editableFeilds = {};
        this.userDomainInterests = new Array();
        this.editableFeilds['name'] = false;
        this.editableFeilds['mobileNumber'] = false;
        this.editableFeilds['addressLine1'] = false;
        this.editableFeilds['state'] = false;
        this.editableFeilds['country'] = false;
        this.editableFeilds['interest'] = false;
      }

      _createClass(BasicDetailsComponent, [{
        key: "formBasicDetailsForm",
        value: function formBasicDetailsForm() {
          this.basicDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z][a-zA-Z\\s]+$")]),
            'mobileNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.mobileNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]{10}")]),
            'addressLine1': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.addressLine1, []),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.state, []),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.country, []),
            'interest': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
          this.nonEditableFeilds['email'] = this.user.email;
          this.nonEditableFeilds['dob'] = this.datepipe.transform(this.user.dob, 'yyyy-MM-dd');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.formBasicDetailsForm();
          this.formLoading = true; //fetching all domains

          this.feedsService.getAllDomains().then(function (response) {
            for (var idx in response) {
              var domain = _this21.feedsService.getDomainFromResponse(response[idx]);

              _this21.domains.push(domain);
            }
          })["catch"](function (error) {
            _this21.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"].getAletMessage("serverDataFetchError"));
          })["finally"](function () {
            _this21.formLoading = false;
          });
          this.formLoading = true; //fetching user details

          this.userService.getUserDetails().then(function (response) {
            //console.log(response)
            _this21.user = _this21.userService.formUserFromResponse(response); //console.log(this.user)

            _this21.formBasicDetailsForm();
          })["catch"](function (error) {
            _this21.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"].getAletMessage("serverDataFetchError"));
          })["finally"](function () {
            _this21.formLoading = false;
          });
          this.formLoading = true; //fetching user interest

          this.userService.getUserInterests().then(function (response) {
            console.log(response);

            for (var idx in response) {
              _this21.userDomainInterests.push(_this21.feedsService.getDomainFromResponse(response[idx]));
            }
          })["catch"](function (error) {
            _this21.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"].getAletMessage("serverDataFetchError"));
          })["finally"](function () {
            _this21.formLoading = false;
          });
        }
      }, {
        key: "saveDetails",
        value: function saveDetails(data, key, label) {
          var _this22 = this;

          this.editableFeilds[key] = true;
          this.userService.updateUser(data).then(function (response) {
            _this22.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"].getAletMessage("profileFeildSaveSuccess"));
          })["catch"](function (error) {
            _this22.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"].getAletMessage("profileFeildSaveError"));
          })["finally"](function () {
            _this22.editableFeilds[key] = false;
          });
        }
      }, {
        key: "addInterest",
        value: function addInterest() {
          var interest;
          var interestId = this.basicDetailsForm.get('interest').value;

          for (var idx in this.domains) {
            if (this.domains[idx].id == interestId) {
              interest = this.domains[idx];
            }
          }

          this.userDomainInterests.push(interest);
          this.saveInterest();
        }
      }, {
        key: "delete",
        value: function _delete(idx) {
          this.userDomainInterests.splice(idx, 1);
          this.saveInterest();
        }
      }, {
        key: "saveInterest",
        value: function saveInterest() {
          var _this23 = this;

          this.editableFeilds['interest'] = true;
          var domain_ids = this.userDomainInterests.map(function (domain) {
            return domain.id;
          });
          this.userService.updateUser({
            'domain_ids': domain_ids
          }).then(function (response) {
            _this23.user.domain_ids = domain_ids;
          })["catch"](function (error) {
            _this23.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"].getAletMessage("profileFeildSaveError")), _this23.userDomainInterests.pop();
          })["finally"](function () {
            _this23.editableFeilds['interest'] = false;
          });
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          if (event.target.files && event.target.files[0]) {
            this.profilePic = event.target.files[0];
            this.uploadProfilePic();
          }
        }
      }, {
        key: "uploadProfilePic",
        value: function uploadProfilePic() {
          var _this24 = this;

          if (this.profilePic) {
            this.uploading = true;
            var fileData = new FormData();
            fileData.append('file', this.profilePic);
            this.userService.fileUpload(fileData).then(function (response) {
              var profilepicFilename = response.file.filename;

              _this24.userService.updateUser({
                profilePicUrl: response.file.filename
              }).then(function (response) {
                _this24.user.profilePicUrl = profilepicFilename;
              })["catch"](function (error) {
                _this24.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"].getAletMessage("profileFeildSaveError"));
              });
            })["catch"](function (error) {
              _this24.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_8__["AlertMessage"].getAletMessage("fileUploadError"));
            })["finally"](function () {
              _this24.uploading = false;
            });
          }
        }
      }, {
        key: "getSource",
        value: function getSource() {
          if (this.user.profilePicUrl) {
            return src_assets_apiPaths__WEBPACK_IMPORTED_MODULE_9__["ApiPaths"].getApiPath("getFile", this.user.profilePicUrl);
          }

          return '../../../../assets/images/default_profile_pic.png';
        }
      }]);

      return BasicDetailsComponent;
    }();

    BasicDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_6__["FeedsService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }];
    };

    BasicDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-basic-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basic-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/basic-details/basic-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basic-details.component.css */
      "./src/app/app-components/user/profile/basic-details/basic-details.component.css"))["default"]]
    })], BasicDetailsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/portfolio/portfolio.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/app-components/user/profile/portfolio/portfolio.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserProfilePortfolioPortfolioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/portfolio/portfolio.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/app-components/user/profile/portfolio/portfolio.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppAppComponentsUserProfilePortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/portfolio.service */
    "./src/app/_services/portfolio.service.ts");

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent(portfolioService, authenticationService, alertService) {
        _classCallCheck(this, PortfolioComponent);

        this.portfolioService = portfolioService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loggedInUserPortfolioId = this.authenticationService.getLoggedInUser().id;
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generatePortfolio",
        value: function generatePortfolio() {
          this.portfolioService.generatePortfolioView(this.portfolioId);
        }
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ctorParameters = function () {
      return [{
        type: src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_4__["PortfolioService"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/portfolio/portfolio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio.component.css */
      "./src/app/app-components/user/profile/portfolio/portfolio.component.css"))["default"]]
    })], PortfolioComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/profile.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/app-components/user/profile/profile.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    min-height : 80vh;\n}\n\n\na.nav-link{\n    font-size: small;\n    font-weight: bold;\n    padding-left : 0px;\n    \n}\n\n\nli.nav-item:hover{\n    border-bottom: 1px solid lightblue;\n    cursor: pointer;\n}\n\n\n.btn{\n    border-radius: 50%;\n}\n\n\n.btn.next{\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLWhlaWdodCA6IDgwdmg7XG59XG5cblxuYS5uYXYtbGlua3tcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdCA6IDBweDtcbiAgICBcbn1cblxubGkubmF2LWl0ZW06aG92ZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG57XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYnRuLm5leHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/profile.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/app-components/user/profile/profile.component.ts ***!
    \******************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppAppComponentsUserProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/portfolio.service */
    "./src/app/_services/portfolio.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(portfolioService, authenticationService) {
        _classCallCheck(this, ProfileComponent);

        this.portfolioService = portfolioService;
        this.authenticationService = authenticationService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__["PortfolioService"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/app-components/user/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/settings/settings.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/app-components/user/profile/settings/settings.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserProfileSettingsSettingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app-components/user/profile/settings/settings.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/app-components/user/profile/settings/settings.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppAppComponentsUserProfileSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(userService, alertService) {
        _classCallCheck(this, SettingsComponent);

        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.upadtePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this25 = this;

          var data = {
            password: this.upadtePasswordForm.get('password').value
          };
          this.loading = true;
          this.userService.updateUser(data).then(function (response) {
            _this25.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage("updatePasswordSuccess"));

            _this25.upadtePasswordForm.reset();
          })["catch"](function (error) {
            _this25.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_5__["AlertMessage"].getAletMessage("updatePasswordError"));
          })["finally"](function () {
            _this25.loading = false;
          });
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/profile/settings/settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.css */
      "./src/app/app-components/user/profile/settings/settings.component.css"))["default"]]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/uploads/new-uploads/new-uploads.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/app-components/user/uploads/new-uploads/new-uploads.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserUploadsNewUploadsNewUploadsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "textarea{\n    height : 100px\n}\n\n.badge-btn{\n    margin : 5px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci91cGxvYWRzL25ldy11cGxvYWRzL25ldy11cGxvYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb21wb25lbnRzL3VzZXIvdXBsb2Fkcy9uZXctdXBsb2Fkcy9uZXctdXBsb2Fkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWF7XG4gICAgaGVpZ2h0IDogMTAwcHhcbn1cblxuLmJhZGdlLWJ0bntcbiAgICBtYXJnaW4gOiA1cHhcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app-components/user/uploads/new-uploads/new-uploads.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/app-components/user/uploads/new-uploads/new-uploads.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: NewUploadsComponent */

  /***/
  function srcAppAppComponentsUserUploadsNewUploadsNewUploadsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewUploadsComponent", function () {
      return NewUploadsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_model_uploadPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_model/uploadPost */
    "./src/app/_model/uploadPost.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/feeds.service */
    "./src/app/_services/feeds.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var NewUploadsComponent = /*#__PURE__*/function () {
      function NewUploadsComponent(userService, feedsService, alertService) {
        _classCallCheck(this, NewUploadsComponent);

        this.userService = userService;
        this.feedsService = feedsService;
        this.alertService = alertService;
        this.loading = false;
        this.uploading = false;
        this.domains = new Array();
        this.userDomainInterests = new Array();
      }

      _createClass(NewUploadsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.newUploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'portfolioInclude': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'interest': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'fileUpload': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
          });
          this.loading = true;
          this.feedsService.getAllDomains().then(function (response) {
            for (var idx in response) {
              var domain = _this26.feedsService.getDomainFromResponse(response[idx]);

              _this26.domains.push(domain);
            }

            _this26.newUploadForm.get('interest').setValue(_this26.domains[0].id);
          })["catch"](function (error) {
            _this26.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage("serverDataFetchError"));
          })["finally"](function () {
            _this26.loading = false;
          });
        }
      }, {
        key: "uploadPostDetails",
        value: function uploadPostDetails(filenames, contentType) {
          var _this27 = this;

          this.uploading = true;
          var data = new src_app_model_uploadPost__WEBPACK_IMPORTED_MODULE_3__["UploadPost"]();
          data.title = this.newUploadForm.get('title').value;
          data.description = this.newUploadForm.get('description').value;
          data.domain_ids = this.userDomainInterests.map(function (domain) {
            return domain.id;
          });
          data.portfolio = this.newUploadForm.get('portfolioInclude').value;
          data.filenames = filenames;
          data.contentType = contentType;
          this.userService.uploadPost(data).then(function (response) {
            _this27.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('postUplaodSuccess'));
          })["catch"](function (error) {
            _this27.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('postDetailsSaveError'));
          })["finally"](function () {
            _this27.uploading = false;

            _this27.resetForm();
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.newUploadForm.reset();
          this.userDomainInterests = new Array();

          for (var idx in this.newUploadForm.controls) {
            this.newUploadForm.controls[idx].setErrors(null);
          }
        }
      }, {
        key: "uploadPost",
        value: function uploadPost() {
          var _this28 = this;

          if (this.uploadedFile) {
            this.uploading = true;
            var fileData = new FormData();
            fileData.append('file', this.uploadedFile);
            this.userService.fileUpload(fileData).then(function (response) {
              var filenames = new Array();
              filenames.push(response.file.filename);

              _this28.uploadPostDetails(filenames, response.file.contentType);
            })["catch"](function (error) {
              _this28.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_7__["AlertMessage"].getAletMessage('fileUploadError'));
            })["finally"](function () {
              _this28.uploading = false;
            });
          } else {
            this.uploadPostDetails(new Array(0), null);
          }
        }
      }, {
        key: "addInterest",
        value: function addInterest() {
          debugger;
          var domainId = this.newUploadForm.get('interest').value;
          var domainInterest = this.domains.filter(function (domain) {
            return domain.id == domainId;
          });
          this.userDomainInterests.push(domainInterest[0]);
        }
      }, {
        key: "delete",
        value: function _delete(idx) {
          this.userDomainInterests.splice(idx, 1);
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          if (event.target.files && event.target.files[0]) {
            this.uploadedFile = event.target.files[0];
          }
        }
      }]);

      return NewUploadsComponent;
    }();

    NewUploadsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_5__["FeedsService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    NewUploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-uploads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-uploads.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/new-uploads/new-uploads.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-uploads.component.css */
      "./src/app/app-components/user/uploads/new-uploads/new-uploads.component.css"))["default"]]
    })], NewUploadsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserUploadsPreviousUploadsPreviousUploadsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\na.nav-link{\n    font-size: small;\n    font-weight: bold;\n    padding-left : 0px;\n    \n}\n\nli.nav-item:hover{\n    border-bottom: 1px solid lightblue;\n    cursor: pointer;\n}\n\n.btn{\n    border-radius: 50%;\n}\n\n.btn.next{\n    float: right;\n}\n\n.bi-trash-fill{\n    color : red\n}\n\n.form-check-label{\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci91cGxvYWRzL3ByZXZpb3VzLXVwbG9hZHMvcHJldmlvdXMtdXBsb2Fkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29tcG9uZW50cy91c2VyL3VwbG9hZHMvcHJldmlvdXMtdXBsb2Fkcy9wcmV2aW91cy11cGxvYWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmEubmF2LWxpbmt7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQgOiAwcHg7XG4gICAgXG59XG5cbmxpLm5hdi1pdGVtOmhvdmVye1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJ0bi5uZXh0e1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmJpLXRyYXNoLWZpbGx7XG4gICAgY29sb3IgOiByZWRcbn1cblxuLmZvcm0tY2hlY2stbGFiZWx7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: PreviousUploadsComponent */

  /***/
  function srcAppAppComponentsUserUploadsPreviousUploadsPreviousUploadsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviousUploadsComponent", function () {
      return PreviousUploadsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/alert.service */
    "./src/app/_services/alert.service.ts");
    /* harmony import */


    var src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/feeds.service */
    "./src/app/_services/feeds.service.ts");
    /* harmony import */


    var src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/assets/alertMessage */
    "./src/assets/alertMessage.ts");

    var PreviousUploadsComponent = /*#__PURE__*/function () {
      function PreviousUploadsComponent(feedsService, alertService) {
        _classCallCheck(this, PreviousUploadsComponent);

        this.feedsService = feedsService;
        this.alertService = alertService;
        this.currentIndex = 0;
        this.postsLoading = false;
        this.posts = new Array();
      }

      _createClass(PreviousUploadsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentIndex = 0;
          this.loadPosts();
        }
      }, {
        key: "loadPosts",
        value: function loadPosts() {
          var _this29 = this;

          this.postsLoading = true;
          this.posts = new Array();
          this.feedsService.getAllUserPosts().then(function (response) {
            for (var idx in response.posts) {
              _this29.posts.push(_this29.feedsService.convertToPost(response.posts[idx]));
            }

            _this29.postsProcessing = new Array(_this29.posts.length);
          })["catch"](function (error) {
            _this29.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage("serverDataFetchError"));
          })["finally"](function () {
            _this29.postsLoading = false;
          });
        }
      }, {
        key: "movePrevious",
        value: function movePrevious() {
          if (this.currentIndex == 0) return;
          this.currentIndex = this.currentIndex - 1;
        }
      }, {
        key: "moveNext",
        value: function moveNext() {
          if (this.currentIndex == this.posts.length - 2 || this.currentIndex == this.posts.length - 1) return;
          this.currentIndex = this.currentIndex + 1;
        }
      }, {
        key: "changePortfolioStatus",
        value: function changePortfolioStatus(idx) {
          var _this30 = this;

          this.postsProcessing[idx] = true;
          this.feedsService.updatePostByPostId(this.posts[idx].id, {
            portfolio: !this.posts[idx].portfolio
          }).then(function (response) {
            _this30.posts[idx].portfolio = !_this30.posts[idx].portfolio;
          })["catch"](function (error) {
            _this30.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage("postUpdateError"));
          })["finally"](function () {
            _this30.postsProcessing[idx] = false;
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(idx) {
          var _this31 = this;

          this.postsProcessing[idx] = true;
          this.feedsService.deletePostsByPostId(this.posts[idx].id).then(function (response) {
            _this31.posts.splice(idx, 1);

            _this31.postsProcessing.splice(idx, 1);

            if (_this31.posts.length == 0) _this31.currentIndex = 0;else if (_this31.currentIndex == _this31.posts.length - 1) _this31.currentIndex = _this31.currentIndex - 2;else if (_this31.currentIndex == _this31.posts.length - 2) _this31.currentIndex = _this31.currentIndex - 1;
          })["catch"](function (error) {
            _this31.alertService.generateAlert(src_assets_alertMessage__WEBPACK_IMPORTED_MODULE_4__["AlertMessage"].getAletMessage("postUpdateError"));
          })["finally"](function () {
            _this31.postsProcessing[idx] = false;
          });
        }
      }]);

      return PreviousUploadsComponent;
    }();

    PreviousUploadsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_feeds_service__WEBPACK_IMPORTED_MODULE_3__["FeedsService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    PreviousUploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-previous-uploads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./previous-uploads.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./previous-uploads.component.css */
      "./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.css"))["default"]]
    })], PreviousUploadsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/uploads/uploads.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/app-components/user/uploads/uploads.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserUploadsUploadsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    min-height : 80vh;\n}\n\n\na.nav-link{\n    font-size: small;\n    font-weight: bold;\n    padding-left : 0px;\n    \n}\n\n\nli.nav-item:hover{\n    border-bottom: 1px solid lightblue;\n    cursor: pointer;\n}\n\n\n.btn{\n    border-radius: 50%;\n}\n\n\n.btn.next{\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci91cGxvYWRzL3VwbG9hZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci91cGxvYWRzL3VwbG9hZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLWhlaWdodCA6IDgwdmg7XG59XG5cblxuYS5uYXYtbGlua3tcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdCA6IDBweDtcbiAgICBcbn1cblxubGkubmF2LWl0ZW06aG92ZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG57XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYnRuLm5leHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app-components/user/uploads/uploads.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/app-components/user/uploads/uploads.component.ts ***!
    \******************************************************************/

  /*! exports provided: UploadsComponent */

  /***/
  function srcAppAppComponentsUserUploadsUploadsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadsComponent", function () {
      return UploadsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadsComponent = /*#__PURE__*/function () {
      function UploadsComponent() {
        _classCallCheck(this, UploadsComponent);
      }

      _createClass(UploadsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UploadsComponent;
    }();

    UploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-uploads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./uploads.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/uploads/uploads.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./uploads.component.css */
      "./src/app/app-components/user/uploads/uploads.component.css"))["default"]]
    })], UploadsComponent);
    /***/
  },

  /***/
  "./src/app/app-components/user/user.component.css":
  /*!********************************************************!*\
    !*** ./src/app/app-components/user/user.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentsUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar{\n    height: 52px;\n}\n\na.nav-link{\n    font-size: smaller;\n}\n\nli{\n    cursor: pointer;\n}\n\n.logo{\n    height : 50px;\n    width : 50px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLWNvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIGhlaWdodDogNTJweDtcbn1cblxuYS5uYXYtbGlua3tcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbmxpe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ297XG4gICAgaGVpZ2h0IDogNTBweDtcbiAgICB3aWR0aCA6IDUwcHhcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app-components/user/user.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/app-components/user/user.component.ts ***!
    \*******************************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppAppComponentsUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);

        this.logoutEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.logoutEmitter.emit();
        }
      }, {
        key: "getLogoSource",
        value: function getLogoSource() {
          return "../../../assets/images/logo.jpeg";
        }
      }]);

      return UserComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserComponent.prototype, "logoutEmitter", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app-components/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/app-components/user/user.component.css"))["default"]]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-components/forget-password/forget-password.component */
    "./src/app/app-components/forget-password/forget-password.component.ts");
    /* harmony import */


    var _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-components/login/login.component */
    "./src/app/app-components/login/login.component.ts");
    /* harmony import */


    var _app_components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-components/register-user/register-user.component */
    "./src/app/app-components/register-user/register-user.component.ts");
    /* harmony import */


    var _app_components_user_connections_connections_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-components/user/connections/connections.component */
    "./src/app/app-components/user/connections/connections.component.ts");
    /* harmony import */


    var _app_components_user_connections_follower_follower_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-components/user/connections/follower/follower.component */
    "./src/app/app-components/user/connections/follower/follower.component.ts");
    /* harmony import */


    var _app_components_user_connections_following_following_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-components/user/connections/following/following.component */
    "./src/app/app-components/user/connections/following/following.component.ts");
    /* harmony import */


    var _app_components_user_connections_new_connections_new_connections_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-components/user/connections/new-connections/new-connections.component */
    "./src/app/app-components/user/connections/new-connections/new-connections.component.ts");
    /* harmony import */


    var _app_components_user_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-components/user/feeds/feeds.component */
    "./src/app/app-components/user/feeds/feeds.component.ts");
    /* harmony import */


    var _app_components_user_profile_accomplishments_accomplishments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-components/user/profile/accomplishments/accomplishments.component */
    "./src/app/app-components/user/profile/accomplishments/accomplishments.component.ts");
    /* harmony import */


    var _app_components_user_profile_basic_details_basic_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-components/user/profile/basic-details/basic-details.component */
    "./src/app/app-components/user/profile/basic-details/basic-details.component.ts");
    /* harmony import */


    var _app_components_user_profile_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-components/user/profile/portfolio/portfolio.component */
    "./src/app/app-components/user/profile/portfolio/portfolio.component.ts");
    /* harmony import */


    var _app_components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-components/user/profile/profile.component */
    "./src/app/app-components/user/profile/profile.component.ts");
    /* harmony import */


    var _app_components_user_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-components/user/profile/settings/settings.component */
    "./src/app/app-components/user/profile/settings/settings.component.ts");
    /* harmony import */


    var _app_components_user_uploads_new_uploads_new_uploads_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app-components/user/uploads/new-uploads/new-uploads.component */
    "./src/app/app-components/user/uploads/new-uploads/new-uploads.component.ts");
    /* harmony import */


    var _app_components_user_uploads_previous_uploads_previous_uploads_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app-components/user/uploads/previous-uploads/previous-uploads.component */
    "./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.ts");
    /* harmony import */


    var _app_components_user_uploads_uploads_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app-components/user/uploads/uploads.component */
    "./src/app/app-components/user/uploads/uploads.component.ts");
    /* harmony import */


    var _helpers_auth_gaurd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./_helpers/auth.gaurd */
    "./src/app/_helpers/auth.gaurd.ts");

    var routes = [{
      path: 'login',
      component: _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _app_components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_5__["RegisterUserComponent"]
    }, {
      path: 'forgetPassword',
      component: _app_components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordComponent"]
    }, {
      path: '',
      canActivate: [_helpers_auth_gaurd__WEBPACK_IMPORTED_MODULE_19__["AuthGaurd"]],
      children: [{
        path: '',
        pathMatch: "full",
        redirectTo: "feeds"
      }, {
        path: 'feeds',
        component: _app_components_user_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_10__["FeedsComponent"]
      }, {
        path: 'connections',
        component: _app_components_user_connections_connections_component__WEBPACK_IMPORTED_MODULE_6__["ConnectionsComponent"],
        children: [{
          path: '',
          pathMatch: "full",
          redirectTo: "following"
        }, {
          path: 'following',
          component: _app_components_user_connections_following_following_component__WEBPACK_IMPORTED_MODULE_8__["FollowingComponent"]
        }, {
          path: 'follower',
          component: _app_components_user_connections_follower_follower_component__WEBPACK_IMPORTED_MODULE_7__["FollowerComponent"]
        }, {
          path: 'newconnections',
          component: _app_components_user_connections_new_connections_new_connections_component__WEBPACK_IMPORTED_MODULE_9__["NewConnectionsComponent"]
        }]
      }, {
        path: 'profile',
        component: _app_components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
        children: [{
          path: '',
          pathMatch: "full",
          redirectTo: 'basicdetails'
        }, {
          path: 'basicdetails',
          component: _app_components_user_profile_basic_details_basic_details_component__WEBPACK_IMPORTED_MODULE_12__["BasicDetailsComponent"]
        }, {
          path: 'accomplishments',
          component: _app_components_user_profile_accomplishments_accomplishments_component__WEBPACK_IMPORTED_MODULE_11__["AccomplishmentsComponent"]
        }, {
          path: 'settings',
          component: _app_components_user_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"]
        }, {
          path: 'portfolio',
          component: _app_components_user_profile_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioComponent"]
        }]
      }, {
        path: 'uploads',
        component: _app_components_user_uploads_uploads_component__WEBPACK_IMPORTED_MODULE_18__["UploadsComponent"],
        children: [{
          path: '',
          pathMatch: "full",
          redirectTo: 'newuploads'
        }, {
          path: 'newuploads',
          component: _app_components_user_uploads_new_uploads_new_uploads_component__WEBPACK_IMPORTED_MODULE_16__["NewUploadsComponent"]
        }, {
          path: 'previousuploads',
          component: _app_components_user_uploads_previous_uploads_previous_uploads_component__WEBPACK_IMPORTED_MODULE_17__["PreviousUploadsComponent"]
        }]
      }]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.card{\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    min-height: 100vh;\n}\n\n.welcome-message{\n    color: darkgreen;\n    font-size: large;\n    font-weight: bold;\n    display : block;\n}\n\n.welcome-section{\n    position:absolute;\n    top: 0; bottom: 0; left: 0; right: 0;\n    margin: auto;\n    /**background: tomato**/;\n    width: 50vw; height: 50vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo{\n    height : 400px;\n    width  : 400px\n}\n\n\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRO0lBQ3BDLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVyxFQUFFLFlBQVk7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi53ZWxjb21lLW1lc3NhZ2V7XG4gICAgY29sb3I6IGRhcmtncmVlbjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXkgOiBibG9jaztcbn1cblxuLndlbGNvbWUtc2VjdGlvbntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IDA7IGJvdHRvbTogMDsgbGVmdDogMDsgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qKmJhY2tncm91bmQ6IHRvbWF0byoqLztcbiAgICB3aWR0aDogNTB2dzsgaGVpZ2h0OiA1MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ297XG4gICAgaGVpZ2h0IDogNDAwcHg7XG4gICAgd2lkdGggIDogNDAwcHhcbn1cblxuXG4gICAgIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_services/user.service */
    "./src/app/_services/user.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authenticationService, router, userService) {
        var _this32 = this;

        _classCallCheck(this, AppComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.userService = userService;
        this.logginOut = false;
        this.authenticationService.currentUserSubject.subscribe(function (user) {
          _this32.currentUser = user;
        });
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          var _this33 = this;

          this.logginOut = true; //this.userService.logoutAllSessions().then(

          this.userService.logoutSession().then(function (response) {
            _this33.authenticationService.logout();

            _this33.router.navigate(['/login']);
          })["catch"](function (error) {
            if (error.status = 401) {
              _this33.authenticationService.logout();

              _this33.router.navigate(['/login']);
            }
          })["finally"](function () {
            _this33.logginOut = false;
          });
        }
      }, {
        key: "getLogoSource",
        value: function getLogoSource() {
          return "../assets/images/logo_full.jpeg";
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-components/login/login.component */
    "./src/app/app-components/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-components/register-user/register-user.component */
    "./src/app/app-components/register-user/register-user.component.ts");
    /* harmony import */


    var _app_components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-components/forget-password/forget-password.component */
    "./src/app/app-components/forget-password/forget-password.component.ts");
    /* harmony import */


    var _app_components_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-components/user/user.component */
    "./src/app/app-components/user/user.component.ts");
    /* harmony import */


    var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_helpers/jwt.interceptor */
    "./src/app/_helpers/jwt.interceptor.ts");
    /* harmony import */


    var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_components/alert/alert.component */
    "./src/app/_components/alert/alert.component.ts");
    /* harmony import */


    var _app_components_user_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-components/user/feeds/feeds.component */
    "./src/app/app-components/user/feeds/feeds.component.ts");
    /* harmony import */


    var _app_components_user_connections_connections_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-components/user/connections/connections.component */
    "./src/app/app-components/user/connections/connections.component.ts");
    /* harmony import */


    var _app_components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app-components/user/profile/profile.component */
    "./src/app/app-components/user/profile/profile.component.ts");
    /* harmony import */


    var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./_components/post-card/post-card.component */
    "./src/app/_components/post-card/post-card.component.ts");
    /* harmony import */


    var _app_components_user_connections_following_following_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app-components/user/connections/following/following.component */
    "./src/app/app-components/user/connections/following/following.component.ts");
    /* harmony import */


    var _app_components_user_connections_follower_follower_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./app-components/user/connections/follower/follower.component */
    "./src/app/app-components/user/connections/follower/follower.component.ts");
    /* harmony import */


    var _app_components_user_connections_new_connections_new_connections_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app-components/user/connections/new-connections/new-connections.component */
    "./src/app/app-components/user/connections/new-connections/new-connections.component.ts");
    /* harmony import */


    var _components_connection_card_connection_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./_components/connection-card/connection-card.component */
    "./src/app/_components/connection-card/connection-card.component.ts");
    /* harmony import */


    var _app_components_user_profile_basic_details_basic_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./app-components/user/profile/basic-details/basic-details.component */
    "./src/app/app-components/user/profile/basic-details/basic-details.component.ts");
    /* harmony import */


    var _app_components_user_profile_accomplishments_accomplishments_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./app-components/user/profile/accomplishments/accomplishments.component */
    "./src/app/app-components/user/profile/accomplishments/accomplishments.component.ts");
    /* harmony import */


    var _app_components_user_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./app-components/user/profile/settings/settings.component */
    "./src/app/app-components/user/profile/settings/settings.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_components_user_uploads_uploads_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./app-components/user/uploads/uploads.component */
    "./src/app/app-components/user/uploads/uploads.component.ts");
    /* harmony import */


    var _app_components_user_uploads_new_uploads_new_uploads_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./app-components/user/uploads/new-uploads/new-uploads.component */
    "./src/app/app-components/user/uploads/new-uploads/new-uploads.component.ts");
    /* harmony import */


    var _app_components_user_uploads_previous_uploads_previous_uploads_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./app-components/user/uploads/previous-uploads/previous-uploads.component */
    "./src/app/app-components/user/uploads/previous-uploads/previous-uploads.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./_components/post-detail/post-detail.component */
    "./src/app/_components/post-detail/post-detail.component.ts");
    /* harmony import */


    var _components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./_components/portfolio-modal/portfolio-modal.component */
    "./src/app/_components/portfolio-modal/portfolio-modal.component.ts");
    /* harmony import */


    var _app_components_user_profile_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./app-components/user/profile/portfolio/portfolio.component */
    "./src/app/app-components/user/profile/portfolio/portfolio.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _app_components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_9__["RegisterUserComponent"], _app_components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgetPasswordComponent"], _app_components_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"], _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"], _app_components_user_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_14__["FeedsComponent"], _app_components_user_connections_connections_component__WEBPACK_IMPORTED_MODULE_15__["ConnectionsComponent"], _app_components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"], _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_17__["PostCardComponent"], _app_components_user_connections_following_following_component__WEBPACK_IMPORTED_MODULE_18__["FollowingComponent"], _app_components_user_connections_follower_follower_component__WEBPACK_IMPORTED_MODULE_19__["FollowerComponent"], _app_components_user_connections_new_connections_new_connections_component__WEBPACK_IMPORTED_MODULE_20__["NewConnectionsComponent"], _components_connection_card_connection_card_component__WEBPACK_IMPORTED_MODULE_21__["ConnectionCardComponent"], _app_components_user_profile_basic_details_basic_details_component__WEBPACK_IMPORTED_MODULE_22__["BasicDetailsComponent"], _app_components_user_profile_accomplishments_accomplishments_component__WEBPACK_IMPORTED_MODULE_23__["AccomplishmentsComponent"], _app_components_user_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"], _app_components_user_uploads_uploads_component__WEBPACK_IMPORTED_MODULE_26__["UploadsComponent"], _app_components_user_uploads_new_uploads_new_uploads_component__WEBPACK_IMPORTED_MODULE_27__["NewUploadsComponent"], _app_components_user_uploads_previous_uploads_previous_uploads_component__WEBPACK_IMPORTED_MODULE_28__["PreviousUploadsComponent"], _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_31__["PostDetailComponent"], _components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_32__["PortfolioModalComponent"], _app_components_user_profile_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_33__["PortfolioComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__["BrowserAnimationsModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["jwtInterceptor"],
        multi: true
      }, _angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"], _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_31__["PostDetailComponent"], _components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_32__["PortfolioModalComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/assets/alertMessage.ts":
  /*!************************************!*\
    !*** ./src/assets/alertMessage.ts ***!
    \************************************/

  /*! exports provided: AlertMessage */

  /***/
  function srcAssetsAlertMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertMessage", function () {
      return AlertMessage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_model/alert */
    "./src/app/_model/alert.ts");

    var AlertMessage = /*#__PURE__*/function () {
      function AlertMessage() {
        _classCallCheck(this, AlertMessage);
      }

      _createClass(AlertMessage, null, [{
        key: "getAletMessage",
        value: function getAletMessage(key) {
          var alert = new src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]();
          alert.message = this.alertMessages[key].message;
          alert.type = this.alertMessages[key].type;
          return alert;
        }
      }]);

      return AlertMessage;
    }();

    AlertMessage.alertMessages = {
      "invalidLogin": {
        message: "Please provide a valid login credential for successfull login in",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      "updatePasswordSuccess": {
        message: "Password has been updated successfully",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].success
      },
      "updatePasswordError": {
        message: "Password cannot be updated now. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      'updateConnectionError': {
        messgae: "Connection cannot be updated now. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      "searchConnectionError": {
        message: "Error Occured while searching connections. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      'updateLikeError': {
        message: "You like this now. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      'commentPostError': {
        message: "Cannot post comment. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      'forgetPasswordError': {
        message: "Please check email id provided. Email should be registered. If correct email provided, then please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      'forgetPasswordSuccess': {
        message: "Password is forgot. Am email has been sent to provided email id. Please login using send password and update your own password from settings section of profile",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].success
      },
      'fileUploadError': {
        message: "File Upload failed. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      'registrationError': {
        message: "User Registration failed. Cannot save details of new user. Please confirm that email id is not already registered. Else please try again after some time",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      "registrationSuccess": {
        message: "New User is Successfully registered",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].success
      },
      "serverDataFetchError": {
        message: "Unable to fetch data from server",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      'accomplishmentSaveError': {
        message: "Accomplishment cannot be saved. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      "postDetailsSaveError": {
        message: "Post cannot be saved. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      "postUplaodSuccess": {
        message: "Post has been successfully uploaded",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].success
      },
      "postUpdateError": {
        message: "Unable to update posts. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].success
      },
      "profileFeildSaveError": {
        message: "Unable to update the profile feild. Please try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      },
      "profileFeildSaveSuccess": {
        message: "Profile Feild has been successfully updated",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].success
      },
      "PortfolioDisplayError": {
        message: "Unable to generate portfolio view. Please check portfolio id, or try again later",
        type: src_app_model_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error
      }
    };
    /***/
  },

  /***/
  "./src/assets/apiPaths.ts":
  /*!********************************!*\
    !*** ./src/assets/apiPaths.ts ***!
    \********************************/

  /*! exports provided: ApiPaths */

  /***/
  function srcAssetsApiPathsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiPaths", function () {
      return ApiPaths;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ApiPaths = /*#__PURE__*/function () {
      function ApiPaths() {
        _classCallCheck(this, ApiPaths);
      }

      _createClass(ApiPaths, null, [{
        key: "getApiPath",
        value: function getApiPath(key, value) {
          var finalUrl = this.baseRef + "/" + this.url[key];

          if (value) {
            finalUrl = finalUrl.replace("#", value);
          }

          return finalUrl;
        }
      }]);

      return ApiPaths;
    }();

    ApiPaths.baseRef = "https://talenthub-api.herokuapp.com";
    ApiPaths.url = {
      login: 'user/login',
      logoutAllSession: 'user/logoutall',
      logout: 'user/logout',
      forgetPassword: "user/forgotpassword",
      registerUser: "user",
      getAllDomains: "alldomains",
      postByDomainId: "posts/#",
      allPost: "talentfeed",
      searchConnections: "search/#",
      getFile: "files/#",
      follow: "follow/#",
      unfollow: "unfollow/#",
      getFollowees: "followees",
      getFollowers: "followers",
      updateUser: "user/me",
      getUserDetails: "user/me",
      getUserInterests: "user/domains",
      fileUpload: "upload",
      uploadPost: "post",
      increaseLike: "like",
      getComments: "comments/#",
      profilePicUpload: 'uploadprofilepic',
      postComment: 'comment',
      getAllUserPosts: "user/posts",
      upadatePostByPostId: "post/#",
      deletePostByPostId: "post/#",
      getUserPortfolio: "portfolio/#"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/aditya/Documents/IIITB/CoursesAndCurriculum/Semester2/SoftwareProductionEngineering/project/talent-hub/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
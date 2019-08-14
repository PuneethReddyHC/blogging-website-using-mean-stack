(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editor-editor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/editor/editor.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editor/editor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"profile-page\">\n    <section class=\"section-profile-cover section-shaped my-0\">\n      <!-- Circles background -->\n      <div class=\"shape shape-style-1 shape-primary alpha-4\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n    <section class=\"section section-lg pt-lg-0 section-contact-us\">\n        <div class=\"container\">\n          <div class=\"row justify-content-center mt--300\">\n            <div class=\"col-lg-8\">\n              <div class=\"card bg-gradient-secondary shadow\">\n                <div class=\"card-body p-lg-5\">\n                  <h4 class=\"mb-1\">Write an Article</h4>\n                  <p class=\"mt-0\">and place in a best position.</p>\n                  <app-list-errors [errors]=\"errors\"></app-list-errors>\n                  <form [formGroup]=\"articleForm\">\n                      <fieldset [disabled]=\"isSubmitting\">\n                  <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"></span>\n                      </div>\n                      <input class=\"form-control\" formControlName=\"title\"\n                      type=\"text\"\n                      placeholder=\"Article Title\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"></span>\n                      </div>\n                      <input class=\"form-control\" formControlName=\"description\"\n                      type=\"text\"\n                      placeholder=\"What's this article about?\"  (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                    </div>\n                  </div>\n                  <div class=\"form-group mb-4\">\n                    <textarea class=\"form-control form-control-alternative\" formControlName=\"body\"\n                    rows=\"8\"\n                    placeholder=\"Write your article (in markdown)\"></textarea>\n                  </div>\n                  <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\n                      <div class=\"input-group input-group-alternative\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\"\n                        placeholder=\"Enter tags\"\n                        [formControl]=\"tagField\"\n                        (keyup.enter)=\"addTag()\"  (focus)=\"focus=true\" (blur)=\"focus=false\">\n                      </div>\n                    </div>\n                    <div class=\"tag-list\">\n                        <span *ngFor=\"let tag of article.tagList\"\n                          class=\"tag-default tag-pill\">\n                          <i class=\"ion-close-round\" (click)=\"removeTag(tag)\"></i>\n                          {{ tag }}\n                        </span>\n                      </div>\n                  <div>\n                    <button type=\"button\" (click)=\"submitForm()\" class=\"btn btn-default btn-round btn-block btn-lg\">Publish Article</button>\n                  </div>\n                  </fieldset>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n  </main>\n\n\n"

/***/ }),

/***/ "./src/app/editor/editable-article-resolver.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/editor/editable-article-resolver.service.ts ***!
  \*************************************************************/
/*! exports provided: EditableArticleResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableArticleResolver", function() { return EditableArticleResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EditableArticleResolver = class EditableArticleResolver {
    constructor(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
    }
    resolve(route, state) {
        return this.articlesService.get(route.params['slug'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(article => {
            if (this.userService.getCurrentUser().username === article.author.username) {
                return article;
            }
            else {
                this.router.navigateByUrl('/');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => this.router.navigateByUrl('/')));
    }
};
EditableArticleResolver.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
EditableArticleResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EditableArticleResolver);



/***/ }),

/***/ "./src/app/editor/editor-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/editor/editor-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorRoutingModule", function() { return EditorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editable-article-resolver.service */ "./src/app/editor/editable-article-resolver.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");






const routes = [
    {
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: ':slug',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        resolve: {
            article: _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_4__["EditableArticleResolver"]
        }
    }
];
let EditorRoutingModule = class EditorRoutingModule {
};
EditorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditorRoutingModule);



/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");





let EditorComponent = class EditorComponent {
    constructor(articlesService, route, router, fb) {
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.article = {};
        this.tagField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.errors = {};
        this.isSubmitting = false;
        // use the FormBuilder to create a form group
        this.articleForm = this.fb.group({
            title: '',
            description: '',
            body: ''
        });
        // Initialized tagList as empty array
        this.article.tagList = [];
        // Optional: subscribe to value changes on the form
        // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
    }
    ngOnInit() {
        // If there's an article prefetched, load it
        this.route.data.subscribe((data) => {
            if (data.article) {
                this.article = data.article;
                this.articleForm.patchValue(data.article);
            }
        });
    }
    addTag() {
        // retrieve tag control
        const tag = this.tagField.value;
        // only add tag if it does not exist yet
        if (this.article.tagList.indexOf(tag) < 0) {
            this.article.tagList.push(tag);
        }
        // clear the input
        this.tagField.reset('');
    }
    removeTag(tagName) {
        this.article.tagList = this.article.tagList.filter(tag => tag !== tagName);
    }
    submitForm() {
        this.isSubmitting = true;
        // update the model
        this.updateArticle(this.articleForm.value);
        // post the changes
        this.articlesService.save(this.article).subscribe(article => this.router.navigateByUrl('/article/' + article.slug), err => {
            this.errors = err;
            this.isSubmitting = false;
        });
    }
    updateArticle(values) {
        Object.assign(this.article, values);
    }
};
EditorComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["ArticlesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editor-page',
        template: __webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/editor/editor.component.html")
    })
], EditorComponent);



/***/ }),

/***/ "./src/app/editor/editor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/editor/editor.module.ts ***!
  \*****************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editable-article-resolver.service */ "./src/app/editor/editable-article-resolver.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-routing.module */ "./src/app/editor/editor-routing.module.ts");






let EditorModule = class EditorModule {
};
EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _editor_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditorRoutingModule"]],
        declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]],
        providers: [_editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_3__["EditableArticleResolver"]]
    })
], EditorModule);



/***/ })

}]);
//# sourceMappingURL=editor-editor-module-es2015.js.map
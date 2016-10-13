"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hasher_service_1 = require('./hasher.service');
var HasherListComponent = (function () {
    function HasherListComponent(hasherService) {
        this.hasherService = hasherService;
        this.hashers = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    HasherListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasherService
            .getAll().subscribe(
        /* happy path */ function (p) { return _this.hashers = p; }, 
        /* error path */ function (e) { return _this.errorMessage = e; }, 
        /* onComplete */ function () { return _this.isLoading = false; });
    };
    HasherListComponent = __decorate([
        core_1.Component({
            selector: 'hasher-list',
            templateUrl: 'app/html/hash-list.component.html'
        }), 
        __metadata('design:paramtypes', [hasher_service_1.HasherService])
    ], HasherListComponent);
    return HasherListComponent;
}());
exports.HasherListComponent = HasherListComponent;
//# sourceMappingURL=hasher-list.component.js.map
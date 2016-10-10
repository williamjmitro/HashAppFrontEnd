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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var HasherService = (function () {
    function HasherService(http) {
        this.http = http;
        this.baseUrl = 'https://hashapppitt.herokuapp.com/hasher';
    }
    HasherService.prototype.getAll = function () {
        console.log('Test');
        var hasher$ = this.http
            .get(this.baseUrl + "/all", { headers: this.getHeaders() })
            .map(mapHashers)
            .catch(handleError);
        return hasher$;
    };
    HasherService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    };
    HasherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HasherService);
    return HasherService;
}());
exports.HasherService = HasherService;
function mapHashers(response) {
    return response.json().results.map(toHasher);
}
function toHasher(r) {
    var hasher = ({
        hasherId: r.hasherId,
        hashName: r.hashName,
    });
    console.log('Parsed Hasher:', hasher);
    return hasher;
}
function mapHasher(response) {
    return toHasher(response.json());
}
function handleError(error) {
    var errorMsg = error.message || "Yo shit is broke!";
    console.error(errorMsg);
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=hasher.service.js.map
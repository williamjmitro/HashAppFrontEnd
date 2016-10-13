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
        var hasher$ = this.http
            .get(this.baseUrl + "/all", { headers: this.getHeaders() })
            .map(mapHashers)
            .catch(handleError);
        return hasher$;
    };
    HasherService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
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
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');
    // The response of the API has a results
    // property with the actual results
    //  console.log(response);
    return response.json().hasherDtos.map(toHasher);
}
function toHasher(r) {
    var hasher = ({
        hasherId: r.hasherId,
        hashName: r.hashName,
        nerdFirst: r.nerdFirst,
        nerdLast: r.nerdLast,
        anniversary: new Date(r.anniversary),
        kennel: r.kennelName,
        trailCount: r.trailCount,
        haredCount: r.haredCount,
    });
    console.log('Parsed Hasher:', hasher);
    return hasher;
}
function mapHasher(response) {
    // toPerson looks just like in the previous example
    return toHasher(response.json());
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sofisticated
    var errorMsg = error.message || "Yo shit is broke!";
    console.error(errorMsg);
    // throw an application level error
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=hasher.service.js.map
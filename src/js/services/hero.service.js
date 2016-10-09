System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this.heroesUrl = 'app/heroes'; // URL to web api
                }
                HeroService.prototype.getHeroes = function () {
                    return this.http
                        .get(this.heroesUrl)
                        .map(this.extractData);
                };
                HeroService.prototype.getHero = function (id) {
                    return this.getHeroes()
                        .map(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService.prototype.save = function (hero) {
                    if (hero.id) {
                        return this.put(hero);
                    }
                    return this.post(hero);
                };
                HeroService.prototype.delete = function (hero) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.heroesUrl + "/" + hero.id;
                    return this.http
                        .delete(url, headers);
                };
                // Add new Hero
                HeroService.prototype.post = function (hero) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json' });
                    return this.http
                        .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
                        .map(this.extractData);
                };
                // Update existing Hero
                HeroService.prototype.put = function (hero) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.heroesUrl + "/" + hero.id;
                    return this.http
                        .put(url, JSON.stringify(hero), { headers: headers })
                        .map(function () { return hero; });
                };
                HeroService.prototype.extractData = function (res) {
                    return res.json() || [];
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBR0kscUJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFGdEIsY0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFFLGlCQUFpQjtnQkFFbEIsQ0FBQztnQkFFbkMsK0JBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7eUJBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7b0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7eUJBQ2xCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO2dCQUNqRSxDQUFDO2dCQUVELDBCQUFJLEdBQUosVUFBSyxJQUFVO29CQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFVO29CQUNiLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBRW5ELElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLEVBQUksQ0FBQztvQkFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO3lCQUNYLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsZUFBZTtnQkFDUCwwQkFBSSxHQUFaLFVBQWEsSUFBVTtvQkFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7d0JBQ3RCLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7b0JBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO3lCQUM5RCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVELHVCQUF1QjtnQkFDZix5QkFBRyxHQUFYLFVBQVksSUFBVTtvQkFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFFbkQsSUFBSSxHQUFHLEdBQU0sSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsRUFBSSxDQUFDO29CQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ1gsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO3lCQUNsRCxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFTyxpQ0FBVyxHQUFuQixVQUFvQixHQUFhO29CQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkExREw7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBNERiLGtCQUFDO1lBQUQsQ0FBQyxBQTNERCxJQTJEQztZQTNERCxxQ0EyREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4uL21vZGVscy9oZXJvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlcm9TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGhlcm9lc1VybCA9ICdhcHAvaGVyb2VzJzsgIC8vIFVSTCB0byB3ZWIgYXBpXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgZ2V0SGVyb2VzKCk6IE9ic2VydmFibGU8SGVyb1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQodGhpcy5oZXJvZXNVcmwpXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpO1xuICAgIH1cblxuICAgIGdldEhlcm8oaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SGVybz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRIZXJvZXMoKVxuICAgICAgICAgICAgLm1hcChoZXJvZXMgPT4gaGVyb2VzLmZpbHRlcihoZXJvID0+IGhlcm8uaWQgPT09IGlkKVswXSk7XG4gICAgfVxuXG4gICAgc2F2ZShoZXJvOiBIZXJvKTogT2JzZXJ2YWJsZTxIZXJvPiAge1xuICAgICAgICBpZiAoaGVyby5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHV0KGhlcm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoaGVybyk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGhlcm86IEhlcm8pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuaGVyb2VzVXJsfS8ke2hlcm8uaWR9YDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAuZGVsZXRlKHVybCwgaGVhZGVycyk7XG4gICAgfVxuXG4gICAgLy8gQWRkIG5ldyBIZXJvXG4gICAgcHJpdmF0ZSBwb3N0KGhlcm86IEhlcm8pOiBPYnNlcnZhYmxlPEhlcm8+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3QodGhpcy5oZXJvZXNVcmwsIEpTT04uc3RyaW5naWZ5KGhlcm8pLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBleGlzdGluZyBIZXJvXG4gICAgcHJpdmF0ZSBwdXQoaGVybzogSGVybyk6IE9ic2VydmFibGU8SGVybz4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLmhlcm9lc1VybH0vJHtoZXJvLmlkfWA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnB1dCh1cmwsIEpTT04uc3RyaW5naWZ5KGhlcm8pLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKCgpID0+IGhlcm8pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKSB8fCBbXTtcbiAgICB9XG5cbn1cbiJdfQ==
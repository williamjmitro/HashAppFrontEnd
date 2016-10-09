System.register(['@angular/core', '@angular/router', '../models/hero', '../services/hero.service', '../templates/hero-detail.html'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_1, hero_service_1, hero_detail_html_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (hero_detail_html_1_1) {
                hero_detail_html_1 = hero_detail_html_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService, route, router) {
                    this.heroService = heroService;
                    this.route = route;
                    this.router = router;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params
                        .subscribe(function (params) {
                        var id = +params.id; // (+) converts string 'id' to a number
                        if (id) {
                            _this.heroService.getHero(id)
                                .subscribe(function (hero) { return _this.hero = hero; });
                        }
                        else {
                            _this.hero = new hero_1.Hero();
                        }
                    });
                };
                HeroDetailComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                HeroDetailComponent.prototype.save = function () {
                    var _this = this;
                    this.heroService
                        .save(this.hero)
                        .subscribe(function (hero) {
                        _this.hero = hero; // saved hero, w/ id if new
                        _this.gotoHeroes();
                    }, function (error) { return _this.error = error; } // TODO: Display error message
                    );
                };
                HeroDetailComponent.prototype.gotoHeroes = function () {
                    var heroId = this.hero ? this.hero.id : null;
                    // Pass along the hero id if available
                    // so that the HeroList component can select that hero.
                    this.router.navigate(['/heroes'], { queryParams: { id: heroId } });
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        styleUrls: ['dist/css/component/hero-detail.component.css'],
                        template: hero_detail_html_1.htmlTemplate,
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, router_1.Router])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBS0ksNkJBQ1ksV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsTUFBYztvQkFGZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7b0JBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQzFCLENBQUM7Z0JBRUQsc0NBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFWRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTt5QkFDdkIsU0FBUyxDQUFDLFVBQUMsTUFBVzt3QkFDbkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsdUNBQXVDO3dCQUM1RCxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztpQ0FDdkIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQzt3QkFDN0MsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7d0JBQzNCLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCx5Q0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsa0NBQUksR0FBSjtvQkFBQSxpQkFVQztvQkFURyxJQUFJLENBQUMsV0FBVzt5QkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDZixTQUFTLENBQ04sVUFBQSxJQUFJO3dCQUNBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO3dCQUM3QyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFFLDhCQUE4QjtxQkFDOUQsQ0FBQztnQkFDVixDQUFDO2dCQUVELHdDQUFVLEdBQVY7b0JBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQzdDLHNDQUFzQztvQkFDdEMsdURBQXVEO29CQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsQ0FBQztnQkFuREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQzt3QkFDM0QsUUFBUSxFQUFFLCtCQUFZO3FCQUN6QixDQUFDOzt1Q0FBQTtnQkFpREYsMEJBQUM7WUFBRCxDQUFDLEFBL0NELElBK0NDO1lBL0NELHFEQStDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuLi9tb2RlbHMvaGVybyc7XG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2hlcm8uc2VydmljZSc7XG5pbXBvcnQgeyBodG1sVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvaGVyby1kZXRhaWwuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaGVyby1kZXRhaWwnLFxuICAgIHN0eWxlVXJsczogWydkaXN0L2Nzcy9jb21wb25lbnQvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyddLFxuICAgIHRlbXBsYXRlOiBodG1sVGVtcGxhdGUsXG59KVxuXG5leHBvcnQgY2xhc3MgSGVyb0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBoZXJvOiBIZXJvO1xuICAgIGVycm9yOiBhbnk7XG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgICAgICAgLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zLmlkOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvKGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShoZXJvID0+IHRoaXMuaGVybyA9IGhlcm8pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVybyA9IG5ldyBIZXJvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5oZXJvU2VydmljZVxuICAgICAgICAgICAgLnNhdmUodGhpcy5oZXJvKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBoZXJvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvID0gaGVybzsgLy8gc2F2ZWQgaGVybywgdy8gaWQgaWYgbmV3XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ290b0hlcm9lcygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yICAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ290b0hlcm9lcygpIHtcbiAgICAgICAgbGV0IGhlcm9JZCA9IHRoaXMuaGVybyA/IHRoaXMuaGVyby5pZCA6IG51bGw7XG4gICAgICAgIC8vIFBhc3MgYWxvbmcgdGhlIGhlcm8gaWQgaWYgYXZhaWxhYmxlXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIEhlcm9MaXN0IGNvbXBvbmVudCBjYW4gc2VsZWN0IHRoYXQgaGVyby5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaGVyb2VzJ10sIHsgcXVlcnlQYXJhbXM6IHsgaWQ6IGhlcm9JZCB9IH0pO1xuICAgIH1cblxufVxuIl19
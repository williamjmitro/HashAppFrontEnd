System.register(['@angular/core', '@angular/router', './hero-detail.component', '../services/hero.service', '../templates/heroes.html'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_detail_component_1, hero_service_1, heroes_html_1;
    var HeroesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (heroes_html_1_1) {
                heroes_html_1 = heroes_html_1_1;
            }],
        execute: function() {
            HeroesListComponent = (function () {
                function HeroesListComponent(router, heroService) {
                    this.router = router;
                    this.heroService = heroService;
                    this.addingHero = false;
                }
                HeroesListComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService
                        .getHeroes()
                        .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.error = error; } // TODO: Display error message
                    );
                };
                HeroesListComponent.prototype.addHero = function () {
                    this.addingHero = true;
                    this.selectedHero = null;
                };
                HeroesListComponent.prototype.close = function (savedHero) {
                    this.addingHero = false;
                    if (savedHero) {
                        this.getHeroes();
                    }
                };
                HeroesListComponent.prototype.delete = function (hero, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.heroService
                        .delete(hero)
                        .subscribe(function (res) { return _this.heroes = _this.heroes.filter(function (h) { return h.id !== hero.id; }); }, function (error) { return _this.error = error; } // TODO: Display error message
                    );
                };
                HeroesListComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesListComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                    this.addingHero = false;
                };
                HeroesListComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['/detail/:id', { id: this.selectedHero.id }]);
                };
                HeroesListComponent = __decorate([
                    core_1.Component({
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        selector: 'my-heroes',
                        styleUrls: ['dist/css/component/heroes.component.css'],
                        template: heroes_html_1.htmlTemplate,
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], HeroesListComponent);
                return HeroesListComponent;
            }());
            exports_1("HeroesListComponent", HeroesListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyb2VzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBTUksNkJBQ1ksTUFBYyxFQUNkLFdBQXdCO29CQUR4QixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUxwQyxlQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUtxQixDQUFDO2dCQUV6Qyx1Q0FBUyxHQUFUO29CQUFBLGlCQU9DO29CQU5HLElBQUksQ0FBQyxXQUFXO3lCQUNYLFNBQVMsRUFBRTt5QkFDWCxTQUFTLENBQ04sVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsRUFDOUIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyw4QkFBOEI7cUJBQzdELENBQUM7Z0JBQ1YsQ0FBQztnQkFFRCxxQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxtQ0FBSyxHQUFMLFVBQU0sU0FBZTtvQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUQsb0NBQU0sR0FBTixVQUFPLElBQVUsRUFBRSxLQUFVO29CQUE3QixpQkFRQztvQkFQRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxXQUFXO3lCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ1osU0FBUyxDQUNOLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUF2RCxDQUF1RCxFQUM5RCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLDhCQUE4QjtxQkFDN0QsQ0FBQztnQkFDVixDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELHNDQUFRLEdBQVIsVUFBUyxJQUFVO29CQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxDQUFDO2dCQXpETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3dCQUNqQyxRQUFRLEVBQUUsV0FBVzt3QkFDckIsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7d0JBQ3RELFFBQVEsRUFBRSwwQkFBWTtxQkFDekIsQ0FBQzs7dUNBQUE7Z0JBcURGLDBCQUFDO1lBQUQsQ0FBQyxBQW5ERCxJQW1EQztZQW5ERCxxREFtREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi4vbW9kZWxzL2hlcm8nO1xuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaGVyby5zZXJ2aWNlJztcbmltcG9ydCB7IGh0bWxUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy9oZXJvZXMuaHRtbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtIZXJvRGV0YWlsQ29tcG9uZW50XSxcbiAgICBzZWxlY3RvcjogJ215LWhlcm9lcycsXG4gICAgc3R5bGVVcmxzOiBbJ2Rpc3QvY3NzL2NvbXBvbmVudC9oZXJvZXMuY29tcG9uZW50LmNzcyddLFxuICAgIHRlbXBsYXRlOiBodG1sVGVtcGxhdGUsXG59KVxuXG5leHBvcnQgY2xhc3MgSGVyb2VzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaGVyb2VzOiBIZXJvW107XG4gICAgc2VsZWN0ZWRIZXJvOiBIZXJvO1xuICAgIGFkZGluZ0hlcm8gPSBmYWxzZTtcbiAgICBlcnJvcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7IH1cblxuICAgIGdldEhlcm9lcygpIHtcbiAgICAgICAgdGhpcy5oZXJvU2VydmljZVxuICAgICAgICAgICAgLmdldEhlcm9lcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGhlcm9lcyA9PiB0aGlzLmhlcm9lcyA9IGhlcm9lcyxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IgLy8gVE9ETzogRGlzcGxheSBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZEhlcm8oKSB7XG4gICAgICAgIHRoaXMuYWRkaW5nSGVybyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIZXJvID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbG9zZShzYXZlZEhlcm86IEhlcm8pIHtcbiAgICAgICAgdGhpcy5hZGRpbmdIZXJvID0gZmFsc2U7XG4gICAgICAgIGlmIChzYXZlZEhlcm8pIHsgdGhpcy5nZXRIZXJvZXMoKTsgfVxuICAgIH1cblxuICAgIGRlbGV0ZShoZXJvOiBIZXJvLCBldmVudDogYW55KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmhlcm9TZXJ2aWNlXG4gICAgICAgICAgICAuZGVsZXRlKGhlcm8pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB0aGlzLmhlcm9lcyA9IHRoaXMuaGVyb2VzLmZpbHRlcihoID0+IGguaWQgIT09IGhlcm8uaWQpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSBlcnJvciAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SGVyb2VzKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3QoaGVybzogSGVybykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSGVybyA9IGhlcm87XG4gICAgICAgIHRoaXMuYWRkaW5nSGVybyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdvdG9EZXRhaWwoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2RldGFpbC86aWQnLCB7IGlkOiB0aGlzLnNlbGVjdGVkSGVyby5pZCB9XSk7XG4gICAgfVxufVxuIl19
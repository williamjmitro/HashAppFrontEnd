System.register(['@angular/core', '@angular/router', '../services/hero.service', '../templates/dashboard.html'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_service_1, dashboard_html_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (dashboard_html_1_1) {
                dashboard_html_1 = dashboard_html_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(router, heroService) {
                    this.router = router;
                    this.heroService = heroService;
                    this.heroes = [];
                }
                DashboardComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes()
                        .subscribe(function (heroes) {
                        _this.heroes = heroes.slice(1, 5);
                    });
                };
                DashboardComponent.prototype.gotoDetail = function (hero) {
                    this.router.navigate(['/detail/:id', { id: hero.id }]);
                };
                DashboardComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        styleUrls: ['dist/css/component/dashboard.component.css'],
                        template: dashboard_html_1.htmlTemplate,
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFHSSw0QkFDWSxNQUFjLEVBQ2QsV0FBd0I7b0JBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBSnBDLFdBQU0sR0FBVyxFQUFFLENBQUM7Z0JBS3BCLENBQUM7Z0JBRUQsc0NBQVMsR0FBVDtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTt5QkFDdkIsU0FBUyxDQUFDLFVBQUEsTUFBTTt3QkFDYixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELHVDQUFVLEdBQVYsVUFBVyxJQUFVO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQTNCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQzt3QkFDekQsUUFBUSxFQUFFLDZCQUFZO3FCQUN6QixDQUFDOztzQ0FBQTtnQkF3QkYseUJBQUM7WUFBRCxDQUFDLEFBdEJELElBc0JDO1lBdEJELG1EQXNCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuLi9tb2RlbHMvaGVybyc7XG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2hlcm8uc2VydmljZSc7XG5pbXBvcnQgeyBodG1sVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvZGFzaGJvYXJkLmh0bWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWRhc2hib2FyZCcsXG4gICAgc3R5bGVVcmxzOiBbJ2Rpc3QvY3NzL2NvbXBvbmVudC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddLFxuICAgIHRlbXBsYXRlOiBodG1sVGVtcGxhdGUsXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBoZXJvZXM6IEhlcm9bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0SGVyb2VzKCkge1xuICAgICAgICB0aGlzLmhlcm9TZXJ2aWNlLmdldEhlcm9lcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGhlcm9lcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXMgPSBoZXJvZXMuc2xpY2UoMSwgNSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb3RvRGV0YWlsKGhlcm86IEhlcm8pIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsLzppZCcsIHsgaWQ6IGhlcm8uaWQgfV0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEhlcm9lcygpO1xuICAgIH1cbn1cbiJdfQ==
System.register(['@angular/core', '@angular/router', '../services/hero.service'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_service_1;
    var AppComponent;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            hero_service_1.HeroService,
                        ],
                        selector: 'my-app',
                        styleUrls: ['dist/css/component/app.component.css'],
                        template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <!--<a [routerLink]=\"['/crisis-center']\">Crisis Center</a>-->\n            <!--<a [routerLink]=\"['/dashboard']\">Dashboard</a>-->\n            <a [routerLink]=\"['/heroes']\">Heroes</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0ksVUFBSyxHQUFHLGdCQUFnQixDQUFDO2dCQUM3QixDQUFDO2dCQW5CRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUU7NEJBQ1AsMEJBQVc7eUJBQ2Q7d0JBQ0QsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO3dCQUNuRCxRQUFRLEVBQUUsc1RBUVQ7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUFDLEFBRkQsSUFFQztZQUZELHVDQUVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZXJvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIZXJvU2VydmljZSxcbiAgICBdLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBzdHlsZVVybHM6IFsnZGlzdC9jc3MvY29tcG9uZW50L2FwcC5jb21wb25lbnQuY3NzJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPnt7dGl0bGV9fTwvaDE+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8IS0tPGEgW3JvdXRlckxpbmtdPVwiWycvY3Jpc2lzLWNlbnRlciddXCI+Q3Jpc2lzIENlbnRlcjwvYT4tLT5cbiAgICAgICAgICAgIDwhLS08YSBbcm91dGVyTGlua109XCJbJy9kYXNoYm9hcmQnXVwiPkRhc2hib2FyZDwvYT4tLT5cbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2hlcm9lcyddXCI+SGVyb2VzPC9hPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdGl0bGUgPSAnVG91ciBvZiBIZXJvZXMnO1xufVxuIl19
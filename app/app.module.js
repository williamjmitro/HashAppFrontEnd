System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/router', './app.component', './hero-detail.component', './heroes.component', './hero.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, router_1, app_component_1, hero_detail_component_1, heroes_component_1, hero_service_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forRoot([
                                {
                                    path: 'heroes',
                                    component: heroes_component_1.HeroesComponent
                                }
                            ])
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            hero_detail_component_1.HeroDetailComponent,
                            heroes_component_1.HeroesComponent
                        ],
                        providers: [
                            hero_service_1.HeroService
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkF0QkQ7b0JBQUMsZUFBUSxDQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUCxnQ0FBYTs0QkFDYixtQkFBVzs0QkFDWCxxQkFBWSxDQUFDLE9BQU8sQ0FBQztnQ0FDbkI7b0NBQ0UsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsU0FBUyxFQUFFLGtDQUFlO2lDQUMzQjs2QkFDRixDQUFDO3lCQUNIO3dCQUNELFlBQVksRUFBRTs0QkFDWiw0QkFBWTs0QkFDWiwyQ0FBbUI7NEJBQ25CLGtDQUFlO3lCQUNoQjt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsMEJBQVc7eUJBQ1o7d0JBQ0QsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtxQkFDNUIsQ0FBQzs7NkJBQUE7Z0JBRUYsZ0JBQUM7WUFBRCxDQUFDLEFBREQsSUFDQztZQURELGlDQUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gICAgICAgIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hlcm8tZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9lc0NvbXBvbmVudCB9ICAgICBmcm9tICcuL2hlcm9lcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvU2VydmljZSB9ICAgICAgICAgZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaGVyb2VzJyxcclxuICAgICAgICBjb21wb25lbnQ6IEhlcm9lc0NvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBIZXJvRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgSGVyb2VzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEhlcm9TZXJ2aWNlXHJcbiAgXSxcclxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbn1cclxuIl19
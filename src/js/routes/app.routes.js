System.register(['@angular/router', '../components/dashboard.component', '../components/heroes-list.component', '../components/hero-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, heroes_list_component_1, hero_detail_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_list_component_1_1) {
                heroes_list_component_1 = heroes_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                // { path: 'crisis-center', component: CrisisCenterComponent },
                {
                    component: dashboard_component_1.DashboardComponent,
                    path: '',
                },
                {
                    component: hero_detail_component_1.HeroDetailComponent,
                    path: 'detail/:id',
                },
                {
                    component: heroes_list_component_1.HeroesListComponent,
                    path: 'heroes',
                },
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes),
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU9hLE1BQU0sRUFnQk4sb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7O1lBaEJwQixvQkFBQSxNQUFNLEdBQWlCO2dCQUNsQywrREFBK0Q7Z0JBQy9EO29CQUNFLFNBQVMsRUFBRSx3Q0FBa0I7b0JBQzdCLElBQUksRUFBRSxFQUFFO2lCQUNUO2dCQUNEO29CQUNFLFNBQVMsRUFBRSwyQ0FBbUI7b0JBQzlCLElBQUksRUFBRSxZQUFZO2lCQUNuQjtnQkFDRDtvQkFDRSxTQUFTLEVBQUUsMkNBQW1CO29CQUM5QixJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGLENBQUEsQ0FBQztZQUVXLGtDQUFBLG9CQUFvQixHQUFHO2dCQUNsQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQzthQUN0QixDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb2VzTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVyb2VzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEhlcm9EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tZGV0YWlsLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICAvLyB7IHBhdGg6ICdjcmlzaXMtY2VudGVyJywgY29tcG9uZW50OiBDcmlzaXNDZW50ZXJDb21wb25lbnQgfSxcbiAge1xuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIHBhdGg6ICcnLFxuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBIZXJvRGV0YWlsQ29tcG9uZW50LFxuICAgIHBhdGg6ICdkZXRhaWwvOmlkJyxcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogSGVyb2VzTGlzdENvbXBvbmVudCxcbiAgICBwYXRoOiAnaGVyb2VzJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSX1BST1ZJREVSUyA9IFtcbiAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpLFxuXTtcbiJdfQ==
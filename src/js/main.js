System.register(['@angular/platform-browser-dynamic', '@angular/http', './components/app.component', './routes/app.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, app_component_1, app_routes_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            document.addEventListener("DOMContentLoaded", function (event) {
                // TODO: register HTTP_PROVIDERS in AppComponent providers
                platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                    app_routes_1.APP_ROUTER_PROVIDERS,
                    http_1.HTTP_PROVIDERS,
                ])
                    .catch(function (err) { return console.error(err); });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFTLEtBQUs7Z0JBQ3hELDBEQUEwRDtnQkFDMUQsb0NBQVMsQ0FBQyw0QkFBWSxFQUFFO29CQUNwQixpQ0FBb0I7b0JBQ3BCLHFCQUFjO2lCQUNqQixDQUFDO3FCQUNDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSB1c3VhbCBib290c3RyYXBwaW5nIGltcG9ydHNcbmltcG9ydCB7IGJvb3RzdHJhcCB9ICAgIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBUFBfUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJy4vcm91dGVzL2FwcC5yb3V0ZXMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIFRPRE86IHJlZ2lzdGVyIEhUVFBfUFJPVklERVJTIGluIEFwcENvbXBvbmVudCBwcm92aWRlcnNcbiAgICBib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgICAgIEFQUF9ST1VURVJfUFJPVklERVJTLFxuICAgICAgICBIVFRQX1BST1ZJREVSUyxcbiAgICBdKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xufSk7XG4iXX0=
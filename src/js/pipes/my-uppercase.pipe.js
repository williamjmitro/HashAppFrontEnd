System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var MyUppercasePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyUppercasePipe = (function () {
                function MyUppercasePipe() {
                }
                MyUppercasePipe.prototype.transform = function (value) {
                    return value.toUpperCase();
                };
                MyUppercasePipe = __decorate([
                    core_1.Pipe({ name: 'my-uppercase' }), 
                    __metadata('design:paramtypes', [])
                ], MyUppercasePipe);
                return MyUppercasePipe;
            }());
            exports_1("MyUppercasePipe", MyUppercasePipe);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktdXBwZXJjYXNlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS11cHBlcmNhc2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEcsbUNBQVMsR0FBVCxVQUFVLEtBQWE7b0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBSkw7b0JBQUMsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDOzttQ0FBQTtnQkFLL0Isc0JBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELDZDQUlDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdteS11cHBlcmNhc2UnIH0pXG5leHBvcnQgY2xhc3MgTXlVcHBlcmNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxufVxuIl19
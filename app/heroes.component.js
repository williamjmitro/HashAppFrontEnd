System.register(['@angular/core', './hero.service'], function(exports_1, context_1) {
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
    var core_1, hero_service_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(heroService) {
                    this.heroService = heroService;
                    this.title = 'Tour of Heroes';
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'my-heroes',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlcm9lcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3RUE7Z0JBS0UseUJBQW9CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFKNUMsVUFBSyxHQUFHLGdCQUFnQixDQUFDO2dCQUl1QixDQUFDO2dCQUVqRCxtQ0FBUyxHQUFUO29CQUFBLGlCQUVDO29CQURDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUNBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSLFVBQVMsSUFBVTtvQkFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBbkZIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUNuQixRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDBXQVdUO3dCQUNELE1BQU0sRUFBRSxDQUFDLHNpQ0FnRFIsQ0FBQzt3QkFDRixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUN6QixDQUFDOzttQ0FBQTtnQkFtQkYsc0JBQUM7WUFBRCxDQUFDLEFBbEJELElBa0JDO1lBbEJELDZDQWtCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuXHJcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ215LWhlcm9lcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT57e3RpdGxlfX08L2gxPlxyXG4gICAgPGgyPk15IEhlcm9lczwvaDI+XHJcbiAgICA8dWwgY2xhc3M9XCJoZXJvZXNcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBoZXJvIG9mIGhlcm9lc1wiXHJcbiAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImhlcm8gPT09IHNlbGVjdGVkSGVyb1wiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGhlcm8pXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPnt7aGVyby5pZH19PC9zcGFuPiB7e2hlcm8ubmFtZX19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPG15LWhlcm8tZGV0YWlsIFtoZXJvXT1cInNlbGVjdGVkSGVyb1wiPjwvbXktaGVyby1kZXRhaWw+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5oZXJvZXMge1xyXG4gICAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB3aWR0aDogMTVlbTtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgbGkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICAgIGhlaWdodDogMS42ZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgbGk6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgbGVmdDogLjFlbTtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgLnRleHQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTNweDtcclxuICAgIH1cclxuICAgIC5oZXJvZXMgLmJhZGdlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogLTFweDtcclxuICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gIHByb3ZpZGVyczogW0hlcm9TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0aXRsZSA9ICdUb3VyIG9mIEhlcm9lcyc7XHJcbiAgaGVyb2VzOiBIZXJvW107XHJcbiAgc2VsZWN0ZWRIZXJvOiBIZXJvO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkgeyB9XHJcblxyXG4gIGdldEhlcm9lcygpOiB2b2lkIHtcclxuICAgIHRoaXMuaGVyb1NlcnZpY2UuZ2V0SGVyb2VzKCkudGhlbihoZXJvZXMgPT4gdGhpcy5oZXJvZXMgPSBoZXJvZXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgdGhpcy5nZXRIZXJvZXMoKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGhlcm86IEhlcm8pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRIZXJvID0gaGVybztcclxuICB9XHJcbn1cclxuIl19
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_1("htmlTemplate", htmlTemplate = "\n  <div *ngIf=\"hero\">\n    <h2>{{hero.name}} details!</h2>\n    <div>\n        <label>id: </label>{{hero.id}}\n    </div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"gotoHeroes()\">Back</button>\n    <button (click)=\"save()\">Save</button>\n  </div>\n");
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1kZXRhaWwuaHRtbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlcm8tZGV0YWlsLmh0bWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQWEsWUFBWTs7OztZQUFaLDBCQUFBLFlBQVksR0FBRywrVkFhM0IsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcbiAgPGRpdiAqbmdJZj1cImhlcm9cIj5cbiAgICA8aDI+e3toZXJvLm5hbWV9fSBkZXRhaWxzITwvaDI+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPmlkOiA8L2xhYmVsPnt7aGVyby5pZH19XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD5uYW1lOiA8L2xhYmVsPlxuICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiaGVyby5uYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIvPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gKGNsaWNrKT1cImdvdG9IZXJvZXMoKVwiPkJhY2s8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJzYXZlKClcIj5TYXZlPC9idXR0b24+XG4gIDwvZGl2PlxuYDtcbiJdfQ==
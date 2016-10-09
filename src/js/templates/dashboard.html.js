System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_1("htmlTemplate", htmlTemplate = "\n    <h3>Top Heroes</h3>\n    <div class=\"grid grid-pad\">\n      <div *ngFor=\"let hero of heroes\" (click)=\"gotoDetail(hero)\" class=\"col-1-4\">\n        <div class=\"module hero\">\n          <h4>{{hero.name}}</h4>\n        </div>\n      </div>\n    </div>\n");
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmh0bWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuaHRtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxZQUFZOzs7O1lBQVosMEJBQUEsWUFBWSxHQUFHLDJRQVMzQixDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuICAgIDxoMz5Ub3AgSGVyb2VzPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLXBhZFwiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaGVybyBvZiBoZXJvZXNcIiAoY2xpY2spPVwiZ290b0RldGFpbChoZXJvKVwiIGNsYXNzPVwiY29sLTEtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kdWxlIGhlcm9cIj5cbiAgICAgICAgICA8aDQ+e3toZXJvLm5hbWV9fTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuIl19
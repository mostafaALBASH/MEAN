System.register(['angular2/core', './highlight.directive'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-direvtives',
                        template: "\n    <div myHighlight>\n        Highlight Me\n    </div>\n    <br><br>\n    <div [myHighlight] = \"'red'\">\n        Another Highlight Me\n    </div>\n\n    ",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBaEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLHlCQUF5Qjt3QkFDbEMsUUFBUSxFQUFDLGdLQVNSO3dCQUNELFVBQVUsRUFBQyxDQUFDLHdDQUFrQixDQUFDO3FCQUNsQyxDQUFDOzt1Q0FBQTtnQkFHRiwwQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQscURBRUMsQ0FBQSIsImZpbGUiOiJhdHRyaWJ1dGUtZGlyZWN0aXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gJy4vaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidteS1hdHRyaWJ1dGUtZGlyZXZ0aXZlcycsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8ZGl2IG15SGlnaGxpZ2h0PlxyXG4gICAgICAgIEhpZ2hsaWdodCBNZVxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnI+PGJyPlxyXG4gICAgPGRpdiBbbXlIaWdobGlnaHRdID0gXCIncmVkJ1wiPlxyXG4gICAgICAgIEFub3RoZXIgSGlnaGxpZ2h0IE1lXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczpbSGlnaGxpZ2h0RGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlcyB7XHJcblxyXG59Il19

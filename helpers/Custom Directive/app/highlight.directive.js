System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2, core_3;
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = 'green';
                }
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighlightDirective.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor:myHighlight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, core_3.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFHSSw0QkFBb0IsTUFBa0IsRUFBVSxTQUFtQjtvQkFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUYzRCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztnQkFFc0MsQ0FBQztnQkFDdkUseUNBQVksR0FBWjtvQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUNELHlDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDTyxzQ0FBUyxHQUFqQixVQUFrQixLQUFhO29CQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekYsQ0FBQztnQkE5Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFFLENBQUMsNEJBQTRCLENBQUM7d0JBQ3RDLElBQUksRUFBQzs0QkFDRCxjQUFjLEVBQUUsZ0JBQWdCOzRCQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO3lCQUNuQztxQkFDSixDQUFDOztzQ0FBQTtnQkF3QkYseUJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELG1EQWFDLENBQUEiLCJmaWxlIjoiaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtSZW5kZXJlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XScsXHJcbiAgICBpbnB1dHM6IFsnaGlnaGxpZ2h0Q29sb3I6bXlIaWdobGlnaHQnXSxcclxuICAgIGhvc3Q6e1xyXG4gICAgICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxyXG4gICAgICAgICcobW91c2VsZWF2ZSknOiAnb25Nb3VzZUxlYXZlKCknXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vLyBleHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuLy8gICAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICdibHVlJztcclxuXHJcblxyXG4vLyAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcikge31cclxuLy8gICAgIG5nT25Jbml0KCk6YW55IHtcclxuLy8gICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUge1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdENvbG9yID0gJ2dyZWVuJztcclxuICAgIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxyXG4gICAgb25Nb3VzZUVudGVyKCl7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQodGhpcy5oaWdobGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZUxlYXZlKCl7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQobnVsbCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhpZ2hsaWdodChjb2xvcjogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XHJcbiAgICB9XHJcbn0iXX0=

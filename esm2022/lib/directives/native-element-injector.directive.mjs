import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/*
"Property 'nativeElement' does not exist on type 'FormControl'".
'NativeElementInjectorDirective' injects nativeElement to each control,
so we can access it from inside validator for example.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
class NativeElementInjectorDirective {
    controlDir;
    host;
    constructor(controlDir, host) {
        this.controlDir = controlDir;
        this.host = host;
    }
    ngOnInit() {
        if (this.controlDir.control) {
            // @ts-ignore
            this.controlDir.control['nativeElement'] = this.host.nativeElement;
        }
    }
    static ɵfac = function NativeElementInjectorDirective_Factory(t) { return new (t || NativeElementInjectorDirective)(i0.ɵɵdirectiveInject(i1.NgControl), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NativeElementInjectorDirective, selectors: [["", "ngModel", ""], ["", "formControl", ""], ["", "formControlName", ""]] });
}
export { NativeElementInjectorDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NativeElementInjectorDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[ngModel], [formControl], [formControlName]',
            }]
    }], function () { return [{ type: i1.NgControl }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdngtaXRlbC9zcmMvbGliL2RpcmVjdGl2ZXMvbmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQU0sZUFBZSxDQUFDOzs7QUFHOUQ7Ozs7Ozs7RUFPRTtBQUNGLE1BSWEsOEJBQThCO0lBRWpDO0lBQ0E7SUFGVCxZQUNTLFVBQXFCLEVBQ3JCLElBQWlDO1FBRGpDLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBNkI7SUFDdkMsQ0FBQztJQUNKLFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzVCLGFBQWE7WUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN0RTtJQUNGLENBQUM7d0ZBVlcsOEJBQThCOzZEQUE5Qiw4QkFBOEI7O1NBQTlCLDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBSjFDLFNBQVM7ZUFBQztnQkFDViwrQ0FBK0M7Z0JBQy9DLFFBQVEsRUFBRSw2Q0FBNkM7YUFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vKlxyXG5cIlByb3BlcnR5ICduYXRpdmVFbGVtZW50JyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdGb3JtQ29udHJvbCdcIi5cclxuJ05hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZScgaW5qZWN0cyBuYXRpdmVFbGVtZW50IHRvIGVhY2ggY29udHJvbCxcclxuc28gd2UgY2FuIGFjY2VzcyBpdCBmcm9tIGluc2lkZSB2YWxpZGF0b3IgZm9yIGV4YW1wbGUuXHJcbk1vcmUgYWJvdXQgdGhpcyBhcHByb2FjaCBhbmQgcmVhc29ucyBmb3IgdGhpczpcclxuaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgwMjVcclxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MDc1MTE5LzE2MTc1OTBcclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuXHRzZWxlY3RvcjogJ1tuZ01vZGVsXSwgW2Zvcm1Db250cm9sXSwgW2Zvcm1Db250cm9sTmFtZV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29udHJvbERpcjogTmdDb250cm9sLFxyXG5cdFx0cHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxGb3JtRWxlbWVudD5cclxuXHQpIHt9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5jb250cm9sRGlyLmNvbnRyb2wpIHtcclxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLmNvbnRyb2xEaXIuY29udHJvbFsnbmF0aXZlRWxlbWVudCddID0gdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
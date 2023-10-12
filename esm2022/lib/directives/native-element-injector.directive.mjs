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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdngtaXRlbC9zcmMvbGliL2RpcmVjdGl2ZXMvbmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQU0sZUFBZSxDQUFDOzs7QUFHOUQ7Ozs7Ozs7RUFPRTtBQUNGLE1BSWEsOEJBQThCO0lBRTdCO0lBQ0E7SUFGWixZQUNZLFVBQXFCLEVBQ3JCLElBQWlDO1FBRGpDLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBNkI7SUFDMUMsQ0FBQztJQUNKLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzNCLGFBQWE7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNwRTtJQUNILENBQUM7d0ZBVlUsOEJBQThCOzZEQUE5Qiw4QkFBOEI7O1NBQTlCLDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBSjFDLFNBQVM7ZUFBQztnQkFDVCwrQ0FBK0M7Z0JBQy9DLFFBQVEsRUFBRSw2Q0FBNkM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vKlxyXG5cIlByb3BlcnR5ICduYXRpdmVFbGVtZW50JyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdGb3JtQ29udHJvbCdcIi5cclxuJ05hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZScgaW5qZWN0cyBuYXRpdmVFbGVtZW50IHRvIGVhY2ggY29udHJvbCxcclxuc28gd2UgY2FuIGFjY2VzcyBpdCBmcm9tIGluc2lkZSB2YWxpZGF0b3IgZm9yIGV4YW1wbGUuXHJcbk1vcmUgYWJvdXQgdGhpcyBhcHByb2FjaCBhbmQgcmVhc29ucyBmb3IgdGhpczpcclxuaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgwMjVcclxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MDc1MTE5LzE2MTc1OTBcclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ01vZGVsXSwgW2Zvcm1Db250cm9sXSwgW2Zvcm1Db250cm9sTmFtZV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjb250cm9sRGlyOiBOZ0NvbnRyb2wsXHJcbiAgICBwcm90ZWN0ZWQgaG9zdDogRWxlbWVudFJlZjxIVE1MRm9ybUVsZW1lbnQ+XHJcbiAgKSB7fVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29udHJvbERpci5jb250cm9sKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5jb250cm9sRGlyLmNvbnRyb2xbJ25hdGl2ZUVsZW1lbnQnXSA9IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
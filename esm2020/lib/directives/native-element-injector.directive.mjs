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
export class NativeElementInjectorDirective {
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
}
NativeElementInjectorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: NativeElementInjectorDirective, deps: [{ token: i1.NgControl }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NativeElementInjectorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.1", type: NativeElementInjectorDirective, selector: "[ngModel], [formControl], [formControlName]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: NativeElementInjectorDirective, decorators: [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ngModel], [formControl], [formControlName]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdngtaXRlbC9zcmMvbGliL2RpcmVjdGl2ZXMvbmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQU0sZUFBZSxDQUFDOzs7QUFHOUQ7Ozs7Ozs7RUFPRTtBQUtGLE1BQU0sT0FBTyw4QkFBOEI7SUFDMUMsWUFDUyxVQUFxQixFQUNyQixJQUFpQztRQURqQyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQTZCO0lBQ3ZDLENBQUM7SUFDSixRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUM1QixhQUFhO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdEU7SUFDRixDQUFDOzsySEFWVyw4QkFBOEI7K0dBQTlCLDhCQUE4QjsyRkFBOUIsOEJBQThCO2tCQUoxQyxTQUFTO21CQUFDO29CQUNWLCtDQUErQztvQkFDL0MsUUFBUSxFQUFFLDZDQUE2QztpQkFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vKlxyXG5cIlByb3BlcnR5ICduYXRpdmVFbGVtZW50JyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdGb3JtQ29udHJvbCdcIi5cclxuJ05hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZScgaW5qZWN0cyBuYXRpdmVFbGVtZW50IHRvIGVhY2ggY29udHJvbCxcclxuc28gd2UgY2FuIGFjY2VzcyBpdCBmcm9tIGluc2lkZSB2YWxpZGF0b3IgZm9yIGV4YW1wbGUuXHJcbk1vcmUgYWJvdXQgdGhpcyBhcHByb2FjaCBhbmQgcmVhc29ucyBmb3IgdGhpczpcclxuaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgwMjVcclxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MDc1MTE5LzE2MTc1OTBcclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuXHRzZWxlY3RvcjogJ1tuZ01vZGVsXSwgW2Zvcm1Db250cm9sXSwgW2Zvcm1Db250cm9sTmFtZV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29udHJvbERpcjogTmdDb250cm9sLFxyXG5cdFx0cHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxGb3JtRWxlbWVudD5cclxuXHQpIHt9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5jb250cm9sRGlyLmNvbnRyb2wpIHtcclxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLmNvbnRyb2xEaXIuY29udHJvbFsnbmF0aXZlRWxlbWVudCddID0gdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdngtaXRlbC9zcmMvbGliL2RpcmVjdGl2ZXMvbmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQU0sZUFBZSxDQUFDOzs7QUFHOUQ7Ozs7Ozs7RUFPRTtBQUtGLE1BQU0sT0FBTyw4QkFBOEI7SUFDMUMsWUFDUyxVQUFxQixFQUNyQixJQUFpQztRQURqQyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQTZCO0lBQ3ZDLENBQUM7SUFDSixRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUM1QixhQUFhO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdEU7SUFDRixDQUFDOzsySEFWVyw4QkFBOEI7K0dBQTlCLDhCQUE4QjsyRkFBOUIsOEJBQThCO2tCQUoxQyxTQUFTO21CQUFDO29CQUNWLCtDQUErQztvQkFDL0MsUUFBUSxFQUFFLDZDQUE2QztpQkFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKlxuXCJQcm9wZXJ0eSAnbmF0aXZlRWxlbWVudCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnRm9ybUNvbnRyb2wnXCIuXG4nTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlJyBpbmplY3RzIG5hdGl2ZUVsZW1lbnQgdG8gZWFjaCBjb250cm9sLFxuc28gd2UgY2FuIGFjY2VzcyBpdCBmcm9tIGluc2lkZSB2YWxpZGF0b3IgZm9yIGV4YW1wbGUuXG5Nb3JlIGFib3V0IHRoaXMgYXBwcm9hY2ggYW5kIHJlYXNvbnMgZm9yIHRoaXM6XG5odHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODAyNVxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MDc1MTE5LzE2MTc1OTBcbiovXG5ARGlyZWN0aXZlKHtcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3Jcblx0c2VsZWN0b3I6ICdbbmdNb2RlbF0sIFtmb3JtQ29udHJvbF0sIFtmb3JtQ29udHJvbE5hbWVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250cm9sRGlyOiBOZ0NvbnRyb2wsXG5cdFx0cHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxGb3JtRWxlbWVudD5cblx0KSB7fVxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5jb250cm9sRGlyLmNvbnRyb2wpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMuY29udHJvbERpci5jb250cm9sWyduYXRpdmVFbGVtZW50J10gPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==
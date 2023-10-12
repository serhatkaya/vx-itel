import { ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NativeElementInjectorDirective implements OnInit {
    protected controlDir: NgControl;
    protected host: ElementRef<HTMLFormElement>;
    constructor(controlDir: NgControl, host: ElementRef<HTMLFormElement>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NativeElementInjectorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NativeElementInjectorDirective, "[ngModel], [formControl], [formControlName]", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=native-element-injector.directive.d.ts.map
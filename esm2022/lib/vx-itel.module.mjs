import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { VxITelComponent } from './vx-itel.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/dropdown";
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
class VxITelModule {
    static ɵfac = function VxITelModule_Factory(t) { return new (t || VxITelModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: VxITelModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot] });
}
export { VxITelModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VxITelModule, [{
        type: NgModule,
        args: [{
                declarations: [VxITelComponent, NativeElementInjectorDirective],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    dropdownModuleForRoot,
                ],
                exports: [VxITelComponent, NativeElementInjectorDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(VxITelModule, { declarations: [VxITelComponent, NativeElementInjectorDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i1.BsDropdownModule], exports: [VxITelComponent, NativeElementInjectorDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidngtaXRlbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92eC1pdGVsL3NyYy9saWIvdngtaXRlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUV0RCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBMEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFdkcsTUFVYSxZQUFZO3NFQUFaLFlBQVk7NERBQVosWUFBWTtnRUFQdkIsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIscUJBQXFCOztTQUlWLFlBQVk7dUZBQVosWUFBWTtjQVZ4QixRQUFRO2VBQUM7Z0JBQ1QsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLDhCQUE4QixDQUFDO2dCQUMvRCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUNwQjtnQkFDRixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsOEJBQThCLENBQUM7YUFDMUQ7O3dGQUNZLFlBQVksbUJBVFQsZUFBZSxFQUFFLDhCQUE4QixhQUU3RCxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQixrQ0FHVixlQUFlLEVBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVnhJVGVsQ29tcG9uZW50IH0gZnJvbSAnLi92eC1pdGVsLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZHJvcGRvd25Nb2R1bGVGb3JSb290OiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJzRHJvcGRvd25Nb2R1bGU+ID0gQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogW1Z4SVRlbENvbXBvbmVudCwgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlXSxcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRkcm9wZG93bk1vZHVsZUZvclJvb3QsXHJcbiAgXSxcclxuXHRleHBvcnRzOiBbVnhJVGVsQ29tcG9uZW50LCBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVnhJVGVsTW9kdWxlIHtcclxuXHJcbn1cclxuIl19
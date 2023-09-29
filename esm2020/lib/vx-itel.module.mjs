import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { VxITelComponent } from './vx-itel.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/dropdown";
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
export class VxITelModule {
}
VxITelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: VxITelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VxITelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: VxITelModule, declarations: [VxITelComponent, NativeElementInjectorDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i1.BsDropdownModule], exports: [VxITelComponent, NativeElementInjectorDirective] });
VxITelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: VxITelModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: VxITelModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidngtaXRlbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92eC1pdGVsL3NyYy9saWIvdngtaXRlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUV0RCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBMEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7QUFZdkcsTUFBTSxPQUFPLFlBQVk7O3lHQUFaLFlBQVk7MEdBQVosWUFBWSxpQkFUVCxlQUFlLEVBQUUsOEJBQThCLGFBRTdELFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CLGtDQUdWLGVBQWUsRUFBRSw4QkFBOEI7MEdBRTdDLFlBQVksWUFSZjtZQUNSLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLHFCQUFxQjtTQUNwQjsyRkFHVSxZQUFZO2tCQVZ4QixRQUFRO21CQUFDO29CQUNULFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQztvQkFDL0QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHFCQUFxQjtxQkFDcEI7b0JBQ0YsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLDhCQUE4QixDQUFDO2lCQUMxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdGl2ZS1lbGVtZW50LWluamVjdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFZ4SVRlbENvbXBvbmVudCB9IGZyb20gJy4vdngtaXRlbC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTW9kdWxlRm9yUm9vdDogTW9kdWxlV2l0aFByb3ZpZGVyczxCc0Ryb3Bkb3duTW9kdWxlPiA9IEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtWeElUZWxDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0ZHJvcGRvd25Nb2R1bGVGb3JSb290LFxyXG4gIF0sXHJcblx0ZXhwb3J0czogW1Z4SVRlbENvbXBvbmVudCwgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZ4SVRlbE1vZHVsZSB7XHJcblxyXG59XHJcbiJdfQ==
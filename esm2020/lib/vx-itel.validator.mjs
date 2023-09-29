import * as lpn from 'google-libphonenumber';
/*
We use "control: any" instead of "control: FormControl" to silence:
"Property 'nativeElement' does not exist on type 'FormControl'".
This happens because I've expanded control with nativeElement via
'NativeElementInjectorDirective' to get an access to the element.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
export const phoneNumberValidator = (control) => {
    if (!control.value) {
        return;
    }
    // Find <input> inside injected nativeElement and get its "id".
    const el = control.nativeElement;
    const inputBox = el
        ? el.querySelector('input[type="tel"]')
        : undefined;
    if (inputBox) {
        const id = inputBox.id;
        const isCheckValidation = inputBox.getAttribute('validation');
        if (isCheckValidation === 'true') {
            const isRequired = control.errors && control.errors.required === true;
            const error = { validatePhoneNumber: { valid: false } };
            inputBox.setCustomValidity('Invalid field.');
            let number;
            try {
                number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
            }
            catch (e) {
                if (isRequired) {
                    return error;
                }
                else {
                    inputBox.setCustomValidity('');
                }
            }
            if (control.value) {
                // @ts-ignore
                if (!number) {
                    return error;
                }
                else {
                    if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                        return error;
                    }
                    else {
                        inputBox.setCustomValidity('');
                    }
                }
            }
        }
        else if (isCheckValidation === 'false') {
            inputBox.setCustomValidity('');
            control.clearValidators();
        }
    }
    return;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidngtaXRlbC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92eC1pdGVsL3NyYy9saWIvdngtaXRlbC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUU3Qzs7Ozs7Ozs7RUFRRTtBQUNGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsT0FBWSxFQUFFLEVBQUU7SUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7UUFDbkIsT0FBTztLQUNQO0lBQ0QsK0RBQStEO0lBQy9ELE1BQU0sRUFBRSxHQUFnQixPQUFPLENBQUMsYUFBNEIsQ0FBQztJQUM3RCxNQUFNLFFBQVEsR0FBMkIsRUFBRTtRQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUN2QyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2IsSUFBSSxRQUFRLEVBQUU7UUFDYixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFJLGlCQUFpQixLQUFLLE1BQU0sRUFBRTtZQUNqQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztZQUN0RSxNQUFNLEtBQUssR0FBRyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFFeEQsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFN0MsSUFBSSxNQUF1QixDQUFDO1lBRTVCLElBQUk7Z0JBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQ3pCLENBQUM7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLElBQUksVUFBVSxFQUFFO29CQUNmLE9BQU8sS0FBSyxDQUFDO2lCQUNiO3FCQUFNO29CQUNOLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDL0I7YUFDRDtZQUVELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDbEIsYUFBYTtnQkFDVCxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNoQixPQUFPLEtBQUssQ0FBQztpQkFDYjtxQkFBTTtvQkFDTixJQUNDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FDeEQsTUFBTSxFQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUN6QixFQUNBO3dCQUNELE9BQU8sS0FBSyxDQUFDO3FCQUNiO3lCQUFNO3dCQUNOLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDL0I7aUJBQ0Q7YUFDRDtTQUNEO2FBQU0sSUFBSSxpQkFBaUIsS0FBSyxPQUFPLEVBQUU7WUFDekMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRS9CLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtLQUNEO0lBQ0QsT0FBTztBQUNSLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxwbiBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xyXG5cclxuLypcclxuV2UgdXNlIFwiY29udHJvbDogYW55XCIgaW5zdGVhZCBvZiBcImNvbnRyb2w6IEZvcm1Db250cm9sXCIgdG8gc2lsZW5jZTpcclxuXCJQcm9wZXJ0eSAnbmF0aXZlRWxlbWVudCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnRm9ybUNvbnRyb2wnXCIuXHJcblRoaXMgaGFwcGVucyBiZWNhdXNlIEkndmUgZXhwYW5kZWQgY29udHJvbCB3aXRoIG5hdGl2ZUVsZW1lbnQgdmlhXHJcbidOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmUnIHRvIGdldCBhbiBhY2Nlc3MgdG8gdGhlIGVsZW1lbnQuXHJcbk1vcmUgYWJvdXQgdGhpcyBhcHByb2FjaCBhbmQgcmVhc29ucyBmb3IgdGhpczpcclxuaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgwMjVcclxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MDc1MTE5LzE2MTc1OTBcclxuKi9cclxuZXhwb3J0IGNvbnN0IHBob25lTnVtYmVyVmFsaWRhdG9yID0gKGNvbnRyb2w6IGFueSkgPT4ge1xyXG5cdGlmICghY29udHJvbC52YWx1ZSkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHQvLyBGaW5kIDxpbnB1dD4gaW5zaWRlIGluamVjdGVkIG5hdGl2ZUVsZW1lbnQgYW5kIGdldCBpdHMgXCJpZFwiLlxyXG5cdGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGNvbnRyb2wubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuXHRjb25zdCBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCB8IGFueSA9IGVsXHJcblx0XHQ/IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKVxyXG5cdFx0OiB1bmRlZmluZWQ7XHJcblx0aWYgKGlucHV0Qm94KSB7XHJcblx0XHRjb25zdCBpZCA9IGlucHV0Qm94LmlkO1xyXG5cdFx0Y29uc3QgaXNDaGVja1ZhbGlkYXRpb24gPSBpbnB1dEJveC5nZXRBdHRyaWJ1dGUoJ3ZhbGlkYXRpb24nKTtcclxuXHRcdGlmIChpc0NoZWNrVmFsaWRhdGlvbiA9PT0gJ3RydWUnKSB7XHJcblx0XHRcdGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZCA9PT0gdHJ1ZTtcclxuXHRcdFx0Y29uc3QgZXJyb3IgPSB7IHZhbGlkYXRlUGhvbmVOdW1iZXI6IHsgdmFsaWQ6IGZhbHNlIH0gfTtcclxuXHJcblx0XHRcdGlucHV0Qm94LnNldEN1c3RvbVZhbGlkaXR5KCdJbnZhbGlkIGZpZWxkLicpO1xyXG5cclxuXHRcdFx0bGV0IG51bWJlcjogbHBuLlBob25lTnVtYmVyO1xyXG5cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRudW1iZXIgPSBscG4uUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXHJcblx0XHRcdFx0XHRjb250cm9sLnZhbHVlLm51bWJlcixcclxuXHRcdFx0XHRcdGNvbnRyb2wudmFsdWUuY291bnRyeUNvZGVcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0aWYgKGlzUmVxdWlyZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvbnRyb2wudmFsdWUpIHtcclxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKCFudW1iZXIpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHQhbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLmlzVmFsaWROdW1iZXJGb3JSZWdpb24oXHJcblx0XHRcdFx0XHRcdFx0bnVtYmVyLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2wudmFsdWUuY291bnRyeUNvZGVcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlucHV0Qm94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoaXNDaGVja1ZhbGlkYXRpb24gPT09ICdmYWxzZScpIHtcclxuXHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xyXG5cclxuXHRcdFx0Y29udHJvbC5jbGVhclZhbGlkYXRvcnMoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuO1xyXG59O1xyXG4iXX0=
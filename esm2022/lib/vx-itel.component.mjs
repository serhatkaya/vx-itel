import * as lpn from 'google-libphonenumber';
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import { CountryCode } from './data/country-code';
import { SearchCountryField } from './enums/search-country-field.enum';
import { phoneNumberValidator } from './vx-itel.validator';
import { PhoneNumberFormat } from './enums/phone-number-format.enum';
import * as i0 from "@angular/core";
import * as i1 from "./data/country-code";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-bootstrap/dropdown";
import * as i5 from "./directives/native-element-injector.directive";
const _c0 = ["countryList"];
function VxITelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" +", ctx_r0.selectedCountry.dialCode, " ");
} }
function VxITelComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "input", 18);
    i0.ɵɵlistener("ngModelChange", function VxITelComponent_div_6_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.countrySearchText = $event); })("keyup", function VxITelComponent_div_6_div_1_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.searchCountry()); })("click", function VxITelComponent_div_6_div_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.countrySearchText)("placeholder", ctx_r3.searchCountryPlaceholder);
} }
function VxITelComponent_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵlistener("click", function VxITelComponent_div_6_li_4_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const country_r12 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(8); return i0.ɵɵresetView(ctx_r13.onCountrySelect(country_r12, _r2)); });
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 22);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const country_r12 = ctx.$implicit;
    i0.ɵɵproperty("id", country_r12.htmlId + "-preferred");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", country_r12.flagClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", country_r12.dialCode, "");
} }
function VxITelComponent_div_6_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 23);
} }
function VxITelComponent_div_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 24);
    i0.ɵɵlistener("click", function VxITelComponent_div_6_li_6_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const country_r15 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(8); return i0.ɵɵresetView(ctx_r16.onCountrySelect(country_r15, _r2)); });
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 22);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const country_r15 = ctx.$implicit;
    i0.ɵɵproperty("id", country_r15.htmlId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", country_r15.flagClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r15.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", country_r15.dialCode, "");
} }
function VxITelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, VxITelComponent_div_6_div_1_Template, 2, 2, "div", 11);
    i0.ɵɵelementStart(2, "ul", 12, 13);
    i0.ɵɵtemplate(4, VxITelComponent_div_6_li_4_Template, 7, 4, "li", 14);
    i0.ɵɵtemplate(5, VxITelComponent_div_6_li_5_Template, 1, 0, "li", 15);
    i0.ɵɵtemplate(6, VxITelComponent_div_6_li_6_Template, 7, 4, "li", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.searchCountryFlag && ctx_r1.searchCountryField);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.preferredCountriesInDropDown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.preferredCountriesInDropDown == null ? null : ctx_r1.preferredCountriesInDropDown.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.allCountries);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
class VxITelComponent {
    countryCodeData;
    value = '';
    preferredCountries = [];
    enablePlaceholder = true;
    customPlaceholder;
    numberFormat = PhoneNumberFormat.International;
    cssClass = 'form-control';
    onlyCountries = [];
    enableAutoCountrySelect = true;
    searchCountryFlag = false;
    searchCountryField = [SearchCountryField.All];
    searchCountryPlaceholder = 'Search Country';
    maxLength;
    selectFirstCountry = true;
    selectedCountryISO;
    phoneValidation = true;
    inputId = 'phone';
    separateDialCode = false;
    readonly = false;
    separateDialCodeClass;
    countryChange = new EventEmitter();
    selectedCountry = {
        areaCodes: undefined,
        dialCode: '',
        htmlId: '',
        flagClass: '',
        iso2: '',
        name: '',
        placeHolder: '',
        priority: 0,
    };
    phoneNumber = '';
    allCountries = [];
    preferredCountriesInDropDown = [];
    // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
    phoneUtil = lpn.PhoneNumberUtil.getInstance();
    disabled = false;
    errors = ['Phone number is required.'];
    countrySearchText = '';
    countryList;
    onTouched = () => { };
    propagateChange = (_) => { };
    constructor(countryCodeData) {
        this.countryCodeData = countryCodeData;
        // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
        // Add the wrong classes and such
        setTheme('bs4');
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        const selectedISO = changes['selectedCountryISO'];
        if (this.allCountries &&
            selectedISO &&
            selectedISO.currentValue !== selectedISO.previousValue) {
            this.updateSelectedCountry();
        }
        if (changes['preferredCountries']) {
            this.updatePreferredCountries();
        }
        this.checkSeparateDialCodeStyle();
    }
    /*
          This is a wrapper method to avoid calling this.ngOnInit() in writeValue().
          Ref: http://codelyzer.com/rules/no-life-cycle-call/
      */
    init() {
        this.fetchCountryData();
        if (this.preferredCountries.length) {
            this.updatePreferredCountries();
        }
        if (this.onlyCountries.length) {
            this.allCountries = this.allCountries.filter((c) => this.onlyCountries.includes(c.iso2));
        }
        if (this.selectFirstCountry) {
            if (this.preferredCountriesInDropDown.length) {
                this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
            }
            else {
                this.setSelectedCountry(this.allCountries[0]);
            }
        }
        this.updateSelectedCountry();
        this.checkSeparateDialCodeStyle();
    }
    setSelectedCountry(country) {
        this.selectedCountry = country;
        this.countryChange.emit(country);
    }
    /**
     * Search country based on country name, iso2, dialCode or all of them.
     */
    searchCountry() {
        if (!this.countrySearchText) {
            this.countryList.nativeElement
                .querySelector('.iti__country-list li')
                .scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
            });
            return;
        }
        const countrySearchTextLower = this.countrySearchText.toLowerCase();
        // @ts-ignore
        const country = this.allCountries.filter((c) => {
            if (this.searchCountryField.indexOf(SearchCountryField.All) > -1) {
                // Search in all fields
                if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.dialCode.startsWith(this.countrySearchText)) {
                    return c;
                }
            }
            else {
                // Or search by specific SearchCountryField(s)
                if (this.searchCountryField.indexOf(SearchCountryField.Iso2) > -1) {
                    if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.Name) > -1) {
                    if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.DialCode) > -1) {
                    if (c.dialCode.startsWith(this.countrySearchText)) {
                        return c;
                    }
                }
            }
        });
        if (country.length > 0) {
            const el = this.countryList.nativeElement.querySelector('#' + country[0].htmlId);
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest',
                });
            }
        }
        this.checkSeparateDialCodeStyle();
    }
    onPhoneNumberChange() {
        let countryCode;
        // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.
        if (this.phoneNumber && typeof this.phoneNumber === 'object') {
            const numberObj = this.phoneNumber;
            this.phoneNumber = numberObj.number;
            countryCode = numberObj.countryCode;
        }
        this.value = this.phoneNumber;
        countryCode = countryCode || this.selectedCountry.iso2;
        // @ts-ignore
        const number = this.getParsedNumber(this.phoneNumber, countryCode);
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            countryCode =
                number && number.getCountryCode()
                    ? // @ts-ignore
                        this.getCountryIsoCode(number.getCountryCode(), number)
                    : this.selectedCountry.iso2;
            if (countryCode && countryCode !== this.selectedCountry.iso2) {
                const newCountry = this.allCountries
                    .sort((a, b) => {
                    return a.priority - b.priority;
                })
                    .find((c) => c.iso2 === countryCode);
                if (newCountry) {
                    this.selectedCountry = newCountry;
                }
            }
        }
        countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
        this.checkSeparateDialCodeStyle();
        if (!this.value) {
            // Reason: avoid https://stackoverflow.com/a/54358133/1617590
            // tslint:disable-next-line: no-null-keyword
            // @ts-ignore
            this.propagateChange(null);
        }
        else {
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: countryCode.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
    }
    onCountrySelect(country, el) {
        this.setSelectedCountry(country);
        this.checkSeparateDialCodeStyle();
        if (this.phoneNumber && this.phoneNumber.length > 0) {
            this.value = this.phoneNumber;
            const number = this.getParsedNumber(this.phoneNumber, this.selectedCountry.iso2);
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: this.selectedCountry.iso2.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
        else {
            // Reason: avoid https://stackoverflow.com/a/54358133/1617590
            // tslint:disable-next-line: no-null-keyword
            // @ts-ignore
            this.propagateChange(null);
        }
        el.focus();
    }
    onInputKeyPress(event) {
        const allowedChars = /[0-9\+\-\(\)\ ]/;
        const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
        const allowedOtherKeys = [
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'Home',
            'End',
            'Insert',
            'Delete',
            'Backspace',
        ];
        if (!allowedChars.test(event.key) &&
            !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
            !allowedOtherKeys.includes(event.key)) {
            event.preventDefault();
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (obj === undefined) {
            this.init();
        }
        this.phoneNumber = obj;
        setTimeout(() => {
            this.onPhoneNumberChange();
        }, 1);
    }
    resolvePlaceholder() {
        let placeholder = '';
        if (this.customPlaceholder) {
            placeholder = this.customPlaceholder;
        }
        else if (this.selectedCountry.placeHolder) {
            placeholder = this.selectedCountry.placeHolder;
            if (this.separateDialCode) {
                placeholder = this.removeDialCode(placeholder);
            }
        }
        return placeholder;
    }
    /* --------------------------------- Helpers -------------------------------- */
    /**
     * Returns parse PhoneNumber object.
     * @param phoneNumber string
     * @param countryCode string
     */
    getParsedNumber(phoneNumber, countryCode) {
        let number;
        try {
            number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
        }
        catch (e) { }
        // @ts-ignore
        return number;
    }
    /**
     * Adjusts input alignment based on the dial code presentation style.
     */
    checkSeparateDialCodeStyle() {
        if (this.separateDialCode && this.selectedCountry) {
            const cntryCd = this.selectedCountry.dialCode;
            this.separateDialCodeClass =
                'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
        }
        else {
            this.separateDialCodeClass = '';
        }
    }
    /**
     * Cleans dialcode from phone number string.
     * @param phoneNumber string
     */
    removeDialCode(phoneNumber) {
        const number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
        phoneNumber = this.phoneUtil.format(number, lpn.PhoneNumberFormat[this.numberFormat]);
        if (phoneNumber.startsWith('+') && this.separateDialCode) {
            phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
        }
        return phoneNumber;
    }
    /**
     * Sifts through all countries and returns iso code of the primary country
     * based on the number provided.
     * @param countryCode country code in number format
     * @param number PhoneNumber object
     */
    getCountryIsoCode(countryCode, number) {
        // Will use this to match area code from the first numbers
        // @ts-ignore
        const rawNumber = number['values_']['2'].toString();
        // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
        const countries = this.allCountries.filter((c) => c.dialCode === countryCode.toString());
        // Main country is the country, which has no areaCodes specified in country-code.ts file.
        const mainCountry = countries.find((c) => c.areaCodes === undefined);
        // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
        const secondaryCountries = countries.filter((c) => c.areaCodes !== undefined);
        let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
        /*
                Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
                If no matches found, fallback to the main country.
            */
        secondaryCountries.forEach((country) => {
            // @ts-ignore
            country.areaCodes.forEach((areaCode) => {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.iso2;
                }
            });
        });
        return matchedCountry;
    }
    /**
     * Gets formatted example phone number from phoneUtil.
     * @param countryCode string
     */
    getPhoneNumberPlaceHolder(countryCode) {
        try {
            return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat[this.numberFormat]);
        }
        catch (e) {
            // @ts-ignore
            return e;
        }
    }
    /**
     * Clearing the list to avoid duplicates (https://github.com/guillermodelagala/vx-itel/issues/248)
     */
    fetchCountryData() {
        this.allCountries = [];
        this.countryCodeData.allCountries.forEach((c) => {
            const country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: c[4] || undefined,
                htmlId: `iti-0__item-${c[1].toString()}`,
                flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
                placeHolder: '',
            };
            if (this.enablePlaceholder) {
                country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
            }
            this.allCountries.push(country);
        });
    }
    /**
     * Populates preferredCountriesInDropDown with prefferred countries.
     */
    updatePreferredCountries() {
        if (this.preferredCountries.length) {
            this.preferredCountriesInDropDown = [];
            this.preferredCountries.forEach((iso2) => {
                const preferredCountry = this.allCountries.filter((c) => {
                    return c.iso2 === iso2;
                });
                this.preferredCountriesInDropDown.push(preferredCountry[0]);
            });
        }
    }
    /**
     * Updates selectedCountry.
     */
    updateSelectedCountry() {
        if (this.selectedCountryISO) {
            // @ts-ignore
            this.selectedCountry = this.allCountries.find((c) => {
                return c.iso2.toLowerCase() === this.selectedCountryISO.toLowerCase();
            });
            if (this.selectedCountry) {
                if (this.phoneNumber) {
                    this.onPhoneNumberChange();
                }
                else {
                    // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                    // tslint:disable-next-line: no-null-keyword
                    // @ts-ignore
                    this.propagateChange(null);
                }
            }
        }
    }
    static ɵfac = function VxITelComponent_Factory(t) { return new (t || VxITelComponent)(i0.ɵɵdirectiveInject(i1.CountryCode)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: VxITelComponent, selectors: [["vx-itel"]], viewQuery: function VxITelComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.countryList = _t.first);
        } }, inputs: { value: "value", preferredCountries: "preferredCountries", enablePlaceholder: "enablePlaceholder", customPlaceholder: "customPlaceholder", numberFormat: "numberFormat", cssClass: "cssClass", onlyCountries: "onlyCountries", enableAutoCountrySelect: "enableAutoCountrySelect", searchCountryFlag: "searchCountryFlag", searchCountryField: "searchCountryField", searchCountryPlaceholder: "searchCountryPlaceholder", maxLength: "maxLength", selectFirstCountry: "selectFirstCountry", selectedCountryISO: "selectedCountryISO", phoneValidation: "phoneValidation", inputId: "inputId", separateDialCode: "separateDialCode", readonly: "readonly" }, outputs: { countryChange: "countryChange" }, features: [i0.ɵɵProvidersFeature([
                CountryCode,
                {
                    provide: NG_VALUE_ACCESSOR,
                    // tslint:disable-next-line:no-forward-ref
                    useExisting: forwardRef(() => VxITelComponent),
                    multi: true,
                },
                {
                    provide: NG_VALIDATORS,
                    useValue: phoneNumberValidator,
                    multi: true,
                },
            ]), i0.ɵɵNgOnChangesFeature], decls: 9, vars: 15, consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "id", "ngClass", "ngModel", "disabled", "placeholder", "readOnly", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]], template: function VxITelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵtemplate(4, VxITelComponent_div_4_Template, 2, 1, "div", 4);
            i0.ɵɵelement(5, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, VxITelComponent_div_6_Template, 7, 4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "input", 7, 8);
            i0.ɵɵlistener("blur", function VxITelComponent_Template_input_blur_7_listener() { return ctx.onTouched(); })("keypress", function VxITelComponent_Template_input_keypress_7_listener($event) { return ctx.onInputKeyPress($event); })("ngModelChange", function VxITelComponent_Template_input_ngModelChange_7_listener($event) { return ctx.phoneNumber = $event; })("ngModelChange", function VxITelComponent_Template_input_ngModelChange_7_listener() { return ctx.onPhoneNumberChange(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.separateDialCodeClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c1, ctx.disabled))("isDisabled", ctx.disabled || ctx.readonly);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.selectedCountry.flagClass || "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.separateDialCode);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder())("readOnly", ctx.readonly);
            i0.ɵɵattribute("maxLength", ctx.maxLength)("validation", ctx.phoneValidation);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.BsDropdownMenuDirective, i4.BsDropdownToggleDirective, i4.BsDropdownDirective, i5.NativeElementInjectorDirective], styles: [".dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%]{position:relative}.dropdown-toggle[_ngcontent-%COMP%]{white-space:nowrap}.dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-right[_ngcontent-%COMP%]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-sm-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-md-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-lg-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-xl-right[_ngcontent-%COMP%]{right:0;left:auto}}.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{vertical-align:0}.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{vertical-align:0}.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%]{right:auto;bottom:auto}.dropdown-divider[_ngcontent-%COMP%]{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item[_ngcontent-%COMP%]{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.dropdown-header[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text[_ngcontent-%COMP%]{display:block;padding:.25rem 1.5rem;color:#212529}", "li.iti__country[_ngcontent-%COMP%]:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle[_ngcontent-%COMP%]:after{content:none}.iti__flag-container.disabled[_ngcontent-%COMP%]{cursor:default!important}.iti.iti--allow-dropdown[_ngcontent-%COMP%]   .flag-container.disabled[_ngcontent-%COMP%]:hover   .iti__selected-flag[_ngcontent-%COMP%]{background:none}.country-dropdown[_ngcontent-%COMP%]{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container[_ngcontent-%COMP%]{position:relative}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list[_ngcontent-%COMP%]{position:relative;border:none}.iti[_ngcontent-%COMP%]   input#country-search-box[_ngcontent-%COMP%]{padding-left:6px}.iti[_ngcontent-%COMP%]   .selected-dial-code[_ngcontent-%COMP%]{margin-left:6px}.iti.separate-dial-code[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%]{width:93px}.iti.separate-dial-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:98px}"] });
}
export { VxITelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VxITelComponent, [{
        type: Component,
        args: [{ selector: 'vx-itel', providers: [
                    CountryCode,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        // tslint:disable-next-line:no-forward-ref
                        useExisting: forwardRef(() => VxITelComponent),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useValue: phoneNumberValidator,
                        multi: true,
                    },
                ], template: "<div class=\"iti iti--allow-dropdown\" [ngClass]=\"separateDialCodeClass\">\r\n  <div\r\n    class=\"iti__flag-container\"\r\n    dropdown\r\n    [ngClass]=\"{ disabled: disabled }\"\r\n    [isDisabled]=\"disabled || readonly\"\r\n  >\r\n    <div class=\"iti__selected-flag dropdown-toggle\" dropdownToggle>\r\n      <div class=\"iti__flag\" [ngClass]=\"selectedCountry.flagClass || ''\"></div>\r\n      <div *ngIf=\"separateDialCode\" class=\"selected-dial-code\">\r\n        +{{ selectedCountry.dialCode }}\r\n      </div>\r\n      <div class=\"iti__arrow\"></div>\r\n    </div>\r\n    <div *dropdownMenu class=\"dropdown-menu country-dropdown\">\r\n      <div\r\n        class=\"search-container\"\r\n        *ngIf=\"searchCountryFlag && searchCountryField\"\r\n      >\r\n        <input\r\n          id=\"country-search-box\"\r\n          [(ngModel)]=\"countrySearchText\"\r\n          (keyup)=\"searchCountry()\"\r\n          (click)=\"$event.stopPropagation()\"\r\n          [placeholder]=\"searchCountryPlaceholder\"\r\n          autofocus\r\n        />\r\n      </div>\r\n      <ul class=\"iti__country-list\" #countryList>\r\n        <li\r\n          class=\"iti__country iti__preferred\"\r\n          *ngFor=\"let country of preferredCountriesInDropDown\"\r\n          (click)=\"onCountrySelect(country, focusable)\"\r\n          [id]=\"country.htmlId + '-preferred'\"\r\n        >\r\n          <div class=\"iti__flag-box\">\r\n            <div class=\"iti__flag\" [ngClass]=\"country.flagClass\"></div>\r\n          </div>\r\n          <span class=\"iti__country-name\">{{ country.name }}</span>\r\n          <span class=\"iti__dial-code\">+{{ country.dialCode }}</span>\r\n        </li>\r\n        <li\r\n          class=\"iti__divider\"\r\n          *ngIf=\"preferredCountriesInDropDown?.length\"\r\n        ></li>\r\n        <li\r\n          class=\"iti__country iti__standard\"\r\n          *ngFor=\"let country of allCountries\"\r\n          (click)=\"onCountrySelect(country, focusable)\"\r\n          [id]=\"country.htmlId\"\r\n        >\r\n          <div class=\"iti__flag-box\">\r\n            <div class=\"iti__flag\" [ngClass]=\"country.flagClass\"></div>\r\n          </div>\r\n          <span class=\"iti__country-name\">{{ country.name }}</span>\r\n          <span class=\"iti__dial-code\">+{{ country.dialCode }}</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <input\r\n    type=\"tel\"\r\n    [id]=\"inputId\"\r\n    autocomplete=\"off\"\r\n    [ngClass]=\"cssClass\"\r\n    (blur)=\"onTouched()\"\r\n    (keypress)=\"onInputKeyPress($event)\"\r\n    [(ngModel)]=\"phoneNumber\"\r\n    (ngModelChange)=\"onPhoneNumberChange()\"\r\n    [disabled]=\"disabled\"\r\n    [placeholder]=\"resolvePlaceholder()\"\r\n    [attr.maxLength]=\"maxLength\"\r\n    [attr.validation]=\"phoneValidation\"\r\n    [readOnly]=\"readonly\"\r\n    #focusable\r\n  />\r\n</div>\r\n", styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"] }]
    }], function () { return [{ type: i1.CountryCode }]; }, { value: [{
            type: Input
        }], preferredCountries: [{
            type: Input
        }], enablePlaceholder: [{
            type: Input
        }], customPlaceholder: [{
            type: Input
        }], numberFormat: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], onlyCountries: [{
            type: Input
        }], enableAutoCountrySelect: [{
            type: Input
        }], searchCountryFlag: [{
            type: Input
        }], searchCountryField: [{
            type: Input
        }], searchCountryPlaceholder: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], selectFirstCountry: [{
            type: Input
        }], selectedCountryISO: [{
            type: Input
        }], phoneValidation: [{
            type: Input
        }], inputId: [{
            type: Input
        }], separateDialCode: [{
            type: Input
        }], readonly: [{
            type: Input
        }], countryChange: [{
            type: Output
        }], countryList: [{
            type: ViewChild,
            args: ['countryList']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidngtaXRlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92eC1pdGVsL3NyYy9saWIvdngtaXRlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy92eC1pdGVsL3NyYy9saWIvdngtaXRlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBRTdDLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7O0lDZi9ELDhCQUF5RDtJQUN2RCxZQUNGO0lBQUEsaUJBQU07OztJQURKLGVBQ0Y7SUFERSxpRUFDRjs7OztJQUlBLCtCQUdDLGdCQUFBO0lBR0csNk9BQStCLHNKQUN0QixlQUFBLHVCQUFlLENBQUEsSUFETyxnR0FFdEIsd0JBQXdCLElBRkY7SUFGakMsaUJBT0UsRUFBQTs7O0lBTEEsZUFBK0I7SUFBL0Isa0RBQStCLGdEQUFBOzs7O0lBUWpDLDhCQUtDO0lBRkMsOFBBQVMsZUFBQSx5Q0FBbUMsQ0FBQSxJQUFDO0lBRzdDLCtCQUEyQjtJQUN6Qix5QkFBMkQ7SUFDN0QsaUJBQU07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O29CQUNYO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLDBDQUEwQzt3QkFDMUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7d0JBQzlDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs4REFHUSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyx1QkFBdUI7a0JBQS9CLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFHYSxhQUFhO2tCQUEvQixNQUFNO1lBc0JtQixXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBscG4gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgc2V0VGhlbWUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IENvdW50cnlDb2RlIH0gZnJvbSAnLi9kYXRhL2NvdW50cnktY29kZSc7XHJcbmltcG9ydCB7IENvdW50cnlJU08gfSBmcm9tICcuL2VudW1zL2NvdW50cnktaXNvLmVudW0nO1xyXG5pbXBvcnQgeyBTZWFyY2hDb3VudHJ5RmllbGQgfSBmcm9tICcuL2VudW1zL3NlYXJjaC1jb3VudHJ5LWZpZWxkLmVudW0nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2NoYW5nZS1kYXRhJztcclxuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4vbW9kZWwvY291bnRyeS5tb2RlbCc7XHJcbmltcG9ydCB7IHBob25lTnVtYmVyVmFsaWRhdG9yIH0gZnJvbSAnLi92eC1pdGVsLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFBob25lTnVtYmVyRm9ybWF0IH0gZnJvbSAnLi9lbnVtcy9waG9uZS1udW1iZXItZm9ybWF0LmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3Z4LWl0ZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92eC1pdGVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ib290c3RyYXAtZHJvcGRvd24uY3NzJywgJy4vdngtaXRlbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDb3VudHJ5Q29kZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1mb3J3YXJkLXJlZlxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBWeElUZWxDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZVZhbHVlOiBwaG9uZU51bWJlclZhbGlkYXRvcixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWeElUZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xyXG4gIEBJbnB1dCgpIHByZWZlcnJlZENvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVBsYWNlaG9sZGVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjdXN0b21QbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG51bWJlckZvcm1hdDogUGhvbmVOdW1iZXJGb3JtYXQgPSBQaG9uZU51bWJlckZvcm1hdC5JbnRlcm5hdGlvbmFsO1xyXG4gIEBJbnB1dCgpIGNzc0NsYXNzID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgQElucHV0KCkgb25seUNvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzZWFyY2hDb3VudHJ5RmxhZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlYXJjaENvdW50cnlGaWVsZDogU2VhcmNoQ291bnRyeUZpZWxkW10gPSBbU2VhcmNoQ291bnRyeUZpZWxkLkFsbF07XHJcbiAgQElucHV0KCkgc2VhcmNoQ291bnRyeVBsYWNlaG9sZGVyID0gJ1NlYXJjaCBDb3VudHJ5JztcclxuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBzZWxlY3RGaXJzdENvdW50cnkgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkQ291bnRyeUlTTzogQ291bnRyeUlTTztcclxuICBASW5wdXQoKSBwaG9uZVZhbGlkYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGlucHV0SWQgPSAncGhvbmUnO1xyXG4gIEBJbnB1dCgpIHNlcGFyYXRlRGlhbENvZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gIHNlcGFyYXRlRGlhbENvZGVDbGFzczogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY291bnRyeUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q291bnRyeT4oKTtcclxuXHJcbiAgc2VsZWN0ZWRDb3VudHJ5OiBDb3VudHJ5ID0ge1xyXG4gICAgYXJlYUNvZGVzOiB1bmRlZmluZWQsXHJcbiAgICBkaWFsQ29kZTogJycsXHJcbiAgICBodG1sSWQ6ICcnLFxyXG4gICAgZmxhZ0NsYXNzOiAnJyxcclxuICAgIGlzbzI6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBwbGFjZUhvbGRlcjogJycsXHJcbiAgICBwcmlvcml0eTogMCxcclxuICB9O1xyXG5cclxuICBwaG9uZU51bWJlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJyc7XHJcbiAgYWxsQ291bnRyaWVzOiBBcnJheTxDb3VudHJ5PiA9IFtdO1xyXG4gIHByZWZlcnJlZENvdW50cmllc0luRHJvcERvd246IEFycmF5PENvdW50cnk+ID0gW107XHJcbiAgLy8gSGFzIHRvIGJlICdhbnknIHRvIHByZXZlbnQgYSBuZWVkIHRvIGluc3RhbGwgQHR5cGVzL2dvb2dsZS1saWJwaG9uZW51bWJlciBieSB0aGUgcGFja2FnZSB1c2VyLi4uXHJcbiAgcGhvbmVVdGlsOiBhbnkgPSBscG4uUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCk7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBlcnJvcnM6IEFycmF5PGFueT4gPSBbJ1Bob25lIG51bWJlciBpcyByZXF1aXJlZC4nXTtcclxuICBjb3VudHJ5U2VhcmNoVGV4dCA9ICcnO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb3VudHJ5TGlzdCcpIGNvdW50cnlMaXN0OiBFbGVtZW50UmVmO1xyXG5cclxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogQ2hhbmdlRGF0YSkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY291bnRyeUNvZGVEYXRhOiBDb3VudHJ5Q29kZSkge1xyXG4gICAgLy8gSWYgdGhpcyBpcyBub3Qgc2V0LCBuZ3gtYm9vdHN0cmFwIHdpbGwgdHJ5IHRvIHVzZSB0aGUgYnMzIENTUyAod2hpY2ggaXMgbm90IHdoYXQgd2UndmUgZW1iZWRkZWQpIGFuZCB3aWxsXHJcbiAgICAvLyBBZGQgdGhlIHdyb25nIGNsYXNzZXMgYW5kIHN1Y2hcclxuICAgIHNldFRoZW1lKCdiczQnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZElTTyA9IGNoYW5nZXNbJ3NlbGVjdGVkQ291bnRyeUlTTyddO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmFsbENvdW50cmllcyAmJlxyXG4gICAgICBzZWxlY3RlZElTTyAmJlxyXG4gICAgICBzZWxlY3RlZElTTy5jdXJyZW50VmFsdWUgIT09IHNlbGVjdGVkSVNPLnByZXZpb3VzVmFsdWVcclxuICAgICkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3ByZWZlcnJlZENvdW50cmllcyddKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUHJlZmVycmVkQ291bnRyaWVzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG5cdFx0VGhpcyBpcyBhIHdyYXBwZXIgbWV0aG9kIHRvIGF2b2lkIGNhbGxpbmcgdGhpcy5uZ09uSW5pdCgpIGluIHdyaXRlVmFsdWUoKS5cclxuXHRcdFJlZjogaHR0cDovL2NvZGVseXplci5jb20vcnVsZXMvbm8tbGlmZS1jeWNsZS1jYWxsL1xyXG5cdCovXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZmV0Y2hDb3VudHJ5RGF0YSgpO1xyXG4gICAgaWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVByZWZlcnJlZENvdW50cmllcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub25seUNvdW50cmllcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5hbGxDb3VudHJpZXMgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+XHJcbiAgICAgICAgdGhpcy5vbmx5Q291bnRyaWVzLmluY2x1ZGVzKGMuaXNvMilcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdEZpcnN0Q291bnRyeSkge1xyXG4gICAgICBpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRDb3VudHJ5KHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93blswXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZENvdW50cnkodGhpcy5hbGxDb3VudHJpZXNbMF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpO1xyXG4gICAgdGhpcy5jaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRDb3VudHJ5KGNvdW50cnk6IENvdW50cnkpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeTtcclxuICAgIHRoaXMuY291bnRyeUNoYW5nZS5lbWl0KGNvdW50cnkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VhcmNoIGNvdW50cnkgYmFzZWQgb24gY291bnRyeSBuYW1lLCBpc28yLCBkaWFsQ29kZSBvciBhbGwgb2YgdGhlbS5cclxuICAgKi9cclxuICBwdWJsaWMgc2VhcmNoQ291bnRyeSgpIHtcclxuICAgIGlmICghdGhpcy5jb3VudHJ5U2VhcmNoVGV4dCkge1xyXG4gICAgICB0aGlzLmNvdW50cnlMaXN0Lm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLml0aV9fY291bnRyeS1saXN0IGxpJylcclxuICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgYmxvY2s6ICduZWFyZXN0JyxcclxuICAgICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb3VudHJ5U2VhcmNoVGV4dExvd2VyID0gdGhpcy5jb3VudHJ5U2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuQWxsKSA+IC0xKSB7XHJcbiAgICAgICAgLy8gU2VhcmNoIGluIGFsbCBmaWVsZHNcclxuICAgICAgICBpZiAoYy5pc28yLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMuZGlhbENvZGUuc3RhcnRzV2l0aCh0aGlzLmNvdW50cnlTZWFyY2hUZXh0KSkge1xyXG4gICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE9yIHNlYXJjaCBieSBzcGVjaWZpYyBTZWFyY2hDb3VudHJ5RmllbGQocylcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuSXNvMikgPiAtMSkge1xyXG4gICAgICAgICAgaWYgKGMuaXNvMi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoY291bnRyeVNlYXJjaFRleHRMb3dlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5OYW1lKSA+IC0xKSB7XHJcbiAgICAgICAgICBpZiAoYy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLkRpYWxDb2RlKSA+IC0xKSB7XHJcbiAgICAgICAgICBpZiAoYy5kaWFsQ29kZS5zdGFydHNXaXRoKHRoaXMuY291bnRyeVNlYXJjaFRleHQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNvdW50cnkubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuY291bnRyeUxpc3QubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICcjJyArIGNvdW50cnlbMF0uaHRtbElkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgIGJsb2NrOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICBpbmxpbmU6ICduZWFyZXN0JyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBob25lTnVtYmVyQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgbGV0IGNvdW50cnlDb2RlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIHVzZXIgc2V0cyB0aGUgdmFsdWUgcHJvZ3JhbWF0aWNhbGx5IGJhc2VkIG9uIGEgcGVyc2lzdGVkIENoYW5nZURhdGEgb2JqLlxyXG4gICAgaWYgKHRoaXMucGhvbmVOdW1iZXIgJiYgdHlwZW9mIHRoaXMucGhvbmVOdW1iZXIgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGNvbnN0IG51bWJlck9iajogQ2hhbmdlRGF0YSA9IHRoaXMucGhvbmVOdW1iZXI7XHJcbiAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSBudW1iZXJPYmoubnVtYmVyO1xyXG4gICAgICBjb3VudHJ5Q29kZSA9IG51bWJlck9iai5jb3VudHJ5Q29kZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcclxuICAgIGNvdW50cnlDb2RlID0gY291bnRyeUNvZGUgfHwgdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKHRoaXMucGhvbmVOdW1iZXIsIGNvdW50cnlDb2RlKTtcclxuXHJcbiAgICAvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxyXG4gICAgaWYgKHRoaXMuZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QpIHtcclxuICAgICAgY291bnRyeUNvZGUgPVxyXG4gICAgICAgIG51bWJlciAmJiBudW1iZXIuZ2V0Q291bnRyeUNvZGUoKVxyXG4gICAgICAgICAgPyAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q291bnRyeUlzb0NvZGUobnVtYmVyLmdldENvdW50cnlDb2RlKCksIG51bWJlcilcclxuICAgICAgICAgIDogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcclxuICAgICAgaWYgKGNvdW50cnlDb2RlICYmIGNvdW50cnlDb2RlICE9PSB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmZpbmQoKGMpID0+IGMuaXNvMiA9PT0gY291bnRyeUNvZGUpO1xyXG4gICAgICAgIGlmIChuZXdDb3VudHJ5KSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSA9IG5ld0NvdW50cnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlID8gY291bnRyeUNvZGUgOiB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yO1xyXG5cclxuICAgIHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgLy8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW51bGwta2V5d29yZFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW50bE5vID0gbnVtYmVyXHJcbiAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTClcclxuICAgICAgICA6ICcnO1xyXG5cclxuICAgICAgLy8gcGFyc2UgcGhvbmVOdW1iZXIgaWYgc2VwYXJhdGUgZGlhbCBjb2RlIGlzIG5lZWRlZFxyXG4gICAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGxObykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbW92ZURpYWxDb2RlKGludGxObyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHtcclxuICAgICAgICBudW1iZXI6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgaW50ZXJuYXRpb25hbE51bWJlcjogaW50bE5vLFxyXG4gICAgICAgIG5hdGlvbmFsTnVtYmVyOiBudW1iZXJcclxuICAgICAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxyXG4gICAgICAgICAgOiAnJyxcclxuICAgICAgICBlMTY0TnVtYmVyOiBudW1iZXJcclxuICAgICAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LkUxNjQpXHJcbiAgICAgICAgICA6ICcnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGRpYWxDb2RlOiAnKycgKyB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Db3VudHJ5U2VsZWN0KGNvdW50cnk6IENvdW50cnksIGVsOiB7IGZvY3VzOiAoKSA9PiB2b2lkIH0pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWRDb3VudHJ5KGNvdW50cnkpO1xyXG5cclxuICAgIHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lTnVtYmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucGhvbmVOdW1iZXI7XHJcbiAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKFxyXG4gICAgICAgIHRoaXMucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBpbnRsTm8gPSBudW1iZXJcclxuICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxyXG4gICAgICAgIDogJyc7XHJcbiAgICAgIC8vIHBhcnNlIHBob25lTnVtYmVyIGlmIHNlcGFyYXRlIGRpYWwgY29kZSBpcyBuZWVkZWRcclxuICAgICAgaWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRsTm8pIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRsTm8pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XHJcbiAgICAgICAgbnVtYmVyOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIGludGVybmF0aW9uYWxOdW1iZXI6IGludGxObyxcclxuICAgICAgICBuYXRpb25hbE51bWJlcjogbnVtYmVyXHJcbiAgICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTClcclxuICAgICAgICAgIDogJycsXHJcbiAgICAgICAgZTE2NE51bWJlcjogbnVtYmVyXHJcbiAgICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5FMTY0KVxyXG4gICAgICAgICAgOiAnJyxcclxuICAgICAgICBjb3VudHJ5Q29kZTogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMi50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGRpYWxDb2RlOiAnKycgKyB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBSZWFzb246IGF2b2lkIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDM1ODEzMy8xNjE3NTkwXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWwuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbklucHV0S2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFsbG93ZWRDaGFycyA9IC9bMC05XFwrXFwtXFwoXFwpXFwgXS87XHJcbiAgICBjb25zdCBhbGxvd2VkQ3RybENoYXJzID0gL1theGN2XS87IC8vIEFsbG93cyBjb3B5LXBhc3RpbmdcclxuICAgIGNvbnN0IGFsbG93ZWRPdGhlcktleXMgPSBbXHJcbiAgICAgICdBcnJvd0xlZnQnLFxyXG4gICAgICAnQXJyb3dVcCcsXHJcbiAgICAgICdBcnJvd1JpZ2h0JyxcclxuICAgICAgJ0Fycm93RG93bicsXHJcbiAgICAgICdIb21lJyxcclxuICAgICAgJ0VuZCcsXHJcbiAgICAgICdJbnNlcnQnLFxyXG4gICAgICAnRGVsZXRlJyxcclxuICAgICAgJ0JhY2tzcGFjZScsXHJcbiAgICBdO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIWFsbG93ZWRDaGFycy50ZXN0KGV2ZW50LmtleSkgJiZcclxuICAgICAgIShldmVudC5jdHJsS2V5ICYmIGFsbG93ZWRDdHJsQ2hhcnMudGVzdChldmVudC5rZXkpKSAmJlxyXG4gICAgICAhYWxsb3dlZE90aGVyS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpXHJcbiAgICApIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5waG9uZU51bWJlciA9IG9iajtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGhvbmVOdW1iZXJDaGFuZ2UoKTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgcmVzb2x2ZVBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnJztcclxuICAgIGlmICh0aGlzLmN1c3RvbVBsYWNlaG9sZGVyKSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5jdXN0b21QbGFjZWhvbGRlcjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZENvdW50cnkucGxhY2VIb2xkZXIpIHtcclxuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLnNlbGVjdGVkQ291bnRyeS5wbGFjZUhvbGRlcjtcclxuICAgICAgaWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSkge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShwbGFjZWhvbGRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBwYXJzZSBQaG9uZU51bWJlciBvYmplY3QuXHJcbiAgICogQHBhcmFtIHBob25lTnVtYmVyIHN0cmluZ1xyXG4gICAqIEBwYXJhbSBjb3VudHJ5Q29kZSBzdHJpbmdcclxuICAgKi9cclxuICBwcml2YXRlIGdldFBhcnNlZE51bWJlcihcclxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcsXHJcbiAgICBjb3VudHJ5Q29kZTogc3RyaW5nXHJcbiAgKTogbHBuLlBob25lTnVtYmVyIHtcclxuICAgIGxldCBudW1iZXI6IGxwbi5QaG9uZU51bWJlcjtcclxuICAgIHRyeSB7XHJcbiAgICAgIG51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHBob25lTnVtYmVyLCBjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gbnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRqdXN0cyBpbnB1dCBhbGlnbm1lbnQgYmFzZWQgb24gdGhlIGRpYWwgY29kZSBwcmVzZW50YXRpb24gc3R5bGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgdGhpcy5zZWxlY3RlZENvdW50cnkpIHtcclxuICAgICAgY29uc3QgY250cnlDZCA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlO1xyXG4gICAgICB0aGlzLnNlcGFyYXRlRGlhbENvZGVDbGFzcyA9XHJcbiAgICAgICAgJ3NlcGFyYXRlLWRpYWwtY29kZSBpdGktc2RjLScgKyAoY250cnlDZC5sZW5ndGggKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VwYXJhdGVEaWFsQ29kZUNsYXNzID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhbnMgZGlhbGNvZGUgZnJvbSBwaG9uZSBudW1iZXIgc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciBzdHJpbmdcclxuICAgKi9cclxuICBwcml2YXRlIHJlbW92ZURpYWxDb2RlKHBob25lTnVtYmVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5nZXRQYXJzZWROdW1iZXIocGhvbmVOdW1iZXIsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIpO1xyXG4gICAgcGhvbmVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5mb3JtYXQoXHJcbiAgICAgIG51bWJlcixcclxuICAgICAgbHBuLlBob25lTnVtYmVyRm9ybWF0W3RoaXMubnVtYmVyRm9ybWF0XVxyXG4gICAgKTtcclxuICAgIGlmIChwaG9uZU51bWJlci5zdGFydHNXaXRoKCcrJykgJiYgdGhpcy5zZXBhcmF0ZURpYWxDb2RlKSB7XHJcbiAgICAgIHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIuc3Vic3RyKHBob25lTnVtYmVyLmluZGV4T2YoJyAnKSArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2lmdHMgdGhyb3VnaCBhbGwgY291bnRyaWVzIGFuZCByZXR1cm5zIGlzbyBjb2RlIG9mIHRoZSBwcmltYXJ5IGNvdW50cnlcclxuICAgKiBiYXNlZCBvbiB0aGUgbnVtYmVyIHByb3ZpZGVkLlxyXG4gICAqIEBwYXJhbSBjb3VudHJ5Q29kZSBjb3VudHJ5IGNvZGUgaW4gbnVtYmVyIGZvcm1hdFxyXG4gICAqIEBwYXJhbSBudW1iZXIgUGhvbmVOdW1iZXIgb2JqZWN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShcclxuICAgIGNvdW50cnlDb2RlOiBudW1iZXIsXHJcbiAgICBudW1iZXI6IGxwbi5QaG9uZU51bWJlclxyXG4gICk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAvLyBXaWxsIHVzZSB0aGlzIHRvIG1hdGNoIGFyZWEgY29kZSBmcm9tIHRoZSBmaXJzdCBudW1iZXJzXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCByYXdOdW1iZXIgPSBudW1iZXJbJ3ZhbHVlc18nXVsnMiddLnRvU3RyaW5nKCk7XHJcbiAgICAvLyBMaXN0IG9mIGFsbCBjb3VudHJpZXMgd2l0aCBjb3VudHJ5Q29kZSAoY2FuIGJlIG1vcmUgdGhhbiBvbmUuIGUueC4gVVMsIENBLCBETywgUFIgYWxsIGhhdmUgKzEgY291bnRyeUNvZGUpXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoXHJcbiAgICAgIChjKSA9PiBjLmRpYWxDb2RlID09PSBjb3VudHJ5Q29kZS50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgLy8gTWFpbiBjb3VudHJ5IGlzIHRoZSBjb3VudHJ5LCB3aGljaCBoYXMgbm8gYXJlYUNvZGVzIHNwZWNpZmllZCBpbiBjb3VudHJ5LWNvZGUudHMgZmlsZS5cclxuICAgIGNvbnN0IG1haW5Db3VudHJ5ID0gY291bnRyaWVzLmZpbmQoKGMpID0+IGMuYXJlYUNvZGVzID09PSB1bmRlZmluZWQpO1xyXG4gICAgLy8gU2Vjb25kYXJ5IGNvdW50cmllcyBhcmUgYWxsIGNvdW50cmllcywgd2hpY2ggaGF2ZSBhcmVhQ29kZXMgc3BlY2lmaWVkIGluIGNvdW50cnktY29kZS50cyBmaWxlLlxyXG4gICAgY29uc3Qgc2Vjb25kYXJ5Q291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlcihcclxuICAgICAgKGMpID0+IGMuYXJlYUNvZGVzICE9PSB1bmRlZmluZWRcclxuICAgICk7XHJcbiAgICBsZXQgbWF0Y2hlZENvdW50cnkgPSBtYWluQ291bnRyeSA/IG1haW5Db3VudHJ5LmlzbzIgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgLypcclxuXHRcdFx0SXRlcmF0ZSBvdmVyIGVhY2ggc2Vjb25kYXJ5IGNvdW50cnkgYW5kIGNoZWNrIGlmIG5hdGlvbmFsTnVtYmVyIHN0YXJ0cyB3aXRoIGFueSBvZiBhcmVhQ29kZXMgYXZhaWxhYmxlLlxyXG5cdFx0XHRJZiBubyBtYXRjaGVzIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgbWFpbiBjb3VudHJ5LlxyXG5cdFx0Ki9cclxuICAgIHNlY29uZGFyeUNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY291bnRyeS5hcmVhQ29kZXMuZm9yRWFjaCgoYXJlYUNvZGUpID0+IHtcclxuICAgICAgICBpZiAocmF3TnVtYmVyLnN0YXJ0c1dpdGgoYXJlYUNvZGUpKSB7XHJcbiAgICAgICAgICBtYXRjaGVkQ291bnRyeSA9IGNvdW50cnkuaXNvMjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZWRDb3VudHJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBmb3JtYXR0ZWQgZXhhbXBsZSBwaG9uZSBudW1iZXIgZnJvbSBwaG9uZVV0aWwuXHJcbiAgICogQHBhcmFtIGNvdW50cnlDb2RlIHN0cmluZ1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRQaG9uZU51bWJlclBsYWNlSG9sZGVyKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIHRoaXMucGhvbmVVdGlsLmZvcm1hdChcclxuICAgICAgICB0aGlzLnBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnlDb2RlKSxcclxuICAgICAgICBscG4uUGhvbmVOdW1iZXJGb3JtYXRbdGhpcy5udW1iZXJGb3JtYXRdXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcmluZyB0aGUgbGlzdCB0byBhdm9pZCBkdXBsaWNhdGVzIChodHRwczovL2dpdGh1Yi5jb20vZ3VpbGxlcm1vZGVsYWdhbGEvdngtaXRlbC9pc3N1ZXMvMjQ4KVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBmZXRjaENvdW50cnlEYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hbGxDb3VudHJpZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNvdW50cnlDb2RlRGF0YS5hbGxDb3VudHJpZXMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICBjb25zdCBjb3VudHJ5OiBDb3VudHJ5ID0ge1xyXG4gICAgICAgIG5hbWU6IGNbMF0udG9TdHJpbmcoKSxcclxuICAgICAgICBpc28yOiBjWzFdLnRvU3RyaW5nKCksXHJcbiAgICAgICAgZGlhbENvZGU6IGNbMl0udG9TdHJpbmcoKSxcclxuICAgICAgICBwcmlvcml0eTogK2NbM10gfHwgMCxcclxuICAgICAgICBhcmVhQ29kZXM6IChjWzRdIGFzIHN0cmluZ1tdKSB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgaHRtbElkOiBgaXRpLTBfX2l0ZW0tJHtjWzFdLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICBmbGFnQ2xhc3M6IGBpdGlfXyR7Y1sxXS50b1N0cmluZygpLnRvTG9jYWxlTG93ZXJDYXNlKCl9YCxcclxuICAgICAgICBwbGFjZUhvbGRlcjogJycsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5lbmFibGVQbGFjZWhvbGRlcikge1xyXG4gICAgICAgIGNvdW50cnkucGxhY2VIb2xkZXIgPSB0aGlzLmdldFBob25lTnVtYmVyUGxhY2VIb2xkZXIoXHJcbiAgICAgICAgICBjb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWxsQ291bnRyaWVzLnB1c2goY291bnRyeSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBvcHVsYXRlcyBwcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duIHdpdGggcHJlZmZlcnJlZCBjb3VudHJpZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93biA9IFtdO1xyXG4gICAgICB0aGlzLnByZWZlcnJlZENvdW50cmllcy5mb3JFYWNoKChpc28yKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJlZmVycmVkQ291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGMuaXNvMiA9PT0gaXNvMjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLnB1c2gocHJlZmVycmVkQ291bnRyeVswXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBzZWxlY3RlZENvdW50cnkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZENvdW50cnkoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZENvdW50cnlJU08pIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbmQoKGMpID0+IHtcclxuICAgICAgICByZXR1cm4gYy5pc28yLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuc2VsZWN0ZWRDb3VudHJ5SVNPLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZENvdW50cnkpIHtcclxuICAgICAgICBpZiAodGhpcy5waG9uZU51bWJlcikge1xyXG4gICAgICAgICAgdGhpcy5vblBob25lTnVtYmVyQ2hhbmdlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFJlYXNvbjogYXZvaWQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MzU4MTMzLzE2MTc1OTBcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXHJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIml0aSBpdGktLWFsbG93LWRyb3Bkb3duXCIgW25nQ2xhc3NdPVwic2VwYXJhdGVEaWFsQ29kZUNsYXNzXCI+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJpdGlfX2ZsYWctY29udGFpbmVyXCJcclxuICAgIGRyb3Bkb3duXHJcbiAgICBbbmdDbGFzc109XCJ7IGRpc2FibGVkOiBkaXNhYmxlZCB9XCJcclxuICAgIFtpc0Rpc2FibGVkXT1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRpX19zZWxlY3RlZC1mbGFnIGRyb3Bkb3duLXRvZ2dsZVwiIGRyb3Bkb3duVG9nZ2xlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRpX19mbGFnXCIgW25nQ2xhc3NdPVwic2VsZWN0ZWRDb3VudHJ5LmZsYWdDbGFzcyB8fCAnJ1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2VwYXJhdGVEaWFsQ29kZVwiIGNsYXNzPVwic2VsZWN0ZWQtZGlhbC1jb2RlXCI+XHJcbiAgICAgICAgK3t7IHNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0aV9fYXJyb3dcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqZHJvcGRvd25NZW51IGNsYXNzPVwiZHJvcGRvd24tbWVudSBjb3VudHJ5LWRyb3Bkb3duXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInNlYXJjaC1jb250YWluZXJcIlxyXG4gICAgICAgICpuZ0lmPVwic2VhcmNoQ291bnRyeUZsYWcgJiYgc2VhcmNoQ291bnRyeUZpZWxkXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJjb3VudHJ5LXNlYXJjaC1ib3hcIlxyXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJjb3VudHJ5U2VhcmNoVGV4dFwiXHJcbiAgICAgICAgICAoa2V5dXApPVwic2VhcmNoQ291bnRyeSgpXCJcclxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlYXJjaENvdW50cnlQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICBhdXRvZm9jdXNcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzPVwiaXRpX19jb3VudHJ5LWxpc3RcIiAjY291bnRyeUxpc3Q+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbGFzcz1cIml0aV9fY291bnRyeSBpdGlfX3ByZWZlcnJlZFwiXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY291bnRyeSBvZiBwcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duXCJcclxuICAgICAgICAgIChjbGljayk9XCJvbkNvdW50cnlTZWxlY3QoY291bnRyeSwgZm9jdXNhYmxlKVwiXHJcbiAgICAgICAgICBbaWRdPVwiY291bnRyeS5odG1sSWQgKyAnLXByZWZlcnJlZCdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWctYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWdcIiBbbmdDbGFzc109XCJjb3VudHJ5LmZsYWdDbGFzc1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0aV9fY291bnRyeS1uYW1lXCI+e3sgY291bnRyeS5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGlfX2RpYWwtY29kZVwiPit7eyBjb3VudHJ5LmRpYWxDb2RlIH19PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbGFzcz1cIml0aV9fZGl2aWRlclwiXHJcbiAgICAgICAgICAqbmdJZj1cInByZWZlcnJlZENvdW50cmllc0luRHJvcERvd24/Lmxlbmd0aFwiXHJcbiAgICAgICAgPjwvbGk+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbGFzcz1cIml0aV9fY291bnRyeSBpdGlfX3N0YW5kYXJkXCJcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb3VudHJ5IG9mIGFsbENvdW50cmllc1wiXHJcbiAgICAgICAgICAoY2xpY2spPVwib25Db3VudHJ5U2VsZWN0KGNvdW50cnksIGZvY3VzYWJsZSlcIlxyXG4gICAgICAgICAgW2lkXT1cImNvdW50cnkuaHRtbElkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRpX19mbGFnLWJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRpX19mbGFnXCIgW25nQ2xhc3NdPVwiY291bnRyeS5mbGFnQ2xhc3NcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGlfX2NvdW50cnktbmFtZVwiPnt7IGNvdW50cnkubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRpX19kaWFsLWNvZGVcIj4re3sgY291bnRyeS5kaWFsQ29kZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGlucHV0XHJcbiAgICB0eXBlPVwidGVsXCJcclxuICAgIFtpZF09XCJpbnB1dElkXCJcclxuICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICBbbmdDbGFzc109XCJjc3NDbGFzc1wiXHJcbiAgICAoYmx1cik9XCJvblRvdWNoZWQoKVwiXHJcbiAgICAoa2V5cHJlc3MpPVwib25JbnB1dEtleVByZXNzKCRldmVudClcIlxyXG4gICAgWyhuZ01vZGVsKV09XCJwaG9uZU51bWJlclwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJvblBob25lTnVtYmVyQ2hhbmdlKClcIlxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJyZXNvbHZlUGxhY2Vob2xkZXIoKVwiXHJcbiAgICBbYXR0ci5tYXhMZW5ndGhdPVwibWF4TGVuZ3RoXCJcclxuICAgIFthdHRyLnZhbGlkYXRpb25dPVwicGhvbmVWYWxpZGF0aW9uXCJcclxuICAgIFtyZWFkT25seV09XCJyZWFkb25seVwiXHJcbiAgICAjZm9jdXNhYmxlXHJcbiAgLz5cclxuPC9kaXY+XHJcbiJdfQ==
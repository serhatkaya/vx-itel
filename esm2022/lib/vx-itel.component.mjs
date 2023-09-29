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
    i0.ɵɵtextInterpolate1("+", ctx_r0.selectedCountry.dialCode, "");
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
const _c1 = function (a0) { return { "disabled": a0 }; };
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
        } }, inputs: { value: "value", preferredCountries: "preferredCountries", enablePlaceholder: "enablePlaceholder", customPlaceholder: "customPlaceholder", numberFormat: "numberFormat", cssClass: "cssClass", onlyCountries: "onlyCountries", enableAutoCountrySelect: "enableAutoCountrySelect", searchCountryFlag: "searchCountryFlag", searchCountryField: "searchCountryField", searchCountryPlaceholder: "searchCountryPlaceholder", maxLength: "maxLength", selectFirstCountry: "selectFirstCountry", selectedCountryISO: "selectedCountryISO", phoneValidation: "phoneValidation", inputId: "inputId", separateDialCode: "separateDialCode" }, outputs: { countryChange: "countryChange" }, features: [i0.ɵɵProvidersFeature([
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
            ]), i0.ɵɵNgOnChangesFeature], decls: 9, vars: 14, consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "id", "ngClass", "ngModel", "disabled", "placeholder", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]], template: function VxITelComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1, ctx.disabled))("isDisabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", (ctx.selectedCountry == null ? null : ctx.selectedCountry.flagClass) || "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.separateDialCode);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder());
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
                ], template: "<div class=\"iti iti--allow-dropdown\"\r\n\t[ngClass]=\"separateDialCodeClass\">\r\n\t<div class=\"iti__flag-container\"\r\n\t\tdropdown\r\n\t\t[ngClass]=\"{'disabled': disabled}\"\r\n\t\t[isDisabled]=\"disabled\">\r\n\t\t<div class=\"iti__selected-flag dropdown-toggle\"\r\n\t\t\tdropdownToggle>\r\n\t\t\t<div class=\"iti__flag\"\r\n\t\t\t\t[ngClass]=\"selectedCountry?.flagClass || ''\"></div>\r\n\t\t\t<div *ngIf=\"separateDialCode\"\r\n\t\t\t\tclass=\"selected-dial-code\">+{{selectedCountry.dialCode}}</div>\r\n\t\t\t<div class=\"iti__arrow\"></div>\r\n\t\t</div>\r\n\t\t<div *dropdownMenu\r\n\t\t\tclass=\"dropdown-menu country-dropdown\">\r\n\t\t\t<div class=\"search-container\"\r\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\">\r\n\t\t\t\t<input id=\"country-search-box\"\r\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\r\n\t\t\t\t\t(keyup)=\"searchCountry()\"\r\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\r\n\t\t\t\t\tautofocus>\r\n\t\t\t</div>\r\n\t\t\t<ul class=\"iti__country-list\"\r\n\t\t\t\t#countryList>\r\n\t\t\t\t<li class=\"iti__country iti__preferred\"\r\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\r\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\r\n\t\t\t\t\t[id]=\"country.htmlId+'-preferred'\">\r\n\t\t\t\t\t<div class=\"iti__flag-box\">\r\n\t\t\t\t\t\t<div class=\"iti__flag\"\r\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\r\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"iti__divider\"\r\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"></li>\r\n\t\t\t\t<li class=\"iti__country iti__standard\"\r\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\r\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\r\n\t\t\t\t\t[id]=\"country.htmlId\">\r\n\t\t\t\t\t<div class=\"iti__flag-box\">\r\n\t\t\t\t\t\t<div class=\"iti__flag\"\r\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\r\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<input type=\"tel\"\r\n\t\t[id]=\"inputId\"\r\n\t\tautocomplete=\"off\"\r\n\t\t[ngClass]=\"cssClass\"\r\n\t\t(blur)=\"onTouched()\"\r\n\t\t(keypress)=\"onInputKeyPress($event)\"\r\n\t\t[(ngModel)]=\"phoneNumber\"\r\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\r\n\t\t[disabled]=\"disabled\"\r\n\t\t[placeholder]=\"resolvePlaceholder()\"\r\n\t\t[attr.maxLength]=\"maxLength\"\r\n\t\t[attr.validation]=\"phoneValidation\"\r\n\t\t#focusable>\r\n</div>\r\n", styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"] }]
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
        }], countryChange: [{
            type: Output
        }], countryList: [{
            type: ViewChild,
            args: ['countryList']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidngtaXRlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92eC1pdGVsL3NyYy9saWIvdngtaXRlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy92eC1pdGVsL3NyYy9saWIvdngtaXRlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBRTdDLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7O0lDZGxFLDhCQUM0QjtJQUFBLFlBQTZCO0lBQUEsaUJBQU07OztJQUFuQyxlQUE2QjtJQUE3QiwrREFBNkI7Ozs7SUFLekQsK0JBQ2lELGdCQUFBO0lBRS9DLDZPQUErQixzSkFDdEIsZUFBQSx1QkFBZSxDQUFBLElBRE8sZ0dBRXRCLHdCQUF3QixJQUZGO0lBRGhDLGlCQUtXLEVBQUE7OztJQUpWLGVBQStCO0lBQS9CLGtEQUErQixnREFBQTs7OztJQVFoQyw4QkFHb0M7SUFEbkMsOFBBQVMsZUFBQSx5Q0FBbUMsQ0FBQSxJQUFDO0lBRTdDLCtCQUEyQjtJQUMxQix5QkFDcUM7SUFD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RUFBRSxpQkFBaUI7d0JBQzFCLDBDQUEwQzt3QkFDMUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7d0JBQzlDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs4REFHUSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyx1QkFBdUI7a0JBQS9CLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUdhLGFBQWE7a0JBQS9CLE1BQU07WUFzQm1CLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxwbiBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBzZXRUaGVtZSB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgQ291bnRyeUNvZGUgfSBmcm9tICcuL2RhdGEvY291bnRyeS1jb2RlJztcclxuaW1wb3J0IHsgQ291bnRyeUlTTyB9IGZyb20gJy4vZW51bXMvY291bnRyeS1pc28uZW51bSc7XHJcbmltcG9ydCB7IFNlYXJjaENvdW50cnlGaWVsZCB9IGZyb20gJy4vZW51bXMvc2VhcmNoLWNvdW50cnktZmllbGQuZW51bSc7XHJcbmltcG9ydCB7IENoYW5nZURhdGEgfSBmcm9tICcuL2ludGVyZmFjZXMvY2hhbmdlLWRhdGEnO1xyXG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi9tb2RlbC9jb3VudHJ5Lm1vZGVsJztcclxuaW1wb3J0IHsgcGhvbmVOdW1iZXJWYWxpZGF0b3IgfSBmcm9tICcuL3Z4LWl0ZWwudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICcuL2VudW1zL3Bob25lLW51bWJlci1mb3JtYXQuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAndngtaXRlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Z4LWl0ZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jvb3RzdHJhcC1kcm9wZG93bi5jc3MnLCAnLi92eC1pdGVsLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENvdW50cnlDb2RlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWZvcndhcmQtcmVmXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFZ4SVRlbENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlVmFsdWU6IHBob25lTnVtYmVyVmFsaWRhdG9yLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZ4SVRlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJyc7XHJcbiAgQElucHV0KCkgcHJlZmVycmVkQ291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgQElucHV0KCkgZW5hYmxlUGxhY2Vob2xkZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnVtYmVyRm9ybWF0OiBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0LkludGVybmF0aW9uYWw7XHJcbiAgQElucHV0KCkgY3NzQ2xhc3MgPSAnZm9ybS1jb250cm9sJztcclxuICBASW5wdXQoKSBvbmx5Q291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgQElucHV0KCkgZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNlYXJjaENvdW50cnlGbGFnID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2VhcmNoQ291bnRyeUZpZWxkOiBTZWFyY2hDb3VudHJ5RmllbGRbXSA9IFtTZWFyY2hDb3VudHJ5RmllbGQuQWxsXTtcclxuICBASW5wdXQoKSBzZWFyY2hDb3VudHJ5UGxhY2Vob2xkZXIgPSAnU2VhcmNoIENvdW50cnknO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEZpcnN0Q291bnRyeSA9IHRydWU7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRDb3VudHJ5SVNPOiBDb3VudHJ5SVNPO1xyXG4gIEBJbnB1dCgpIHBob25lVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgaW5wdXRJZCA9ICdwaG9uZSc7XHJcbiAgQElucHV0KCkgc2VwYXJhdGVEaWFsQ29kZSA9IGZhbHNlO1xyXG4gIHNlcGFyYXRlRGlhbENvZGVDbGFzczogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY291bnRyeUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q291bnRyeT4oKTtcclxuXHJcbiAgc2VsZWN0ZWRDb3VudHJ5OiBDb3VudHJ5ID0ge1xyXG4gICAgYXJlYUNvZGVzOiB1bmRlZmluZWQsXHJcbiAgICBkaWFsQ29kZTogJycsXHJcbiAgICBodG1sSWQ6ICcnLFxyXG4gICAgZmxhZ0NsYXNzOiAnJyxcclxuICAgIGlzbzI6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBwbGFjZUhvbGRlcjogJycsXHJcbiAgICBwcmlvcml0eTogMCxcclxuICB9O1xyXG5cclxuICBwaG9uZU51bWJlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJyc7XHJcbiAgYWxsQ291bnRyaWVzOiBBcnJheTxDb3VudHJ5PiA9IFtdO1xyXG4gIHByZWZlcnJlZENvdW50cmllc0luRHJvcERvd246IEFycmF5PENvdW50cnk+ID0gW107XHJcbiAgLy8gSGFzIHRvIGJlICdhbnknIHRvIHByZXZlbnQgYSBuZWVkIHRvIGluc3RhbGwgQHR5cGVzL2dvb2dsZS1saWJwaG9uZW51bWJlciBieSB0aGUgcGFja2FnZSB1c2VyLi4uXHJcbiAgcGhvbmVVdGlsOiBhbnkgPSBscG4uUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCk7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBlcnJvcnM6IEFycmF5PGFueT4gPSBbJ1Bob25lIG51bWJlciBpcyByZXF1aXJlZC4nXTtcclxuICBjb3VudHJ5U2VhcmNoVGV4dCA9ICcnO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb3VudHJ5TGlzdCcpIGNvdW50cnlMaXN0OiBFbGVtZW50UmVmO1xyXG5cclxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogQ2hhbmdlRGF0YSkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY291bnRyeUNvZGVEYXRhOiBDb3VudHJ5Q29kZSkge1xyXG4gICAgLy8gSWYgdGhpcyBpcyBub3Qgc2V0LCBuZ3gtYm9vdHN0cmFwIHdpbGwgdHJ5IHRvIHVzZSB0aGUgYnMzIENTUyAod2hpY2ggaXMgbm90IHdoYXQgd2UndmUgZW1iZWRkZWQpIGFuZCB3aWxsXHJcbiAgICAvLyBBZGQgdGhlIHdyb25nIGNsYXNzZXMgYW5kIHN1Y2hcclxuICAgIHNldFRoZW1lKCdiczQnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZElTTyA9IGNoYW5nZXNbJ3NlbGVjdGVkQ291bnRyeUlTTyddO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmFsbENvdW50cmllcyAmJlxyXG4gICAgICBzZWxlY3RlZElTTyAmJlxyXG4gICAgICBzZWxlY3RlZElTTy5jdXJyZW50VmFsdWUgIT09IHNlbGVjdGVkSVNPLnByZXZpb3VzVmFsdWVcclxuICAgICkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3ByZWZlcnJlZENvdW50cmllcyddKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUHJlZmVycmVkQ291bnRyaWVzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG5cdFx0VGhpcyBpcyBhIHdyYXBwZXIgbWV0aG9kIHRvIGF2b2lkIGNhbGxpbmcgdGhpcy5uZ09uSW5pdCgpIGluIHdyaXRlVmFsdWUoKS5cclxuXHRcdFJlZjogaHR0cDovL2NvZGVseXplci5jb20vcnVsZXMvbm8tbGlmZS1jeWNsZS1jYWxsL1xyXG5cdCovXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZmV0Y2hDb3VudHJ5RGF0YSgpO1xyXG4gICAgaWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVByZWZlcnJlZENvdW50cmllcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub25seUNvdW50cmllcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5hbGxDb3VudHJpZXMgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+XHJcbiAgICAgICAgdGhpcy5vbmx5Q291bnRyaWVzLmluY2x1ZGVzKGMuaXNvMilcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdEZpcnN0Q291bnRyeSkge1xyXG4gICAgICBpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRDb3VudHJ5KHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93blswXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZENvdW50cnkodGhpcy5hbGxDb3VudHJpZXNbMF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpO1xyXG4gICAgdGhpcy5jaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRDb3VudHJ5KGNvdW50cnk6IENvdW50cnkpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeTtcclxuICAgIHRoaXMuY291bnRyeUNoYW5nZS5lbWl0KGNvdW50cnkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VhcmNoIGNvdW50cnkgYmFzZWQgb24gY291bnRyeSBuYW1lLCBpc28yLCBkaWFsQ29kZSBvciBhbGwgb2YgdGhlbS5cclxuICAgKi9cclxuICBwdWJsaWMgc2VhcmNoQ291bnRyeSgpIHtcclxuICAgIGlmICghdGhpcy5jb3VudHJ5U2VhcmNoVGV4dCkge1xyXG4gICAgICB0aGlzLmNvdW50cnlMaXN0Lm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLml0aV9fY291bnRyeS1saXN0IGxpJylcclxuICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgYmxvY2s6ICduZWFyZXN0JyxcclxuICAgICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb3VudHJ5U2VhcmNoVGV4dExvd2VyID0gdGhpcy5jb3VudHJ5U2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuQWxsKSA+IC0xKSB7XHJcbiAgICAgICAgLy8gU2VhcmNoIGluIGFsbCBmaWVsZHNcclxuICAgICAgICBpZiAoYy5pc28yLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMuZGlhbENvZGUuc3RhcnRzV2l0aCh0aGlzLmNvdW50cnlTZWFyY2hUZXh0KSkge1xyXG4gICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE9yIHNlYXJjaCBieSBzcGVjaWZpYyBTZWFyY2hDb3VudHJ5RmllbGQocylcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuSXNvMikgPiAtMSkge1xyXG4gICAgICAgICAgaWYgKGMuaXNvMi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoY291bnRyeVNlYXJjaFRleHRMb3dlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5OYW1lKSA+IC0xKSB7XHJcbiAgICAgICAgICBpZiAoYy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLkRpYWxDb2RlKSA+IC0xKSB7XHJcbiAgICAgICAgICBpZiAoYy5kaWFsQ29kZS5zdGFydHNXaXRoKHRoaXMuY291bnRyeVNlYXJjaFRleHQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNvdW50cnkubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuY291bnRyeUxpc3QubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICcjJyArIGNvdW50cnlbMF0uaHRtbElkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgIGJsb2NrOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICBpbmxpbmU6ICduZWFyZXN0JyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBob25lTnVtYmVyQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgbGV0IGNvdW50cnlDb2RlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIHVzZXIgc2V0cyB0aGUgdmFsdWUgcHJvZ3JhbWF0aWNhbGx5IGJhc2VkIG9uIGEgcGVyc2lzdGVkIENoYW5nZURhdGEgb2JqLlxyXG4gICAgaWYgKHRoaXMucGhvbmVOdW1iZXIgJiYgdHlwZW9mIHRoaXMucGhvbmVOdW1iZXIgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGNvbnN0IG51bWJlck9iajogQ2hhbmdlRGF0YSA9IHRoaXMucGhvbmVOdW1iZXI7XHJcbiAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSBudW1iZXJPYmoubnVtYmVyO1xyXG4gICAgICBjb3VudHJ5Q29kZSA9IG51bWJlck9iai5jb3VudHJ5Q29kZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcclxuICAgIGNvdW50cnlDb2RlID0gY291bnRyeUNvZGUgfHwgdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKHRoaXMucGhvbmVOdW1iZXIsIGNvdW50cnlDb2RlKTtcclxuXHJcbiAgICAvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxyXG4gICAgaWYgKHRoaXMuZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QpIHtcclxuICAgICAgY291bnRyeUNvZGUgPVxyXG4gICAgICAgIG51bWJlciAmJiBudW1iZXIuZ2V0Q291bnRyeUNvZGUoKVxyXG4gICAgICAgICAgPyAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q291bnRyeUlzb0NvZGUobnVtYmVyLmdldENvdW50cnlDb2RlKCksIG51bWJlcilcclxuICAgICAgICAgIDogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcclxuICAgICAgaWYgKGNvdW50cnlDb2RlICYmIGNvdW50cnlDb2RlICE9PSB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmZpbmQoKGMpID0+IGMuaXNvMiA9PT0gY291bnRyeUNvZGUpO1xyXG4gICAgICAgIGlmIChuZXdDb3VudHJ5KSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSA9IG5ld0NvdW50cnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlID8gY291bnRyeUNvZGUgOiB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yO1xyXG5cclxuICAgIHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgLy8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW51bGwta2V5d29yZFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW50bE5vID0gbnVtYmVyXHJcbiAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTClcclxuICAgICAgICA6ICcnO1xyXG5cclxuICAgICAgLy8gcGFyc2UgcGhvbmVOdW1iZXIgaWYgc2VwYXJhdGUgZGlhbCBjb2RlIGlzIG5lZWRlZFxyXG4gICAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGxObykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbW92ZURpYWxDb2RlKGludGxObyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHtcclxuICAgICAgICBudW1iZXI6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgaW50ZXJuYXRpb25hbE51bWJlcjogaW50bE5vLFxyXG4gICAgICAgIG5hdGlvbmFsTnVtYmVyOiBudW1iZXJcclxuICAgICAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxyXG4gICAgICAgICAgOiAnJyxcclxuICAgICAgICBlMTY0TnVtYmVyOiBudW1iZXJcclxuICAgICAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LkUxNjQpXHJcbiAgICAgICAgICA6ICcnLFxyXG4gICAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGRpYWxDb2RlOiAnKycgKyB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Db3VudHJ5U2VsZWN0KGNvdW50cnk6IENvdW50cnksIGVsOiB7IGZvY3VzOiAoKSA9PiB2b2lkIH0pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWRDb3VudHJ5KGNvdW50cnkpO1xyXG5cclxuICAgIHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lTnVtYmVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucGhvbmVOdW1iZXI7XHJcbiAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKFxyXG4gICAgICAgIHRoaXMucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBpbnRsTm8gPSBudW1iZXJcclxuICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxyXG4gICAgICAgIDogJyc7XHJcbiAgICAgIC8vIHBhcnNlIHBob25lTnVtYmVyIGlmIHNlcGFyYXRlIGRpYWwgY29kZSBpcyBuZWVkZWRcclxuICAgICAgaWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRsTm8pIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRsTm8pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XHJcbiAgICAgICAgbnVtYmVyOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIGludGVybmF0aW9uYWxOdW1iZXI6IGludGxObyxcclxuICAgICAgICBuYXRpb25hbE51bWJlcjogbnVtYmVyXHJcbiAgICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTClcclxuICAgICAgICAgIDogJycsXHJcbiAgICAgICAgZTE2NE51bWJlcjogbnVtYmVyXHJcbiAgICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5FMTY0KVxyXG4gICAgICAgICAgOiAnJyxcclxuICAgICAgICBjb3VudHJ5Q29kZTogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMi50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIGRpYWxDb2RlOiAnKycgKyB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBSZWFzb246IGF2b2lkIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDM1ODEzMy8xNjE3NTkwXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWwuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbklucHV0S2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFsbG93ZWRDaGFycyA9IC9bMC05XFwrXFwtXFwoXFwpXFwgXS87XHJcbiAgICBjb25zdCBhbGxvd2VkQ3RybENoYXJzID0gL1theGN2XS87IC8vIEFsbG93cyBjb3B5LXBhc3RpbmdcclxuICAgIGNvbnN0IGFsbG93ZWRPdGhlcktleXMgPSBbXHJcbiAgICAgICdBcnJvd0xlZnQnLFxyXG4gICAgICAnQXJyb3dVcCcsXHJcbiAgICAgICdBcnJvd1JpZ2h0JyxcclxuICAgICAgJ0Fycm93RG93bicsXHJcbiAgICAgICdIb21lJyxcclxuICAgICAgJ0VuZCcsXHJcbiAgICAgICdJbnNlcnQnLFxyXG4gICAgICAnRGVsZXRlJyxcclxuICAgICAgJ0JhY2tzcGFjZScsXHJcbiAgICBdO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIWFsbG93ZWRDaGFycy50ZXN0KGV2ZW50LmtleSkgJiZcclxuICAgICAgIShldmVudC5jdHJsS2V5ICYmIGFsbG93ZWRDdHJsQ2hhcnMudGVzdChldmVudC5rZXkpKSAmJlxyXG4gICAgICAhYWxsb3dlZE90aGVyS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpXHJcbiAgICApIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5waG9uZU51bWJlciA9IG9iajtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGhvbmVOdW1iZXJDaGFuZ2UoKTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgcmVzb2x2ZVBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnJztcclxuICAgIGlmICh0aGlzLmN1c3RvbVBsYWNlaG9sZGVyKSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5jdXN0b21QbGFjZWhvbGRlcjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZENvdW50cnkucGxhY2VIb2xkZXIpIHtcclxuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLnNlbGVjdGVkQ291bnRyeS5wbGFjZUhvbGRlcjtcclxuICAgICAgaWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSkge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShwbGFjZWhvbGRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBwYXJzZSBQaG9uZU51bWJlciBvYmplY3QuXHJcbiAgICogQHBhcmFtIHBob25lTnVtYmVyIHN0cmluZ1xyXG4gICAqIEBwYXJhbSBjb3VudHJ5Q29kZSBzdHJpbmdcclxuICAgKi9cclxuICBwcml2YXRlIGdldFBhcnNlZE51bWJlcihcclxuICAgIHBob25lTnVtYmVyOiBzdHJpbmcsXHJcbiAgICBjb3VudHJ5Q29kZTogc3RyaW5nXHJcbiAgKTogbHBuLlBob25lTnVtYmVyIHtcclxuICAgIGxldCBudW1iZXI6IGxwbi5QaG9uZU51bWJlcjtcclxuICAgIHRyeSB7XHJcbiAgICAgIG51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHBob25lTnVtYmVyLCBjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gbnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRqdXN0cyBpbnB1dCBhbGlnbm1lbnQgYmFzZWQgb24gdGhlIGRpYWwgY29kZSBwcmVzZW50YXRpb24gc3R5bGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGVja1NlcGFyYXRlRGlhbENvZGVTdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgdGhpcy5zZWxlY3RlZENvdW50cnkpIHtcclxuICAgICAgY29uc3QgY250cnlDZCA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlO1xyXG4gICAgICB0aGlzLnNlcGFyYXRlRGlhbENvZGVDbGFzcyA9XHJcbiAgICAgICAgJ3NlcGFyYXRlLWRpYWwtY29kZSBpdGktc2RjLScgKyAoY250cnlDZC5sZW5ndGggKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VwYXJhdGVEaWFsQ29kZUNsYXNzID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhbnMgZGlhbGNvZGUgZnJvbSBwaG9uZSBudW1iZXIgc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciBzdHJpbmdcclxuICAgKi9cclxuICBwcml2YXRlIHJlbW92ZURpYWxDb2RlKHBob25lTnVtYmVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5nZXRQYXJzZWROdW1iZXIocGhvbmVOdW1iZXIsIHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIpO1xyXG4gICAgcGhvbmVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5mb3JtYXQoXHJcbiAgICAgIG51bWJlcixcclxuICAgICAgbHBuLlBob25lTnVtYmVyRm9ybWF0W3RoaXMubnVtYmVyRm9ybWF0XVxyXG4gICAgKTtcclxuICAgIGlmIChwaG9uZU51bWJlci5zdGFydHNXaXRoKCcrJykgJiYgdGhpcy5zZXBhcmF0ZURpYWxDb2RlKSB7XHJcbiAgICAgIHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIuc3Vic3RyKHBob25lTnVtYmVyLmluZGV4T2YoJyAnKSArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2lmdHMgdGhyb3VnaCBhbGwgY291bnRyaWVzIGFuZCByZXR1cm5zIGlzbyBjb2RlIG9mIHRoZSBwcmltYXJ5IGNvdW50cnlcclxuICAgKiBiYXNlZCBvbiB0aGUgbnVtYmVyIHByb3ZpZGVkLlxyXG4gICAqIEBwYXJhbSBjb3VudHJ5Q29kZSBjb3VudHJ5IGNvZGUgaW4gbnVtYmVyIGZvcm1hdFxyXG4gICAqIEBwYXJhbSBudW1iZXIgUGhvbmVOdW1iZXIgb2JqZWN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShcclxuICAgIGNvdW50cnlDb2RlOiBudW1iZXIsXHJcbiAgICBudW1iZXI6IGxwbi5QaG9uZU51bWJlclxyXG4gICk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAvLyBXaWxsIHVzZSB0aGlzIHRvIG1hdGNoIGFyZWEgY29kZSBmcm9tIHRoZSBmaXJzdCBudW1iZXJzXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCByYXdOdW1iZXIgPSBudW1iZXJbJ3ZhbHVlc18nXVsnMiddLnRvU3RyaW5nKCk7XHJcbiAgICAvLyBMaXN0IG9mIGFsbCBjb3VudHJpZXMgd2l0aCBjb3VudHJ5Q29kZSAoY2FuIGJlIG1vcmUgdGhhbiBvbmUuIGUueC4gVVMsIENBLCBETywgUFIgYWxsIGhhdmUgKzEgY291bnRyeUNvZGUpXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoXHJcbiAgICAgIChjKSA9PiBjLmRpYWxDb2RlID09PSBjb3VudHJ5Q29kZS50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgLy8gTWFpbiBjb3VudHJ5IGlzIHRoZSBjb3VudHJ5LCB3aGljaCBoYXMgbm8gYXJlYUNvZGVzIHNwZWNpZmllZCBpbiBjb3VudHJ5LWNvZGUudHMgZmlsZS5cclxuICAgIGNvbnN0IG1haW5Db3VudHJ5ID0gY291bnRyaWVzLmZpbmQoKGMpID0+IGMuYXJlYUNvZGVzID09PSB1bmRlZmluZWQpO1xyXG4gICAgLy8gU2Vjb25kYXJ5IGNvdW50cmllcyBhcmUgYWxsIGNvdW50cmllcywgd2hpY2ggaGF2ZSBhcmVhQ29kZXMgc3BlY2lmaWVkIGluIGNvdW50cnktY29kZS50cyBmaWxlLlxyXG4gICAgY29uc3Qgc2Vjb25kYXJ5Q291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlcihcclxuICAgICAgKGMpID0+IGMuYXJlYUNvZGVzICE9PSB1bmRlZmluZWRcclxuICAgICk7XHJcbiAgICBsZXQgbWF0Y2hlZENvdW50cnkgPSBtYWluQ291bnRyeSA/IG1haW5Db3VudHJ5LmlzbzIgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgLypcclxuXHRcdFx0SXRlcmF0ZSBvdmVyIGVhY2ggc2Vjb25kYXJ5IGNvdW50cnkgYW5kIGNoZWNrIGlmIG5hdGlvbmFsTnVtYmVyIHN0YXJ0cyB3aXRoIGFueSBvZiBhcmVhQ29kZXMgYXZhaWxhYmxlLlxyXG5cdFx0XHRJZiBubyBtYXRjaGVzIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgbWFpbiBjb3VudHJ5LlxyXG5cdFx0Ki9cclxuICAgIHNlY29uZGFyeUNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY291bnRyeS5hcmVhQ29kZXMuZm9yRWFjaCgoYXJlYUNvZGUpID0+IHtcclxuICAgICAgICBpZiAocmF3TnVtYmVyLnN0YXJ0c1dpdGgoYXJlYUNvZGUpKSB7XHJcbiAgICAgICAgICBtYXRjaGVkQ291bnRyeSA9IGNvdW50cnkuaXNvMjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZWRDb3VudHJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBmb3JtYXR0ZWQgZXhhbXBsZSBwaG9uZSBudW1iZXIgZnJvbSBwaG9uZVV0aWwuXHJcbiAgICogQHBhcmFtIGNvdW50cnlDb2RlIHN0cmluZ1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRQaG9uZU51bWJlclBsYWNlSG9sZGVyKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIHRoaXMucGhvbmVVdGlsLmZvcm1hdChcclxuICAgICAgICB0aGlzLnBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnlDb2RlKSxcclxuICAgICAgICBscG4uUGhvbmVOdW1iZXJGb3JtYXRbdGhpcy5udW1iZXJGb3JtYXRdXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcmluZyB0aGUgbGlzdCB0byBhdm9pZCBkdXBsaWNhdGVzIChodHRwczovL2dpdGh1Yi5jb20vZ3VpbGxlcm1vZGVsYWdhbGEvdngtaXRlbC9pc3N1ZXMvMjQ4KVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBmZXRjaENvdW50cnlEYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hbGxDb3VudHJpZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNvdW50cnlDb2RlRGF0YS5hbGxDb3VudHJpZXMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICBjb25zdCBjb3VudHJ5OiBDb3VudHJ5ID0ge1xyXG4gICAgICAgIG5hbWU6IGNbMF0udG9TdHJpbmcoKSxcclxuICAgICAgICBpc28yOiBjWzFdLnRvU3RyaW5nKCksXHJcbiAgICAgICAgZGlhbENvZGU6IGNbMl0udG9TdHJpbmcoKSxcclxuICAgICAgICBwcmlvcml0eTogK2NbM10gfHwgMCxcclxuICAgICAgICBhcmVhQ29kZXM6IChjWzRdIGFzIHN0cmluZ1tdKSB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgaHRtbElkOiBgaXRpLTBfX2l0ZW0tJHtjWzFdLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICBmbGFnQ2xhc3M6IGBpdGlfXyR7Y1sxXS50b1N0cmluZygpLnRvTG9jYWxlTG93ZXJDYXNlKCl9YCxcclxuICAgICAgICBwbGFjZUhvbGRlcjogJycsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5lbmFibGVQbGFjZWhvbGRlcikge1xyXG4gICAgICAgIGNvdW50cnkucGxhY2VIb2xkZXIgPSB0aGlzLmdldFBob25lTnVtYmVyUGxhY2VIb2xkZXIoXHJcbiAgICAgICAgICBjb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWxsQ291bnRyaWVzLnB1c2goY291bnRyeSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBvcHVsYXRlcyBwcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duIHdpdGggcHJlZmZlcnJlZCBjb3VudHJpZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93biA9IFtdO1xyXG4gICAgICB0aGlzLnByZWZlcnJlZENvdW50cmllcy5mb3JFYWNoKChpc28yKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJlZmVycmVkQ291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcigoYykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGMuaXNvMiA9PT0gaXNvMjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLnB1c2gocHJlZmVycmVkQ291bnRyeVswXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBzZWxlY3RlZENvdW50cnkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZENvdW50cnkoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZENvdW50cnlJU08pIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbmQoKGMpID0+IHtcclxuICAgICAgICByZXR1cm4gYy5pc28yLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuc2VsZWN0ZWRDb3VudHJ5SVNPLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZENvdW50cnkpIHtcclxuICAgICAgICBpZiAodGhpcy5waG9uZU51bWJlcikge1xyXG4gICAgICAgICAgdGhpcy5vblBob25lTnVtYmVyQ2hhbmdlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFJlYXNvbjogYXZvaWQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MzU4MTMzLzE2MTc1OTBcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXHJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIml0aSBpdGktLWFsbG93LWRyb3Bkb3duXCJcclxuXHRbbmdDbGFzc109XCJzZXBhcmF0ZURpYWxDb2RlQ2xhc3NcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiaXRpX19mbGFnLWNvbnRhaW5lclwiXHJcblx0XHRkcm9wZG93blxyXG5cdFx0W25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGRpc2FibGVkfVwiXHJcblx0XHRbaXNEaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIml0aV9fc2VsZWN0ZWQtZmxhZyBkcm9wZG93bi10b2dnbGVcIlxyXG5cdFx0XHRkcm9wZG93blRvZ2dsZT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIml0aV9fZmxhZ1wiXHJcblx0XHRcdFx0W25nQ2xhc3NdPVwic2VsZWN0ZWRDb3VudHJ5Py5mbGFnQ2xhc3MgfHwgJydcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiAqbmdJZj1cInNlcGFyYXRlRGlhbENvZGVcIlxyXG5cdFx0XHRcdGNsYXNzPVwic2VsZWN0ZWQtZGlhbC1jb2RlXCI+K3t7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfX08L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIml0aV9fYXJyb3dcIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiAqZHJvcGRvd25NZW51XHJcblx0XHRcdGNsYXNzPVwiZHJvcGRvd24tbWVudSBjb3VudHJ5LWRyb3Bkb3duXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzZWFyY2gtY29udGFpbmVyXCJcclxuXHRcdFx0XHQqbmdJZj1cInNlYXJjaENvdW50cnlGbGFnICYmIHNlYXJjaENvdW50cnlGaWVsZFwiPlxyXG5cdFx0XHRcdDxpbnB1dCBpZD1cImNvdW50cnktc2VhcmNoLWJveFwiXHJcblx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cImNvdW50cnlTZWFyY2hUZXh0XCJcclxuXHRcdFx0XHRcdChrZXl1cCk9XCJzZWFyY2hDb3VudHJ5KClcIlxyXG5cdFx0XHRcdFx0KGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcblx0XHRcdFx0XHRbcGxhY2Vob2xkZXJdPVwic2VhcmNoQ291bnRyeVBsYWNlaG9sZGVyXCJcclxuXHRcdFx0XHRcdGF1dG9mb2N1cz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx1bCBjbGFzcz1cIml0aV9fY291bnRyeS1saXN0XCJcclxuXHRcdFx0XHQjY291bnRyeUxpc3Q+XHJcblx0XHRcdFx0PGxpIGNsYXNzPVwiaXRpX19jb3VudHJ5IGl0aV9fcHJlZmVycmVkXCJcclxuXHRcdFx0XHRcdCpuZ0Zvcj1cImxldCBjb3VudHJ5IG9mIHByZWZlcnJlZENvdW50cmllc0luRHJvcERvd25cIlxyXG5cdFx0XHRcdFx0KGNsaWNrKT1cIm9uQ291bnRyeVNlbGVjdChjb3VudHJ5LCBmb2N1c2FibGUpXCJcclxuXHRcdFx0XHRcdFtpZF09XCJjb3VudHJ5Lmh0bWxJZCsnLXByZWZlcnJlZCdcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWctYm94XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWdcIlxyXG5cdFx0XHRcdFx0XHRcdFtuZ0NsYXNzXT1cImNvdW50cnkuZmxhZ0NsYXNzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRpX19jb3VudHJ5LW5hbWVcIj57e2NvdW50cnkubmFtZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpdGlfX2RpYWwtY29kZVwiPit7e2NvdW50cnkuZGlhbENvZGV9fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzcz1cIml0aV9fZGl2aWRlclwiXHJcblx0XHRcdFx0XHQqbmdJZj1cInByZWZlcnJlZENvdW50cmllc0luRHJvcERvd24/Lmxlbmd0aFwiPjwvbGk+XHJcblx0XHRcdFx0PGxpIGNsYXNzPVwiaXRpX19jb3VudHJ5IGl0aV9fc3RhbmRhcmRcIlxyXG5cdFx0XHRcdFx0Km5nRm9yPVwibGV0IGNvdW50cnkgb2YgYWxsQ291bnRyaWVzXCJcclxuXHRcdFx0XHRcdChjbGljayk9XCJvbkNvdW50cnlTZWxlY3QoY291bnRyeSwgZm9jdXNhYmxlKVwiXHJcblx0XHRcdFx0XHRbaWRdPVwiY291bnRyeS5odG1sSWRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWctYm94XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWdcIlxyXG5cdFx0XHRcdFx0XHRcdFtuZ0NsYXNzXT1cImNvdW50cnkuZmxhZ0NsYXNzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRpX19jb3VudHJ5LW5hbWVcIj57e2NvdW50cnkubmFtZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpdGlfX2RpYWwtY29kZVwiPit7e2NvdW50cnkuZGlhbENvZGV9fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PGlucHV0IHR5cGU9XCJ0ZWxcIlxyXG5cdFx0W2lkXT1cImlucHV0SWRcIlxyXG5cdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuXHRcdFtuZ0NsYXNzXT1cImNzc0NsYXNzXCJcclxuXHRcdChibHVyKT1cIm9uVG91Y2hlZCgpXCJcclxuXHRcdChrZXlwcmVzcyk9XCJvbklucHV0S2V5UHJlc3MoJGV2ZW50KVwiXHJcblx0XHRbKG5nTW9kZWwpXT1cInBob25lTnVtYmVyXCJcclxuXHRcdChuZ01vZGVsQ2hhbmdlKT1cIm9uUGhvbmVOdW1iZXJDaGFuZ2UoKVwiXHJcblx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG5cdFx0W3BsYWNlaG9sZGVyXT1cInJlc29sdmVQbGFjZWhvbGRlcigpXCJcclxuXHRcdFthdHRyLm1heExlbmd0aF09XCJtYXhMZW5ndGhcIlxyXG5cdFx0W2F0dHIudmFsaWRhdGlvbl09XCJwaG9uZVZhbGlkYXRpb25cIlxyXG5cdFx0I2ZvY3VzYWJsZT5cclxuPC9kaXY+XHJcbiJdfQ==
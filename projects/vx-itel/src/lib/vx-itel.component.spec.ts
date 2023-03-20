import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VxITelComponent } from './vx-itel.component';

describe('NgxIntlTelInputComponent', () => {
	let component: VxITelComponent;
	let fixture: ComponentFixture<VxITelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VxITelComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VxITelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

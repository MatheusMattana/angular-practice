import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAddCoursesComponent } from './service-add-courses.component';

describe('ServiceAddCoursesComponent', () => {
  let component: ServiceAddCoursesComponent;
  let fixture: ComponentFixture<ServiceAddCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceAddCoursesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAddCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCoursesComponent } from './service-courses.component';

describe('ServiceCoursesComponent', () => {
  let component: ServiceCoursesComponent;
  let fixture: ComponentFixture<ServiceCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceCoursesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

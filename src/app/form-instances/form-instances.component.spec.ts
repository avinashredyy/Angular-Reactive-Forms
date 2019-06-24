import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInstancesComponent } from './form-instances.component';

describe('FormInstancesComponent', () => {
  let component: FormInstancesComponent;
  let fixture: ComponentFixture<FormInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

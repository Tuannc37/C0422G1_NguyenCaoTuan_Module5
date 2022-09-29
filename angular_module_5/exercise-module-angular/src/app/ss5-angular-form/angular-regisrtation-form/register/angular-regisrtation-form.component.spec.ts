import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRegisrtationFormComponent } from './angular-regisrtation-form.component';

describe('AngularRegisrtationFormComponent', () => {
  let component: AngularRegisrtationFormComponent;
  let fixture: ComponentFixture<AngularRegisrtationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRegisrtationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRegisrtationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

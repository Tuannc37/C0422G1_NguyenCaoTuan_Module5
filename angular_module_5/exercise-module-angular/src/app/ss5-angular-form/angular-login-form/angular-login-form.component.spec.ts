import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLoginFormComponent } from './angular-login-form.component';

describe('AngularLoginFormComponent', () => {
  let component: AngularLoginFormComponent;
  let fixture: ComponentFixture<AngularLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

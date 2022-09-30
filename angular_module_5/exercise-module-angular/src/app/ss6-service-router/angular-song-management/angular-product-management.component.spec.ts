import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProductManagementComponent } from './angular-product-management.component';

describe('AngularProductManagementComponent', () => {
  let component: AngularProductManagementComponent;
  let fixture: ComponentFixture<AngularProductManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProductManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateNewComponent } from './product-create-new.component';

describe('ProductCreateNewComponent', () => {
  let component: ProductCreateNewComponent;
  let fixture: ComponentFixture<ProductCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTimelinesAppComponent } from './angular-timelines-app.component';

describe('AngularTimelinesAppComponent', () => {
  let component: AngularTimelinesAppComponent;
  let fixture: ComponentFixture<AngularTimelinesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTimelinesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTimelinesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

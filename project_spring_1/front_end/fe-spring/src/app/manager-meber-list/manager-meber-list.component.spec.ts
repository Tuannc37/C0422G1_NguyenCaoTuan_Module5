import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMeberListComponent } from './manager-meber-list.component';

describe('ManagerMeberListComponent', () => {
  let component: ManagerMeberListComponent;
  let fixture: ComponentFixture<ManagerMeberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMeberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMeberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

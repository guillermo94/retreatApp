import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivityListComponent } from './admin-activity-list.component';

describe('AdminActivityListComponent', () => {
  let component: AdminActivityListComponent;
  let fixture: ComponentFixture<AdminActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

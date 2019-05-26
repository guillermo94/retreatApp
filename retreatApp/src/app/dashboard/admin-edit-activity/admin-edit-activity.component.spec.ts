import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditActivityComponent } from './admin-edit-activity.component';

describe('AdminEditActivityComponent', () => {
  let component: AdminEditActivityComponent;
  let fixture: ComponentFixture<AdminEditActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

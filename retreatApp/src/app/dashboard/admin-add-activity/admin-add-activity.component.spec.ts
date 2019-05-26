import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddActivityComponent } from './admin-add-activity.component';

describe('AdminAddActivityComponent', () => {
  let component: AdminAddActivityComponent;
  let fixture: ComponentFixture<AdminAddActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

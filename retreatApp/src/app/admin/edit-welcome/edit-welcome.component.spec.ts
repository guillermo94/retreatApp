import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { editWelcomeComponent } from './edit-welcome.component';

describe('editWelcomeComponent', () => {
  let component: editWelcomeComponent;
  let fixture: ComponentFixture<editWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ editWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(editWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

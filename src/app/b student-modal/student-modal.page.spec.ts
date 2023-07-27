import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentModalPage } from './student-modal.page';

describe('StudentModalPage', () => {
  let component: StudentModalPage;
  let fixture: ComponentFixture<StudentModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

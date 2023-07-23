import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceMainComponent } from './experience-main.component';

describe('ExperienceMainComponent', () => {
  let component: ExperienceMainComponent;
  let fixture: ComponentFixture<ExperienceMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceMainComponent]
    });
    fixture = TestBed.createComponent(ExperienceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

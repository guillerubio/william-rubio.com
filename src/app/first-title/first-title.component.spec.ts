import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTitleComponent } from './first-title.component';

describe('FirstTitleComponent', () => {
  let component: FirstTitleComponent;
  let fixture: ComponentFixture<FirstTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTitleComponent]
    });
    fixture = TestBed.createComponent(FirstTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

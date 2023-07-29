import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageEnComponent } from './main-page-en.component';

describe('MainPageEnComponent', () => {
  let component: MainPageEnComponent;
  let fixture: ComponentFixture<MainPageEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageEnComponent]
    });
    fixture = TestBed.createComponent(MainPageEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

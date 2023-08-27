import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiscorePageComponent } from './equiscore-page.component';

describe('EquiscorePageComponent', () => {
  let component: EquiscorePageComponent;
  let fixture: ComponentFixture<EquiscorePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiscorePageComponent]
    });
    fixture = TestBed.createComponent(EquiscorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscMainComponent } from './misc-main.component';

describe('MiscMainComponent', () => {
  let component: MiscMainComponent;
  let fixture: ComponentFixture<MiscMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscMainComponent]
    });
    fixture = TestBed.createComponent(MiscMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

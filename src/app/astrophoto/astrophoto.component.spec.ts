import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrophotoComponent } from './astrophoto.component';

describe('AstrophotoComponent', () => {
  let component: AstrophotoComponent;
  let fixture: ComponentFixture<AstrophotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstrophotoComponent]
    });
    fixture = TestBed.createComponent(AstrophotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

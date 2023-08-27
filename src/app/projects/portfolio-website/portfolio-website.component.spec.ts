import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWebsiteComponent } from './portfolio-website.component';

describe('PortfolioWebsiteComponent', () => {
  let component: PortfolioWebsiteComponent;
  let fixture: ComponentFixture<PortfolioWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioWebsiteComponent]
    });
    fixture = TestBed.createComponent(PortfolioWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureAllegoricalComponent } from './culture-allegorical.component';

describe('CultureAllegoricalComponent', () => {
  let component: CultureAllegoricalComponent;
  let fixture: ComponentFixture<CultureAllegoricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureAllegoricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureAllegoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

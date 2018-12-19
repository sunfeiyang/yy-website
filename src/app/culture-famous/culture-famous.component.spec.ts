import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureFamousComponent } from './culture-famous.component';

describe('CultureFamousComponent', () => {
  let component: CultureFamousComponent;
  let fixture: ComponentFixture<CultureFamousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureFamousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureFamousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

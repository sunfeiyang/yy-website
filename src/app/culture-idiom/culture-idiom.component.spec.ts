import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureIdiomComponent } from './culture-idiom.component';

describe('CultureIdiomComponent', () => {
  let component: CultureIdiomComponent;
  let fixture: ComponentFixture<CultureIdiomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureIdiomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureIdiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

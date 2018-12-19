import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturePoemComponent } from './culture-poem.component';

describe('CulturePoemComponent', () => {
  let component: CulturePoemComponent;
  let fixture: ComponentFixture<CulturePoemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturePoemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturePoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

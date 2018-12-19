import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureDicComponent } from './culture-dic.component';

describe('CultureDicComponent', () => {
  let component: CultureDicComponent;
  let fixture: ComponentFixture<CultureDicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureDicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureDicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureTodayhistoryComponent } from './culture-todayhistory.component';

describe('CultureTodayhistoryComponent', () => {
  let component: CultureTodayhistoryComponent;
  let fixture: ComponentFixture<CultureTodayhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureTodayhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureTodayhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

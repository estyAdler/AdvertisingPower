import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildMonthComponent } from './build-month.component';

describe('BuildMonthComponent', () => {
  let component: BuildMonthComponent;
  let fixture: ComponentFixture<BuildMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

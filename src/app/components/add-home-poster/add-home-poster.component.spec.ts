import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomePosterComponent } from './add-home-poster.component';

describe('AddHomePosterComponent', () => {
  let component: AddHomePosterComponent;
  let fixture: ComponentFixture<AddHomePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHomePosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

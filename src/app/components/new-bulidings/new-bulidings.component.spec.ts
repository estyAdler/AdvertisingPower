import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBulidingsComponent } from './new-bulidings.component';

describe('NewBulidingsComponent', () => {
  let component: NewBulidingsComponent;
  let fixture: ComponentFixture<NewBulidingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBulidingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBulidingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

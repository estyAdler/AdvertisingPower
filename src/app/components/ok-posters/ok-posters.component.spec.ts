import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkPostersComponent } from './ok-posters.component';

describe('OkPostersComponent', () => {
  let component: OkPostersComponent;
  let fixture: ComponentFixture<OkPostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkPostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkPostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

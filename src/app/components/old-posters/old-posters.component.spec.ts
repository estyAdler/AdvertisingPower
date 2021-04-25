import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPostersComponent } from './old-posters.component';

describe('OldPostersComponent', () => {
  let component: OldPostersComponent;
  let fixture: ComponentFixture<OldPostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldPostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

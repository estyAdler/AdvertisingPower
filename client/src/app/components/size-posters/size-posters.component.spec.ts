import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizePostersComponent } from './size-posters.component';

describe('SizePostersComponent', () => {
  let component: SizePostersComponent;
  let fixture: ComponentFixture<SizePostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizePostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizePostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

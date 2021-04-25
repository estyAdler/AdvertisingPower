import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildDataComponent } from './build-data.component';

describe('BuildDataComponent', () => {
  let component: BuildDataComponent;
  let fixture: ComponentFixture<BuildDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildBoardComponent } from './build-board.component';

describe('BuildBoardComponent', () => {
  let component: BuildBoardComponent;
  let fixture: ComponentFixture<BuildBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

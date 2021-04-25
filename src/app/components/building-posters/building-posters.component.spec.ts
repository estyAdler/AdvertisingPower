import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPostersComponent } from './building-posters.component';

describe('BuildingPostersComponent', () => {
  let component: BuildingPostersComponent;
  let fixture: ComponentFixture<BuildingPostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingPostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingPostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

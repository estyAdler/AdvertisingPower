import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDesignerComponent } from './home-designer.component';

describe('HomeDesignerComponent', () => {
  let component: HomeDesignerComponent;
  let fixture: ComponentFixture<HomeDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

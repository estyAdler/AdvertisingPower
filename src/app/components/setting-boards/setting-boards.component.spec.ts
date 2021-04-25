import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBoardsComponent } from './setting-boards.component';

describe('SettingBoardsComponent', () => {
  let component: SettingBoardsComponent;
  let fixture: ComponentFixture<SettingBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

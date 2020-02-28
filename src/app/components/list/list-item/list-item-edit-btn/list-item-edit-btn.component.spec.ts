import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemEditBtnComponent } from './list-item-edit-btn.component';

describe('ListItemEditBtnComponent', () => {
  let component: ListItemEditBtnComponent;
  let fixture: ComponentFixture<ListItemEditBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemEditBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemEditBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

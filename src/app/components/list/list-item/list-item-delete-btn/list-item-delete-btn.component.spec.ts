import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemDeleteBtnComponent } from './list-item-delete-btn.component';

describe('ListItemDeleteBtnComponent', () => {
  let component: ListItemDeleteBtnComponent;
  let fixture: ComponentFixture<ListItemDeleteBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemDeleteBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemDeleteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

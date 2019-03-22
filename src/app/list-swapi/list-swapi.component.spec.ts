import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwapiComponent } from './list-swapi.component';

describe('ListSwapiComponent', () => {
  let component: ListSwapiComponent;
  let fixture: ComponentFixture<ListSwapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSwapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

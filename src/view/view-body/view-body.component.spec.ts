import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBodyComponent } from './view-body.component';

describe('ViewBodyComponent', () => {
  let component: ViewBodyComponent;
  let fixture: ComponentFixture<ViewBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

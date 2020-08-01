import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepComponent } from './show-dep.component';

describe('ShowDepComponent', () => {
  let component: ShowDepComponent;
  let fixture: ComponentFixture<ShowDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

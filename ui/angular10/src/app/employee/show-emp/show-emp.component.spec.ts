import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpComponent } from './show-emp.component';

describe('ShowEmpComponent', () => {
  let component: ShowEmpComponent;
  let fixture: ComponentFixture<ShowEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

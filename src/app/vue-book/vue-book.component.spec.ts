import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueBookComponent } from './vue-book.component';

describe('VueBookComponent', () => {
  let component: VueBookComponent;
  let fixture: ComponentFixture<VueBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

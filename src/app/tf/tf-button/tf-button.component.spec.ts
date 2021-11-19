import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfButtonComponent } from './tf-button.component';

describe('TfButtonComponent', () => {
  let component: TfButtonComponent;
  let fixture: ComponentFixture<TfButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfLabelComponent } from './tf-label.component';

describe('TflabelComponent', () => {
  let component: TfLabelComponent;
  let fixture: ComponentFixture<TfLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

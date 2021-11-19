import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfIconComponent } from './tf-icon.component';

describe('TfIconComponent', () => {
  let component: TfIconComponent;
  let fixture: ComponentFixture<TfIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

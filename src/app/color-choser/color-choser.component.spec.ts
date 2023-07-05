import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChoserComponent } from './color-choser.component';

describe('ColorChoserComponent', () => {
  let component: ColorChoserComponent;
  let fixture: ComponentFixture<ColorChoserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorChoserComponent]
    });
    fixture = TestBed.createComponent(ColorChoserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

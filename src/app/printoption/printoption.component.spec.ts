import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintoptionComponent } from './printoption.component';

describe('PrintoptionComponent', () => {
  let component: PrintoptionComponent;
  let fixture: ComponentFixture<PrintoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

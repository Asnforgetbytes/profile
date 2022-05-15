import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegiftsComponent } from './homegifts.component';

describe('HomegiftsComponent', () => {
  let component: HomegiftsComponent;
  let fixture: ComponentFixture<HomegiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomegiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomegiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

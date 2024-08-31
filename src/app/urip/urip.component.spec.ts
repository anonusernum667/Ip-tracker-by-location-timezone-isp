import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UripComponent } from './urip.component';

describe('UripComponent', () => {
  let component: UripComponent;
  let fixture: ComponentFixture<UripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

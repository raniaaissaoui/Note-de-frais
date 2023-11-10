import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccorderDemandeComponent } from './accorder-demande.component';

describe('AccorderDemandeComponent', () => {
  let component: AccorderDemandeComponent;
  let fixture: ComponentFixture<AccorderDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccorderDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccorderDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

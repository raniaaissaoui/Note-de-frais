import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireDemandeComponent } from './faire-demande.component';

describe('FaireDemandeComponent', () => {
  let component: FaireDemandeComponent;
  let fixture: ComponentFixture<FaireDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaireDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaireDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

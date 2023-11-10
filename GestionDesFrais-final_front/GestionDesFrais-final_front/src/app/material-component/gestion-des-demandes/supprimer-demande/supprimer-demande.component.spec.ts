import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerDemandeComponent } from './supprimer-demande.component';

describe('SupprimerDemandeComponent', () => {
  let component: SupprimerDemandeComponent;
  let fixture: ComponentFixture<SupprimerDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

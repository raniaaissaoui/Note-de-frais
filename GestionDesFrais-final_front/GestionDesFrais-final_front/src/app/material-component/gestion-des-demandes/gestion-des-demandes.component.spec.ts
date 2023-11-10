import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesDemandesComponent } from './gestion-des-demandes.component';

describe('GestionDesDemandesComponent', () => {
  let component: GestionDesDemandesComponent;
  let fixture: ComponentFixture<GestionDesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesDemandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

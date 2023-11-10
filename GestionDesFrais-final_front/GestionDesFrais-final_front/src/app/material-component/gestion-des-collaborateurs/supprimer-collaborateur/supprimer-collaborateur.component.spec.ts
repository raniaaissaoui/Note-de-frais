import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerCollaborateurComponent } from './supprimer-collaborateur.component';

describe('SupprimerCollaborateurComponent', () => {
  let component: SupprimerCollaborateurComponent;
  let fixture: ComponentFixture<SupprimerCollaborateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerCollaborateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

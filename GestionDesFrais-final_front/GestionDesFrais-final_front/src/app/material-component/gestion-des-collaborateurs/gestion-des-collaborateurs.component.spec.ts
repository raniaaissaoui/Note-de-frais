import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesCollaborateursComponent } from './gestion-des-collaborateurs.component';

describe('GestionDesCollaborateursComponent', () => {
  let component: GestionDesCollaborateursComponent;
  let fixture: ComponentFixture<GestionDesCollaborateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesCollaborateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDesCollaborateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

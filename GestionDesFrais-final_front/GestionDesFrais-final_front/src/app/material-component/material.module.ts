import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';


import { ExpansionComponent } from './expansion/expansion.component';
import { GestionDesEtudiantsComponent } from './gestion-des-projets/gestion-des-etudiants.component';
import { GestionDesAdministrateursComponent } from './gestion-des-administrateurs/gestion-des-administrateurs.component';
import { LoginComponent } from '../login/login.component';
import { SupprimerEtudiantComponent } from './gestion-des-projets/supprimer-projet/supprimer-projet.component';
import { ToastrModule } from 'ngx-toastr';
import { AjouteretudiantComponent } from './gestion-des-projets/ajouter-projet/ajouter-projet.component';
import { AjouterutilisateurComponent } from './gestion-des-administrateurs/ajouterutilisateur/ajouterutilisateur.component';
import { GestionDesCollaborateursComponent } from './gestion-des-collaborateurs/gestion-des-collaborateurs.component';
import { AjouterCollaborateurComponent } from './gestion-des-collaborateurs/ajouter-collaborateur/ajouter-collaborateur.component';
import { SupprimerCollaborateurComponent } from './gestion-des-collaborateurs/supprimer-collaborateur/supprimer-collaborateur.component';
import { GestionDesDemandesComponent } from './gestion-des-demandes/gestion-des-demandes.component';
import { FaireDemandeComponent } from './gestion-des-demandes/faire-demande/faire-demande.component';
import { MesDemandesComponent } from './gestion-des-demandes/mes-demandes/mes-demandes.component';
import { SupprimerDemandeComponent } from './gestion-des-demandes/supprimer-demande/supprimer-demande.component';
import { DemandesComponent } from './gestion-des-demandes/demandes/demandes.component';
import { AccorderDemandeComponent } from './gestion-des-demandes/accorder-demande/accorder-demande.component';
import { DemandeDetailsComponent } from './gestion-des-demandes/demande-details/demande-details.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,

  ],
  providers: [],
  entryComponents: [],
  declarations: [
    ExpansionComponent,
    GestionDesEtudiantsComponent,
    GestionDesAdministrateursComponent,
    SupprimerEtudiantComponent,
    AjouteretudiantComponent,
    AjouterutilisateurComponent,
    GestionDesCollaborateursComponent,
    AjouterCollaborateurComponent,
    SupprimerCollaborateurComponent,
    GestionDesDemandesComponent,
    FaireDemandeComponent,
    MesDemandesComponent,
    SupprimerDemandeComponent,
    DemandesComponent,
    AccorderDemandeComponent,
    DemandeDetailsComponent,
    

  
  ]
})
export class MaterialComponentsModule {}

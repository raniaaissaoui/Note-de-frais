import { Routes } from '@angular/router';


import { ExpansionComponent } from './expansion/expansion.component';
import { GestionDesAdministrateursComponent } from './gestion-des-administrateurs/gestion-des-administrateurs.component';
import { GestionDesEtudiantsComponent } from './gestion-des-projets/gestion-des-etudiants.component';
import { LoginComponent } from '../login/login.component';
import { IsSignedGuard } from '../guards/is-signed.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GestionDesCollaborateursComponent } from './gestion-des-collaborateurs/gestion-des-collaborateurs.component';
import { GestionDesDemandesComponent } from './gestion-des-demandes/gestion-des-demandes.component';
import { MesDemandesComponent } from './gestion-des-demandes/mes-demandes/mes-demandes.component';
import { isAdminGuard } from '../guards/is-admin.guard';
import { DemandesComponent } from './gestion-des-demandes/demandes/demandes.component';


export const MaterialRoutes: Routes = [
  {
    canActivate:[IsSignedGuard,isAdminGuard],
    path: 'gestionProjet',
    component: GestionDesEtudiantsComponent
  },
  {
    canActivate:[IsSignedGuard],
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    canActivate:[IsSignedGuard,isAdminGuard],
    path: 'gestionCollaborateur',
    component: GestionDesCollaborateursComponent
  },
  {
    canActivate:[IsSignedGuard],
    path: 'gestionDemande',
    component: GestionDesDemandesComponent
  },
  {
    canActivate:[IsSignedGuard],
    path: 'mesDemandes',
    component: MesDemandesComponent
  },
  {
    canActivate:[isAdminGuard],
    path: 'demandes',
    component: DemandesComponent
  },
 
 

];

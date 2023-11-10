import { Injectable } from '@angular/core';


export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
  interfacage?: string;
}


const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link2', icon: 'av_timer' },
  { state: 'gestionProjet', type: 'link2', name: 'Projets', icon: 'book', },
  { state: 'gestionCollaborateur', type: 'link2', name: 'Collaborateurs', icon: 'person', },
  { state: 'gestionDemande', type: 'link2', name: 'Demander', icon: 'view_list', },
  { state: 'mesDemandes', type: 'link2', name: 'Mes Demandes', icon: 'view_list', },
  { state: 'demandes', type: 'link2', name: 'Demandes', icon: 'view_list', },

];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}

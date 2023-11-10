import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, OnDestroy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import DataTables from 'datatables.net';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet.service';
import { UtilisateurService } from 'src/app/services/user.service';
import { AjouteretudiantComponent } from './ajouter-projet/ajouter-projet.component';
import { SupprimerEtudiantComponent } from './supprimer-projet/supprimer-projet.component';

@Component({
  selector: 'app-gestion-des-etudiants',
  templateUrl: './gestion-des-etudiants.component.html',
  styleUrls: ['./gestion-des-etudiants.component.css']
})
export class GestionDesEtudiantsComponent implements OnInit {
  searchKey!:any;
  projets?: Projet[];
  displayedColumns : string[] = ['code' , 'intitule', 'budget','actions' ];
  dataSource: MatTableDataSource<Projet> = new MatTableDataSource();
  @ViewChild(MatSort) sort! : MatSort;
  @ViewChild (MatPaginator) paginator! : MatPaginator;


  constructor(private HttpClient: HttpClient,private dialog: MatDialog,
     private us: UtilisateurService, private etuService: ProjetService,
     private toastr:ToastrService) { }


  ngOnInit(): void {
    this.ListerProjets()
  }

 

  

  /**
   * Lister tous les etudiants sans filtre
   */
  ListerProjets():void{
    this.etuService.listerProjets().subscribe(data => {
      console.log(data)
      this.projets = data;
      this.dataSource.data=this.projets;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(){this.dataSource.filter = this.searchKey.trim().toLocaleLowerCase(); }
  
  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  }

  /**
   * Retourner les promotions
   */
 
 
delete(projet:Projet) 
{
  this.toastr.warning("Attention vous allez supprimer un projet !!")
  const DialogConfig = new MatDialogConfig();
    DialogConfig.autoFocus=true;
    const dialogRef= this.dialog.open(SupprimerEtudiantComponent,
      {
      width:'20%',
      height:'20%',
      panelClass:'custom-dialog',
      data: projet    })
    dialogRef.afterClosed().subscribe(res=>
      {      this.ListerProjets() })
}

 
ajouter() {

  const DialogConfig = new MatDialogConfig();
  DialogConfig.autoFocus=true;
  // DialogConfig.width="60%";
  const dialogRef= this.dialog.open(AjouteretudiantComponent,{
    width:'25%',
    height:'70%',
    panelClass:'custom-dialog'
  })
  dialogRef.afterClosed().subscribe(res=>{
    this.ListerProjets()
  })
}
  
update(projet :Projet) {

  const DialogConfig = new MatDialogConfig();
  DialogConfig.autoFocus=true;
  // DialogConfig.width="60%";
  const dialogRef= this.dialog.open(AjouteretudiantComponent,{
    width:'25%',
    height:'89%',
    panelClass:'custom-dialog',
    data:projet
  })
  dialogRef.afterClosed().subscribe(res=>{
    this.ListerProjets()
  })
}
  

  

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Collaborateur } from 'src/app/models/collaborateur';
import { SupprimerCollaborateurComponent } from './supprimer-collaborateur/supprimer-collaborateur.component';
import { AjouterCollaborateurComponent } from './ajouter-collaborateur/ajouter-collaborateur.component';
import { CollaborateurService } from 'src/app/services/collab.service';

@Component({
  selector: 'app-gestion-des-collaborateurs',
  templateUrl: './gestion-des-collaborateurs.component.html',
  styleUrls: ['./gestion-des-collaborateurs.component.css']
})
export class GestionDesCollaborateursComponent implements OnInit {

  searchKey!:any;
  collaborateurs?: Collaborateur[];
  displayedColumns : string[] = ['code' , 'prenom', 'nom','login','mdp','actions' ];
  dataSource: MatTableDataSource<Collaborateur> = new MatTableDataSource();
  @ViewChild(MatSort) sort! : MatSort;
  @ViewChild (MatPaginator) paginator! : MatPaginator;


  constructor(private HttpClient: HttpClient,private dialog: MatDialog,
    private service: CollaborateurService,
     private toastr:ToastrService) { }


  ngOnInit(): void {
   this.ListerCollabs();
  }

 

  

  /**
   * Lister tous les etudiants sans filtre
   */
  ListerCollabs():void{
    this.service.listerCollabs().subscribe(data => {
      this.collaborateurs = data;
      this.dataSource.data=this.collaborateurs;
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
 
 
delete(Collaborateur:Collaborateur) 
{
  this.toastr.warning("Attention vous allez supprimer un Collaborateur !!")
  const DialogConfig = new MatDialogConfig();
    DialogConfig.autoFocus=true;
    const dialogRef= this.dialog.open(SupprimerCollaborateurComponent,
      {
      width:'20%',
      height:'20%',
      panelClass:'custom-dialog',
      data: Collaborateur    })
    dialogRef.afterClosed().subscribe(res=>
      {      this.ListerCollabs() })
}

 
ajouter() {

  const DialogConfig = new MatDialogConfig();
  DialogConfig.autoFocus=true;
  // DialogConfig.width="60%";
  const dialogRef= this.dialog.open(AjouterCollaborateurComponent,{
    width:'25%',
    height:'95%',
    panelClass:'custom-dialog'
  })
  dialogRef.afterClosed().subscribe(res=>{
    this.ListerCollabs()
  })
}
  
update(collaborateur :Collaborateur) {

  const DialogConfig = new MatDialogConfig();
  DialogConfig.autoFocus=true;
  // DialogConfig.width="60%";
  const dialogRef= this.dialog.open(AjouterCollaborateurComponent,{
    width:'25%',
    height:'89%',
    panelClass:'custom-dialog',
    data:collaborateur
  })
  dialogRef.afterClosed().subscribe(res=>{
    this.ListerCollabs()
  })
}
  

  

}

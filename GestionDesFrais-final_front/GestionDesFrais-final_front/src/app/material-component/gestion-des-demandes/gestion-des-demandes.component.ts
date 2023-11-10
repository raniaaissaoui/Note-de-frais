import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Demande } from 'src/app/models/demande';
import { Projet } from 'src/app/models/projet';
import { DemandeService } from 'src/app/services/demande.service';
import { ProjetService } from 'src/app/services/projet.service';
import { FaireDemandeComponent } from './faire-demande/faire-demande.component';

@Component({
  selector: 'app-gestion-des-demandes',
  templateUrl: './gestion-des-demandes.component.html',
  styleUrls: ['./gestion-des-demandes.component.css']
})
export class GestionDesDemandesComponent implements OnInit {

  searchKey!:any;
  projets?: Projet[];
  displayedColumns : string[] = ['code' , 'intitule', 'budget','actions' ];
  dataSource: MatTableDataSource<Projet> = new MatTableDataSource();
  @ViewChild(MatSort) sort! : MatSort;
  @ViewChild (MatPaginator) paginator! : MatPaginator;


  constructor(private HttpClient: HttpClient,private dialog: MatDialog,
     private service: DemandeService,private projetService : ProjetService,
     private toastr:ToastrService) { }


  ngOnInit(): void {
   this.listerProjet()
   console.log(localStorage.getItem('name'))
  }

  /**
   * Lister tous les etudiants sans filtre
   */
  listerProjet():void{
    this.projetService.listerProjets().subscribe(data => {
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


demande(projet:Projet) 
{
  const DialogConfig = new MatDialogConfig();
    DialogConfig.autoFocus=true;
    const dialogRef= this.dialog.open(FaireDemandeComponent,
      {
      width:'50%',
      height:'80%',
      panelClass:'custom-dialog',
      data: projet    })
    dialogRef.afterClosed().subscribe(res=>
      {      this.listerProjet() })
}

}

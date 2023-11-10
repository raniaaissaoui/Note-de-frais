import { DemandeService } from 'src/app/services/demande.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Demande } from 'src/app/models/demande';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SupprimerDemandeComponent } from '../supprimer-demande/supprimer-demande.component';
import { FaireDemandeComponent } from '../faire-demande/faire-demande.component';

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.css']
})
export class MesDemandesComponent implements OnInit {

  searchKey!:any;
  collaborateurs?: Demande[];
  displayedColumns : string[] = ['intitule' , 'montant', 'intituleNoteFrais','accorde','actions' ];
  dataSource: MatTableDataSource<Demande> = new MatTableDataSource();
  @ViewChild(MatSort) sort! : MatSort;
  @ViewChild (MatPaginator) paginator! : MatPaginator;


  constructor(private HttpClient: HttpClient,private dialog: MatDialog,
    private demandeService: DemandeService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.mesDemandes();
  }

  applyFilter(){this.dataSource.filter = this.searchKey.trim().toLocaleLowerCase(); }
  
  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  }
  mesDemandes(){
    this.demandeService.mesDemandes().subscribe((data)=>{
      this.dataSource.data=data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  delete(demande:Demande) 
  {
    if(demande.accorde=="accordée"){
      this.toastr.error("vous pouvez pas modifiez cette demande")
      return;
    }
    this.toastr.warning("Attention vous allez supprimer un projet !!")
    const DialogConfig = new MatDialogConfig();
      DialogConfig.autoFocus=true;
      const dialogRef= this.dialog.open(SupprimerDemandeComponent,
        {
          width:'20%',
          height:'20%',
          panelClass:'custom-dialog',
          data: demande    
        })
          dialogRef.afterClosed().subscribe(res=>
        {      this.mesDemandes() })
  }
  update(demande :Demande) {
    if(demande.accorde=="accordée"){
      this.toastr.error("vous pouvez pas modifiez cette demande")
      return;
    }
    const DialogConfig = new MatDialogConfig();
    DialogConfig.autoFocus=true;
    // DialogConfig.width="60%";
    const dialogRef= this.dialog.open(FaireDemandeComponent,{
      width:'25%',
      height:'89%',
      panelClass:'custom-dialog',
      data:demande
    })
    dialogRef.afterClosed().subscribe(res=>{
      this.mesDemandes()
    })
  }
}

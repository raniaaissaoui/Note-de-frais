import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Demande } from 'src/app/models/demande';
import { DemandeService } from 'src/app/services/demande.service';
import { AccorderDemandeComponent } from '../accorder-demande/accorder-demande.component';
import { DemandeDetailsComponent } from '../demande-details/demande-details.component';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  searchKey!:any;
  collaborateurs?: Demande[];
  displayedColumns : string[] = ['intitule' , 'montant', 'intituleNoteFrais','actions' ];
  dataSource: MatTableDataSource<Demande> = new MatTableDataSource();
  @ViewChild(MatSort) sort! : MatSort;
  @ViewChild (MatPaginator) paginator! : MatPaginator;


  constructor(private HttpClient: HttpClient,private dialog: MatDialog,
    private demandeService: DemandeService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.demandes();
  }
  applyFilter(){this.dataSource.filter = this.searchKey.trim().toLocaleLowerCase(); }
  
  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  }

  demandes(){
    this.demandeService.demandes().subscribe((data)=>{
      this.dataSource.data=data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  accorde(demande :Demande) {
    if(demande.accorde=="accordée"){
      this.toastr.warning('demande déja accordée', 'accord demande'); 
      return;
    }
    const DialogConfig = new MatDialogConfig();
    DialogConfig.autoFocus=true;
    // DialogConfig.width="60%";
    const dialogRef= this.dialog.open(AccorderDemandeComponent,{
      width:'30%',
      height:'25%',
      panelClass:'custom-dialog',
      data:{demande :demande,type :'accorde'}
    })
    dialogRef.afterClosed().subscribe(res=>{
      this.demandes()
    })
  }

  refuser(demande : Demande){
    if(demande.accorde=="refusée"){
      this.toastr.warning('demande déja refusée', 'accord demande'); 
      return;
    }
    const DialogConfig = new MatDialogConfig();
    DialogConfig.autoFocus=true;
    // DialogConfig.width="60%";
    const dialogRef= this.dialog.open(AccorderDemandeComponent,{
      width:'30%',
      height:'25%',
      panelClass:'custom-dialog',
      data:{demande :demande,type :'refus'}
    })
    dialogRef.afterClosed().subscribe(res=>{
      this.demandes()
    })
  }
  details(demande :Demande) {
    
    this.demandeService.demandeDetails(demande.code.codeProjet,demande.code.codeCollab).subscribe((data)=>{
      const DialogConfig = new MatDialogConfig();
      DialogConfig.autoFocus=true;
      const dialogRef= this.dialog.open(DemandeDetailsComponent,{
        width:'30%',
        height:'35%',
        panelClass:'custom-dialog',
        data:data
      })
      dialogRef.afterClosed().subscribe(res=>{
        this.demandes()
      })
    })


    
  }
}

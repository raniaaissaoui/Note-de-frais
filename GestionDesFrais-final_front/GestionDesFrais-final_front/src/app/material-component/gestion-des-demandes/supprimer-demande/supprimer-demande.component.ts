import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Demande } from 'src/app/models/demande';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-supprimer-demande',
  templateUrl: './supprimer-demande.component.html',
  styleUrls: ['./supprimer-demande.component.css']
})
export class SupprimerDemandeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupprimerDemandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Demande,
    private service : DemandeService,
    private toastr: ToastrService, 
  ) { }
 
  ngOnInit(): void {
  }
 
  
closeDialog() {this.dialogRef.close(false);
this.toastr.info("Vous avez annuler l'opération");
}

onDelete(){
  this.service.deleteDemande(this.data.code.codeProjet,this.data.code.codeCollab).subscribe()
}

}

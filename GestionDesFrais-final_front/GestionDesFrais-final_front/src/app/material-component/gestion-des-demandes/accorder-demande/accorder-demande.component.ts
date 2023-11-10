import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Demande } from 'src/app/models/demande';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-accorder-demande',
  templateUrl: './accorder-demande.component.html',
  styleUrls: ['./accorder-demande.component.css']
})
export class AccorderDemandeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccorderDemandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private service : DemandeService,
    private toastr: ToastrService, 
  ) { }
 
  ngOnInit(): void {
  }
 
  
closeDialog() {this.dialogRef.close(false);
  this.toastr.info("Vous avez annuler l'opération");
}

/**
 * Supprimer Etudiant
 */
accorder ()
{
  this.service.accorde(this.data.demande.code.codeProjet,this.data.demande.code.codeCollab).subscribe(()=>{
    this.toastr.success('demande accordée avec succée', 'accorde de demande'); 
  })
}

refuser(){
  this.service.refuser(this.data.demande.code.codeProjet,this.data.demande.code.codeCollab).subscribe(()=>{
    this.toastr.warning('demande refusée', 'refus de demande'); 
  })
}

}

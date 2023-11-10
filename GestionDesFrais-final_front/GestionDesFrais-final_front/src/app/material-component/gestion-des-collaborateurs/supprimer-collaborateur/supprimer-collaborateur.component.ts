import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Collaborateur } from 'src/app/models/collaborateur';
import { CollaborateurService } from 'src/app/services/collab.service';

@Component({
  selector: 'app-supprimer-collaborateur',
  templateUrl: './supprimer-collaborateur.component.html',
  styleUrls: ['./supprimer-collaborateur.component.css']
})
export class SupprimerCollaborateurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupprimerCollaborateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Collaborateur,
    private service : CollaborateurService,
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
onDeleteCollab ()
{
  this.service.deleteCollab(this.data.codeCollab).subscribe(()=>{
    this.toastr.success('Suppression avec Succées', 'Suppression Collaborateur'); 

  })
}

}

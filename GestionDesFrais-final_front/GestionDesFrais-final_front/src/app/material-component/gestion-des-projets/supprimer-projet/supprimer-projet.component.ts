import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-supprimer-projet',
  templateUrl: './supprimer-projet.component.html',
  styleUrls: ['./supprimer-projet.component.css']
})
export class SupprimerEtudiantComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<SupprimerEtudiantComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Projet,
    private service : ProjetService,
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
onDeleteProjet ()
{
  this.service.deleteProjet(this.data.codeProjet).subscribe(()=>{
    this.toastr.success('Suppression avec Succées', 'Suppression Etudiant'); 

  })
}


}
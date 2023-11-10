import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.css']
})
export class DemandeDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DemandeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private toastr: ToastrService, 
  ) { 
    this.data=this.data[0]
  }
 
  ngOnInit(): void {
  }
 
  
closeDialog() {
  this.dialogRef.close(false);
this.toastr.info("Vous avez annuler l'opération");
}

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Demande } from 'src/app/models/demande';
import { DemandeService } from 'src/app/services/demande.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-faire-demande',
  templateUrl: './faire-demande.component.html',
  styleUrls: ['./faire-demande.component.css']
})
export class FaireDemandeComponent implements OnInit {

  buttonText:string="ajouter";

  constructor(private fb: FormBuilder,private service:DemandeService ,
    private toastr:ToastrService,
    private dialogRef: MatDialogRef<FaireDemandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }
  form! :FormGroup;
  


  ngOnInit(): void {
    this.initForm();
    
    if(this.data.montant!=undefined){
      this.form.controls["code"].setValue(this.data.code.codeProjet);
      this.form.controls["intitule"].setValue(this.data.intitule);
      this.form.controls["intituleNoteFrais"].setValue(this.data.intituleNoteFrais);
      this.form.controls["montant"].setValue(this.data.montant);
      //this.form.controls["accorde"].setValue(this.data.accorde);
      

      this.buttonText="modifier";
    }else 
      this.form.controls["code"].setValue(this.data.codeProjet);
  }

  initForm(): void {
    this.form = this.fb.group({
      code : new FormControl(''),
      intitule:new FormControl('' ,[Validators.required]),
      montant:new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      intituleNoteFrais:new FormControl('', [Validators.required])
  })}

  onAdd():void{
    const token = localStorage.getItem('at')+""; 
    let decodedToken:any;
    decodedToken = jwt_decode(token);
   let demande :Demande={
      intitule : this.f.intitule.value,
      intituleNoteFrais : this.f.intituleNoteFrais.value,
      montant : this.f.montant.value,
      accorde : "en attente",
      code : {
        codeCollab : decodedToken.code,
        codeProjet : this.f.code.value
      }
   };

   this.service.ajouterDemande(demande).subscribe(()=>{
      this.toastr.success('Ajouter Demande',"L'ajout à été fait avec succés"); 
      this.dialogRef.close();
   })

  }

  

get f (){ return this.form.controls }


}

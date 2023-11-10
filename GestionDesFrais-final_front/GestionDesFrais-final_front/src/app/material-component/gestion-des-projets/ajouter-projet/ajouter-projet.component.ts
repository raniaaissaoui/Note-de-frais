import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.css']
})
export class AjouteretudiantComponent implements OnInit {

  buttonText:string="ajouter";

  constructor(private fb: FormBuilder,private service:ProjetService ,
    private toastr:ToastrService,
    private dialogRef: MatDialogRef<AjouteretudiantComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Projet) { }
  form! :FormGroup;
  


  ngOnInit(): void {
    this.initForm();
    if(this.data!=undefined){
      this.form.controls["code"].setValue(this.data.codeProjet);
      this.form.controls["intitule"].setValue(this.data.intitule);
      this.form.controls["budget"].setValue(this.data.budget);
      this.buttonText="modifier";
    }else 
    this.service.lastCodeProjet().subscribe(code=>{
      this.form.controls["code"].setValue(code);
    })
  }

  initForm(): void {
    this.form = this.fb.group({
      code : new FormControl(''),
      intitule:new FormControl('' ,[Validators.required]),
      budget:new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),

  })}

  onAdd():void{
   // this.es.addEtudiant().subscribe
   let projet :Projet={
     codeProjet: 0,
     intitule: '',
     budget: 0
   };
   projet.codeProjet = this.f.code.value; 
   projet.intitule = this.f.intitule.value;
   projet.budget = this.f.budget.value;
   
   this.service.ajouterProjet(projet).subscribe(()=>{
      this.toastr.success('Ajouter Projet',"L'ajout à été fait avec succés"); 
      this.dialogRef.close();
   })

  }

  

get f (){ return this.form.controls }
}










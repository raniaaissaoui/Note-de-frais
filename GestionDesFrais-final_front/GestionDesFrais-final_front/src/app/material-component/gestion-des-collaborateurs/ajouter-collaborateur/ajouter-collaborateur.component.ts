import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Collaborateur } from 'src/app/models/collaborateur';
import { Projet } from 'src/app/models/projet';
import { CollaborateurService } from 'src/app/services/collab.service';

@Component({
  selector: 'app-ajouter-collaborateur',
  templateUrl: './ajouter-collaborateur.component.html',
  styleUrls: ['./ajouter-collaborateur.component.css']
})
export class AjouterCollaborateurComponent implements OnInit {

  buttonText:string="ajouter";
  constructor(private fb: FormBuilder,private service:CollaborateurService ,
    private toastr:ToastrService,
    private dialogRef: MatDialogRef<AjouterCollaborateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Collaborateur) { }
  form! :FormGroup;
  


  ngOnInit(): void {
    this.initForm();
    if(this.data!=undefined){
      this.form.controls["code"].setValue(this.data.codeCollab);
      this.form.controls["nom"].setValue(this.data.nom);
      this.form.controls["prenom"].setValue(this.data.prenom);
      this.form.controls["login"].setValue(this.data.login);
      this.form.controls["mdp"].setValue(this.data.mdp);
      this.service.typeCollab(this.data.codeCollab).subscribe((res)=>{
        this.form.controls["isRH"].setValue(res.endsWith("ResponsableRH"));

      });
      this.buttonText="modifier";
    }else 
    this.service.lastCodeCollab().subscribe(code=>{
      this.form.controls["code"].setValue(code);
    })
  }

  initForm(): void {
    this.form = this.fb.group({
      code : new FormControl(''),
      nom:new FormControl('' ,[Validators.required]),
      prenom:new FormControl('' ,[Validators.required]),
      login:new FormControl('', [Validators.required]),
      mdp : new FormControl('',[Validators.required]),
      isRH : new FormControl('',[]),
      
  })}

  onAdd():void{
   // this.es.addEtudiant().subscribe
   let collab :Collaborateur={
     codeCollab: 0,
     prenom: '',
     nom: '',
     login : "",
     mdp :''
   };
   collab.codeCollab = this.f.code.value; 
   collab.prenom = this.f.prenom.value;
   collab.nom = this.f.nom.value;
   collab.login = this.f.login.value;
   collab.mdp = this.f.mdp.value;
   console.log(this.f.isRH.value+"****")
   if(this.data==null)
    this.service.ajouterCollab(collab,this.f.isRH.value).subscribe(()=>{
        this.toastr.success('Ajouter Projet',"L'ajout à été fait avec succés"); 
        this.dialogRef.close();
        this.form.controls["isRH"].setValue(false);
    })
    else 
    this.service.modifierCollab(collab).subscribe(()=>{
      this.toastr.success('modifier Projet',"modification à été faite avec succés"); 
      this.dialogRef.close();
      this.form.controls["isRH"].setValue(false);
  })
  }

  
  get f (){ return this.form.controls }

}
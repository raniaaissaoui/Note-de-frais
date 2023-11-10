import { Demande } from './../models/demande';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  demandeDetails(projet : number,collab : number): Observable<any> {
    return this.http.get<any>(`${this.apiURL+'/details/'+projet+"/"+collab}`);
  }

  apiURL: string = 'http://localhost:8080/api/demande';
  constructor(private http: HttpClient) { 
  }

  ajouterDemande(demande : Demande){
    return this.http.post<any>(`${this.apiURL+'/add'}`,demande);
  }

  listerDemande(): Observable<Demande[]>{
    return this.http.post<any>(`${this.apiURL+'/all'}`,null);
  }

  deleteDemande(projet : number,collab : number):Observable<any>{
    //console.log(`${this.apiURL+"/delete/"+code}`);
    return this.http.delete(`${this.apiURL+"/delete/"+projet+"/"+collab}`)
  }
  
  mesDemandes():Observable<Demande[]>{
    let username = localStorage.getItem("username");
    return this.http.get<Demande[]>(`${this.apiURL+"/mesdemandes/"+username}`)
  }

  demandes():Observable<Demande[]>{
    return this.http.get<Demande[]>(`${this.apiURL+"/all/"}`)
  }
  
  accorde(projet : number,collab : number){
    return this.http.put(`${this.apiURL+"/accorder/"+projet+"/"+collab}`,null)
  }

  refuser(projet : number,collab : number){
    return this.http.put(`${this.apiURL+"/refuser/"+projet+"/"+collab}`,null)
  }

  ListerDemandeType(): Observable<any[]>{
    return this.http.get<any>(`${this.apiURL+'/accorde'}`);
  }

}

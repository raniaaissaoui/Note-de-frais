import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projet } from '../models/projet';
import { Collaborateur } from '../models/collaborateur';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
  apiURL: string = 'http://localhost:8080/api/collaborateur';
  constructor(private http: HttpClient) { 
  }

  ajouterCollab(collab : Collaborateur,isRH : boolean):Observable<Collaborateur[]>{
    if(isRH)
      return this.http.post<any>(`${this.apiURL+'/addRH'}`,collab);
    return this.http.post<any>(`${this.apiURL+'/add'}`,collab);
  }

  listerCollabs(): Observable<Collaborateur[]>{
    return this.http.get<any>(`${this.apiURL+'/all'}`);
  }

  deleteCollab(code : number):Observable<any>{
    return this.http.delete(`${this.apiURL+"/delete/"+code}`)
  }
  
  lastCodeCollab(){
    return this.http.get<number>(`${this.apiURL+'/lastCode'}`); 
  }
  typeCollab(code :number):Observable<string>{
    return this.http.get<any>(`${this.apiURL+'/typeCollaborateur/'+code}`); 
  }

  collabByProfil(): Observable<any[]>{
    return this.http.get<any>(`${this.apiURL+'/collabByProfil'}`);
  }

  modifierCollab(collab : Collaborateur):Observable<Collaborateur[]>{
    return this.http.put<any>(`${this.apiURL+'/update'}`,collab);
  }

}

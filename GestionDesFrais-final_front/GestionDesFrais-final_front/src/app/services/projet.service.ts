import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projet } from '../models/projet';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  apiURL: string = 'http://localhost:8080/api/projet';
  constructor(private http: HttpClient) { 
  }

  ajouterProjet(projet : Projet){
    return this.http.post<any>(`${this.apiURL+'/add'}`,projet);
  }

  listerProjets(): Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.apiURL+'/all'}`);
  }

  deleteProjet(code : number):Observable<any>{
    //console.log(`${this.apiURL+"/delete/"+code}`);
    return this.http.delete(`${this.apiURL+"/delete/"+code}`)
  }
  
  lastCodeProjet(){
    return this.http.get<number>(`${this.apiURL+'/lastCode'}`); 
  }

}

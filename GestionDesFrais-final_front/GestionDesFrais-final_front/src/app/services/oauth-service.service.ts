import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

const url='http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class OauthServiceService {

  token!:any;
  helper = new JwtHelperService
  private authToken: string ="";

  constructor(private http:HttpClient) { }
  ngOnInit() { }
  
  /**
   * 
   * @param username nom d'utilisateur 
   * @param password le mot de passe
   * @returns le token 
   */
  authenticate(username:any,password:any):Observable<any>
  {
  const body = new HttpParams()
  .set('username', username)
  .set('password', password)

    

  const httpOptions=
  {
    headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'http://127.0.0.1:8080',
    'Access-Control-Allow-Methods':'http://127.0.0.1:8080',
    'Content-type':'application/json'
    })
  }
  let params = "?username="+username+"&password="+password;
  return this.http.post(url+'api/login'+params,null,httpOptions);
  }


  
  public isAuthenticated(): boolean {
    // Vérifiez si un jeton d'authentification est stocké dans les données locales
    // ou dans un objet de session
     return (localStorage.getItem('at') ) != null;
  }

  public getAuthToken(): any {
    return (localStorage.getItem('at'));
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class isAdminGuard implements CanActivate {
    decodedToken:any;
    constructor(private router: Router) { }

/** 
 *Autoriser l'acces au dashboard si l'utilisateur est connecté
  */ 

    canActivate(): boolean {
        const token = localStorage.getItem('at')+""; 
        
        this.decodedToken = jwt_decode(token);
        return this.decodedToken.roles.includes("admin")
    }
}

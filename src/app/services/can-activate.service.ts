import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  constructor() { }

  canActivate(): boolean  {
   return  confirm('???');
  }
}

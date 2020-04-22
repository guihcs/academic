import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '../global-services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userTypeMap = {
    0: 'admin',
    1: 'coordinator',
    2: 'professor',
    3: 'student'
  };


  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.sessionService.getSession()){
      let exp = new RegExp('/' + this.userTypeMap[this.sessionService.getSession().type] + '.*');
      if(!exp.test(state.url))
        this.router.navigate([this.userTypeMap[this.sessionService.getSession().type]]);
      return true;
    }else if(state.url !== '/login'){
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}

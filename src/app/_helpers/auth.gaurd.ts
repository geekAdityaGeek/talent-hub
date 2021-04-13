import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../_services/authentication.service";

@Injectable({ providedIn: 'root' })
export class AuthGaurd implements CanActivate{
    constructor(private router : Router, 
        private authenticationService : AuthenticationService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        //indicating user is logged in 
        if(this.authenticationService.getLoggedInUser()){
            return true
        }

        //user is not logged in. navigate user to login page
        this.router.navigate(["/login"], { queryParams: { returnUrl: state.url }})
        return false;
    }

}
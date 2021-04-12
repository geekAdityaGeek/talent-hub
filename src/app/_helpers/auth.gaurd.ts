import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";

export class AuthGaurd implements CanActivate{
    constructor(private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        //indicating user is logged in 
        if(localStorage.getItem['logedInUser']){
            return true
        }

        //user is not logged in. navigate user to login page
        this.router.navigate(["./login"], { queryParams: { returnUrl: state.url }})
        return false;
    }

}
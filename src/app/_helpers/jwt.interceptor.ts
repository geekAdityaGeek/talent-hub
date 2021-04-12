import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "../_services/authentication.service";

@Injectable({ providedIn: 'root' })
export class jwtInterceptor implements HttpInterceptor{
    constructor(private authenticationService : AuthenticationService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authenticationService.getLoggedInUser() &&
            this.authenticationService.getLoggedInUser().token){
            request = request.clone({
                setHeaders: { 
                    Authorization: 'Bearer '+this.authenticationService.getLoggedInUser().token
                }
            })
        }

        return next.handle(request)
    }
}
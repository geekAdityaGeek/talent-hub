import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class jwtInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('loginUser') && localStorage.getItem('loginUser')['token']){
            request = request.clone({
                setHeaders: { 
                    Authorization: 'Bearer '+localStorage.getItem('loginUser')['token']
                }
            })
        }

        return next.handle(request)
    }
}
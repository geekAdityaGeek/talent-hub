export class ApiPaths{

    private static baseRef = ""
    private static url = {
        login : 'user/login',
        logoutAllSession : 'user/logoutall',
        logout : 'user/logout' 
    } 
    

    constructor(){}

    static getApiPath(key : string, value : any) : string{
        let finalUrl : string = this.baseRef+"/"+this.url[key]
        if(value){
            finalUrl = finalUrl.replace("#",value)
        }
        return finalUrl
    }
}
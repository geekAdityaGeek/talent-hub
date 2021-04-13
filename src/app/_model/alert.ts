export enum AlertType {
    warning = -1,
    error = 0,
    success = 1
}

export class Alert {    
    message : string
    type : AlertType 
}
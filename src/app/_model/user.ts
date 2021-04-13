import { Accomplishment } from "./accomplishment"

export class User{
    id: string
    name : string
    password : string
    dob : Date 
    email : string
    addressLine1 : string 
    state : string 
    country : string
    mobileNumber : Number
    profilePicUrl : string
    domain_ids : Array<string>
    accomplishments : Array<Accomplishment>   
}
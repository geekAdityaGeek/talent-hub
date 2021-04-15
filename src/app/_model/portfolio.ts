import { Domain } from "./domain"
import { Post } from "./post"
import { User } from "./user"

export class Portfolio{

    basicDetails : User
    domains : Array<Domain>
    posts : Array<Post>
    isSameUser: boolean
    isFollowing : boolean
    totalLikes: number
    totalFollowers : number
    totalFollowing : number
}
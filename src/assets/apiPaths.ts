export class ApiPaths{

    private static baseRef = "https://talenthub-api.herokuapp.com"
    private static url = {
        login : 'user/login',
        logoutAllSession : 'user/logoutall',
        logout : 'user/logout' ,
        forgetPassword : "user/forgotpassword",
        registerUser : "user",
        getAllDomains : "alldomains",
        postByDomainId : "posts/#",
        allPost : "talentfeed",
        searchConnections : "search/#",
        getFile : "files/#",
        follow : "follow/#",
        unfollow : "unfollow/#",
        getFollowees : "followees",
        getFollowers : "followers",
        updateUser : "user/me",
        getUserDetails : "user/me",
        getUserInterests : "user/domains" ,
        fileUpload : "upload",
        uploadPost : "post",
        increaseLike : "like",
        getComments : "comments/#",
        profilePicUpload : 'uploadprofilepic',
        postComment : 'comment',
        getAllUserPosts : "user/posts",
        upadatePostByPostId : "post/#",
        deletePostByPostId : "post/#",
        getUserPortfolio : "portfolio/#"
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
import { Alert, AlertType } from "src/app/_model/alert"
import { AlertService } from "src/app/_services/alert.service"

export class AlertMessage{

    private static alertMessages = {
        "invalidLogin" : { 
            message: "Please provide a valid login credential for successfull login in",
            type : AlertType.error
        },

        "updatePasswordSuccess" : {
            message : "Password has been updated successfully",
            type : AlertType.success
        },

        "updatePasswordError" : {
            message : "Password cannot be updated now. Please try again later",
            type : AlertType.error
        },

        'updateConnectionError' : {
            messgae : "Connection cannot be updated now. Please try again later",
            type : AlertType.error
        },

        "searchConnectionError" : {
            message : "Error Occured while searching connections. Please try again later", 
            type : AlertType.error
        },

        'updateLikeError' : {
            message : "You like this now. Please try again later",
            type : AlertType.error
        },

        'commentPostError' : {
            message : "Cannot post comment. Please try again later",
            type : AlertType.error
        },

        'forgetPasswordError' : {
            message : "Please check email id provided. Email should be registered. If correct email provided, then please try again later",
            type : AlertType.error
        },

        'forgetPasswordSuccess' : {
            message : "Password is forgot. Am email has been sent to provided email id. Please login using send password and update your own password from settings section of profile",
            type : AlertType.success
        },

        'fileUploadError' : {
            message : "File Upload failed. Please try again later",
            type : AlertType.error
        },

        'registrationError' : {
            message : "User Registration failed. Cannot save details of new user. Please confirm that email id is not already registered. Else please try again after some time",
            type : AlertType.error
        },

        "registrationSuccess" : {
            message : "New User is Successfully registered",
            type : AlertType.success
        },

        "serverDataFetchError" : {
            message : "Unable to fetch data from server",
            type : AlertType.error
        },

        'accomplishmentSaveError' : {
            message : "Accomplishment cannot be saved. Please try again later",
            type : AlertType.error
        },

        "postDetailsSaveError" : {
            message : "Post cannot be saved. Please try again later",
            type : AlertType.error
        },

        "postUplaodSuccess" : {
            message : "Post has been successfully uploaded",
            type : AlertType.success
        },

        "postUpdateError" : {
            message : "Unable to update posts. Please try again later",
            type : AlertType.success
        },

        "profileFeildSaveError" : {
            message : "Unable to update the profile feild. Please try again later",
            type : AlertType.error
        },

        "profileFeildSaveSuccess" : {
            message : "Profile Feild has been successfully updated",
            type : AlertType.success
        }
        

        




    }

    public static getAletMessage(key) : Alert{
        let alert : Alert = new Alert()
        alert.message = this.alertMessages[key].message
        alert.type = this.alertMessages[key].type
        return alert
    }
}
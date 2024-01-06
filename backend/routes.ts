import cors from 'cors';
import express from 'express';
import { isLoggedIn, isVerified_pt, isVerified_std, isVerified_payment} from './guards'
import { isPT } from './guards'
import { uploaded } from "./server"
import{sse_std_register,sse_pt_register,sse_payment} from "./server"
// import{ptVideoUpload} from "./server"
import { loginController, categoryController, userController, ptController, packageController, commonController } from "./server"
export const routes = express.Router();
export class Routes {
    public static Initialize() {
        routes.get("/currentUser", isLoggedIn, loginController.getUserInfo)
        routes.get('/getPTInfo', commonController.getPTInfo)
        routes.get('/getComments', commonController.getRating)
        routes.post("/login", loginController.login)
        routes.post("/userRegister", loginController.addUser)
        routes.post("/ptRegister", cors(),uploaded.array("pic"), loginController.addPT)
        routes.post("/getCards", categoryController.getCards)
        routes.get('/getCatList', categoryController.getCats)
        routes.post('/checkout', isLoggedIn, packageController.addPayment)
        routes.post('/changePassword', isLoggedIn, loginController.resetPassword)
        routes.post('/userInfoUpdate', isLoggedIn, loginController.changeInfo)
        routes.post('/ptInfoUpdate', isLoggedIn, isPT, uploaded.array("pic"), ptController.changePTInfo)
        routes.post('/courseRegister', isLoggedIn, isPT, ptController.regCourse)
        routes.post('/PTCancelCourse', isLoggedIn, isPT, ptController.cancelCoursebyPT)
        routes.get('/matchesPT', commonController.getPTInfo)
        routes.get('/getPTCourse', isLoggedIn, isPT, commonController.getPTCoursebyPT)
        routes.post('/getPTCoursebyPublic', commonController.getPTCoursebyPublic)
        routes.post('/fetchUserCourse', isLoggedIn, commonController.getUserSelected)
        routes.post('/search', commonController.getSearchCard)
        routes.post('/applyCourse', isLoggedIn, userController.applyCourse)
        routes.post('/checkRegisteredTimeslot', isLoggedIn, userController.checkRegisteredTimeslot)
        routes.get('/fetchQuota', isLoggedIn, userController.checkUserQuota)
        routes.post('/cancelCourse', isLoggedIn, userController.cancelCourse)
        routes.post('/addComment', isLoggedIn, userController.addRating)
        routes.get('/getUserPreference', isLoggedIn, userController.getUserPreference)
        routes.get('/fetchNotification', isLoggedIn, userController.fetchNotification)
        routes.get('/')
        routes.post('/stream/std', isVerified_std, sse_std_register.init);
        routes.post('/stream/pt', isVerified_pt, sse_pt_register.init);
        routes.post('/stream/payment', isVerified_payment, sse_payment.init);
    }
}
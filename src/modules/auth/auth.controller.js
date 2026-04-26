import { Router } from "express";

import * as authService  from "../auth/auth.service.js"



const router =  Router()


router.post("/register" ,  authService.register )
router.get("/findAll" ,  authService.findAll )
router.get("/findId/:userId" ,  authService.findId )
router.patch("/updated/:userId" ,  authService.updated )
router.delete("/deleted/:userId" ,  authService.deleted )
router.get("/findone/:userId" ,  authService.findone )



export default router


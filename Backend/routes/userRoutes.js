import express from "express"

import { create, deleteUser, getAll, getOne, update } from "../controller/userController.js"


const userRoutes = express.Router();


userRoutes.post('/create',create)
userRoutes.get('/getall',getAll)
userRoutes.get('/getone/:id',getOne)
userRoutes.put('/update/:id',update)
userRoutes.delete('/delete/:id',deleteUser)
export default userRoutes;
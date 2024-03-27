import express from "express";
import {updateUser , deleteUser, getAllUsers , getSingleUser} from "../controllers/userController.js"
import { authentication, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authentication, restrict(['patient']), getSingleUser);
router.get("/", authentication, restrict(['admin']), getAllUsers);
router.put("/:id",authentication, restrict(['patient']), updateUser);
router.delete("/:id",authentication, restrict(['patient']), deleteUser);


export default router;
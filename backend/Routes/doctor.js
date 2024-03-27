import express from "express";
import {updateDoctor , deleteDocter , getAllDoctors , getSingleDoctor} from "../controllers/doctorController.js"
import { authentication, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

//nested router
router.use("/:doctorId/reviews", reviewRouter);


router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctors);
router.put("/:id",  authentication, restrict(["doctor"]), updateDoctor);
router.delete("/:id",  authentication, restrict(["doctor"]), deleteDocter);


export default router;
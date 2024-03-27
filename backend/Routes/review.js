import express from "express";
import { authentication, restrict } from "../auth/verifyToken.js";
import { getAllReviews, createReview } from "../controllers/reviewController.js";

const router = express.Router({mergeParams:true});

router.route("/").get(getAllReviews).post(authentication, restrict(['patient']), createReview);

export default router;
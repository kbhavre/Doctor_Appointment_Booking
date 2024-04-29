import express  from "express"
import { authentication } from "../auth/verifyToken.js"
import { getCheckoutSession } from "../controllers/bookingController.js" 

const router = express.Router();

router.post("/checkout-session/:doctorId", authentication, getCheckoutSession);

export default router;
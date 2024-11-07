import { Router } from "express";
import { getMatchRequestDetail,sendMatchRequest } from "../controller/match.js";
import authenticate from "../middleware/authenticate.js";
const route = Router();

route.get("/getMatchRequestDetail/:petId",authenticate, getMatchRequestDetail);
route.post("/sendMatchRequest",authenticate,sendMatchRequest);

export default route;
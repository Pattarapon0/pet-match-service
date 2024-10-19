import { Router } from "express";
import { getMatchRequestDetail,sendMatchRequest } from "../controller/match.js";
const route = Router();

route.get("/getMatchRequestDetail/:petId", getMatchRequestDetail);
route.post("/sendMatchRequest", sendMatchRequest);

export default route;
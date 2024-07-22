import Router from "express";
import { dataPathFileStudies } from "./path.js";
import { Study } from "../classes/studies.js";

const router = Router();
const study = new Study();

router.get("/", async(req,res)=>{
    const dataGet = await study.getData(dataPathFileStudies);
    res.json({studies: dataGet})
})
router.get("/:id", async(req,res)=>{
    await study.getDataForId(dataPathFileStudies,req,res);
})



export default router;
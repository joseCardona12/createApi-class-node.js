import { Router } from "express";
import { Anime } from "../classes/animes.js";
import { dataPathFileAnimes } from "./path.js";
const router = Router();
const anime = new Anime();

router.get("/", async(req,res)=>{
    const dataGet = await anime.getData(dataPathFileAnimes);
    res.json({animes: dataGet})
});
router.get("/:id", async(req,res)=>{
    await anime.getDataForId(dataPathFileAnimes,req,res);
})
router.post("/", async(req,res)=>{
    await anime.postData(dataPathFileAnimes,req,res)
})
router.put("/:id", async(req,res)=>{
    await anime.putData(dataPathFileAnimes,req,res);
})
router.delete("/:id", async(req,res)=>{
    await anime.deleteData(dataPathFileAnimes,req,res);
})

export default router;
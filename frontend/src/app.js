import express from "express";
import dotenv from "dotenv";
import { errorHandles } from "./middlewares/errorHandles.js";
import routerAnimes from "./routes/animes.js";
import routerStudies from "./routes/studies.js";

dotenv.config();
const PORT = process.env.PORT || 4000;


const app = express();
app.use(express.json());
app.use("/animes", routerAnimes);
app.use("/studies", routerStudies);
app.use(errorHandles);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
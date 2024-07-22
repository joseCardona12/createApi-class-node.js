import { Util } from "./utils.js";

export class Anime {
    constructor(){
    }

    async getData(pathFile){
        try{
            const data = await Util.readFileFs(pathFile);
            return data;
        }catch(error){
            console.error({message: "Error to read file. Method getData", error});
        }
    }
    async getDataForId(pathFile,req,res){
        try{
            const data = await Util.readFileFs(pathFile);
            const foundAnime = data.find(anime=>anime.id === parseInt(req.params.id));
            if(!foundAnime){
                res.status(404).json({message: "Anime not found."});
                return;
            }
            res.json({anime: foundAnime});

        }catch(error){
            console.error({message: "Error to read file. Method getDataForId", error});
        }
    }

    async postData(pathFile,req,res){
        try{
            const dataGet = await this.getData(pathFile);
            const newData = {
                id: dataGet.length + 1,
                ...req.body
            }
            if(!newData){
                console.log("Error in data");
                return;
            }
            dataGet.push(newData);
            await Util.writeFileFs(pathFile,dataGet);
            res.json({message: "Data created successfully", data: dataGet});

        }catch(error){
            console.error({message: "Error to write file. Method createData", error});
        }
    }
    async putData(pathFile,req,res){
        try{
            const dataGet = await this.getData(pathFile);
            const foundObjectIndex = dataGet.findIndex(object=>object.id === parseInt(req.params.id));
            if(!foundObjectIndex === -1){
                res.status(404).json({message: "Anime not found."});
                return;
            }
            const updateData = {
                ...dataGet[foundObjectIndex],
                ...req.body
            }
            dataGet[foundObjectIndex] = updateData;
            await Util.writeFileFs(pathFile,dataGet);
            res.json({message: "Data updated successfully",type: dataGet});


        }catch(error){
            console.error({message: "Error to write file. Method putData", error});
        }
    }
    async deleteData(pathFile,req,res){
        try{
            const dataGet = await this.getData(pathFile);
            const filterData = dataGet.filter(data=>data.id !== parseInt(req.params.id));
            if(!filterData){
                res.status(404).json({message: "Anime not found."});
                return
            }
            await Util.writeFileFs(pathFile,filterData);
            res.json({message: "Anime deleted successfully"});

        }catch(error){
            console.error({message: "Error to write file. Method deleteData", error});
        }
    }


}

import {promises as fs} from 'fs';
import path from 'path';
export class Util{
    constructor(){

    }

    static async readFileFs(pathFile){
        try{
            const data = await fs.readFile(pathFile, "utf-8");
            return JSON.parse(data);

        }catch(error){
            console.error({message: "Error to read file. Method readFileFs", error});
        }
    }

    static async writeFileFs(pathFile,data){
        try{
            await fs.writeFile(pathFile,JSON.stringify(data,null, 2), "utf-8");
        }catch(error){
            console.error({message: "Error to write file. Method writeFileFs", error});
        }
    }
    static getPathFile(__dirname, nameFile) {
        return path.join(__dirname, `../../../backend/${nameFile}.json`);
    }
     
}
import { Storage, Client, ID  } from "appwrite";;
import config from "../config/config";


export class DatabaseServise {
     client = new Client();
     storage;
    constructor() {
        this.client
            .setProject(config.apiUrl)
            .setProject(config.projectId)
        this.storage = new Storage(this.client);
    }

    async uploadFile({bucketId= config.bucketId, fileId = ID.unique() , file}){
        try {
            const image = this.storage.createFile({bucketId, fileId, file});
            return image;
        } catch (error) {
            throw error
        }
    }

}
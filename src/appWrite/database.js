import { Storage, Client, ID, Databases, Query  } from "appwrite";;
import config from "../config/config";


export class DatabaseServise {
     client = new Client();
     databases;
     storage;
    constructor() {
        this.client
            .setProject(config.apiUrl)
            .setProject(config.projectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.databaseId,
                config.collectionId,
                slug,

                {title, content, featuredImage, status, userId}
            )
        } catch (error) {
            console.log("Appwrite servise :: creatingPost :: error", error.massage);
        }
    }

    async updetePost( { title, slug, content, featuredImage, status, userId }){
        try {
            return await this.databases.updateDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {title, content, featuredImage, status, userId}
            )
        } catch (error) {
            console.log("Appwrite servise :: updatePost :: error", error.massage);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.databaseId, config.collectionId, slug)
            return true;
        } catch (error) {
            console.log("Apwrite :: deletePost :: error" , error.massage);
            
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(config.databaseId, config.collectionId, slug)
        } catch (error) {
            log("Appwrite servise :: getPost :: error", error.massage);
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(config.databaseId, config.collectionId,queries )
        } catch (error) {
            log("Appwrite servise :: getPosts :: error", error.massage);
        }
    }

    // file upload servise

    async uploadFile(file){
        try {
            const file=  await this.storage.createFile(config.bucketId, ID.unique(), file )
            return file
        } catch (error) {
            console.log("Appwrite :: uploadFile :: error", error.massage);
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(config.bucketId,fileId)
            return true
        } catch (error) {
            console.log("Appwrite :: deleteFile :: error", error.massage);
        }
    }

    getFilePreview (fileId){
        return this.storage.getFilePreview(
            config.bucketId,
            fileId
        )
    }

}

const databaseServise = new DatabaseServise();
export default databaseServise;
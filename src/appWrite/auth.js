import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AppWriteAuth {
    client = new Client();
    account;
    constructor(){
        this.client
          .setEndpoint(config.apiUrl)
          .setProject(config.projectId);
          this.account = new Account(this.client);
    }

    async createAccount( { userId = ID.unique(), email, password, name} ){
        try {
            const user = await this.account.create({userId , email, password, name});
            if( user ) return this.login({email, password});
            return user;

        } catch (error) {
            console.log("Appwrite :: createAccount :: error", error.massage);
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({email, password});
        } catch (error) {
            console.log("Appwrite :: login :: error", error.massage);
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.log("Appwrite :: getCurrentUser :: error", error.massage);
            throw error;
        }
    }
    async logout(){
        try {
            this.account.deleteSessions();
        } catch (error) {
            log("Appwrite :: logout :: error", error.massage);
        }
    }

}

const appWriteAuth = new AppWriteAuth();
export default appWriteAuth;

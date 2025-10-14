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
            console.log("Error while creating account", error);
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({email, password});
        } catch (error) {
            console.log("Error while login", error.massage);
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.log("Error while fetching current user", error);
            throw error;
        }
    }
    async logout(){
        try {
            this.account.deleteSessions();
        } catch (error) {
            log("Error while logout", error);
        }
    }

}

const appWriteAuth = new AppWriteAuth();
export default appWriteAuth;

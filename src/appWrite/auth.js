import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthServise {
    client = new Client();
    account;
    constructor() {
        this.client
            .setProject(config.projectId)
            .setEndpoint(config.apiUrl)
            account = new Account(this.client);
    }

    async createAccount({userId = ID.unique() , email, password}){
        try {
            user = await this.account.create({userId, email ,password} )
            if(user){
                return this.login({email,password})
            }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}){
        try {
            return await this.account.createEmailPasswordSession({email,password})
        } catch (error) {
            throw error
        }
    }

    async getCurruntAccout(){
        try {
            const currentUser = await this.account.get()
            if(!currentUser) return null;
            return currentUser;
        } catch (error) {
            throw error
        }
    }

}

const authServise = new AuthServise();

export default authServise;

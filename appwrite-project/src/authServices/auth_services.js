import config from "../conf/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;


    constructor() {
       this.client
       .setEndpoint(config.appwriteEndpoint) 
       .setProject(config.appwriteProjectId)
       this.account = new Account(this.client);
    }

     async createUserAccount({email, password,name}) {
        try {
            const userAcoount = await this.account.create(ID.unique(), email, password, name);

            if (userAcoount) {
               // login method call 

               return this.login({email, password});
                // CAlling a alert message to succesfully create account 

                alert("Account has been succesfully created")
            } else {
               return userAcoount();
            }

        } catch (error) {
            throw error;
            
        }
    }

    async login({email, password}) {
            try {
                return await this.account.createEmailPasswordSession(email, password);
            } catch (error) {
                throw error;
            }
    }

    async getCurrentAccount() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Authentication service :: getCurrentAccount ", error)
        }
        return null ;
    }
    async logout() {
            try {
                 await this.account.deleteSessions();
            } catch (error) {
                // alert("You have been logged out ", error)

                console.log("Appwrite :: logout :: error", error);
            }
    }
}
const authentiService = new AuthService()
export default authentiService 

import config from "../conf/config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
     client = new Client();
     databases;
     storage;

     constructor(){
        this.client
        .setEndpoint(config.appwriteEndpoint) 
        .setProject(config.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
     }

     async createPost({title, slug, content, featuresImages, status, userId}) {

            try {
                
                return await this.databases.createDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    // ID.unique(),
                    slug,
                    {
                        title,
                        content,
                        featuresImages,
                        status,
                        userId,
                    
                    }
                
                )

            } catch (error) {
                console.log("Appwrite service :: createPost :: error", error);
                
            }
     }

     async updatePost(slug, {title, content, featuresImages,status,}){


        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                // ID.unique(),
    
                slug,
                {
                    title,
                    content,
                    featuresImages,
                    status,
                }
                
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
        
    }

     async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                // ID.unique()

                slug,
            )  
            return true 

        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }

     }

     async getPost(slug) {
        try {
            
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                // ID.unique(),

                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
     }

     async getPosts(queries = [Query.equal("status" , "active")]) {
        try {
            
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,

                // Also uses like this 
                // [Query.equal("status" , "active")],

                queries,
                
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
     }

// Files upload services


        async uploadFile(file){
                try {
                    return await this.storage.createFile(
                        config.appwriteBucketId,
                        ID.unique(),
                        file,
                    )
                } catch (error) {
                    console.log("Appwrite service :: uploadFile :: error", error);
                    return false
                }
        }
        async deleteFile(fileId){
                try {
                    return await this.storage.deleteFile(
                        config.appwriteBucketId,
                        fileId,
                    
                    )
                    return true
                } 
                catch (error) {
                    console.log("Appwrite service :: deleteFile :: error", error);
                    return false
                }
        }
        async getFilePreview(fileId) {
            this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId,
            )
        }
}




export const service = new Service()
export default service 
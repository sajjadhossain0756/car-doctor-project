
"use server";

import bcrypt from 'bcrypt';
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) =>{
    const userCollection = dbConnect(collectionNameObj.userCollection)

    // validation
    const {email,password} = payload;
    if(!email || !password){return null;}
    const user = await userCollection.findOne({email: payload.email})

    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        
        const result = await userCollection.insertOne(payload);
        const {acknowledged, insertedId} = result
        return {acknowledged, insertedId}; 
    }
    return null;
}
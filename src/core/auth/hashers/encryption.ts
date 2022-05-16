import * as berypt from 'bcrypt'

export async function encrypt(pass:string)
{
    const salt=await berypt.genSalt();
    return await berypt.hash(pass,salt);
}

export async function compare(pass:string,hash:string)
{
    return await berypt.compare(pass,hash);
}
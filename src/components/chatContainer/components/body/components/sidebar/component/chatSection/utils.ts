import { Chat } from "../../../../../../../../types"

//  getUserChats rename
export const findChats=(userChatIds:string[]|undefined)=> {
    const storedChats=localStorage.getItem("CHATS");
    const Chats:Chat[]=storedChats?JSON.parse(storedChats):[]; // camelCase

    return userChatIds?.flatMap((chatId) => Chats.filter((chat) => chat.id === chatId))
};


export const isGroupChat=(lenght:number)=>{
    return lenght>2;
}
import { Chat, Message } from "../../../../../../../../../../types"
import { fetchDataFromLocalStorage } from "../../../../../../../../../../utils";

export const newMessage=(text:string,user:{id:string,name:string},chat:Chat)=>{
    const message:Message={

        content: text,
        sender: {id:user.id,name:user.name},
        receiver:{id:chat.id,name:chat.name},
        timeStamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        }),
        id: new Date().toLocaleTimeString(),
    }
    
    const Chats:Chat[]=fetchDataFromLocalStorage("CHATS");

    const newChats=Chats.map(Chat=>{
        if(chat.id===Chat.id){
            Chat.messageIds=[...Chat.messageIds,message.id];
            return Chat;
        }
        
        return Chat;
    });

    localStorage.setItem("CHATS",JSON.stringify(newChats));

   
    const Messages=fetchDataFromLocalStorage("MESSAGES")

    localStorage.setItem("MESSAGES",JSON.stringify([...Messages,message]));


    return message;
  }
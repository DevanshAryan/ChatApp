import { Chat, User } from "../../types";
import { fetchDataFromLocalStorage } from "../../utils";

export const createNewUser=(username:string,password:string)=>{

    const USERS: User[] = fetchDataFromLocalStorage("USERS");
    const CHATS: Chat[] = fetchDataFromLocalStorage("CHATS");

    const newChat:Chat={
        id: `Chat${CHATS.length+1}`,
        messageIds: [],
        name: username,
        memberIds: [`${USERS.length+1}`],
        
    }
    const updatedChats=[...CHATS,newChat];
    localStorage.setItem("CHATS",JSON.stringify(updatedChats));
    console.log(USERS);
    const user:User={
        name:username,
        password:password,
        chatIds:[`${newChat.id}`],
        profileImage:"xxxx",
        id:String(USERS.length+1)
    };

    const updatedList=[...USERS,user];
    localStorage.setItem("USERS",JSON.stringify(updatedList));
}
export const checkUserNameAndPassword=(username:string,password:string)=>{
    const storedUsers = localStorage.getItem("USERS");

    const USERS: User[] = storedUsers ? JSON.parse(storedUsers) : [];
    return USERS.find(user=>{
        return (user.name===username && user.password===password)
    });
}
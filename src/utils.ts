import {USERS,CHATS,MESSAGES} from './constants';

export const addDataInLocalStorage=()=>{
    localStorage.setItem("USERS",JSON.stringify(USERS));
    localStorage.setItem("CHATS",JSON.stringify(CHATS));
    localStorage.setItem("MESSAGES",JSON.stringify(MESSAGES));
  }

export const fetchDataFromLocalStorage=(key:string)=>{
  const items=localStorage.getItem(key);
    if(items!==null)
    return JSON.parse(items);

    return [];
}
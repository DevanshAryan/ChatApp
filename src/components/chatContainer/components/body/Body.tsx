// libs
import { ReactElement , useCallback, useContext, useState } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Sidebar } from "./components/sidebar";
import { ChatArea } from "./components/chatArea";
import { userContext } from "../../../../App";


export const Body = ():ReactElement => {
  const {user}=useContext(userContext);
  const [selectedChat,setSelectedChat]=useState(user?.chatIds[0]);

  const onSelectedChat=useCallback((chatId:string)=>{ 
    setSelectedChat(chatId);
  },[selectedChat]);
  
  return (
  <Box className="rounded-4 flex items-stretch border-0 border-t border-solid spr-border-03 max-h-screen max-w-full">
    <Sidebar selectedChat={selectedChat} handleOnChange={onSelectedChat} className={"flex-1"}/>
    <ChatArea key={selectedChat} className={{flex:"4"}} selectedChat={selectedChat}/>
  </Box>
  )
};

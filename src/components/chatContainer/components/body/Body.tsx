// libs
import { ReactElement , useMemo, useState } from "react";

// component
import { Box } from "@sprinklrjs/spaceweb/box";
import { Sidebar } from "./components/sidebar";
import { ChatArea } from "./components/chatArea";

import { user } from "../../constants";
import { chats } from "../../constants";
export const Body = ():ReactElement => {
  const findChatName = useMemo(()=>(user.chatIds.flatMap((chatId) => chats.filter((chat) => chat.id === chatId))
  ),[user.chatIds]);
  const [selectedChat,setSelectedChat]=useState("chat1");

  const handleOnChange=(chatId:string)=>{
    setSelectedChat(chatId);
  }
  return (
  <Box className="rounded-4 flex items-stretch border-0 border-t border-solid spr-border-03 ">
    <Sidebar selectedChat={selectedChat} handleOnChange={handleOnChange} className={"flex flex-1 flex-col gap-1"}/>
    <ChatArea selectedChat={selectedChat}/>
  </Box>
  )
};

// libs
import { ReactElement, useMemo } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { ChatInterface } from "./components/chatInterface";
import { Info } from "./components/info";


// types
import { ClassName } from "@sprinklrjs/spaceweb/types";
import { Message } from "../../../../../../types";
import { Chat } from "../../../../../../types";

// utils
import { fetchDataFromLocalStorage } from "../../../../../../utils";

export const ChatArea = ({className,selectedChat}:{className:ClassName,selectedChat:string|undefined}):ReactElement => {

  const chats:Chat[]=fetchDataFromLocalStorage("CHATS");
  const allMessages:Message[]=fetchDataFromLocalStorage("MESSAGES");
  const chat=useMemo(()=>chats.find((chat)=>chat.id===selectedChat),[]) ;
  const messages=useMemo(()=>chat?.messageIds.flatMap(messageId=>allMessages.filter(message=>messageId===message.id)),[chat]);
  
  if(chat===undefined || messages===undefined)
  return (<Box>No chats found</Box>);


  return (
  <Box className={["flex flex-col",{boxShadow:"-8px 0 6px -4px rgba(0, 0, 0, 0.1)"},className]}>
    <Info name={chat?.name} />
    <ChatInterface chat={chat} messages={messages}/>
  </Box>
);
}


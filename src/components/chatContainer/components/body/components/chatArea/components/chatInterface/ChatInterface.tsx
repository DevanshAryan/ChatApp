// libs
import { useCallback, useEffect, useState } from "react"

// components
import { Box } from "@sprinklrjs/spaceweb/box" 
import { SendMessage } from "./component/sendMessage"
import { MessageArea } from "./component/messageArea"

// types
import { Chat, Message } from "../../../../../../../../types"

// utils
import { isGroupChat } from "../../../sidebar/component/chatSection/utils"



export const ChatInterface = ({messages,chat}:{messages:Message[]|[],chat:Chat}) => {
    const [allMessages,setMessages]=useState(messages);
    
    const onSendMessage=useCallback((message:Message)=>{
        if(allMessages!==undefined){
            setMessages((prev)=>[...prev,message]);
        }
    },[messages]);
    

    return (
    <Box className="px-20 py-1">
        <MessageArea isGroupChat={isGroupChat(chat.memberIds.length)} className="px-3 py-0 flex w-full flex-col gap-2 overflow-y-scroll" allMessages={allMessages}/>
        <SendMessage chat={chat} className={"px-3 py-2 flex gap-5"} onSendMessage={onSendMessage}/>
    </Box>
)
}

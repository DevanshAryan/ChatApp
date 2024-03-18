// libs
import { useState } from "react"

// components
import { Box } from "@sprinklrjs/spaceweb/box" 
import { SendMessage } from "./component/sendMessage"
import { MessageArea } from "./component/messageArea"

// constants
import {MESSAGES} from './constants'

// types
import { Message } from "./types"

export const ChatInterface = () => {
    const [messages,setMessages]=useState(MESSAGES);
    const onSendMessage=(message:Message)=>{
        setMessages((prevList)=>[...prevList,message]);
    }
    return (
    <Box className="px-20 py-1">
        <MessageArea className={"px-3 py-0 flex flex-col gap-2 overflow-y-scroll"} messages={messages}/>
        <SendMessage className={"px-3 py-3 flex gap-5"} onSendMessage={onSendMessage}/>
    </Box>
)
}
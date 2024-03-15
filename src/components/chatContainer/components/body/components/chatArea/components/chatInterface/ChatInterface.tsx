// libs
import { useState } from "react"

// component
import { Box } from "@sprinklrjs/spaceweb/box" 
import { SendMessage } from "./component/sendMessage"
import { MessageArea } from "./component/messageArea"

// constants
import {MESSAGES} from './constants'

// types
import { Message } from "./types"


const className=""
export const ChatInterface = () => {
    const [messages,setMessages]=useState(MESSAGES);
    const onMessageSend=(message:Message)=>{
        setMessages((prevList)=>[...prevList,message]);
    }
    return (
    <Box className="px-10 py-3">
        <MessageArea className={["px-4 py-3 flex flex-col gap-2 overflow-y-scroll"]} messages={messages}/>
        <SendMessage className={"px-4 py-3 flex gap-2"} onMessageSend={onMessageSend}/>
    </Box>
)
}
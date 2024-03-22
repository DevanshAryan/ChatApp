// libs
import { useEffect, useRef } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Message } from "./DisplayMessage";
import { ClassName } from "@sprinklrjs/spaceweb";

// types
import { Message as MessageType } from "../../../../../../../../../../types";

const NoMessages=()=>{
  return (
      <Box className="p-10 text-24 flex justify-center items-center h-full">
          Start Chating
      </Box>
  )
}
export const MessageArea = ({isGroupChat,className,allMessages}:{isGroupChat:boolean|undefined,className:ClassName,allMessages:MessageType[]|undefined}) => {

    const ref=useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(ref.current)
        ref.current.scrollTop=ref.current.scrollHeight;
    },[allMessages]);

    if(allMessages?.length===0)
    return <NoMessages/>

    return (
  <Box ref={ref} className={[{maxHeight:"79vh"},className]}>
    {allMessages?.map((message) => (
      <Message 
        key={message.id}
        isGroupChat={isGroupChat}
        sender={message.sender}
        content={message.content}
        timestamp={message.timeStamp}
      />
    ))}
  </Box>
  )
}

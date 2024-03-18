// libs
import { useEffect, useRef } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { DisplayMessage } from "./DisplayMessage";
import { ClassName } from "@sprinklrjs/spaceweb";

// types
import { Message } from "../../types";

export const MessageArea = ({className,messages}:{className:ClassName,messages:Message[]}) => {
    const ref=useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(ref.current)
        ref.current.scrollTop=ref.current.scrollHeight;
    },[messages]);

  return (
  <Box ref={ref} className={[className,{maxHeight:"79vh"}]}>
    {messages.map((message) => (
      <DisplayMessage // Message
        key={message.id}
        sender={message.sender}
        content={message.content}
        timestamp={message.timestamp}
      />
    ))}
  </Box>
  )
}

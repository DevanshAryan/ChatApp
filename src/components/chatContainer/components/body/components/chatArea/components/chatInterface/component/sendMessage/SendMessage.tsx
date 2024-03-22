// libs
import { useState, ChangeEvent, useCallback, useContext } from "react";

// components
import { Input } from "@sprinklrjs/spaceweb/input";
import { Button } from "@sprinklrjs/spaceweb/button";
import { Box } from "@sprinklrjs/spaceweb/box";

// types
import { Chat, Message } from "../../../../../../../../../../types";

// context
import { userContext } from "../../../../../../../../../../App";

// utils
import { newMessage } from "./utils";

export const  SendMessage = ({
  chat,
  onSendMessage,
  className
}: {
  chat:Chat,
    onSendMessage: (message: Message) => void;
  className:string
}) => {
  const [text, setText] = useState("");
  const {user}=useContext(userContext);

  

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  },[]);

  const handleKeydown=useCallback((e:React.KeyboardEvent)=>{
      if(e.key==='Enter'){
        handleOnClick();
      }
  },[text]);

  const handleOnClick = useCallback(() => {
    if(text==='' || user===undefined)
    return;
    
    setText("");
    onSendMessage(newMessage(text,{name:user.name,id:user.id},chat));
  },[text]);

  return (
    <Box
    
      className={[className,"fixed",{bottom:"2rem",width:"70%"}]}
    >
        <Input
          onKeyDown={handleKeydown}
          placeholder="Type a message"
          onChange={handleOnChange}
          value={text}
        />
      <Button
        onClick={handleOnClick}
        variant="secondary"
        size="xxs"
      >
        Send
      </Button>
    </Box>
  );
};


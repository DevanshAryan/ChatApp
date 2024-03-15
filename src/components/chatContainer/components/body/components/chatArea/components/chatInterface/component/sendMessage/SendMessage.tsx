// libs
import React, { useState, ChangeEvent } from "react";

// component
import { Input } from "@sprinklrjs/spaceweb/input";
import { Button } from "@sprinklrjs/spaceweb/button";
import { Box } from "@sprinklrjs/spaceweb/box";

// types
import { Message } from "../../types";

export const SendMessage = ({
  onMessageSend,
  className
}: {
  onMessageSend: (message: Message) => void;
  className:string
}) => {
  const [text, setText] = useState("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if(text==='')
    return;
    
    setText("");
    const newMessage: Message = {
      content: text,
      sender: "me",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      id: new Date().toLocaleTimeString(),
    };
    onMessageSend(newMessage); //name
  };

  return (
    <Box
      className={className}
    >
      <Input
        onChange={handleOnChange}
        value={text}
        className="" // use gap instead of padding
      />
      <Button
        // intent="ai"
        onClick={handleOnClick}
        variant="secondary"
        size="xxs"
      >
        Send
      </Button>
    </Box>
  );
};


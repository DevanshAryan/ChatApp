// libs
import React, { useState, ChangeEvent, useCallback } from "react";

// component
import { Input } from "@sprinklrjs/spaceweb/input";
import { Button } from "@sprinklrjs/spaceweb/button";
import { Box } from "@sprinklrjs/spaceweb/box";

// types
import { Message } from "../../types";

export const SendMessage = ({
    onSendMessage,
  className
}: {
    onSendMessage: (message: Message) => void;
  className:string
}) => {
  const [text, setText] = useState("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnClick = useCallback(() => {
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
    onSendMessage(newMessage);
  },[text]);

  return (
    <Box
      className={className}
    >
      <Input
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


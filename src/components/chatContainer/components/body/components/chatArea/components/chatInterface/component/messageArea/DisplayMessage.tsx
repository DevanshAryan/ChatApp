// libs
import { ReactElement, useContext } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";

// context
import { userContext } from "../../../../../../../../../../App";


type Sender={
  id:string,
  name:string
}

export const Message = ({
  isGroupChat,
  sender,
  content,
  timestamp,
}: {
  isGroupChat:boolean|undefined
  sender: Sender;
  content: string;
  timestamp: string;
}):ReactElement => {
  const {user}=useContext(userContext);
  const isMe = sender.name === user?.name;

  return (
    <Box className={isMe?["self-end flex flex-col spr-clr-blue rounded-lg p-3",{backgroundColor:"#E9EBFA",maxWidth:"75%"}]:["self-start spr-field rounded-lg p-3",{backgroundColor:"#F5F5F5",maxWidth:"75%"}]}>
      {isGroupChat && sender.name !== 'Alice' ? <Box> ~ {sender.name}</Box> : null}
      <Box className="pt-1 text-16">
        {content}
      </Box>
      <Box className={`pt-1 self-end`}>
        {timestamp}
      </Box>
    </Box>
  );
};

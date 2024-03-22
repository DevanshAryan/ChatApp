// libs
import { ReactElement } from "react";

// component
import { Box } from "@sprinklrjs/spaceweb/box";
import { ChatList } from "./component/chatSection";
import { Typography } from "@sprinklrjs/spaceweb/typography";

// types
import {ClassName} from '@sprinklrjs/spaceweb/types';

export const Sidebar = ({selectedChat,handleOnChange,className}:{selectedChat?:string,handleOnChange:(chatId:string)=>void,className?:ClassName}):ReactElement => (
  <Box className={[{backgroundColor:"#F5F5F5",height:"93.5vh"},"flex flex-col",className,]}>
    <Box className="px-4 py-3 border-0 border-b border-solid spr-border-03">
      <Typography className="m-0 p-0"variant="display-24" weight="bold">Chat</Typography>
    </Box>
    <ChatList selectedChat={selectedChat} onChange={handleOnChange}/>
  </Box>
);

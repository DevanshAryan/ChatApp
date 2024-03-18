// libs
import { ReactElement } from "react";

// component
import { Box } from "@sprinklrjs/spaceweb/box";
import { ChatSection } from "./component/chatSection";

// types
import {ClassName} from '@sprinklrjs/spaceweb/types';

export const Sidebar = ({selectedChat,handleOnChange,className}:{selectedChat:string,handleOnChange:(chatId:string)=>void,className:ClassName}):ReactElement => (
  <Box className={[className,{backgroundColor:"#F5F5F5"}]}>
    <Box className="typography-h2 px-4 py-3 border-0 border-b border-solid spr-border-03">
      Chat
    </Box>
    <ChatSection selectedChat={selectedChat} onChange={handleOnChange}/>
  </Box>
);


// {flex:"1",display:"flex",flexDirection:"column"},"gap-1"]
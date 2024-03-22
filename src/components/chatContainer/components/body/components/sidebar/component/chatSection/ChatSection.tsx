// libs
import { ReactElement, useCallback, useContext , useMemo } from "react";

// Components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { List, ListItem } from "@sprinklrjs/spaceweb/list";
import { Typography } from "@sprinklrjs/spaceweb/typography";

// types
import {ClassName} from "@sprinklrjs/spaceweb/types";
import { Chat } from "../../../../../../../../types";

// utils
import { findChats, isGroupChat } from "./utils";

// context
import { userContext } from "../../../../../../../../App";

const css:ClassName=[
  "pr-1 px-1 py-0 hover:cursor-pointer",
  { backgroundColor:"#F5F5F5",overflowY:"hidden"},
  "hover:overflow-y-auto"
];

const FilteredChats=({chats,selectedChat,onChange}:{chats:Chat[]|undefined,selectedChat?:string,onChange: (chatId: string) => void;})=>{
  return (
    <List
      className={css}
    >
    {chats?.map((chat) => (
      <ListItem
        className={["px-0 py-0", { backgroundColor: "#F5F5F5" }]}
        key={chat.id}
      >
         <ChatItem
          onChatItemClick={onChange}
          chat={chat}
          isSelected={selectedChat === chat.id}
        />
      </ListItem>
    ))}


</List>
  )
}
const ChatItem = ({
  onChatItemClick,
  chat,
  isSelected,
}: {
  onChatItemClick: (chatId: string) => void;
  chat:Chat,
  isSelected: boolean;
}) => {
  const handleOnClick=useCallback(()=>{
    onChatItemClick(chat.id);
  },[chat]);

  const css=["py-3 pl-3 flex items-center gap-3"];
  return (
  <Box
    onClick={handleOnClick}
    className={[css,isSelected
      ? "spr-ui-01"
      : "hover:spr-ui-01"]}
  >
    <Image
      className="h-8 w-8 rounded-full"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="Cute doggo"
    />
    <Box className="text-16">{chat.name}</Box>  
  </Box>
);
  }


export const ChatList = ({
  selectedChat,
  onChange,
}: {
  selectedChat?: string;
  onChange: (chatId: string) => void;
}): ReactElement => {
  const {user}=useContext(userContext);
  const allChats=useMemo(()=>findChats(user?.chatIds),[user]);
  const groupChat=allChats?.filter(chat=>isGroupChat(chat.memberIds.length));
  const personalChat=allChats?.filter(chat=>!isGroupChat(chat.memberIds.length));

  

  return (
      <Box className={css}>
        <Box >
          <Typography className="m-0 p-3" variant="display-20">Personal Chats</Typography>
          <FilteredChats chats={personalChat} onChange={onChange} selectedChat={selectedChat}/>
        </Box>
        {groupChat?.length?<Box>
          <Typography  className="m-0 p-3" variant="display-20">Group Chats</Typography>
          <FilteredChats chats={groupChat} onChange={onChange} selectedChat={selectedChat}/>
        </Box>:null}
      </Box>
  );
};

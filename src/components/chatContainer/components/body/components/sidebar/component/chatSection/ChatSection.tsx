// libs
import { ReactElement } from "react";

// Component
import { List, ListItem } from "@sprinklrjs/spaceweb/list";

// constants
import { chats } from "../../../../../../constants";
import { user } from "../../../../../../constants";

export const ChatSection = ():ReactElement => {

  const findChatName = user.chatIds.flatMap((chatId) => // use memo
    chats.filter((chat) => chat.id === chatId)
  );

  return (
      <List className={["p-4 hover:cursor-pointer"]}>
        {findChatName.map((chat) => {
          return <ListItem className="h-12 hover:spr-ui-hover" key={chat.id}>{chat.name}</ListItem>;
        })}
      </List>
  
  );
};

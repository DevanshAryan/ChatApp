// libs
import { ReactElement, useMemo } from "react";

// Components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { List, ListItem } from "@sprinklrjs/spaceweb/list";

// constants
import { chats } from "../../../../../../constants";
import { user } from "../../../../../../constants";

const Chats = ({
  onClick,
  name,
  id,
  isSelected,
}: {
  OnClick: (chatId: string) => void;
  name: string;
  id: string;
  isSelected: boolean;
}) => (
  <Box
    onClick={() => {
      onClick(id);
    }}
    className={
      isSelected
        ? "h-12 flex items-center gap-3 spr-ui-01"
        : "h-12 flex items-center gap-3 hover:spr-ui-01"
    }
  >
    <Image
      className="ml-3 h-8 w-8 rounded-full"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="Cute doggo"
    />
    <Box className="pt-3 text-16 self-start">{name}</Box>
  </Box>
);

export const ChatSection = ({
  selectedChat,
  onChange,
}: {
  selectedChat: string;
  onChange: (chatId: string) => string;
}): ReactElement => {
  const findChatName = useMemo(
    () =>
      user.chatIds.flatMap((chatId) =>
        chats.filter((chat) => chat.id === chatId)
      ),
    [user.chatIds]
  );

  return (
    <List
      className={[
        "mr-1 px-1 hover:cursor-pointer",
        { backgroundColor: "#F5F5F5" },
      ]}
    >
      {findChatName.map((chat) => (
        <ListItem
          className={["px-0", { backgroundColor: "#F5F5F5" }]}
          key={chat.id}
        >
          <Chats
            onClick={onChange}
            id={chat.id}
            name={chat.name}
            isSelected={selectedChat === chat.id}
          />
        </ListItem>
      ))}
    </List>
  );
};

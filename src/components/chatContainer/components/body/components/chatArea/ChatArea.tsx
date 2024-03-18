// libs
import { ReactElement } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { ChatInterface } from "./components/chatInterface";
import { Info } from "./components/info";

const className="flex gap-3 px-5 py-2"
export const ChatArea = ({selectedChat}:{selectedChat:string}):ReactElement => (
  <Box className={["flex flex-col",{flex:"4",boxShadow:"-8px 0 6px -4px rgba(0, 0, 0, 0.1)"}]}>
    <Info selectedChat={selectedChat} />
    <ChatInterface/>
  </Box>
);

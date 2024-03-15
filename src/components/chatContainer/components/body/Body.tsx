// libs
import { ReactElement } from "react";

// component
import { Box } from "@sprinklrjs/spaceweb/box";
import { Sidebar } from "./components/sidebar";
import { ChatArea } from "./components/chatArea";

export const Body = ():ReactElement => (
  <Box className="p-3 pt-0 pb-0 rounded-12 flex items-stretch">
    <Sidebar/>
    <ChatArea/>
  </Box>
);

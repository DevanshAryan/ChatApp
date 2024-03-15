// libs
import { ReactElement } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { ChatInterface } from "./components/chatInterface";
import { Info } from "./components/info";

const className="flex gap-3 px-5 py-2"
export const ChatArea = ():ReactElement => (
  <Box className={["px-3 py-2 flex flex-col border-0 border-l-2 border-solid",{flex:"4"}]}>
    <Info />
    <ChatInterface/>
  </Box>
);

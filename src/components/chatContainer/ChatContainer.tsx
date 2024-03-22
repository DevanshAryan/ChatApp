// libs
import { ReactElement} from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Header } from "./components/header";
import { Body } from "./components/body";

const className=[{backgroundColor:"#EBEBEB"}]; // className
export const ChatContainer = (): ReactElement => (
  <Box className="flex flex-col">
    <Header className={className} />
    <Body />
  </Box>
);


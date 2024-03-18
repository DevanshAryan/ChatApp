// libs
import { ReactElement } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Header } from "./components/header";
import { Body } from "./components/body";

export const ChatContainer = (): ReactElement => (
  <Box className="flex flex-col gap-0 max-h-screen">
    <Header />
    <Body />
  </Box>
);

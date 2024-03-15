// libs
import { ReactElement } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Header } from "./components/header";
import { Body } from "./components/body";

export const ChatContainer = (): ReactElement => (
  <Box
    className={[
      "p-2 pt-0 flex flex-col gap-0",
      { maxHeight: "100vh" },
      "overflow-y-hidden",
    ]}
  >
    <Header />
    <Body />
  </Box>
);

// libs
import { ReactElement } from "react";

// component
import { Box } from "@sprinklrjs/spaceweb/box";
import { ChatSection } from "./component/chatSection";

export const Sidebar = ():ReactElement => (
  <Box className={[{flex:"1",display:"flex",flexDirection:"column"},"gap-3","p-1"]}> // use always string
    <Box className="box-border text-24 font-bold p-3 spr-text-01">
      Chat
    </Box>
    <ChatSection/>
  </Box>
);



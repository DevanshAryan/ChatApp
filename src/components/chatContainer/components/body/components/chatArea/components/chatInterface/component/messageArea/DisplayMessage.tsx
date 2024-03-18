// libs
import { ReactElement } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { ClassName } from "@sprinklrjs/spaceweb";


const me:ClassName=["self-end spr-clr-blue rounded-lg p-3",{backgroundColor:"#E9EBFA"}];

const Me = ({ content, timestamp }: { content: string; timestamp: string }):ReactElement => (
  <Box className="">
    <Box className={["text-16"]}>
        {content}
    </Box>
    <Box className="">
        {timestamp}
    </Box>
  </Box>
);


export const DisplayMessage = ({
  sender,
  content,
  timestamp,
}: {
  sender: string;
  content: string;
  timestamp: string;
}):ReactElement => {
  const isMe = sender === "me";

  return (
    <Box className={isMe?["self-end spr-clr-blue rounded-lg p-3",{backgroundColor:"#E9EBFA"}]:["self-start spr-field rounded-lg p-3",{backgroundColor:"#F5F5F5"}]}>
      <Box className="text-16">
        {content}
      </Box>
      <Box className="mt-1">
        {timestamp}
      </Box>
    </Box>
  );
};

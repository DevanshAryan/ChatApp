// libs
import { ReactElement } from "react";

// component
import { Box } from "@sprinklrjs/spaceweb/box";



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
    <Box className={isMe?"self-end border spr-clr-blue rounded-md p-3 " : "self-start border spr-clr-blue rounded-md p-3"}>
      <Box className="text-16">
        {content}
      </Box>
      <Box className="mt-1">
        {timestamp}
      </Box>
    </Box>
  );
};

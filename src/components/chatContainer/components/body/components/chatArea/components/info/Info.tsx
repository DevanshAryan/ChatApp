// libs
import { ReactElement } from "react"

// Component
import { Box } from "@sprinklrjs/spaceweb/box" 
import { Image } from "@sprinklrjs/spaceweb/image"
import { chats } from "../../../../../../constants"

export const Info = ({selectedChat}:{selectedChat:string}):ReactElement => {
  const findChat=chats.find((chat)=>chat.id===selectedChat);

  
  return (
  <Box className="flex gap-3 px-6 py-3 border-0 border-b border-solid spr-border-02">
    <Image
      className="object-cover h-7 w-7 rounded-full"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="Cute doggo"
    />
    <Box className="typography-h2">
      {findChat?.name}
    </Box>
  </Box>
)
  }
// use typography
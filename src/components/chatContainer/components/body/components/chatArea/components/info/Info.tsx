// libs
import { ReactElement } from "react"

// Component
import { Box } from "@sprinklrjs/spaceweb/box" 
import { Image } from "@sprinklrjs/spaceweb/image"
import { Typography } from "@sprinklrjs/spaceweb/typography"


export const Info = ({name}:{name:string}):ReactElement =>  (
  <Box className="flex gap-3 px-6 py-3 border-0 border-b border-solid spr-border-02">
    <Image
      className="object-cover h-8 w-8 rounded-full"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="Cute doggo"
    />
    <Box>
      <Typography className="m-0 p-0"variant="display-24" weight="bold">{name}</Typography>
    </Box>
  </Box>
)
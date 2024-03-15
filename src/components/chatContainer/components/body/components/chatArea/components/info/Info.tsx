// libs
import { ReactElement } from "react"

// Component
import { Box } from "@sprinklrjs/spaceweb/box" 
import { Image } from "@sprinklrjs/spaceweb/image"

export const Info = ():ReactElement => (
  <Box className="flex gap-3 px-5 py-2">
    <Image
      className="object-cover h-7 w-7 rounded-full"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="Cute doggo"
    />
    <Box className="typography-h2 spr-text-0">
      Alice
    </Box>
  </Box>
)

// use typography
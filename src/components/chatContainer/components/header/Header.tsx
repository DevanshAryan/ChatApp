
// libs
import { ReactElement } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";

export const Header = ():ReactElement => (
  <Box className={["h-12 pr-4 flex justify-end items-center",{backgroundColor:"#EBEBEB"}]}>
    <Image
      className="object-cover h-8 w-8 rounded-full"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="Cute doggo"
    />
  </Box>
);
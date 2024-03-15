
// libs
import { ReactElement } from "react";

// component
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";

export const Header = ():ReactElement => (
  <Box className="p-2 spr-shadow-04 flex justify-end items-center">
    <Image
      className="object-cover h-8 w-8 rounded-full"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="Cute doggo"
    />
  </Box>
);



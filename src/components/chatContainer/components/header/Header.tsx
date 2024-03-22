
// libs
import { ReactElement } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";

// types
import { ClassName } from "@sprinklrjs/spaceweb/types";

export const Header = ({className}:{className?:ClassName}):ReactElement => (
  <Box className={["py-2 pr-4 flex justify-end items-center",className]}>
    <Image
      className="object-cover h-8 w-8 rounded-full"
      src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
      alt="Cute doggo"
    />
  </Box>
);
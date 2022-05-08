/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Crop16x9 } from "./Crop16x9";
import type { Crop2x3 } from "./Crop2x3";
import type { Crop50x21 } from "./Crop50x21";
import type { ImageBase } from "./ImageBase";
import type { Text } from "./Text";

export type ImageComponent = {
  id: string;
  component: "image";
  content: {
    image: ImageBase & {
      crop?: Crop16x9 | Crop2x3 | Crop50x21;
    };
    caption?: Text;
    imageSource: string;
  };
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Crop16x9 } from "./Crop16x9";
import type { Crop4x3 } from "./Crop4x3";
import type { Crop50x21 } from "./Crop50x21";
import type { FreeCrop } from "./FreeCrop";
import type { ImageBase } from "./ImageBase";

export type BannerImage = {
  id: string;
  component: "bannerImage";
  content: {
    adHint?: "sz" | "external";
    showTitle: boolean;
    link: string;
    title?: string;
    image: ImageBase & {
      crop?: Crop16x9 | Crop4x3 | Crop50x21 | FreeCrop;
    };
  };
};

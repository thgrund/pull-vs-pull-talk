/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Crop16x9 } from "./Crop16x9";
import type { ImageBase } from "./ImageBase";

export type WebTeaser = {
  id: string;
  component: "webTeaser";
  content: {
    overline: string;
    title: string;
    teaserText: string;
    image: ImageBase & {
      crop?: Crop16x9;
    };
    /**
     * Url of the external content
     */
    link: string;
  };
};

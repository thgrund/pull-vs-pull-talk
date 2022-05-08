/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageComponent } from "./ImageComponent";
import type { Paragraph } from "./Paragraph";

export type ImageGallery = {
  id: string;
  component: "imageGallery";
  content: {
    list?: Array<ImageComponent | Paragraph>;
  };
};

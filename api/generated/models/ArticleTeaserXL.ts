/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HideImage } from "./HideImage";
import type { Teaser } from "./Teaser";

export type ArticleTeaserXL = {
  id: string;
  component: "articleTeaserXL";
  content: Teaser & HideImage;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HideImage } from "./HideImage";
import type { Teaser } from "./Teaser";

export type ArticleTeaserL = {
  id: string;
  component: "articleTeaserL";
  content: Teaser & HideImage;
};

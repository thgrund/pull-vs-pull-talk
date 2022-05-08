/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HideImage } from "./HideImage";
import type { Teaser } from "./Teaser";

export type ArticleTeaserS = {
  id: string;
  component: "articleTeaserS";
  content: Teaser & HideImage;
};

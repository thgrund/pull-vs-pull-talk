/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HideImage } from "./HideImage";
import type { Teaser } from "./Teaser";

export type ArticleTeaserM = {
  id: string;
  component: "articleTeaserM";
  content: Teaser & HideImage;
};

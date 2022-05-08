/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Teaser } from "./Teaser";
import type { TeaserOverride } from "./TeaserOverride";

export type SZPlusArticleTeaserInclude = {
  id: string;
  component: "szPlusArticleTeaserInclude";
  content: Teaser & TeaserOverride;
};

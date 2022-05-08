/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Systemdata } from "./Systemdata";
import type { SZPlusArticleTeaserInclude } from "./SZPlusArticleTeaserInclude";
import type { SZPlusMetadata } from "./SZPlusMetadata";
import type { WebTeaser } from "./WebTeaser";

export type SZPlus = {
  /**
   * Das interaktive Editorial mit fixen Artikeln die immer ausgespielt werden sollen und einem Pool an flexiblen Artikeln
   *
   */
  content: {
    fixed: Array<SZPlusArticleTeaserInclude | WebTeaser>;
    pool: Array<SZPlusArticleTeaserInclude | WebTeaser>;
  };
  systemdata: Systemdata;
  metadata: SZPlusMetadata;
};

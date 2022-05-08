/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Systemdata } from "./Systemdata";
import type { TeaserListContent } from "./TeaserListContent";
import type { TeaserListMetadata } from "./TeaserListMetadata";

export type TeaserList = {
  content: TeaserListContent;
  systemdata: Systemdata;
  metadata: TeaserListMetadata;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleTeaserL } from "./ArticleTeaserL";
import type { ArticleTeaserM } from "./ArticleTeaserM";
import type { ArticleTeaserS } from "./ArticleTeaserS";
import type { ArticleTeaserXL } from "./ArticleTeaserXL";
import type { ArticleTeaserXS } from "./ArticleTeaserXS";
import type { BannerImage } from "./BannerImage";
import type { Datawrapper } from "./Datawrapper";
import type { Ercms } from "./Ercms";
import type { IncludeModule } from "./IncludeModule";
import type { Podigee } from "./Podigee";
import type { TextLinkList } from "./TextLinkList";

export type BreakingNewsGroup = {
  id: string;
  component: "breakingNewsGroup";
  /**
   * Inhalt der Eilmeldung
   */
  content: {
    children: Array<
      | BannerImage
      | ArticleTeaserXL
      | ArticleTeaserL
      | ArticleTeaserM
      | ArticleTeaserS
      | ArticleTeaserXS
      | Ercms
      | Datawrapper
      | Podigee
      | IncludeModule
      | TextLinkList
    >;
  };
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BannerImage } from "./BannerImage";
import type { IncludeModule } from "./IncludeModule";
import type { TextLinkList } from "./TextLinkList";

export type GroupZero = {
  id: string;
  component: "groupZero";
  /**
   * Inhalt der Teaser Grupp 0 - nur für Mobile
   */
  content: {
    children: Array<IncludeModule | TextLinkList | BannerImage>;
  };
};

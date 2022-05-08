/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorReference } from "./AuthorReference";
import type { Crop16x9 } from "./Crop16x9";
import type { Crop4x3 } from "./Crop4x3";
import type { Crop50x21 } from "./Crop50x21";
import type { ImageBase } from "./ImageBase";
import type { PayCategory } from "./PayCategory";
import type { ShowInGeneratedLists } from "./ShowInGeneratedLists";
import type { TeaserPrefix } from "./TeaserPrefix";

/**
 * Metadata of an external link
 */
export type ExternalLinkMetadata = {
  /**
   * Ressort
   */
  department: {
    /**
     * Ressort
     */
    id?: string;
    /**
     * Pfad
     */
    path?: string;
  };
  /**
   * Dachzeile
   */
  overline: string;
  /**
   * Themen
   */
  topics: Array<string>;
  /**
   * Titel
   */
  title: string;
  /**
   * Teaser
   */
  teaserText: string;
  /**
   * Ziel-URL
   */
  externalLink: string;
  /**
   * Leitthema
   */
  mainTopic: string;
  payCategory: PayCategory;
  showInGeneratedLists: ShowInGeneratedLists;
  /**
   * sortDate
   */
  sortDate: string;
  /**
   * Polopoly Id
   */
  polopolyId?: string;
  teaserImage?: ImageBase & {
    crops?: Array<Crop16x9 | Crop4x3 | Crop50x21>;
  } & {
    crops: Array<Crop16x9 | Crop4x3 | Crop50x21>;
  };
  /**
   * Bildquelle
   */
  teaserImageSource?: string;
  teaserPrefix?: TeaserPrefix;
  /**
   * Autorenzeile
   */
  byline?: string;
  authors: AuthorReference;
};

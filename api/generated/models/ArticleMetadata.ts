/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleType } from "./ArticleType";
import type { AuthorReference } from "./AuthorReference";
import type { Byline } from "./Byline";
import type { Crop16x9 } from "./Crop16x9";
import type { Crop4x3 } from "./Crop4x3";
import type { Crop50x21 } from "./Crop50x21";
import type { Department } from "./Department";
import type { ImageBase } from "./ImageBase";
import type { LuxId } from "./LuxId";
import type { MainTopic } from "./MainTopic";
import type { Overline } from "./Overline";
import type { PayCategory } from "./PayCategory";
import type { Placemark } from "./Placemark";
import type { PolopolyId } from "./PolopolyId";
import type { PrimaryId } from "./PrimaryId";
import type { ShowInGeneratedLists } from "./ShowInGeneratedLists";
import type { SortDate } from "./SortDate";
import type { Source } from "./Source";
import type { TeaserImageSource } from "./TeaserImageSource";
import type { TeaserPrefix } from "./TeaserPrefix";
import type { TeaserText } from "./TeaserText";
import type { Title } from "./Title";
import type { Topics } from "./Topics";

export type ArticleMetadata = {
  department: Department;
  mainTopic: MainTopic;
  topics: Topics;
  articleType: ArticleType;
  teaserPrefix?: TeaserPrefix;
  overline: Overline;
  title: Title;
  teaserText?: TeaserText;
  byline?: Byline;
  authors: AuthorReference;
  source: Source;
  placemark?: Placemark;
  teaserImage?: ImageBase & {
    crops?: Array<Crop16x9 | Crop4x3 | Crop50x21>;
  } & {
    crops: Array<Crop16x9 | Crop4x3 | Crop50x21>;
  };
  teaserImageSource?: TeaserImageSource;
  payCategory: PayCategory;
  showReaderDialog: boolean;
  sortDate: SortDate;
  showInGeneratedLists: ShowInGeneratedLists;
  /**
   * Werbung ausblenden
   */
  hideAds: boolean;
  seoUrl?: string;
  googleTitle?: string;
  googleTeaser?: string;
  tweetText?: string;
  luxId?: LuxId;
  polopolyId?: PolopolyId;
  primaryId: PrimaryId;
  /**
   * Pfad für URL Konstruktion z.B. `"/sport/1860-gewinnt-champions-league-li.1000"`
   */
  path: string;
  /**
   * Ursprungs-System z.B. `"li"`, `"lux"`, `"sz"`
   */
  origin: string;
};

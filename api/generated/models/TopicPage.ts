/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakingNewsGroup } from "./BreakingNewsGroup";
import type { Datawrapper } from "./Datawrapper";
import type { Ercms } from "./Ercms";
import type { IncludeModule } from "./IncludeModule";
import type { LogoTopicGroup } from "./LogoTopicGroup";
import type { Podigee } from "./Podigee";
import type { Systemdata } from "./Systemdata";
import type { TeaserGroup } from "./TeaserGroup";
import type { TitleTopicGroup } from "./TitleTopicGroup";
import type { TopicDescription } from "./TopicDescription";
import type { TopicPageMetadata } from "./TopicPageMetadata";

export type TopicPage = {
  /**
   * Komponenten mit dem Dokumenteninhalt.
   *
   */
  content?: Array<
    | TopicDescription
    | TeaserGroup
    | TitleTopicGroup
    | LogoTopicGroup
    | BreakingNewsGroup
    | Ercms
    | Datawrapper
    | Podigee
    | IncludeModule
  >;
  systemdata: Systemdata;
  metadata: TopicPageMetadata;
};

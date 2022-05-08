/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakingNewsGroup } from "./BreakingNewsGroup";
import type { Datawrapper } from "./Datawrapper";
import type { DepartmentGroup } from "./DepartmentGroup";
import type { DepartmentPageMetadata } from "./DepartmentPageMetadata";
import type { Ercms } from "./Ercms";
import type { GroupZero } from "./GroupZero";
import type { IncludeModule } from "./IncludeModule";
import type { LogoTopicGroup } from "./LogoTopicGroup";
import type { PageHeading } from "./PageHeading";
import type { Podigee } from "./Podigee";
import type { Systemdata } from "./Systemdata";
import type { SZPlusGroup } from "./SZPlusGroup";
import type { TeaserGroup } from "./TeaserGroup";
import type { TitleTopicGroup } from "./TitleTopicGroup";

export type DepartmentPage = {
  /**
   * Komponenten mit dem Dokumenteninhalt.
   *
   */
  content: Array<
    | GroupZero
    | PageHeading
    | TeaserGroup
    | TitleTopicGroup
    | LogoTopicGroup
    | DepartmentGroup
    | BreakingNewsGroup
    | Ercms
    | Datawrapper
    | Podigee
    | IncludeModule
    | SZPlusGroup
  >;
  systemdata: Systemdata;
  metadata: DepartmentPageMetadata;
};

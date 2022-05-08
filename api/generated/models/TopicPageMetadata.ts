/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Department } from "./Department";

/**
 * Metadaten einer Themenseite
 */
export type TopicPageMetadata = {
  /**
   * Thema
   */
  topic: string;
  department: Department;
  /**
   * Werbung ausblenden
   */
  hideAds: boolean;
  googleTitle?: string;
  googleTeaser?: string;
  /**
   * Pfad für URL Konstruktion z.B. `"/thema/Klimawandel"`
   */
  path: string;
};

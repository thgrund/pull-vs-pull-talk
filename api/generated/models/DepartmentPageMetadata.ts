/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Department } from "./Department";

/**
 * Metadaten einer Departmentpage
 */
export type DepartmentPageMetadata = {
  /**
   * Titel der Departmentpage
   */
  title: string;
  department: Department;
  parentDepartment?: Department;
  /**
   * E-Mail Adresse für Leseranfragen
   */
  email?: string;
  /**
   * Werbung ausblenden
   */
  hideAds?: boolean;
  /**
   * Pfad für URL Konstruktion z.B. `"/bayern"`
   */
  path: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DepartmentGroup = {
  id: string;
  component: "departmentGroup";
  /**
   * Inhalt des Ressortaufmachers
   */
  content: {
    /**
     * Id des Ressorts
     */
    departmentId: string;
    /**
     * Anzahl sichtbarer Teaser
     */
    teaserCount?: number;
  };
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Autoren
 *
 */
export type AuthorReference = {
  $ref?: "documents";
  references: Array<{
    /**
     * Livingdocs Id der Autoren Data-Records
     *
     */
    id?: string;
  }>;
};

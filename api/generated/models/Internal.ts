/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Internal reference to another article
 */
export type Internal = {
  type: "internalReference";
  /**
   * Livingdocs document id
   */
  documentId?: string;
  contentType?: "article";
};

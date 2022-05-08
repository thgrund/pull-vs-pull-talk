/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Ein Inline Video verweist auf einen Video Artikel.
 */
export type InlineVideo = {
  id: string;
  component: "inlineVideo";
  /**
   * Inhalt des Inline Videos
   */
  content: {
    /**
     * Id des Video-Artikels
     */
    documentId: string;
  };
};

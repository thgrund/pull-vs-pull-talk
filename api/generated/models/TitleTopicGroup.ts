/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TitleTopicGroup = {
  id: string;
  component: "titleTopicGroup";
  /**
   * Inhalt der Titel-Themenklammer
   */
  content: {
    /**
     * Titel der Titel-Themenklammer
     */
    title: string;
    /**
     * Id der Teaser-Liste
     */
    documentId: string;
  };
};

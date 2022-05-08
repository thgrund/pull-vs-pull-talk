/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LogoTopicGroup = {
  id: string;
  component: "logoTopicGroup";
  /**
   * Inhalt der Logo-Themenklammer
   */
  content: {
    logo: "magazin" | "rezepte" | "jetzt";
    /**
     * Id der Teaser-Liste
     */
    documentId: string;
  };
};

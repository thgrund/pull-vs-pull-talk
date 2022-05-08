/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Systemdata = {
  contentType: "article" | "author" | "departmentPage" | "externalLink" | "szPlus" | "teaserList" | "topicPage";
  /**
   * Livingdocs-Id. Eindeutige Id des Dokuments. Diese Id wird in Apis und Referenzen verwendet um Livingdocs Dokumente zu bezeichnen.
   *
   */
  documentId: string;
  /**
   * Livingdocs Publikations-Id. Jedes Dokument kann mehrmals publiziert werden und jede dieser Publikationen erhält eine eigene Id.
   *
   */
  publicationId: number;
  /**
   * Datum wann das Dokument zum ersten mal publiziert wurde.
   *
   */
  firstPublicationDate?: string;
  /**
   * Datum wann das Dokument zum letzten mal publiziert wurde. Im Falle einer Erstpublikation ist dieses Datum identisch mit firstPublicationDate.
   *
   */
  updatedAt?: string;
};

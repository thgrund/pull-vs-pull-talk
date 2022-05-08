/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ImageBase = {
  /**
   * Id des Bildes der Livingdocs Media Library.
   *
   */
  mediaId?: string;
  /**
   * Amazon S3 Url des Bildes. Die Buckets sind privat weswegen diese Url nicht öffentlich erreichbar ist.
   *
   */
  originalUrl?: string;
  /**
   * ImgIx Url des Bildes in der Standard-Breite.
   */
  url: string;
  /**
   * Breite des Originalbildes.
   */
  width: number;
  /**
   * Höhe des Originalbildes.
   */
  height: number;
  /**
   * MimeType des Bildes. z.B. 'image/jpeg'
   *
   */
  mimeType?: string;
  /**
   * der Key für die Binärdatei im S3-Bucket
   */
  key: string;
  imageService?: "imgix";
};

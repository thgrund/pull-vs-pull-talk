/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageBase } from "./ImageBase";

export type Video = {
  id: string;
  component: "video";
  /**
   * Video
   */
  content: {
    hideAds: boolean;
    key: string;
    expiryDate?: string;
    title?: string;
    source?: string;
    posterImage: ImageBase;
    posterImageSource?: string;
  };
};

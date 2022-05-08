/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Crop16x9 } from "./Crop16x9";
import type { ImageBase } from "./ImageBase";

export type TeaserOverride = {
  /**
   * Überschriebene Informationen vom referenziertem Objekt
   */
  overrides?: {
    content: {
      /**
       * Dachzeile (oder 'kicker' im Production Hub)
       */
      overline: string;
      /**
       * Titel
       */
      title: string;
      teaserText: string;
      image: ImageBase & {
        crop?: Crop16x9;
      };
    };
  };
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Crop1x1 } from "./Crop1x1";
import type { ImageBase } from "./ImageBase";
import type { PrimaryId } from "./PrimaryId";

/**
 * Metadaten eines Autoren
 */
export type AuthorMetadata = {
  /**
   * Autorenprofil anzeigen
   */
  hideAuthor: boolean;
  /**
   * Position
   */
  position?: string;
  /**
   * Titel
   */
  title?: string;
  /**
   * Vorname
   */
  firstname?: string;
  /**
   * Nachname
   */
  lastname?: string;
  /**
   * Autorenkürzel
   */
  abbreviation?: string;
  /**
   * Beschreibung
   */
  description?: string;
  authorImage?: ImageBase & {
    crops?: Array<Crop1x1>;
  } & {
    crops: Array<Crop1x1>;
  };
  /**
   * E-Mail
   */
  email?: string;
  /**
   * Facebook
   */
  facebook?: string;
  /**
   * Twitter
   */
  twitter?: string;
  /**
   * VGWort ID
   */
  vgwortId?: string;
  /**
   * Vorname des VG Wort Autoren
   */
  vgwortFirstname?: string;
  /**
   * Nachname des VG Wort Autoren
   */
  vgwordLastname?: string;
  primaryId?: PrimaryId;
  /**
   * Pfad für URL Konstruktion z.B. `"/autoren/thorsten-denkler-1.14928"`
   */
  path?: string;
  /**
   * Ursprungs-System z.B. `"li"`, `"lux"`, `"sz"`
   */
  origin?: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleHeader } from "./ArticleHeader";
import type { ArticleMetadata } from "./ArticleMetadata";
import type { ArticleRecommendation } from "./ArticleRecommendation";
import type { BannerImage } from "./BannerImage";
import type { BulletList } from "./BulletList";
import type { Datawrapper } from "./Datawrapper";
import type { Ercms } from "./Ercms";
import type { Facebook } from "./Facebook";
import type { ImageComponent } from "./ImageComponent";
import type { ImageGallery } from "./ImageGallery";
import type { IncludeModule } from "./IncludeModule";
import type { InlineVideo } from "./InlineVideo";
import type { Instagram } from "./Instagram";
import type { Paragraph } from "./Paragraph";
import type { Podigee } from "./Podigee";
import type { Spotify } from "./Spotify";
import type { Subheading } from "./Subheading";
import type { Systemdata } from "./Systemdata";
import type { Tickaroo } from "./Tickaroo";
import type { Twitter } from "./Twitter";
import type { VideoLivestream } from "./VideoLivestream";
import type { Youtube } from "./Youtube";

/**
 * The full document with metadata, content and resolved references
 */
export type Article = {
  /**
   * Komponenten mit dem Dokumenteninhalt.
   *
   */
  content: Array<
    | ArticleHeader
    | BannerImage
    | Subheading
    | Paragraph
    | BulletList
    | ImageGallery
    | ImageComponent
    | Youtube
    | Twitter
    | Facebook
    | Instagram
    | Spotify
    | Datawrapper
    | Ercms
    | Tickaroo
    | Podigee
    | InlineVideo
    | VideoLivestream
    | IncludeModule
    | ArticleRecommendation
  >;
  metadata: ArticleMetadata;
  systemdata: Systemdata;
};

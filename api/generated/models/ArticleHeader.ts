/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulletListItem } from "./BulletListItem";
import type { Datawrapper } from "./Datawrapper";
import type { Ercms } from "./Ercms";
import type { ImageComponent } from "./ImageComponent";
import type { Podigee } from "./Podigee";
import type { Video } from "./Video";
import type { VideoLivestream } from "./VideoLivestream";
import type { Youtube } from "./Youtube";

export type ArticleHeader = {
  id: string;
  component: "articleHeader";
  content: {
    /**
     * Dachzeile (oder 'kicker' im Production Hub)
     */
    overline: string;
    /**
     * Titel
     */
    title: string;
    topAsset?: ImageComponent | Datawrapper | Ercms | Podigee | Youtube | Video | VideoLivestream;
    /**
     * Teaser Text (Oder Lead oder Intro)
     */
    teaserText?: string;
    bulletList?: Array<BulletListItem>;
    /**
     * Autorenzeile
     */
    byline?: string;
  };
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Tickaroo = {
  id: string;
  component: "tickaroo";
  /**
   * Tickaroo Embed
   */
  content: {
    /**
     * Chronologisch anzeigen - bei der Tickaroo Suche wird reverseEvents=true als Default gesetzt.
     *
     */
    inOrder: boolean;
    /**
     * Autor nicht anzeigen - hide statt showEventMeta (Tickaroo Parameter)
     *
     */
    hideEventMeta: boolean;
    /**
     * Autor nur einmal anzeigen (Tickaroo Parameter)
     *
     */
    coalesceRepeatedMeta: boolean;
    /**
     * An iframely capable url can be constructed like this: `https://widgets.tickaroo.com/widgets/ticker/${liveblogId}?clientId=${clientId}`. Example liveblogId: 570ce4180f156038d39285ce
     *
     */
    liveblogId: string;
  };
};

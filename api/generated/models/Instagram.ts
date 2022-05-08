/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Instagram = {
  id: string;
  component: "instagram";
  /**
   * Instagram Embed
   */
  content: {
    /**
     * Url that can be resolved via oEmbed / iframely. Example: https://www.instagram.com/p/CYLu8z0Ka2_
     *
     */
    url: string;
  };
};

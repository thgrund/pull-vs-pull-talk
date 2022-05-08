/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Twitter = {
  id: string;
  component: "twitter";
  /**
   * Twitter Embed
   */
  content: {
    /**
     * Url that can be resolved via oEmbed / iframely. Example: https://twitter.com/giantcat9/status/1460338930956525576
     *
     */
    url: string;
  };
};

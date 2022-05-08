/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Youtube = {
  id: string;
  component: "youtube";
  /**
   * YouTube Video Embed
   */
  content: {
    /**
     * Url that can be resolved via oEmbed / iframely. Example: https://www.youtube.com/watch?v=Rd5_zk456VY
     *
     */
    url: string;
  };
};

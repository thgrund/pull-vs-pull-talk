/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Spotify = {
  id: string;
  component: "spotify";
  /**
   * Spotify Embed
   */
  content: {
    /**
     * Url that can be resolved via oEmbed / iframely. Example: https://open.spotify.com/track/24ntSW3QVJzR79lHAAOTaY?si=180387001f6a497b
     *
     */
    url: string;
  };
};

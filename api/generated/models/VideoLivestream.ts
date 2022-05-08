/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VideoLivestream = {
  id: string;
  component: "videoLivestream";
  /**
   * Video Livestream Embed
   */
  content: {
    /**
     * Embed Code
     */
    html: string;
    /**
     * Url to a video file (for native player in the App)
     */
    url: string;
  };
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Podigee = {
  id: string;
  component: "podigee";
  /**
   * Podigee Embed
   */
  content: {
    /**
     * Url that can be resolved via oEmbed / iframely. Example: https://li-test-podcast.podigee.io/1-first-episode
     *
     */
    url: string;
    /**
     * Audio Id to fetch the audio file directly
     */
    audioId: string;
  };
};

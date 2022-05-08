/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Teaser } from "./Teaser";

export type TeaserListContent = {
  id: string;
  component: "teaserList";
  content: {
    children: Array<Teaser>;
  };
};

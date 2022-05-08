/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulletListItem } from "./BulletListItem";

export type BulletList = {
  id: string;
  component: "bulletList";
  content: {
    list: Array<BulletListItem>;
  };
};

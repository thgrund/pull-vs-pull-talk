/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Text } from "./Text";

export type BulletListItem = {
  id: string;
  component: "bulletListItem";
  content: {
    structuredText: Text;
  };
};

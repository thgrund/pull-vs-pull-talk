/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Text } from "./Text";

export type Paragraph = {
  id: string;
  component: "paragraph";
  content: {
    structuredText: Text;
  };
};

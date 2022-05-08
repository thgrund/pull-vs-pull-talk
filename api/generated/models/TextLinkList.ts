/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Text } from "./Text";

export type TextLinkList = {
  id: string;
  component: "textLinkList";
  /**
   * Text Link Liste
   */
  content: {
    title: string;
    closingLine?: Text;
    adHint?: "sz" | "external";
    list: Array<{
      id: string;
      component: "textLinkListItem";
      content: {
        structuredText: Text;
      };
    }>;
  };
};

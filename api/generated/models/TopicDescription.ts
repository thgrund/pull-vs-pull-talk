/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Text } from "./Text";

export type TopicDescription = {
  id: string;
  component: "topicDescription";
  content: {
    title: string;
    description?: Text;
  };
};

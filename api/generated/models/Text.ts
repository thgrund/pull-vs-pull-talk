/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Emphasis } from "./Emphasis";
import type { Internal } from "./Internal";
import type { Mailto } from "./Mailto";
import type { Strong } from "./Strong";
import type { Web } from "./Web";

export type Text = Array<{
  text: string;
  marks?: Array<Strong | Emphasis | Internal | Web | Mailto>;
}>;

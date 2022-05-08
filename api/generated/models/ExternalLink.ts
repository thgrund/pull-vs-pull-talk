/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalLinkMetadata } from "./ExternalLinkMetadata";
import type { Systemdata } from "./Systemdata";

/**
 * The external link data containing systemdata and metadata
 */
export type ExternalLink = {
  systemdata: Systemdata;
  metadata: ExternalLinkMetadata;
};

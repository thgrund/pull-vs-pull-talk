/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Article } from "./Article";
import type { Author } from "./Author";
import type { DepartmentPage } from "./DepartmentPage";
import type { ExternalLink } from "./ExternalLink";
import type { SZPlus } from "./SZPlus";
import type { TeaserList } from "./TeaserList";
import type { TopicPage } from "./TopicPage";

/**
 * The full document with metadata, content and resolved references
 */
export type Document = Article | Author | DepartmentPage | TopicPage | ExternalLink | SZPlus | TeaserList;

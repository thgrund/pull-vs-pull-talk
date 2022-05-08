/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A free crop can be of any image ratio.
 *
 */
export type FreeCrop = {
  name: "free";
  isAutomatic?: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
};

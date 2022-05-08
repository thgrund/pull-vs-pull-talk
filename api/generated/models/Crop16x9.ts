/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Example imgix url with a crop: https://livingdocs-evaluation.imgix.net/2021/11/10/6948129d-cbec-4b0c-80c4-656d5849d33a.jpeg?rect=0%2C135%2C2560%2C1440&w=1024&auto=format
 *
 */
export type Crop16x9 = {
  name: "16:9";
  isAutomatic?: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
};

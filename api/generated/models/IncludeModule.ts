/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IncludeModule = {
  id: string;
  component: "includemodule";
  /**
   * Include Modul aus Polopoly
   */
  content: {
    /**
     * Der Typ des Include-Moduls
     */
    includeModuleType: "sports" | "dpa_elections" | "newsletter" | "chessquiz" | "energy";
    /**
     * Die URL für den iFrame
     */
    url: string;
    /**
     * Die URL für nicht responsive iFrames
     */
    desktopUrl?: string;
    /**
     * Die Höhe für den iFrame
     */
    height?: number;
    /**
     * Die Höhe für nicht responsive iFrames
     */
    desktopHeight?: number;
    /**
     * Include-Modul soll in der App ausgeblendet werden
     */
    hideInApp: boolean;
    /**
     * Include-Modul soll auf der mobilen Webseite ausgeblendet werden
     */
    hideOnMobileWebsite: boolean;
    /**
     * Include-Modul soll auf der desktop Webseite ausgeblendet werden
     */
    hideOnDesktopWebsite: boolean;
  };
};

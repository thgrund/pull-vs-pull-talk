/* eslint-disable no-console */
import fs from "fs";

const filesWithInterfaces = [
  "./generated/types/models/index.ts",
  "./generated/types/apis/InternalApi.ts",
  "./generated/types/apis/RESTApi.ts",
];

const replacer = (match: string) => {
  return match.replace("{", "= {").replace("interface", "type");
};

const replaceFile = (file: string) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      return console.error({ err, data });
    }

    const result = data.replace(/(export interface.*\{|\*\W@interface.*)/gm, replacer);

    fs.writeFile(file, result, "utf8", (err) => {
      if (err) return console.error({ err });

      console.log(`Converted interfaces to types in ${file} successful`);
    });
  });
};

filesWithInterfaces.forEach((file) => replaceFile(file));

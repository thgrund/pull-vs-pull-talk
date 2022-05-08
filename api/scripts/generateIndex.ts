/* eslint-disable no-console */
import fs from "fs";

fs.writeFile("./generated/index.d.ts", 'export * from "./index";', function (err) {
  if (err) {
    console.error("There was problem with creating the index.d.ts: " + err);
  } else {
    console.info("The index.d.ts was successfully created.");
  }
});

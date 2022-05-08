import { generate } from "openapi-typescript-codegen";

generate({
  input: "./api-bundle.yaml",
  output: "./generated",
  exportModels: true,
  useUnionTypes: true,
  exportSchemas: false,
  exportCore: false,
  exportServices: false,
});

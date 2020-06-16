import { createClient } from "contentful";

const client = createClient({
  space: "lkgycv5orgtq",
  accessToken: "uiMzFbN0RG84H3k4pW1bq4psSZ22LLxxrnuJKT6IaCw"
});

const getProductById = id =>
  client.getEntry(id).then(entry => {
    return entry;
  });

export default getProductById;

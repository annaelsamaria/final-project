import { createClient } from "contentful";

const client = createClient({
  space: "lkgycv5orgtq",
  accessToken: "uiMzFbN0RG84H3k4pW1bq4psSZ22LLxxrnuJKT6IaCw"
});

const getPagesByContentType = contentType =>
  client
    .getEntries({
      content_type: contentType
    })
    .then(entries => (entries.items.length > 0 ? entries.items : []))
    .then(products => {
      return products;
    });

export default getPagesByContentType;

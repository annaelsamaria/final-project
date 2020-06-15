import { createClient } from "contentful";

const client = createClient({
  space: "lkgycv5orgtq",
  accessToken: "uiMzFbN0RG84H3k4pW1bq4psSZ22LLxxrnuJKT6IaCw"
});

const getproductById = contentType =>
  client
    .getEntry({
      content_type: contentType
    })
    .then(entry => console.log(entry))
    .catch(console.error)
    .then(product => {
      return product;
    });

export default getproductById;

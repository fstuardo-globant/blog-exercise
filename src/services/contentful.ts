import { createClient, CreateClientParams } from "contentful";

const params = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
} as CreateClientParams;

export const client = createClient(params);

import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = doc => {
  if (doc.type === "page") {
    return `/page/${doc.lang}/${doc.uid}`;
  }
  return "/";
};

export let repository = {};
export let locales = [];
/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = async (config = {}) => {
  const client = prismic.createClient(endpoint, {
    ...config,
  });
  repository = await client.getRepository();
  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });
  return client;
};

(async () => {
  const client = createClient();
  repository = await (await client).getRepository();
  locales = repository.languages.map(lang => lang.id);
})();

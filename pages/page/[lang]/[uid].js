import React from "react";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import { asText, asLink } from "@prismicio/helpers";

import { createClient, linkResolver } from "../../../prismicio";
import { components } from "../../../slices";

import { Layout } from "../../../components/Layout";

/**
 * simple page
 */
const Pages = ({ page }) => {
  return (
    <Layout>
      <Head>
        <title>{asText(page?.data.Titulo)}</title>
      </Head>
      <article>
        <SliceZone slices={page?.data.slices} components={components} />
      </article>
    </Layout>
  );
};

export const getStaticProps = async ({ params, previewData }) => {
  const client = await createClient({ previewData });
  const { uid, lang } = params;
  let page;
  let header;
  let footer;
  try {
    page = await client.getByUID("page", uid, { lang });
    header = await client.getSingle("Header", lang);
    footer = await client.getSingle("footer", lang);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      page: page || null,
      footer: footer || null,
      header: header || null,
    },
  };
};

export const getStaticPaths = async () => {
  const client = await createClient();
  const pages = await client.getAllByType("page", { lang: "*" });
  return {
    paths: pages.map(doc => asLink(doc, linkResolver)),
    fallback: true,
  };
};

export default Pages;

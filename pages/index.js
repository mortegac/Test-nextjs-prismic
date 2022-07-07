import React from "react";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { asText } from "@prismicio/helpers";
import { components } from "../slices/index";

import { Layout } from "../components/Layout";

const Home = ({ homepage, header, footer }) => {
  return (
    <Layout header={header} footer={footer}>
      <Head>
        <title>{asText(homepage?.data?.title)}</title>
      </Head>
      <SliceZone slices={homepage?.data?.slices} components={components} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const client = await createClient({ context });
  const homepage = await client.getSingle("homepage");
  const header = await client.getSingle("Header");
  const footer = await client.getSingle("footer");
  return {
    props: {
      homepage,
      header,
      footer,
    },
  };
}

export default Home;

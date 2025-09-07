import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ALX Listing App - Find Your Perfect Space</title>
        <meta name="description" content="Discover and book amazing properties. Your perfect space is just a click away with ALX Listing App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="property listing, real estate, booking, accommodation" />
        <meta property="og:title" content="ALX Listing App - Find Your Perfect Space" />
        <meta property="og:description" content="Discover and book amazing properties. Your perfect space is just a click away with ALX Listing App." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
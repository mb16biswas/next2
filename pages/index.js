import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Learning next.js" />
        <meta name="keywords" content="Escaping the matrix" />
        <meta name="author" content="MB16" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
    </>
  );
};

export default index;

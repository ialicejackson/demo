import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/footer.css";

import Layout from "@/components/Layout";

function MyAppWithLayout({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyAppWithLayout;

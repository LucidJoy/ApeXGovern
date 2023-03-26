import "@/styles/globals.css";
import { Layout } from "@/components";

import { ApeProvider } from "@/context/ApeContext";

export default function App({ Component, pageProps }) {
  return (
    <ApeProvider>
      <Component {...pageProps} />
    </ApeProvider>
  );
}

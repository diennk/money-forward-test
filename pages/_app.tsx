import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { JssProvider, createGenerateId } from "react-jss";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import { useEffect } from "react";
import { NotificationsProvider } from "@mantine/notifications";

axios.defaults.baseURL = "https://sample-accounts-api.herokuapp.com/";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <JssProvider generateId={createGenerateId()}>
        <MantineProvider>
          <NormalizeCSS />
          <GlobalStyles />
          <NotificationsProvider position="top-right">
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </JssProvider>
    </>
  );
}
export default MyApp;

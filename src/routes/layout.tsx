import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";

import Header from "../components/starter/header/header";
import Footer from "../components/starter/footer/footer";

import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

const noHeaderWhiteList: string[] = ["/home/"];
const noFooterWhiteList: string[] = ["/home/"];

export default component$(() => {
  const loc = useLocation();
  const showHeader = !noHeaderWhiteList.includes(loc.url.pathname);
  const showFooter = !noFooterWhiteList.includes(loc.url.pathname);

  useStyles$(styles);
  return (
    <>
      {showHeader && <Header />}
      <main class="h-full">
        <Slot />
      </main>
      {showFooter && <Footer />}
    </>
  );
});

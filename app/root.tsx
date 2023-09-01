import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import Providers from "./components/providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref },{ rel: "stylesheet", href: stylesheet }] : [{ rel: "stylesheet", href: stylesheet }]),
];

export default function App() {
  return (
    <html lang="en">
      <Providers>   
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className='flex flex-col overflow-x-hidden relative justify-between min-h-screen'>
        <NavBar/>
        <SideBar/>
        <div className="mt-[10vh] w-screen overflow-x-hidden">
          <Outlet />
        </div>
        <Footer/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      </Providers>
    </html>
  );
}

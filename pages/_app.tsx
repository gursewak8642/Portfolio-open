import { Navbar } from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
// import 'tailwindcss/tailwind.css'
import favicon from '../public/favicon.ico'

import Head from 'next/head';
import {ThemeProvider} from 'next-themes';

import {AnimatePresence} from 'framer-motion'
import router from "next/router";
function MyApp({ Component, pageProps,router }) {
  return ( 

      <ThemeProvider attribute="class" >
  <Head>
  <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
    

    <div className="  grid grid-cols-12 gap-6 px-5 lg:px-32 sm:px-20 md:px-32 my-14  ">
      <div className=" shadow-custom-light  col-span-12 p-4 text-center bg-white dark:bg-gray-900 lg:col-span-3 rounded-2xl text-sm">

        <Sidebar></Sidebar>
      </div>
      <div className="shadow-custom-light  col-span-12 bg-white dark:bg-gray-900 overflow-hidden lg:col-span-9 rounded-2xl flex flex-col">
      <Navbar></Navbar>

      <AnimatePresence>

        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      </div>


    </div>

    

      </ThemeProvider>
  );
}

export default MyApp;

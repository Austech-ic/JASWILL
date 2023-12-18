import '@/styles/globals.css'
import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from '../Components/Layouts/MainLayout/MainLayout'
import AdminLayout from '@/Components/Layouts/AdminLayout/AdminLayout';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const isAdminPage = Component.name.startsWith('Admin');

  const Layout = isAdminPage ? AdminLayout : MainLayout;



return (
  <ChakraProvider>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</ChakraProvider>
)
}



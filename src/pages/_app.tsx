import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from '../Components/Navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Nav />
    </ChakraProvider>
  )
}

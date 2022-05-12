import Head from 'next/head'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import { getAllProducts } from '../models/product'

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then(data => setProducts(data));
  }, [])

  return (
    <>
      <Head>
        <title>EXIT COMPUTER MANGO TWO - Layanan dan Aplikasi Web</title>
        <meta name="description" content="It is an e-commerce application that provides various computer products and accessories at competitive prices." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mx-auto max-w-6xl pt-4">
        <Banner title="Exit Computer Mangga Two" />
        <ProductList products={products} />
      </main>
    </>
  )
}

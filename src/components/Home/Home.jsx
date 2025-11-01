import React from 'react'
import Banner from '../Banner/Banner'
import RecentProducts from '../RecentProducts/RecentProducts'
const latestProducts = fetch('http://localhost:3030/latest-products').then(res =>res.json())
function Home() {
  return (
    <div>
      <Banner></Banner>
      <RecentProducts latestProducts={latestProducts}></RecentProducts>
    </div>
  )
}

export default Home

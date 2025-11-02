import React, { use } from 'react'
import ProductsCard from '../ProductsCard.jsx/ProductsCard';

function RecentProducts({latestProducts}) {
    const products = use(latestProducts);
    // console.log(products)
  return (
    <div className='my-8'>
      <h1 className='text-4xl font-bold text-center my-4'>Recent <span className='primary-color'>Products</span></h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6  w-11/12 mx-auto'>
        {
            products.map(product =><ProductsCard product={product} key={product._id}></ProductsCard>)
        }
      </div>
    </div>
  )
}

export default RecentProducts

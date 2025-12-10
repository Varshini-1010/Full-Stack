
import React from 'react'

const Products = () => {
    const products=[
      {id:1,name:"Laptop",details:"this is laptop"},
      {id: 2 ,name:"phone",details:"this is phone"},
      {id: 3 ,name:"watch",details:"this is watch"}
    ]
  return (
    <div>
      <h1>Products</h1>
    <ul>
      {products.map((p)=>(
        <li>
          <Link to={`/products/${p.id}`}>
          {p.name}
          </Link>

        </li>
      ))}
    </ul>
    </div>
  )
}

export default Products
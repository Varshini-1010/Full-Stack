
import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const products=[
       {id:1,name:"Laptop",details:"all the brands"},
      {id: 2 ,name:"phone",details:"all the brands"},
      {id: 3 ,name:"watch",details:"all the brands"}
    ]
    const {id}=useParams()
    const navigate=useNavigate()
    const product=products.find((p)=>p.id===Number(id))
  return (
    <div>
        <h1>Products Details</h1>
        <h3>Product Name:{product.name}</h3>
        <h4>Product details:{product.details}</h4>
        <button onClick={()=>navigate(-1)}>Back</button>
        
        </div>
    

  )
}

export default ProductDetails

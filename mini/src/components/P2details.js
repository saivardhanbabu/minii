import React from 'react'
import './P2details.css'
import Photo3 from '../Photo3.avif'
function P2details() {
    let Product2={
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
        rate: 4.1,
        count: 259
       },
        button:'Details'
    }
  return (
    <div>
        <div class='container'>
         
          <div class="lcontainer">
            <img class="image" src={Photo3} height="200px" width="150px"></img>
          </div>
          <div class="rcontainer">
            <h1>Description:</h1><p>{Product2.description}</p>
            <h2>Category:</h2><p>{Product2.category}</p>
            <h2>Rating:</h2><p>Rate: {Product2.rating.rate}</p>
            <p>Count: {Product2.rating.count}</p>
            </div> 
        </div>
    </div>
  )
}

export default P2details
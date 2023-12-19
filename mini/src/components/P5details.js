import React from 'react'
import Photo5 from '../Photo5.avif'
function P5details() {
  let Product6=
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400
    },
    button:'Details'
  }
return (
<div>
    <div class='container'>
     
      <div class="lcontainer">
        <img class="image" src={Photo5} height="200px" width="150px"></img>
      </div>
      <div class="rcontainer">
        <h1>Description:</h1><p>{Product6.description}</p>
        <h2>Category:</h2><p>{Product6.category}</p>
        <h2>Rating:</h2><p>Rate: {Product6.rating.rate}</p>
        <p>Count: {Product6.rating.count}</p>
        </div> 
    </div>
</div>
)
}

export default P5details
import React from 'react'
import Photo6 from '../Photo6.avif'
function P6details() {
  let Product7=
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70
    },
    button:'Details'
  }
return (
<div>
    <div class='container'>
     
      <div class="lcontainer">
        <img class="image" src={Photo6} height="200px" width="150px"></img>
      </div>
      <div class="rcontainer">
        <h1>Description:</h1><p>{Product7.description}</p>
        <h2>Category:</h2><p>{Product7.category}</p>
        <h2>Rating:</h2><p>Rate: {Product7.rating.rate}</p>
        <p>Count: {Product7.rating.count}</p>
        </div> 
    </div>
</div>
)
}

export default P6details
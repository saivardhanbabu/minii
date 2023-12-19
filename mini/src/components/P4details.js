import React from 'react'
import Photo2 from '../Photo2.webp'
function P4details() {
  let Product5=
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
    rate: 2.1,
    count: 430
  },
    button:'Details'
}
return (
<div>
    <div class='container'>
     
      <div class="lcontainer">
        <img class="image" src={Photo2} height="200px" width="150px"></img>
      </div>
      <div class="rcontainer">
        <h1>Description:</h1><p>{Product5.description}</p>
        <h2>Category:</h2><p>{Product5.category}</p>
        <h2>Rating:</h2><p>Rate: {Product5.rating.rate}</p>
        <p>Count: {Product5.rating.count}</p>
        </div> 
    </div>
</div>
)
}

export default P4details
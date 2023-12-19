import React from 'react'
import Photo4 from '../Photo4.avif'
function P3details() {
  let Product3=
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
      rate: 4.7,
      count: 500
     },
    button:'Details'
}
return (
<div>
    <div class='container'>
     
      <div class="lcontainer">
        <img class="image" src={Photo4} height="200px" width="150px"></img>
      </div>
      <div class="rcontainer">
        <h1>Description:</h1><p>{Product3.description}</p>
        <h2>Category:</h2><p>{Product3.category}</p>
        <h2>Rating:</h2><p>Rate: {Product3.rating.rate}</p>
        <p>Count: {Product3.rating.count}</p>
        </div> 
    </div>
</div>
)
}

export default P3details
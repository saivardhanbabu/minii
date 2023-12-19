import React from 'react'
import Photo from '../Photo.avif'
import { Link,useNavigate } from 'react-router-dom'
function Product1(props) {
  let navigate=useNavigate();
  let Redirect=()=>{
    navigate('/P1details')
  }
  return (
    <div>
        <img src={Photo} width="200px" height="150px" className='mx-5 rounded-circle' ></img>
        <h3>Title:</h3><p>{props.ProductObj.title}</p>
        <h3>Price:</h3><p>{props.ProductObj.price}</p>
        <button className='btn btn-success p-2' onClick={()=>{Redirect()}}>
          {props.ProductObj.button}
        </button>
    </div>
  )
}

export default Product1
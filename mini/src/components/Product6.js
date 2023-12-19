import React from 'react'
import Photo6 from '../Photo6.avif'
import { useNavigate } from 'react-router-dom'
function Product6(props) {
  let navigate=useNavigate()
  let Redirect=()=>{
    navigate('/P6details')
  }
  return (
    <div>
        <img src={Photo6} width="200px" height="150px" className='mx-5 rounded-circle' ></img>
        <h3>Title:</h3><p>{props.ProductObj.title}</p>
        <h3>Price:</h3><p>{props.ProductObj.price}</p>
        <button className='btn btn-success p-2' onClick={()=>{Redirect()}}>{props.ProductObj.button}</button>
    </div>
  )
}

export default Product6
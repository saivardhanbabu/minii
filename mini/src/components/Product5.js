import React from 'react'
import Photo5 from '../Photo5.avif'
import { useNavigate } from 'react-router-dom'
function Product5(props) {
  let navigate=useNavigate()
  let Redirect=()=>{
    navigate('/P5details')
  }
  return (
    <div>
        <img src={Photo5} width="200px" height="150px" className='mx-5 rounded-circle' ></img>
        <h3>Title:</h3><p>{props.ProductObj.title}</p>
        <h3>Price:</h3><p>{props.ProductObj.price}</p>
        <button className='btn btn-success p-2' onClick={()=>{Redirect()}}>{props.ProductObj.button}</button>
    </div>
  )
}

export default Product5
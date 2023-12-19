import React from 'react'
import Photo2 from '../Photo2.webp'
import { useNavigate } from 'react-router-dom'
function Product4(props) {
  let navigate=useNavigate()
  let Redirect=()=>{
    navigate('/P4details')
  }
  return (
    <div>
        <img src={Photo2} width="200px" height="150px" className='mx-5 rounded-circle' ></img>
        <h3>Title:</h3><p>{props.ProductObj.title}</p>
        <h3>Price:</h3><p>{props.ProductObj.price}</p>
        <button className='btn btn-success p-2' onClick={()=>{Redirect()}}>{props.ProductObj.button}</button>
    </div>
  )
}

export default Product4
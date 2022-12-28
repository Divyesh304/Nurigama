import React from 'react'

function Ser() {
    const API = `https://dummyjson.com/products/search?${props.name}`;
  return (
    <div>
        {API}
    </div>
  )
}

export default Ser
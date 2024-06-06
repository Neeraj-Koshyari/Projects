import React from 'react'

export default function graph(props) {
  return (
    <div className="container" style={{color:(props.mode === 'light')?'black':'white',}}>
      graph algo
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import sorting_img from './sorting_img.jpeg';
import graph_img from './graph_img.png';

export default function Home() {
  return (
    <>
        <div className="container my-5 d-flex justify-content-evenly">
          <Link to="Sorting_Vis"><img src={sorting_img} alt="Sorting_img" style={{height:"300px", width:"100%"}}/></Link>
          <Link to="Graph_Vis"><img src={graph_img} alt="Graph_img" style={{height:"300px", width:"100%"}}/></Link>
        </div>
    </>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';
import sorting_img from './sorting_img.jpeg';
import graph_img from './graph_img.webp';
import search_img from './search_img.avif';
import sieve_img from './sieve_img.jpeg';

export default function Home() {
  return (
    <>
        <div className="container my-5 d-flex justify-content-evenly">
          <Link to="Sorting_Vis"><img src={sorting_img} alt="Sorting_img" style={{height:"250px", width:"90%"}}/></Link>
          <Link to="Graph_Vis"><img src={graph_img} alt="Graph_img" style={{height:"250px", width:"90%"}}/></Link>
          <Link to="Search_Vis"><img src={search_img} alt="Search_img" style={{height:"250px", width:"90%"}}/></Link>
          <Link to="SievePrime_Vis"><img src={sieve_img} alt="Sieve_img" style={{height:"250px", width:"90%"}}/></Link>
        </div>
    </>
  )
}

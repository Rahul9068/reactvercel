import React from 'react';
import './Navbar.css';
import Cards from './Cards';
function Heading() {
  return (
    <>
    <div className='card'>
        <h2 className='title'>Lets Design Your Dream Workation!</h2>
        <button className='btn_fisrt'>Filter</button>
        <button className='btn_second'>Display total before tax</button>
    </div>
    <Cards/>
    </>
  )
}

export default Heading;
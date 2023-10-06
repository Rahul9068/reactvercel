// import React from 'react'
// import img1 from './images/download.jpg';
// import img2 from "./images/download (1).jpg";
// import img3 from "./images/440988006.jpg";
// import img4 from "./images/ThinkstockPhotos-484389570.webp";
// import './Navbar.css';

// function Cards() {
//   return (
//     <div className='main_card'>
//       <div className='card_first'> <img src={img1}></img>
//         <p className='place'>Dehradun, India</p>
//         <p className='view'>Mountain View</p>
//         <p className='rupee'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_second'><img src={img2}></img>
//         <p className='place_first'>Shimla, India</p>
//         <p className='view_first'>Mountain View</p>
//         <p className='rupee_first'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_third'><img src={img3}></img>
//         <p className='place_sec'>Masoori, India</p>
//         <p className='view_sec'> Mountain View</p>
//         <p className='rupee_sec'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_forth'><img src={img4}></img>
//         <p className='place_thir'>Guwahati, India</p>
//         <p className='view_thir'>Mountain View</p>
//         <p className='rupee_thir'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_fifth'><img src={img2}></img>
//         <p className='place_for'> Jibhi, India</p>
//         <p className='view_for'>Mountain View</p>
//         <p className='rupee_for'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_sixth'><img src={img1}></img>
//         <p className='place_for'>Dehradun, India</p>
//         <p className='view_fif'>Mountain View</p>
//         <p className='rupee_for'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_seventh'><img src={img3}></img>
//         <p className='place_for'>Dehradun, India</p>
//         <p className='view_fif'>Mountain View</p>
//         <p className='rupee_for'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_eighth'><img src={img4}></img>
//         <p className='place_for'>Sanjh, India</p>
//         <p className='view_sev'>Mountain View</p>
//         <p className='rupee_for'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_ninth'><img src={img1}></img>
//         <p className='place_for'>Gajhan, India</p>
//         <p className='view_eig'>Mountain View</p>
//         <p className='rupee_for'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_tenth'><img src={img2}></img>
//         <p className='place_for'>Dehradun, India</p>
//         <p className='view_nin'>Mountain View</p>
//         <p className='rupee_for'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_eleventh'><img src={img4}></img>
//         <p className='place_for'>Shimla, India</p>
//         <p className='view_ten'>Mountain View</p>
//         <p className='rupee_for'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//       <div className='card_twelth'><img src={img3}></img>
//         <p className='place_for'>Kasol, India</p>
//         <p className='view_ele'>Mountain View</p>
//         <p className='rupee_for'>Rupee 5000/night</p>
//         <p className='rate'>5.0</p>
//       </div>
//     </div>
//   )
// }

// export default Cards

import React, { useState } from 'react';

 import img1 from './images/download.jpg';
 import img2 from "./images/download (1).jpg";
 import img3 from "./images/440988006.jpg";
 import img4 from "./images/ThinkstockPhotos-484389570.webp";
import './Navbar.css';

function Cards() {
  const [showMenu, setShowMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  // const [hideCard, setHide]
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleHideMenu =()=>{
    setHideMenu(!hideMenu);
  }


  return (
    <div className='main_card'>
      <div className='card_first' onClick={toggleHideMenu}>
        <img src={img1} onClick={toggleMenu} alt="Image 1" />
        <div className={`menu-bar ${showMenu ? 'open' : ''}`}>
          <div className='menu-content'>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Page Heading
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Designer Work
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Case Study
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 67
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Group 50
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Group 46
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Group 44
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Group 49
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Group 45
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Group 41
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Frame 104
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 31
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' />
              Rectangle 29
            </label>
            {/* Add more checkboxes as needed */}
          </div>
        </div>
        <p className='place'>Dehradun, India</p>
        <p className='view'>Mountain View</p>
        <p className='rupee'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      {/* Rest of your card divs */}
      <div className='card_second'><img src={img2}></img>
        <p className='place_first'>Shimla, India</p>
        <p className='view_first'>Mountain View</p>
        <p className='rupee_first'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_third'><img src={img3}></img>
        <p className='place_sec'>Masoori, India</p>
        <p className='view_sec'> Mountain View</p>
        <p className='rupee_sec'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_forth'><img src={img4}></img>
        <p className='place_thir'>Guwahati, India</p>
        <p className='view_thir'>Mountain View</p>
        <p className='rupee_thir'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_fifth'><img src={img2}></img>
        <p className='place_for'> Jibhi, India</p>
        <p className='view_for'>Mountain View</p>
        <p className='rupee_for'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_sixth'><img src={img1}></img>
        <p className='place_for'>Dehradun, India</p>
        <p className='view_fif'>Mountain View</p>
        <p className='rupee_for'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_seventh'><img src={img3}></img>
        <p className='place_for'>Dehradun, India</p>
        <p className='view_fif'>Mountain View</p>
        <p className='rupee_for'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_eighth'><img src={img4}></img>
        <p className='place_for'>Sanjh, India</p>
        <p className='view_sev'>Mountain View</p>
        <p className='rupee_for'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_ninth'><img src={img1}></img>
        <p className='place_for'>Gajhan, India</p>
        <p className='view_eig'>Mountain View</p>
        <p className='rupee_for'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_tenth'><img src={img2}></img>         <p className='place_for'>Dehradun, India</p>
        <p className='view_nin'>Mountain View</p>
        <p className='rupee_for'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
      <div className='card_eleventh'><img src={img4}></img>
        <p className='place_for'>Shimla, India</p>
        <p className='view_ten'>Mountain View</p>
        <p className='rupee_for'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>       </div>       <div className='card_twelth'><img src={img3}></img>
        <p className='place_for'>Kasol, India</p>
        <p className='view_ele'>Mountain View</p>
        <p className='rupee_for'>Rupee 5000/night</p>
        <p className='rate'>5.0</p>
      </div>
    </div>
  );
}

export default Cards;

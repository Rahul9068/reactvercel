import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Navbar.css'
import icon from './user.svg';
import icon1 from './search.svg';
import Heading from "./Heading";
const Navbar = () => {
  // State variables
  const [location, setLocation] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  // List of countries (you can replace this with a more extensive list)
  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    // Add more countries here
  ];

  // Event handler for input change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Event handler for country selection
  const handleCountrySelect = (e) => {
    setSelectedCountry(e.target.value);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Event handler for date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const [numMembers, setNumMembers] = useState(0);
  const [members, setMembers] = useState([]);

  // List of options for the dropdown
  const options = [0, 1, 2, 3, 4, 5]; // Add more options as needed

  // Event handler for changing the number of members
  const handleNumMembersChange = (e) => {
    const newNumMembers = parseInt(e.target.value, 10);
    setNumMembers(newNumMembers);
  };

  // Event handler for adding members
  const handleAddMember = () => {
    if (members.length < numMembers) {
      setMembers([...members, `Member ${members.length + 1}`]);
    }
  };
  return (
    <div className='conatiner'>
      <div className='main'>
      <h2 className='logo'>WORKATION</h2>
      <label htmlFor="countryDropdown"></label>
      <select className='location'
        id="countryDropdown"
        value={selectedCountry}
        onChange={handleCountrySelect}
      >
        <option value="">Location</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      {/* //date section */}

      <div >
        <input className='date' 
          type="text"
          id="dateInput"
          value={selectedDate ? selectedDate.toDateString() : ''}
          readOnly
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          placeholder="Select a date"
        />
        {isCalendarOpen && (
          <div className="calendar-dropdown">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
          </div>
        )}
      </div>
      {/* add member */}
      <div className='items'>
        <label htmlFor="numMembersDropdown" placeholder='Add Member'></label>
        <select className='add_member'
          id="numMembersDropdown"
          value={numMembers}
          onChange={handleNumMembersChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* <button onClick={handleAddMember} className='num'>Add Member */}
        {/* <div>
          {members.map((member, index) => (
            <div key={index}>{member}</div>
          ))}
        </div>  */}
        {/* </button> */}
        
       
      </div>
      <div className="search-box">
        {/* <input
          type="text"
          placeholder="Search..."
          className="search-input"
        /> */}
        <span className='search_btn'><img src={icon1} className='search_img'/></span>

      </div>
      <span className='user_btn'><img src={icon} className='user_img'/></span>
      </div>
      
    <Heading/>
    </div>
  );
};

export default Navbar;

import React from 'react';

const Navbar = ({toggleDisplay}) => {
  return (
    <div className='navbar'>
       <h3>Color Flipper</h3>
       <div className='nav'>
        <p onClick={toggleDisplay}>Simple</p>
        <p onClick={toggleDisplay}>Hex</p>
       </div>
    </div>
  );
}

export default Navbar;

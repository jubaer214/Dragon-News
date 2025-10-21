import React from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5 mt-8'>
            <img className='' src={logo} alt="" />
            <p>Journalism without fear or favour</p>
        </div>
    );
};

export default Header;
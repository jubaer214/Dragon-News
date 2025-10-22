import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5 mt-8'>
            <img className='' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-semibold'>{ format(new Date(),"EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../../images/cryptoverseWeb3.png';

const Footer = () => {
    return (
        <div className={"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer"}>
            <div className="sm:w-[90%] w-full h-[1.25px] eth-card m-5 "/>
            <div className={"sm:w-[90%] w-full flex justify-between items-center"}>
                <img src={logo} alt="Crypto Central logo" className={"w-60"}/>
                
               
            </div>
        </div>
    );
};

export default Footer;

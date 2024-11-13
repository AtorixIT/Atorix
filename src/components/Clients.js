import React from 'react';
import kws from '../images/clients/Advetfly.svg';
import geps from '../images/clients/Binstellar.png';
import protergia from '../images/clients/Brihati.png';
import epn from '../images/clients/EPN.png';
import pro from '../images/clients/protergia.png';
import VPT from '../images/clients/VPTechnoLabsFinal.png';
import WebSeede from '../images/clients/WebSeede.png';
import NXI from '../images/clients/NXI.png';
import Form6 from '../images/clients/Form6.png';
import SFMS from '../images/clients/SFMS.png';
const marqueeContainer = {
  display: 'flex',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
};

const marqueeItem = {
  display: 'inline-block',
  animation: 'marquee 25s linear infinite',  // Slowed down the animation
  marginRight: '3rem',  // Increased space between logos
  flexShrink: 0  // Prevents logos from shrinking or behaving differently
};

const clientImage = {
  height: '8rem',  // Fixed height
  width: '8rem',  // Fixed width to keep logos uniform
  objectFit: 'contain',  // Ensures logo fits well within the container
  mixBlendMode: 'colorBurn',
  opacity: '0.5',
  transition: 'opacity 0.3s ease-in-out'
};

const keyframes = `
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}`;

const Clients = () => {
  return (
    <div className="mt-8 bg-gray-100">
      <style>
        {keyframes}
      </style>
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
          <div className='flex justify-center'>
            <div className='w-24 border-b-4 border-blue-900'></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
        </div>
        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div style={marqueeContainer}>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={kws} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={protergia} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={geps} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={epn} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={pro} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={VPT} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={WebSeede} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={NXI} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={Form6} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
            <div style={marqueeItem} className="overflow-hidden flex justify-center">
              <img src={SFMS} alt="client" style={clientImage} className="hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;

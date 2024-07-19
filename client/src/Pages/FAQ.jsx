import React, { useEffect, useState } from 'react';

export const FAQ = () => {
  const [activeSection, setActiveSection] = useState('section1');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('.section');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#E6F4FF] h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-[#0F48BE] text-[5vw] md:text-6xl mb-5">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="bg-white p-5" style={{ width: '1500px', height: '800px' }}>
        <div className="container mx-auto flex">
          <nav className="w-full sm:w-1/4 bg-gray-200 p-4" id="myScrollspy">
            <ul className="space-y-2">
              <li className="nav-item">
                <a
                  className={`block px-4 py-2 rounded ${activeSection === 'section1' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'}`}
                  href="#section1"
                >
                  Account Management
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`block px-4 py-2 rounded ${activeSection === 'section2' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'}`}
                  href="#section2"
                >
                  Booking Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`block px-4 py-2 rounded ${activeSection === 'section3' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'}`}
                  href="#section3"
                >
                  Cancellation
                </a>
              </li>
              <li className="nav-item dropdown relative">
                <a className="block px-4 py-2 text-blue-500 hover:bg-blue-100 cursor-pointer">Refund</a>
                <div className="dropdown-menu bg-white shadow-lg mt-2 absolute z-10 hidden">
                  <a className="block px-4 py-2 text-blue-500 hover:bg-gray-200" href="#section41">Link 1</a>
                  <a className="block px-4 py-2 text-blue-500 hover:bg-gray-200" href="#section42">Link 2</a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="w-full sm:w-3/4 p-4 space-y-8">
            <div id="section1" className="section bg-green-500 p-8 text-white">    
              <h1 className="text-3xl">Section 1</h1>
              <p>Try to scroll this section and look at the navigation list while scrolling!</p>
            </div>
            <div id="section2" className="section bg-yellow-500 p-8 text-white"> 
              <h1 className="text-3xl">Section 2</h1>
              <p>Try to scroll this section and look at the navigation list while scrolling!</p>
            </div>        
            <div id="section3" className="section bg-gray-700 p-8 text-white">         
              <h1 className="text-3xl">Section 3</h1>
              <p>Try to scroll this section and look at the navigation list while scrolling!</p>
            </div>
            <div id="section41" className="section bg-red-500 p-8 text-white">         
              <h1 className="text-3xl">Section 4-1</h1>
              <p>Try to scroll this section and look at the navigation list while scrolling!</p>
            </div>      
            <div id="section42" className="section bg-blue-300 p-8 text-white">         
              <h1 className="text-3xl">Section 4-2</h1>
              <p>Try to scroll this section and look at the navigation list while scrolling!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

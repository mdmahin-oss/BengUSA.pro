'use client';
import "./style.css";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function StickyScrollSection() {
  const leftScrollRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      const leftEl = leftScrollRef.current;
      if (!leftEl) return;

      const delta = e.deltaY;
      const scrollTop = leftEl.scrollTop;
      const scrollHeight = leftEl.scrollHeight;
      const clientHeight = leftEl.clientHeight;

      const tolerance = 2;
      const atTop = scrollTop <= tolerance;
      const atBottom = scrollTop + clientHeight >= scrollHeight - tolerance;

      const scrollingDown = delta > 0;
      const scrollingUp = delta < 0;

      const shouldScrollLeft =
        (scrollingDown && !atBottom) || (scrollingUp && !atTop);

      if (shouldScrollLeft) {
        e.preventDefault(); // Block page scroll only if left can scroll
        leftEl.scrollTop += delta;
      }
      // Else: do nothing → allow normal page scroll
    };

    const rightPanel = rightPanelRef.current;
    if (rightPanel) {
      rightPanel.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (rightPanel) {
        rightPanel.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="lg:relative lg:h-[855px] lg:flex h-[full] md:h-[full]">
      {/* Scrollable Left */}
      <div
        ref={leftScrollRef}
        className="lg:w-1/2 h-[full] overflow-y-auto p-4 bg-gradient-to-r from-blue-950 to-slate-800 scrollbar-hidden hidden lg:block"
      >
        <h2 className="font-bold text-lg mb-2">Left (Scrollable)</h2>
        <div className="space-y-3">
          {/* {Array.from({ length: 50 }).map((_, i) => (
            <p key={i}>Line {i + 1}</p>
          ))} */}
        <div className='h-755 pt-5 lg:h-670 bg-gradient-to-r from-blue-950 to-slate-800 text-white '>
          <div className=' ml-10 lg:ml-50 w-70 lg:w-100 bg-blue-950 lg:mt-8 lg:mr-65 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:white-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-120'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight'>
              Custom Web Design
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            Each website we create is meticulously crafted to deliver a 100%
            unique online experience tailored to your brand. Our expert
            designers transform your vision into a dynamic, custom design that
            enhances your brand’s visibility, boosts engagement, and drives
            conversions. With us, your website will not only stand out but also
            connect deeply with your audience.{' '}
          </p>
        </div>


       <br/>

       <div className=' ml-10 lg:ml-50 w-70 lg:w-100 lg:mt-15 lg:mr-65 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >0
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight text-white-900 dark:text-white'>
              Responsive Web Design
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            We deliver seamless user experiences across all devices. Our
            responsive designs adapt flawlessly to any screen size, ensuring
            that your website not only meets but exceeds user expectations. From
            planning to design and development, we ensure a consistent, engaging
            experience for every visitor, no matter how they access your site.
          </p>
        </div>

        <br/>


        <div className='ml-10 lg:ml-50 w-70 lg:w-100 bg-blue-950 lg:mt-15 lg:mr-65 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight '>
              UX/UI Web Design
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            Our award-winning designers use trusted methods and innovative
            approaches to create engaging visual experiences and seamless user
            journeys. Whether you’re looking to build a custom UX/UI or redesign
            your current one, we’ll enhance your visual identity and ensure your
            website is both aesthetically pleasing and highly functional.
          </p>
        </div>
     <br/>


     <div className='ml-10  lg:ml-50 w-70 lg:w-100 bg-blue-950 lg:mt-15 lg:mr-65  max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight '>
              eCommerce Design & Development
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            We specialize in design and development for leading content
            management systems (CMSs) like Shopify, Magento, and WooCommerce.
            Our experts can help you build and scale your eCommerce website
            across platforms, ensuring a seamless and robust online shopping
            experience for your customers.{' '}
          </p>
        </div>
         <br/>

         <div className='ml-10  lg:ml-50 w-70 lg:w-100 bg-blue-950 lg:mt-15 lg:mr-65  max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight '>
              Website Redesign
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            Whether you need a design refresh or a complete website overhaul, we
            analyze your site’s pain points and opportunities to revitalize your
            digital presence. Our award-winning web designers will breathe new
            life into your website, enhancing its functionality, user
            experience, and aesthetic appeal. The result? A modern, dynamic site
            that drives increased traffic and bolsters your industry reputation.{' '}
          </p>
        </div>
   <br/>


    <div className='ml-10 lg:ml-50 w-70 lg:w-100 lg:pt-8 bg-blue-950 lg:mt-15 lg:mr-65 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight '>
              Search Engine Optimization
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            We offer a comprehensive range of services designed to boost your
            website’s ranking and attract organic, non-paid Google search
            traffic. Our team can conduct a thorough SEO audit of your website,
            providing actionable insights and strategies to enhance your organic
            reach and visibility on search engines.
          </p>
        </div>



        </div>


        </div>
      </div>

      {/* Sticky Right */}
      <div
        ref={rightPanelRef}
        className="lg:w-1/2 lg:p-10 pt-10 md:h-[full] bg-white bg-gradient-to-r from-blue-950 to-slate-800"
      >

<p className='ml-15 lg:pt-4 lg:ml-30 md:h-[full] md:text-center text-3xl text-cyan-600'>
            WHY DIGITAL SILK?
          </p>
          <h1 className=' font-bold mb-6 ml-15 lg:pt-3 lg:ml-30 md:text-center text-4xl lg:text-4xl text-white'>
            Discover Our <br />
            Expertise as a Web <br />
            Design Company
          </h1>
          <p className='ml-10 pr-5 lg:pr-0 pt-5 lg:pt-8 lg:ml-30 md:m-8 md:text-center text-bold text-md lg:text-xl text-white'>
            As a full-service web design agency, we handle all your
            digital needs under one roof. Our custom web 
            design services include thorough research and planning,
            bespoke designs and digital strategies tailored to grow  your
            reach, drive traffic and encourage engagement.
          </p>
            <Image
                      className='ml-15 lg:ml-75 xl:ml-50 xl:w-55 mt-8 rounded-xl md:ml-60 lg:w-60'
                      src='/images/dummy2.jpg'
                      alt='Picture of the author'
                      width={300}
                      height={200}
                    />

      <br/>
      <br/>
      </div>
    </div>
  );
}

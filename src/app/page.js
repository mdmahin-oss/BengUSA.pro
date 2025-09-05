'use client';
import Image from 'next/image';
import ClientLogos from "./components/ClientLogos";
import Featured from './components/Featured';
import { useState, useRef, useEffect } from "react";
import Modal from "./components/Modal"
import Scroll from './components/Scroll';
import LeftToRight from './components/LeftToRight'
// import Check from './components/Check';

export default function Home() {
   const [isModalOpen, setModalOpen] = useState(false);


  return (
  <>

<div className="bg-[url('/images/dummy3.jpg')] bg-cover bg-center">
      <div className=' lg:h-170 h-150 '>
        <p className='pt-40 text-center lg:pt-20 lg:mt-15 lg:text-3xl text-white text-lg font-medium '>
          Premium Web Design Agency
        </p>
        <p className='pt-4 text-center text-white lg:text-7xl text-4xl font-bold gap-3'>
          WE GROW <br /> BRANDS  ONLINE
        </p>
        <p className='pt-4 text-center  text-white text-lg font-medium '>
          Custom Websites, Brading & Digital Marketing{' '}
        </p>
        <br/>
        <p className='flex flex-col items-center '>
        <button
         onClick={() => setModalOpen(true)}
          type='button'
          className='cursor-pointer text-xl text-black bg-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded '
        >
          Explore All Services
        </button>
</p>
         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          
        <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-sky-400">This Section is not complete yet</h2>
        <p className='text-blue-600 dark:text-sky-400'>Stay connected with us to get the best service</p>
        </Modal>
        <div className=' mt-10 flex items-center justify-center'>
          <div className=' text-white lg:text-xl text-sm'>
            5 star design review <br />
            🎇 | ⭐⭐⭐⭐⭐
          </div>
          <p className=' lg:ml-20 ml-5 text-white lg:text-xl text-sm'>
            Best Digital Agency of 2024 <br />
            Forbes
          </p>
        </div>
        <br/>
      </div>
</div>

<ClientLogos />
      <div className='lg:pt-15 pt-10 bg-gradient-to-r from-slate-900 to-slate-900 text-white lg:h-full h-360'>
        
        <p className=' ml-4 md:ml-20 lg:ml-60 lg:mt-8 lg:text-4xl text-3xl lg:font-bold'>
          {' '}
          Creative Web Agency  delivering <br /> Custom Solutions
        </p>
        <p className='pt-8 ml-4 lg:ml-60 md:ml-20 lg:mt-8 lg:text-xl font-bold'>
          {' '}
          ✔ Custom Web Design Solutions{' '}
          <span className='text-blue-300'>
            {' '}
            To <br /> Drive Conversions{' '}
          </span>{' '}
        </p>
        <p className='ml-4 lg:ml-60 md:ml-20 lg:mt-8 mt-5 lg:text-xl font-medium'>
          {' '}
          ✔ Effective Marketing Campaigns{' '}
          <span className='text-blue-300'>
            {' '}
            To <br /> Generate Growth{' '}
          </span>{' '}
        </p>
        <p className=' ml-4 lg:ml-60 md:ml-20 mt-5 lg:text-xl font-medium'>
          {' '}
          ✔ Tailored Branding Strategies{' '}
          <span className='text-blue-300'> <br/> To Drive Engagement </span>{' '}
        </p>
        <p className='lg:w-1/2 ml-4 lg:ml-60 md:ml-20 lg:text-xl mt-5 text-lg md:m-10'>
          Digital Silk is a web design company & digital marketing agency
          focused on growing brands online. We create effective brand
          strategies, custom web design, development, and digital
          marketing solutions to generate greater brand engagement and
          conversions.
          We work closely with our clients to ensure each project meets
          their brand guidelines and
          business goals and provide technical and marketing expertise to ensure
          optimal results.
        </p>

        <div  className=' lg:ml-60 mt-8 text-2xl lg:bg-gradient-to-r from-purple-600 to-slate-900 border-top-left-5'> 
         <div className=" flex justify-center lg:justify-start items-center rounded-lg">
    <video width="320" height="240" controls preload="none">
      <source src="/vid1.mp4" type="video/mp4" />
      <track
        src="/public/vid1.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      <p > See Our Work In action <br />1 minute </p>
    </video>  
      </div>
        </div>
        <div className='text-center lg:text-left '>
        <Image
          className='mt-10 lg:ml-17 inline-block rounded-2xl lg:absolute lg:top-250 lg:right-30 md:w-1/2 lg:w-70 '
          src='/images/dummy2.jpg'
          alt='Picture of the author'
          width={250}
          height={350}
        />
        </div>
        <br/>
      </div>

      <div className='bg-gradient-to-r from-blue-950 to-slate-800 lg:h-70 text-white text-center'>
        <h1 className='pt-8 text-2xl'> OUR WORK</h1>
        <h1 className='pt-2 text-4xl lg:pt-5 lg:text-5xl '>
          Featured Website <span className=''> Design Projects </span>
        </h1>
        <p className='pt-5 lg:pt-5 text-2xl'>
          {' '}
          Custom B2C, B2B and eCommerce solutions <br />
          optimized for traffic, engagement and conversion.
        </p>
        <br/>
      </div>
       <Featured />

      <div className='lg:pt-8 bg-gradient-to-r from-slate-900 to-slate-900 text-white lg:h-190 h-190 text-center'>
        <h5 className='pt-8 text-2xl text-cyan-600'> Clients Across Industries </h5>
        <h1 className='pt-8 text-5xl lg:text-5xl'>Full-Service Web Design Agency</h1>
        <p className='pt-8 text-xl lg:text-2xl'>From startups to Fortune 500 companies,</p>
        <h3 className='pt-3 text-xl lg:text-3xl'>
          we create custom solutions that grow brands online
        </h3>


        <br/>
        <br/>
<ClientLogos />
<LeftToRight />
        <button
         onClick={() => setModalOpen(true)}
          type='button'
          className='cursor-pointer mt-14 lg:mt-15 lg:ml-25 lg:text-4xl text-bold text-white bg-gradient-to-r from-slate-600 via-slate-600 to-slate-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '
        >
          Explore All Services
        </button>
         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>
      </div>

 <Scroll />

      <div className=" bg-[url('../../public/images/dummy3.jpg')] bg-cover bg-center w-full lg:h-185 ">
        <p className='text-center text-2xl xl:text-3xl pt-8 lg:absolute lg:right-0 lg:mr-30 lg:text-4xl text-white lg:pt-25'>
          From Concept To Market: <br />
          We Engineer Projects{' '}
          <span className='text-blue-400'> For Superior Performance </span>
        </p>
        <p className='text-center text-2xl pt-4 lg:absolute lg:right-0 lg:mr-30 lg:text-xl text-white lg:pt-55'>
          HP needed to implement a global <br /> rewards program We Engineer
          Projects For Superior Performance
        </p>
        <p className='text-center text-3xl pt-5 lg:absolute lg:right-0 lg:mr-100 lg:text-xl  text-white lg:pt-75'>
          {' '}
          <span className=' text-blue-400'>In 6 months,</span> we achieved:
        </p>

        <div>
          <p className=' xl:mr-150 text-center text-7xl pt-5 lg:text-7xl xl:text-7xl text-blue-400 lg:absolute lg:right-0 lg:mr-180 lg:pt-85'>
            40k
          </p>
          <p className='xl:mr-135 xl:pt-110 text-center text-2xl pt-2 text-white lg:absolute lg:right-0 lg:mr-180 lg:pt-120'>
            Active members <br /> inside the program
          </p>
        </div>
        <button
          type='button'
           onClick={() => setModalOpen(true)}
          className='cursor-pointer ml-18 text-xl lg:ml-120 md:ml-62 lg:absolute lg:mt-150 xl:mt-140 xl:ml-118 text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 lg:font-medium rounded-lg lg:text-xl px-5 py-2.5 lg:me-2 lg:mb-2'
        >
          READ HP CASE STUDY ▶
        </button>
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>

        <div>
          <p className='text-center text-7xl pt-5 lg:text-7xl xl:text-7xl text-blue-400 lg:absolute lg:right-0 lg:mr-75 lg:pt-85'>
            56%
          </p>
          <p className='text-center xl:pt-110 text-2xl pt-2 text-white lg:absolute lg:right-0 lg:mr-75 xl:mr-65 lg:pt-120 lg:text-xl'>
            of customers are <br /> repeat customers
          </p>
        </div>
        <button
          type='button'
           onClick={() => setModalOpen(true)}
          className='cursor-pointer ml-18 text-xl lg:ml-225 xl:ml-205  md:ml-62 lg:absolute lg:mt-150 xl:mt-140 text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 lg:font-medium rounded-lg lg:text-xl px-5 py-2.5 lg:text-center lg:me-2 lg:mb-2'
        >
          READ HP CASE STUDY ▶
        </button>
         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>

        <div className='bg-cover bg-center relative text-white h-full w-72 xl:ml-10'>
          <div className='ml-16 xl:ml-10 md:ml-10 h-full w-full px-6 py-10 space-y-10'>


            <div className='flex justify-center lg:pt-25  '>
              <Image
                src='/images/xerox.png'
                alt='Xerox'
                width={75}
                height={10}
              />
            </div>
            <div className='border-t border-white/50 w-full'></div>

            <div className='flex justify-center'>
              <Image src='/images/miami.gif' alt='doForms' width={75} height={10} />
            </div>
            <div className='border-t border-white/50 w-full'></div>

            <div className='flex justify-center'>
              <Image
                src='/images/field.png'
                alt='FieldEdge'
                width={75}
                height={10}
              />
            </div>
            <div className='border-t border-white/50 w-full'></div>

            <div className='flex justify-center'>
              <Image
                src='/images/miami.gif'
                alt='Miami Country Day School'
                width={75}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='relative bg-gray-900 text-white'>
        {/* <div className=' inset-0'> */}
         
          <div className='absolute inset-0 bg-gradient-to-r from-slate-800 via-transparent to-gray-900 opacity-80'></div>
        {/* </div> */}

        <div className='relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center'>
          <div className='md:w-1/3 mb-10 md:mb-0'>
            <div className='flex items-center space-x-2'>
              <svg
                className='w-8 h-8 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              ></svg> 
              <span className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                   <Image
            className='col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1'
            src='/images/svg/bengusaicon.svg'
            alt='Statamic'
            width='158'
            height='65'
          />
                WHAT OUR CLIENT LOVE ABOUT OUR WORK
              </span>
              
            </div>
          </div>

          <div className='md:w-2/3 md:m-8'>
            <blockquote className='text-lg lg:text-xl font-medium leading-relaxed'>
              digital silk is not just a company - they are a team of experts
              who turn visions into digital realities with unparalleled
              expertise, enthusiasm, and creativeness.{' '}
            </blockquote>
            <div className='mt-6'>
              <p className='font-semibold'>Judith Black</p>
              <p className='text-gray-300'>CEO of Workcation</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[url('../../public/images/dummy3.jpg')] bg-cover bg-center w-full h-full lg:h-full">
        <div className='text-white justify-center text-center text-bold md:u-5'>
          <p className='text-4xl md:text-3xl  lg:pt-15 pt-5 p-5'>
            Custom Web Design Pricing For{' '}
            <span className='text-cyan-600'>Each Client’s Objectives </span>
          </p>
          <p className='pt-5 lg:text-2xl text-xl p-2 md:m-6'>
            Every website design project comes with unique challenges and
            specific requirements that influence its final cost. A simple
            project typically ranges from  $25,000 to $30,000, while more
            complex endeavors can reach $50,000 to $60,000 or more. {' '}
            <br/>
            The technical setup of your website, which directly impacts its
            performance, is a key  factor in determining cost. More
            complex setups that demand significant time and effort  will
            naturally increase the overall price.
          </p>
        </div>
        <br/>
        <div className='flex justify-center mt-6 lg:mt-5 mb-2'>
        <button
          type='button'
           onClick={() => setModalOpen(true)}
          className='text-white bg-gradient-to-r from-slate-600 via-slate-600 to-slate-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 flex items-center justify-center lg:text-4xl'
        >
          CALCULATE YOUR WEBSITE
        </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>

        <div className="px-4 py-10 mt-16 text-white max-w-screen-xl mx-auto">
  <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <div>
      <p className="text-md lg:text-base text-justify">
        <span className="block text-blue-400 text-xl lg:text-xl mb-1">
          Your choice of platform
        </span>
        also plays a role in the cost. Templated solutions are more affordable, while developing a fully custom site will increase the project’s total expense.
      </p>
    </div>

    <div>
      <p className="text-md lg:text-base text-justify">
        <span className="block text-blue-400 text-xl lg:text-xl mb-1">
          Custom graphic elements
        </span>
        are essential for enhancing your web presence. The more complex the design requirements, the higher the overall cost will be.
      </p>
    </div>

    <div>
      <p className="text-md lg:text-base text-justify">
        <span className="block text-blue-400 text-xl lg:text-xl mb-1">
          launching your website
        </span>
        you’ll want to outperform competitors in search engine rankings and secure top positions in your industry.
      </p>
    </div>

    <div>
      <p className="text-md lg:text-base text-justify">
        <span className="block text-blue-400 text-xl lg:text-xl mb-1">
          Platform impact pricing
        </span>
        Templated solutions are cost-effective, while custom-built sites significantly raise the total project budget.
      </p>
    </div>
  </div>
</div>

        <br />
        <br />
      </div>

      <main className="bg-[#f2f6fe] py-16 px-4 sm:px-10 text-[#1a1a1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-blue-700 uppercase mb-2 tracking-wider">
            Finding & Working With The
          </h3>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Best Web Design Agency
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-6">
          <p className="text-lg font-semibold text-blue-600 leading-relaxed">
            Whether starting a brand from the ground up or overhauling your
            current website, working with a website design agency gives you
            access to the top experts in web design.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            In turn, these experts have access to leading tools, modern
            trends, best practices and more to help ensure that your website
            is not only unique but built to perform — if you find the right
            agency, that is. Not all agencies are created equal.
            <br />
            <br />
            We’ll breakdown exactly what to look for in a partner to help you
            choose the best website design agency for your project.
          </p>
        </div>

      </div> 
    </main>

<section className="bg-white text-gray-800 py-12 px-4 sm:px-10 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
        How To Find The Best Web Design Company
      </h2>
      <p className="mb-6 text-base">
        Follow the step-by-step guide below to kickstart your search and learn
        how to evaluate potential web design companies to partner with your brand.
      </p>

      {/* Step 1 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 1: Define Your Needs</h3>
        <p className="mb-4">
          Before you start the hunt, the first step is to fully define your needs. Here are key areas to consider:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Design needs:</strong> Are you looking to build a new website from the ground up? Or do you have a current digital presence that needs either a light refresh or a complete overhaul?
          </li>
          <li>
            <strong>Design approach:</strong> Are you satisfied to settle for an agency that works with templates or do you need an agency that designs custom websites?
          </li>
          <li>
            <strong>Website goals:</strong> What are your specific goals for the website? For example: higher search engine ranking, more traffic, greater engagement, increased conversions.
          </li>
          <li>
            <strong>Website requirements:</strong> What are your specific requirements for the website? Do you have a platform in mind?
          </li>
        </ul>
        <p className="mb-2">
          Creating a <span className="font-semibold">website request for proposal (RFP)</span> document can help you organize and outline your project for potential agencies.
        </p>
      </div>

      {/* Step 2 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 2: Start Your Search</h3>
        <p>
          The best way to find an agency for your digital project is, of course, online! Use a search engine or check out a B2B marketplace like <span className="text-blue-600 font-medium">DesignRush</span> — you can actually post your RFP here and wait for a bid, or search agencies and reach out to a few on your own.
        </p>
      </div>

      {/* Step 3 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 3: Research & Shortlist Agencies</h3>
        <p className="mb-4">
          Whether you use a marketplace or Google to find potential partners, the next step is thorough research. For each agency you’re interested in, explore the agency’s:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Website:</strong> For an agency that you’re considering partnering with, a professional website design is a must.
          </li>
          <li>
            <strong>Services:</strong> Some agencies focus on niche areas like web design or branding, while full-service agencies offer an entire scope of digital services.
          </li>
          <li>
            <strong>Portfolio:</strong> Any reputable agency will have a <span className="font-medium">digital portfolio</span> easily accessible and available for potential clients to view.
          </li>
          <li>
            <strong>Client testimonials:</strong> Get a feel for what it’s like to work with the agency through testimonials.
          </li>
        </ul>
        <p>
          Shortlist agencies based on these factors and create a list of 3–5 agencies to set up a meeting with — which brings us to the next step!
        </p>
      </div>

      {/* Step 4 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 4: Meet With The Agency(s)</h3>
        <p className="mb-4">
          Meeting with your potential partner, whether in person or digitally, allows you to get to know the team members who will be working on your project and ask questions about what the agency’s processes look like behind the scenes.
        </p>
        <p className="mb-2">Some questions to ask when hiring a professional web design agency include:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>What sets you apart from other agencies?</li>
          <li>What digital services do you offer in addition to web design?</li>
          <li>Do you have experience working with clients in my industry?</li>
          <li>What does your website design process look like?</li>
          <li>What does your website development process look like?</li>
          <li>Who are the team members that will be working on my project?</li>
          <li>Will you provide recommendations and ideas for my site?</li>
          <li>What will our partnership look like in terms of communication and project updates?</li>
          <li>How much will my project cost and how long will it take to complete?</li>
          <li>How do you measure results?</li>
        </ul>
        <p className='lg:mt-10 lg:text-xl'>These questions will help give you an inside look into the experience of the agency’s team members, the value that the agency offers and what your relationship with the agency will look like throughout the life of your  partnership — all important factors to consider when choosing the best web design agency for your project.</p>
      </div>
    </section>

    <section className="bg-white text-gray-800 py-12 px-4 sm:px-10 max-w-5xl mx-auto">
      {/* Step 5 */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 5: Make Your Decision</h3>
        <p className="mb-4">
          Finally, it’s time to choose the best company for the job. Base your decision on your interview(s), the team members you met and the information you gathered.
        </p>
        <p>
          From their portfolio of past projects to the way they handle partnerships and measure success, the right company will be one that offers a team of experts, project ownership and complete transparency throughout your project.
        </p>
      </div>

      {/* Why Digital Silk */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">
          Why Digital Silk Is The Best Web Design Agency For Your Project
        </h3>
        <p className="mb-4">
          Whether you need a brand-new website or a redesign, Digital Silk is a leading full-service web design agency comprised of trusted website design experts.
        </p>

        <p className="mb-4 font-medium">What does Digital Silk offer that other agencies don’t?</p>

        <ul className="list-disc list-inside space-y-3 mb-6">
          <li>
            <span className="font-bold">Project ownership:</span> We value every client relationship and the opportunity to help clients establish or grow their online presence. That’s why we treat every project as our own, with meticulous project management, time tracking and calendars to make sure we’re delivering on time and on budget.
          </li>
          <li>
            <span className="font-bold">Expert guidance:</span> Our team is made up of award-winning designers as well as top developers, branding experts, marketing professionals, leading strategists and more. Throughout your project, our team will be hands-on and offer guidance and recommendations at every turn.
          </li>
          <li>
            <span className="font-bold">Transparency:</span> We offer complete transparency throughout every client relationship, from our first meeting through project completion. You’ll receive regular reports and updates on exactly where your project is at, from your timeline to your budget.
          </li>
          <li>
            <span className="font-bold">Results:</span> Every recommendation we make is strategic, based on thorough research, extensive experience and industry best practices. We deliver projects that drive measurable results, including increases in search engine ranking, traffic, engagement and conversion.
          </li>
        </ul>

        <p className="mb-3">
          If you’re looking for a reliable web design team that will deliver a{" "}
          <span className="font-semibold">custom website</span> that’s unique to your brand identity,
          your offering and your target market, you’ve found your match in Digital Silk.
        </p>

        <p className="mb-3">
          Our trusted web design experts work with brands across industries to deliver fully custom website projects,
          from web design and development to website strategy, content creation and more.
        </p>

        <p>
          Schedule a consultation to meet our team and get a custom quote for your project.
        </p>
      </div>
    </section>



 <div className="bg-[#0B1120] text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Sign up to get websites</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-6">
        Stay up to date with the roadmap progress, announcements and exclusive discounts. Feel free to sign up with your email.
      </p>

      <form className="flex justify-center max-w-md mx-auto">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            📧
          </span>
          <input
            type="email"
            placeholder="Your email"
            className="w-full pl-10 pr-4 py-2 rounded-l-md bg-[#1E293B] text-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-4">
        We care about the protection of your data. <a href="#" className="text-white underline">Read our Privacy Policy</a>.
      </p>
    </div>

      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Frequently asked questions
          </h2>
          <div className='grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2'>
            <div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  {`What do you mean by \"Figma assets\"?`}
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  You will have access to download the full Figma project
                  including all of the pages, the components, responsive pages,
                  and also the icons, illustrations, and images included in the
                  screens.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  {`What does \"lifetime access\" exactly mean?`}
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Once you have purchased either the design, code, or both
                  packages, you will have access to all of the future updates
                  based on the roadmap, free of charge.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  How does support work?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  {`We\'re aware of the importance of well qualified support, that
                  is why we decided that support will only be provided by the
                  authors that actually worked on this project.`}
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Feel free to{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    contact us
                  </a>{' '}
                  {`and we\'ll help you out as soon as we can.`}
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  I want to build more than one project. Is that allowed?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  {`You can use Windster for an unlimited amount of projects,
                  whether it\'s a personal website, a SaaS app, or a website for
                  a client. As long as you don\'t build a product that will
                  directly compete with Windster either as a UI kit, theme, or
                  template, it\'s fine.`}
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Find out more information by{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  {`What does \"free updates\" include?`}
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  The free updates that will be provided is based on the{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    roadmap
                  </a>{' '}
                  that we have laid out for this project. It is also possible
                  that we will provide extra updates outside of the roadmap as
                  well.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  What does the free version include?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  The{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    free version
                  </a>{' '}
                  of Windster includes a minimal style guidelines, component
                  variants, and a dashboard page with the mobile version
                  alongside it.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  You can use this version for any purposes, because it is
                  open-source under the MIT license.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  What is the difference between Windster and Tailwind UI?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Although both Windster and Tailwind UI are built for
                  integration with Tailwind CSS, the main difference is in the
                  design, the pages, the extra components and UI elements that
                  Windster includes.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Additionally, Windster is a project that is still in
                  development, and later it will include both the application,
                  marketing, and e-commerce UI interfaces.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Can I use Windster in open-source projects?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Generally, it is accepted to use Windster in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to Windster itself.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Find out more information by{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
<section className="bg-gradient-to-br from-[#043b75] via-[#131540] to-[#0e0f2c] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Headline */}
        <h2 className="text-2xl font-bold text-center md:text-left">
          Sign Up To Get The <br /> Latest Digital Trends
        </h2>

        {/* Email Input Box */}
        <div className="relative w-full max-w-md">
          <div className="flex items-center border border-white/30">
            <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-600 rotate-45 ml-2 mr-2"></div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent text-white placeholder-white/70 py-3 px-2 focus:outline-none"
            />
            <button className="w-26 h-15 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2">
              SIGN UP
            </button>
          </div>
        </div>

      </div>
    </section>

       <section className="bg-gradient-to-br from-[#0c0c39] via-[#1b0f49] to-[#00325e] text-white py-20 px-6" > 
      



      <div class="h-screen flex items-center justify-center">
        
  <form className="p-8 rounded shadow-md max-w-md space-y-4">
     <h2 className="text-2xl font-bold mb-6">Start A Conversation With Us</h2>
    {/* <!-- Your form elements here --> */}
    <input type="text" placeholder="Name*" className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none" />
            <input type="text" placeholder="Company Name*" className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none" />
            <input type="email" placeholder="Email*" className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none" />
            <input type="tel" placeholder="Phone*" className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none" />
            <textarea placeholder="Your Message*" rows={4} className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none resize-none" />
  <button
              type="submit"
              onClick={() => setModalOpen(true)}
              className="ml-30 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded text-white hover:opacity-90 transition"
            >
              SUBMIT →
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>
  </form>
</div>
</ section>
     

</>
  );

}

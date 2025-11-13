'use client'
import Image from "next/image";

export default function Home() {
  return (
      <> 

      

   {/* Digital Silk Way to do it */}
 <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="lg:w-1/2 w-full bg-gradient-to-b from-[#020617] to-[#011627] text-white p-10 flex flex-col justify-center">
        <h4 className="text-2xl font-semibold text-center uppercase mb-2">Take the silk road to</h4>
        <h1 className="text-6xl md:text-5xl text-center font-bold leading-tight mb-6 text-cyan-400">
          Digitizing Your <br /> Business Growth
        </h1>
        <div className="flex justify-center text-center flex-wrap gap-6 mb-6 text-sm">
          <div className="text-xl">
            <strong>Expert</strong>
            <br /> Team Members
          </div>
          <div className="text-xl">
            <strong>Results-Driven</strong>
            <br /> Approach
          </div> 
          <div className="text-xl">
            <strong>Streamlined</strong>
            <br /> Execution
          </div>
        </div>
        <div className="text-xl uppercase tracking-wide text-center mb-2 font-semibold">Premium digital agency recognized by</div>
        <div className="mt-4 flex flex-wrap gap-4 justify-center items-center">
          <Image src="/logos/xerox.png" alt="IMA" height={80} width={60} />
          <Image src="/logos/grenco.png" alt="Marcom" height={80} width={60} />
          <Image src="/logos/miami.png" alt="Awwwards" height={80} width={60} />
          <Image src="/logos/logo10.png" alt="Horizon" height={80} width={60} />
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 w-full bg-white p-10 flex flex-col justify-center">
        <h4 className="text-sm font-semibold text-blue-900 uppercase text-center mb-2">Let’s Grow Your Brand Online</h4>
        <h2 className="text-3xl font-bold text-blue- text-center mb-6">Start a conversation with us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name*"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name*"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone*"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message*"
            className="w-full border-b border-gray-300 py-2 h-24 resize-none focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="mt-4 flex items-center justify-center bg-white text-blue-600 border border-blue-600 px-6 py-2 font-semibold hover:bg-blue-500 hover:text-white "
          >
            SUBMIT &rarr;
          </button>
        </form>
      </div> 
      
    </div>
    
      
      </>
  );
}

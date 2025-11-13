'use client'
import Image from "next/image";
import Featured from "../components/Featured";
import Logo from "../components/Logo";
import ClientLogos from "../components/ClientLogos";
import Modal from "../components/Modal";
import { useState } from "react";   // <-- REQUIRED


export default function Home() {
     const [isModalOpen, setModalOpen] = useState(false);

  return (
        <>
      {/* FEATURED PROJECTS */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-900 text-white py-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl text-cyan-400 font-semibold">Featured Projects</h3>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Recent Website Design & Branding Work
          </h2>
          <p className="text-lg mt-4">
            Custom-made digital experiences built for ROI.
          </p>
        </div>

        <Featured />
        <ClientLogos />
      </section>

      {/* CASE STUDY STYLE STATS SECTION */}
      <section className="bg-[url('/images/dummy3.jpg')] bg-cover bg-center relative py-32">
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-6xl mx-auto px-6 text-white">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Real Results. Real Impact.
            </h2>
            <p className="text-lg mt-4">
              Our clients trust us to elevate their customer experience & business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <p className="text-6xl lg:text-7xl font-bold text-blue-400">40k</p>
              <p className="mt-3 text-xl">Active Program Members</p>
            </div>

            <div>
              <p className="text-6xl lg:text-7xl font-bold text-blue-400">56%</p>
              <p className="mt-3 text-xl">Repeat Customer Rate</p>
            </div>

            <div>
              <p className="text-6xl lg:text-7xl font-bold text-blue-400">4.9★</p>
              <p className="mt-3 text-xl">Client Satisfaction Score</p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-500"
            >
              View Full Case Studies →
            </button>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL */}
      <section className="bg-gray-900 text-white py-20 px-8">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">

          <div>
            <Image
              src="/images/svg/bengusaicon.svg"
              alt="Testimonial"
              width={150}
              height={80}
              className="mb-6"
            />
            <h3 className="text-3xl font-bold">What Clients Love About Our Work</h3>
          </div>

          <div>
            <blockquote className="text-lg lg:text-xl font-medium">
              “Digital Silk is not just a company — they are a team of experts
              who turn visions into digital realities with unmatched creativity 
              and expertise.”
            </blockquote>
            <p className="mt-4 font-semibold">Judith Black</p>
            <p className="text-gray-400">CEO, Workcation</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0b1a2d] text-center text-white py-24 px-6">
        <h2 className="text-3xl lg:text-5xl font-bold">Have a Project in Mind?</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Let’s design something extraordinary together — websites, brands, campaigns, and more.
        </p>

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
                  
                <h2 className="text-xl font-bold mb-4 text-black dark:text-black">This Section is not complete yet</h2>
                <p className='text-black dark:text-black'>Stay connected with us to get the best service</p>
                </Modal>
                
      </section>
    </>

  );
}

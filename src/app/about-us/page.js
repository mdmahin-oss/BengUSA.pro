"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [active, setActive] = useState("ABOUT");
   const [selected, setSelected] = useState(0);

   

  const navItems = [
    { name: "ABOUT", href: "/about" },
    { name: "CLIENTS", href: "/clients" },
    { name: "AWARDS", href: "/awards" },
    { name: "RECOGNITION", href: "/recognition" },
  ];
   const team = [
    {
      name: "Mahin Zaman",
      title: "CEO AND FOUNDER",
      image: "/peoples/Me.jpg",
      bio: `Mahin is a hands-on leader and digital expert focused on providing specific tactics and strategies to grow brands online. 
      He has worked with numerous brands, from Fortune 500 companies to reputable startups including Google, Microsoft, SONY, NFL, NYU, P&G, Fleet Bank and NASA. 
      Mahin sets the stage for a proactive work culture and personally reviews every project to ensure excellence.`,
      highlight: [
        "Do outstanding work, not just good work.",
        "Don’t drag on tasks."
      ],
    },
    {
      name: "Stephanie Sharlow",
      title: "VP, CLIENT PARTNER",
      image: "/peoples/person4.png",
      bio: `Stephanie leads client partnerships with a focus on growth and strategy. 
      She ensures every campaign aligns with the client’s goals and brand values, creating long-term success through data-driven decisions.`,
    },
    {
      name: "Bojan Milicevic",
      title: "CFO/COO",
      image: "/peoples/person3.jpg",
      bio: `Bojan oversees operations and financial strategy, ensuring projects run smoothly and efficiently. 
      His leadership drives cross-departmental collaboration and sustainable company growth.`,
    },
    {
      name: "Gabriel Shaoolian",
      title: "VP, CLIENT PARTNER",
      image: "/peoples/person2.jpg",
      bio: `Gabriel brings years of experience in managing high-profile client relationships and driving marketing performance. 
      She is passionate about delivering meaningful digital experiences that generate measurable impact.`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#020617] to-[#011627] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/zebra-bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-5xl text-center px-6 py-12">
          <p className="text-sm md:text-base tracking-widest uppercase text-blue-200 font-semibold mb-3">
            Dedicated Industry Experts With Proven Track Records
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            The <span className="text-blue-400">Team</span> You Want On Your Project
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
            <div>
              <h2 className="text-4xl font-bold text-blue-400">Expert</h2>
              <p className="text-sm tracking-wider uppercase text-blue-200">
                Industry Leaders
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-400">150+</h2>
              <p className="text-sm tracking-wider uppercase text-blue-200">
                Team Members
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-400">Results</h2>
              <p className="text-sm tracking-wider uppercase text-blue-200">
                Driven Approach
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
          >
            Speak With Our Experts →
          </Link>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="absolute bottom-6 flex items-center justify-center gap-8 text-sm uppercase tracking-widest">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              aria-current={active === item.name ? "page" : undefined}
              className={`relative px-3 py-1 font-semibold transition-all duration-300 ${
                active === item.name
                  ? "text-white after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-blue-400"
                  : "text-blue-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#020617] to-[#011627] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Meet The Leadership Team</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Top industry experts with proven experience who are hands-on in managing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`relative group cursor-pointer overflow-hidden rounded-lg transition-all duration-300 border-2 ${
                selected === index ? "border-blue-400" : "border-transparent hover:border-blue-300"
              }`}
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 text-left">
                  <h3 className="text-sm font-semibold">{member.name}</h3>
                  <p className="text-xs text-blue-200">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-blue-700">
          <div className="relative w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={team[selected].image}
              alt={team[selected].name}
              fill
              className="object-cover grayscale-0"
            />
          </div>

          <div className="flex-1 text-left">
            <h3 className="text-2xl font-bold mb-1">{team[selected].name}</h3>
            <p className="text-blue-300 mb-4 uppercase text-sm tracking-widest">
              {team[selected].title}
            </p>
            <p className="text-blue-100 leading-relaxed mb-3">{team[selected].bio}</p>

            {team[selected].highlight && (
              <ul className="list-disc list-inside text-blue-200 text-sm">
                {team[selected].highlight.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020617] to-[#011627] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
{/* Main Heading */}
<h1 className="text-4xl md:text-5xl font-bold text-[#19E0FF] mb-8 text-center">
Got Talent?
</h1>


{/* Subtitle Text */}
<p className="text-lg md:text-xl max-w-3xl text-center leading-relaxed mb-8">
We are always seeking talented people with passion, experience and the
ability to <span className="text-[#19E0FF] font-semibold">make a difference</span> for our clients.
</p>


{/* Email instruction */}
<p className="text-lg md:text-xl max-w-2xl text-center leading-relaxed">
If you’re interested in joining the Digital Silk team,
<br />
send your resume and cover letter to
<span className="text-[#19E0FF] font-semibold"> jobs@digitalsilk.com</span>
</p>


{/* Large Background Text */}
<div className="absolute bottom-[-10%] md:bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
<h1 className="text-[15vw] font-bold text-[#19E0FF] opacity-30 leading-none">
Join our team
</h1>
</div>
</div>

      <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#011627] text-white px-6 py-16">
      {/* Top Newsletter Section */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">Sign up to get the Latest Digital Trends</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:w-96 py-3 px-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Text Block */}
        <div>
          <p className="uppercase text-sm tracking-widest text-blue-400 mb-4">
            Take the Silk Road To
          </p>

          <h1 className="text-4xl font-bold leading-snug mb-6">
            Digitizing your Business <br /> Growth
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <span className="text-sm text-blue-300">Follow Us</span>
            <span className="cursor-pointer">🌐</span>
            <span className="cursor-pointer">📸</span>
            <span className="cursor-pointer">💼</span>
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Start a conversation with us</h2>

          <input
            type="text"
            placeholder="Name*"
            className="w-full py-3 px-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Company Name*"
            className="w-full py-3 px-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email*"
            className="w-full py-3 px-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Phone*"
            className="w-full py-3 px-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <textarea
            placeholder="Your Message*"
            className="w-full h-28 py-3 px-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          ></textarea>

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium">
            SUBMIT
          </button>
        </form>
      </div>

      {/* Bottom Floating Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-700 hover:bg-blue-800 px-6 py-4 rounded-xl shadow-lg text-sm font-medium">
          GOT A PROJECT? <br /> Speak With Our Experts →
        </button>
      </div>
    </div>

    

    </>
  );
}


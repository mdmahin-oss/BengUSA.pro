
  'use client';
import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal'

const filters = ['Featured', 'B2B', 'B2C', 'Ecommerce'];


const examples = [
  { title: 'REMAX', img: '/examples/1.PNG', category: 'B2C' },
  { title: 'Northwestern University', img: '/examples/2.PNG', category: 'Featured' },
  { title: 'B&O', img: '/examples/4.PNG', category: 'B2C' },
  { title: 'Rollink', img: '/examples/5.PNG', category: 'B2B' },
  { title: 'Paul Stuart', img: '/examples/11.PNG', category: 'B2C' },
  { title: 'EZ Express', img: '/examples/12.PNG', category: 'B2B' },
  { title: 'Ventura Foods', img: '/examples/13.PNG', category: 'B2B' },
  { title: 'Pum Energy', img: '/examples/14.PNG', category: 'Ecommerce' },
  { title: 'Pua Energy', img: '/examples/21.PNG', category: 'Ecommerce' },
  { title: 'Pma Energy', img: '/examples/22.PNG', category: 'Ecommerce' },
  { title: 'uma Energy', img: '/examples/23.PNG', category: 'Ecommerce' },
  { title: 'Pa Energy', img: '/examples/23.PNG', category: 'B2C' },
  { title: 'Energy', img: '/examples/24.PNG', category: 'Featured' },
  { title: 'umanergy', img: '/examples/22.PNG', category: 'Featured' },
  { title: 'Pa Energy', img: '/examples/21.PNG', category: 'Featured' },
];

export default function Featured() {
  const [active, setActive] = useState('Featured');
  const filteredExamples = examples.filter((item) => item.category === active);

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="bg-gradient-to-r from-slate-900 to-slate-900 text-white p-4 md:p-10 ">
      {/* Filter Menu */}
      <div className="w-full overflow-x-auto">
            <div className="flex gap-4 mb-10 w-max mx-auto px-4 sm:justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`uppercase px-4 py-2 border-b-2 ${
              active === filter ? 'border-white font-bold' : 'border-transparent'
            } hover:border-white transition duration-200`}
          >
            {filter}
          </button>
        ))}
      </div>
</div>
      {/* Grid Display */}
      <div className="grid grid-cols-1 gap-8 items-center gap-x-10 gap-y-10 sm:max-w-xl sm:grid-cols-2 md:grid-cols-2 sm:gap-x-10 lg:mx-50 lg:max-w-none lg:grid-cols-2 ">
        {filteredExamples.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-950 to-slate-800 p-4 rounded-xl relative group overflow-hidden"
          >
            <Image
              src={item.img}  
              alt={item.title} 
              width={800}
              height={600}
              className="transition-transform duration-300 group-hover:scale-150"
            />
            <h3 className="absolute bottom-4 left-4 font-bold text-lg ">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-12">
        <button
        onClick={() => setModalOpen(true)}
        type='button'
        className="cursor-pointer text-white text-sm uppercase tracking-wide hover:underline">
          Load More Examples ↓
        </button>
         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4 text-center">This Section is not complete yet</h2>
        <p className='text-2xl text-center text-bold'>Stay connected with us to get the best service.</p>
        </Modal>
               
      </div>
    </main>
  );
}


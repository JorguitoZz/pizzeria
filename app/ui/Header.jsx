'use client'
import Link from 'next/link';
import { lobster } from '../fonts/fons';
import { useState } from 'react';

export function Header({version}) {
  const [active, setActive] = useState(false);


  return (
    <>
      {version ? (

        <header className='bg-[#2D0202]'>
          <div className='text-white flex flex-col items-center py-5 gap-3'>
            <h2 className={`${lobster.className} text-[40px] text-center`}>Delicius Pizza</h2>
            <nav className={`${lobster.className}  flex gap-5 items-center`}>
              <Link href="/" className='text-xl text-[25px] font-normal'>Home</Link>
              <Link href="/menu?categoria=Pizzas" className='text-[25px] font-normal'>Menu</Link>
              <Link href="/" className='text-[25px] font-normal'>Contacto</Link>
            </nav>
          </div>
        </header>

      ) : (
        <header className="flex justify-end sm:justify-center lg:justify-start">
          <div className={`${active ? 'block' : 'hidden'} bg-white w-[60%] absolute top-[70px]`}>
            <nav className={`${lobster.className} text-black flex flex-col items-center py-4 gap-3`}>
            <Link href="/" className='font-bold text-xl'>Home</Link>
            <Link href="/menu" className='font-bold text-[18px]'>Menu</Link>
            <Link href="/" className='font-bold text-[18px]'>Contacto</Link>
            </nav>
          </div>

          <div className="w-8 flex gap-2 flex-col sm:hidden" onClick={() => setActive(!active)}>
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
          </div>

          <nav className={`${lobster.className} hidden sm:flex gap-5 text-white`}>
            <Link href="/" className='font-bold text-xl'>Home</Link>
            <Link href="/menu?categoria=Pizzas" className='font-bold text-[18px]'>Menu</Link>
            <Link href="/" className='font-bold text-[18px]'>Contacto</Link>
          </nav>
        </header>
      )}
    </>
  );
}



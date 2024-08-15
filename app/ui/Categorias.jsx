'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Categorias({ lobster }) {
 
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();  

  const params = new URLSearchParams(searchParams);

  const selectCategoria = (categoria) => {
    
    if (categoria) {
      params.set('categoria', categoria);
    } else {
      params.delete('categoria');
    }
    replace(`${pathname}?${params.toString()}`);
  };



  return (
    <ul className="flex gap-5 justify-between sm:justify-start">
      <li
        className={`${lobster.className} text-[20px] cursor-pointer ${params.toString() === 'categoria=Pizzas' ? 'border-b-2 border-black' : ''}`}
        onClick={() => selectCategoria('Pizzas')}
      >
        Pizzas
      </li>
      <li
        className={`${lobster.className} text-[20px] cursor-pointer ${params.toString() === 'categoria=Entradas' ? 'border-b-2 border-black' : ''}`}
        onClick={() => selectCategoria('Entradas')}
      >
        Entradas
      </li>
      <li
        className={`${lobster.className} text-[20px] cursor-pointer ${params.toString() === 'categoria=Bebidas' ? 'border-b-2 border-black' : ''}`}
        onClick={() => selectCategoria('Bebidas')}
      >
        Bebidas
      </li>
    </ul>
  );
}

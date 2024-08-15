import { Suspense } from 'react';
import { lobster, montserrat } from '../fonts/fons';
import { CardPizza } from './CardPizza'
import { CardEntrada } from './CardEntrada'
import { CardBebidas } from './CardBebidas'
import { SkeletonCard } from './SkeletonCard'

let cachePizzas = null;
let cacheEntradas = null;
let cacheBebidas = null;

export default function Productos({ categoria, pizzas, entradas, bebidas }) {
   

    cachePizzas = pizzas;
    cacheEntradas = entradas;
    cacheBebidas = bebidas;

   
    return (
        <section className="flex mt-5 pb-10 flex-wrap gap-12 justify-center sm:justify-between sm:gap-3">
       
          
            {
                categoria === "Pizzas" ? cachePizzas.map(pizza => (
                    <Suspense key={pizza.id} fallback={<SkeletonCard />}>
                        <CardPizza pizza={pizza} lobster={lobster} montserrat={montserrat} />
                    </Suspense>
                    
                )) : null
            }
            {
                categoria === "Entradas" ? cacheEntradas.map(entrada => (
                    <Suspense key={entrada.id} fallback={<SkeletonCard />}>
                        <CardEntrada entrada={entrada} lobster={lobster} montserrat={montserrat} />
                    </Suspense>
                )) : null
            }

            {
                categoria === "Bebidas" ? cacheBebidas.map(bebida => (
                    <Suspense key={bebida.id} fallback={<SkeletonCard />}>
                        <CardBebidas bebida={bebida} lobster={lobster} />
                    </Suspense>
                )) : null
            }
        </section>
    );
}

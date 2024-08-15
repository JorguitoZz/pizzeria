import { Header} from "../ui/Header"
import  Categorias  from "../ui/Categorias"
import  Productos  from "../ui/productos"
import { lobster } from '../fonts/fons';
import { getPizzas, getEntradas, getBebidas } from '../services/data'



export default async function menu({ searchParams }) {

   
    const categoria = searchParams.categoria ? searchParams.categoria : "Pizzas"
   
    const pizzas = await getPizzas();

    const entradas = await getEntradas();

    const bebidas = await getBebidas();



    return(
        <>
            <Header version={true}></Header>
            <main className="px-6 pt-6 md:px-16">
                

                <section>
                    <article>
                        <h1 className={`${lobster.className} text-[30px] sm:text-[40px]`}>Descubre todas las <span className="text-[#FF0000]">opciones</span> que tenemos <span className="text-[#FF0000]">para ti</span> en nuestro <span className="text-[#FF0000]">menu</span></h1>
                    </article>
                </section>

                <section className="pt-7 pb-2 border-b-2 border-black ">
                    <Categorias lobster={lobster}/>
                </section>
                
                <Productos categoria={categoria} pizzas={pizzas} entradas={entradas} bebidas={bebidas}></Productos>
            </main>
        </>
    )
}


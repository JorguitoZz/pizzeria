

export function CardPizza({ pizza, lobster, montserrat }) {

    return(
        <div className="border-2 border-black rounded-2xl mb-3 p-[20px] w-[100%] max-w-[420px] sm:w-[49%] lg:w-[32%] xl:w-[24%]">
                        <img src={pizza.imagen_url} className="rounded-[100%] w-[240px] h-[240px] mx-auto object-cover" />
                        <h2 className={`${lobster.className} text-[30px] mt-2`}>{pizza.nombre}</h2>
                        <p className={`${montserrat.className} text-[18px] mt-2`}>{pizza.ingredientes}</p>
                        <div className="flex justify-between mt-6">
                            <p className={`${lobster.className} text-[30px]`}>${pizza.precio}</p>
                            <button className={`${lobster.className} text-[30px] text-white bg-black rounded-full px-5`}>Ordenar</button>
        </div></div>
    )    
}
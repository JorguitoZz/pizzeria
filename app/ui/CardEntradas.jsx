export function CardEntradas({ entrada, lobster, montserrat }) {

    return(
        <div key={entrada.id} className="border-2 border-black rounded-2xl mb-3 p-[20px] w-[100%] max-w-[420px] sm:w-[49%] lg:w-[32%] xl:w-[24%] flex flex-col justify-between">
            <img src={entrada.imagen} className="rounded-[100%] w-[240px] h-[240px] mx-auto object-cover" />
            <h2 className={`${lobster.className} text-[30px] mt-2`}>{entrada.nombre}</h2>
            <p className={`${montserrat.className} text-[15px] mt-2`}>{entrada.descripcion}</p>
                <div className="flex justify-between mt-4">
                    <p className={`${lobster.className} text-[30px]`}>${entrada.precio}</p>
                    <button className={`${lobster.className} text-[30px] text-white bg-black rounded-full px-5`}>Ordenar</button>
                </div>
        </div>    
    )    
}
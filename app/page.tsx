import { lobster, montserrat } from './fonts/fons';
import { Header } from './ui/Header';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-portada lg:bg-portadadesk bg-cover bg-no-repeat pt-6 pb-32 px-6 sm:px-24 lg:h-[60vh] xl:h-[80vh] xl:max-h-[600px] lg:pt-12 lg:px-32 '>
          <Header version={false}/>
          <div className='lg:w-[40%]'>
            <h1 className={`${lobster.className} text-white text-[45px] text-center mb-10 mt-16 lg:text-left`}>Delicious Pizza</h1>
            <p className={`${montserrat.className} text-white text-center mb-10 lg:text-left`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit sit amet massa ac dapibus. Nullam eros neque.
            </p>
            <div className={`${montserrat.className} text-white flex gap-4 justify-center lg:justify-normal`}>
              <button className='bg-red-600 w-32 h-10'>Ordenar</button>
              <button className='border w-32 h-10'>Menu</button>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-5 py-16 sm:w-[80%] mx-auto md:flex-row md:w-[95%] md:items-center'>
          <article className='px-8 md:w-[50%] md:px-0'>
            <h2 className={`${lobster.className} text-[45px] text-center md:text-[30px] leading-[40px] lg:text-[45px]`}>
              Welcome to <br /><span className='text-red-600'>Delicious Pizza</span>
            </h2>
            <p className={`${montserrat.className} text-center md:text-[16px] mt-4 w-[80%] mx-auto lg:text-[18px]`}>
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
            </p>
          </article>
          <figure className='px-5 md:w-[50%]'>
            <img src="/img-section1.png" alt='Horno' />
          </figure>
        </section>

        <section className='bg-fondo2 bg-cover bg-center py-[100px]'>
          <h2 className={`${lobster.className} text-red-600 text-center text-[36px] lg:text-[45px]`}>Descubre <br /><span className='text-[45px] text-white'>Delicious Pizza</span></h2>
        </section>

        <section className='flex flex-col gap-5 py-16 sm:w-[80%] mx-auto md:w-[95%] md:flex-row md:items-center'>
          <article className='px-8 flex flex-col justify-center gap-3 md:w-[50%] md:px-0 lg:px-[30px]'>
            <h2 className={`${lobster.className} text-[35px] leading-[45px] text-center md:text-[30px]  lg:text-[40px]`}>
              Ordena desde la comodidad de tu hogar,<span className='text-red-600'> contamos con un excelente delivery</span>
            </h2>
            <button className='bg-red-600 w-32 block mx-auto h-10 text-white'>Ordenar</button>
          </article>
          <figure className='px-5 md:w-[50%]'>
            <img src="/img-section3.png" alt='Amigos comiendo pizza' />
          </figure>
        </section>

        <section className='bg-fondo3 bg-cover bg-center py-[100px]'>
          <h2 className={`${lobster.className} text-white text-center text-[36px] lg:text-[45px]`}>Cualquier <span className='text-red-600'>momento</span> es bueno para una <span className='text-red-600'>pizza</span></h2>
        </section>

        <section className='flex flex-col gap-5 py-16 sm:w-[80%] mx-auto md:w-[95%] md:flex-row md:items-center'>
          <article className='px-8 flex flex-col justify-center gap-3 md:w-[50%] md:px-0'>
            <h2 className={`${lobster.className} text-[35px] leading-[45px] text-center md:text-[30px] lg:text-[40px] w-[80%] mx-auto`}>
              Acompaña con una <span className='text-red-600'>pizza</span> esos <span className='text-red-600'>momentos especiales</span>
            </h2>
            <p className={`${montserrat.className} text-center md:text-[16px] w-[80%] mx-auto lg:text-[18px]`}>
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
            </p>
          </article>
          <figure className='px-5 md:w-[50%]'>
            <img src="/img-section4.png" alt='Amigos comiendo pizza' />
          </figure>
        </section>
      </main>
    </>
  );
}


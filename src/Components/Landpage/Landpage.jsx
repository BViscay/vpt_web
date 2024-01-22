import Slider from "../Slider/Slider";

const header = () => {
  return (
    <div className='w-full bg-home h-auto bg-no-repeat bg-center bg-cover'>
      <div className='w-full'>
        <div>
          <div className='pt-10 ml-10'>
            <h1 className='font-kanit text-6xl text-white text-left font-light'>
              Somos una{" "}
              <span className='font-kanit text-6xl font-extrabold'>
                Iglesia Cristiana
              </span>{" "}
            </h1>
            <h2 className='font-kanit text-5xl text-white text-left mt-10'>
              Donde compartimos la misión de extender el{" "}
              <span className='font-kanit text-6xl text-primary-color text-left font-extrabold'>
                EVANGELIO
              </span>
            </h2>
            <p className='font-bold text-3xl text-primary-color text-left mt-10'>
              Se parte de nosotros para realizar los sueños de Dios
            </p>
          </div>
        </div>
        <div className='h-[1px] w-[75%] ml-10 mt-14 bg-white'></div>
        <div className='pt-5 ml-10'>
          <p className='font-bold font-kanit text-xl text-white text-left'>
            Vistas de celebraciones familares
          </p>
          <p className='font-kanit text-xl text-white text-left mt-8 w-4/5'>
            Los invitamos a participar en nuestras celebraciones familiares.
            Juntos en adoración y alabanza. Compartimos un momento de comunión
            como un solo cuerpo en Cristo.
          </p>
          <div className='pb-8 mt-8'>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;

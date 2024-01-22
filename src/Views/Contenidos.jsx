import Celebraciones from "../../assets/Celebraciones.png";
import Devocionales from "../../assets/Devocionales.png";
import Talleres from "../../assets/Talleres.png";
import Radio from "../../assets/Radio.png";
import Redes from "../../assets/Redes.png";
import Grace from "../../assets/Grace.png";

const contenidos = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
      <div className='grid gap-4'>
        <div>
          <a
            href='https://www.youtube.com/@iglesiavidaparatodostandil147'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='h-auto max-w-full rounded-lg object-cover object-center'
              src={Celebraciones}
              alt='gallery-photo'
            />
          </a>
        </div>
        <div>
          <a
            href='https://open.spotify.com/show/4mgRB5oYtvPh2zxbQSh7I9'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='h-auto max-w-full rounded-lg object-cover object-center '
              src={Devocionales}
              alt='gallery-photo'
            />
          </a>
        </div>
      </div>
      <div className='grid gap-4 h-[90%]'>
        <div>
          <img
            className='h-auto max-w-full rounded-lg object-cover object-center'
            src={Radio}
          />
        </div>
        <div>
          <a
            href='https://www.gracechurch.org/espanol'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='h-auto max-w-full rounded-lg object-cover object-center'
              src={Grace}
            />
          </a>
        </div>
      </div>
      <div className='grid gap-4 h-[50%]'>
        <div>
          <a href='/contacto' target='_blank' rel='noopener noreferrer'>
            <img
              className='h-auto max-w-full rounded-lg object-cover object-center'
              src={Talleres}
              alt='gallery-photo'
            />
          </a>
        </div>
        <div className='flex h-[75%]'>
          <a
            href='https://www.instagram.com/iglesia_vidaparatodos_tandil/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='h-auto max-w-full rounded-lg object-cover object-center z-0 '
              src={Redes}
              alt='gallery-photo'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default contenidos;

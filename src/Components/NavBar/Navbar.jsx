import styles from "./Navbar.module.css";
//import logo from "../../../public/assets/Logo.png";
//import chevron from "../../../public/assets/chevron.png";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='bg-dark-gray-400 flex items-start justify-between mt-0 px-4'>
      <div className='items-center'>
        <img src='../../../assets/Logo.png' alt='Logo' />
      </div>
      <div className='flex w-full gap-5 items-center justify-end pl-5 mt-0'>
        <a
          className='text-md text-white hover:text-primary-color hover:font-semibold hover:underline hover:underline-offset-4'
          href='/'
        >
          Inicio
        </a>
        <a
          onClick={() => navigate("/about")}
          className='text-md text-white hover:text-primary-color hover:font-semibold hover:underline hover:underline-offset-4'
          href='/about'
        >
          La Iglesia
        </a>
        <a
          onClick={() => navigate("/contenido-multimedia")}
          className='text-md text-white hover:text-primary-color hover:font-semibold hover:underline hover:underline-offset-4'
          href='/contenido-multimedia'
        >
          Contenidos
        </a>
        <a
          onClick={() => navigate("/staff")}
          className='text-md text-white hover:text-primary-color hover:font-semibold hover:underline hover:underline-offset-4'
          href='/staff'
        >
          Pastores
        </a>
        <div className={styles.dropdown}>
          <a
            className='text-md text-white hover:text-primary-color hover:font-semibold hover:underline hover:underline-offset-4'
            href='#'
          >
            Actividades
            <img src='../../../assets/chevron.png' alt='Chevron' />
          </a>
          <div className={styles.menu}>
            <a href='#'>RECREO</a>
            <a
              href='https://www.instagram.com/jovenesdevidaok/'
              target='_blank'
              rel='noreferrer'
            >
              JOVENES DE VIDA
            </a>
            <a href='#'>MATRIMONIOS</a>
            <a href='#'>Misiones - GARDEY</a>
            <a href='#'>Misiones - MDQ</a>
          </div>
        </div>

        <button
          className='bg-primary-color text-white font-bold p-1 rounded-md'
          onClick={() => navigate("/contacto")}
        >
          Consultas
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

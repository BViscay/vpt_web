import SocialBar from "../SocialBar/SocialBar";
import { FaPhone, FaEnvelope, FaChurch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark-gray px-10 p-4 flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-10">
      <div className="flex flex-col items-center xl:items-start w-full xl:w-1/3 border-0 xl:border-r border-dark-gray-400">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-4 pt-2 w-full">
          <div className="w-24 h-24">
            <img src="../../../assets/logo-secondary.png" alt="Logo" />
          </div>
          <p className="pre-wrap w-full xl:w-3/4 text-xs text-center xl:text-left text-white">
            Este es un espacio para todas las personas con <strong>fé</strong> y
            un lugar donde pueden encontrar paz en <strong>Cristo</strong>.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-center w-full xl:w-1/3 gap-4 border-0 xl:border-r border-dark-gray-400">
        <div className="font-bold text-white">¿Quieres saber más?</div>
        <div className="text-sm text-white w-3/4 px-2 text-center xl:text-left">
          No te pierdas nuestras actualizaciones. Puedes encontrarnos en las
          redes:
        </div>
        <div>
          <SocialBar />
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-start w-full xl:w-1/3 gap-4">
        <h1 className="font-bold text-white">Contacto</h1>
        <div className="flex flex-col items-center xl:items-start gap-2">
          <div className="flex items-center gap-2">
            <i className="text-white">
              <FaChurch />
            </i>
            <span className="text-white text-xs">
              Alem 1627, Tandil, Buenos Aires, Argentina. CP 7000
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="text-white">
              <FaEnvelope />
            </i>
            <span className="text-white text-xs">vpt@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="text-white">
              <FaPhone />
            </i>
            <span className="text-white text-xs">+24944058933</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

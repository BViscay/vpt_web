import styles from "./SocialBar.module.css";
import { FaFacebookF,FaSpotify  } from "react-icons/fa";
import { AiOutlineYoutube, AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const socialBar = () => {
  return (
    <div className="flex text-black">
      <div className={styles.line}></div>
      <ul className="flex items-center gap-2">
        <div className={styles.navItem}>
          <a
            href="https://www.facebook.com/iglesia.tandil"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <i>
              <FaFacebookF className={styles.facebook} />
            </i>
          </a>
        </div>
        <div className={styles.navItem}>
          <a
            href="https://www.youtube.com/@iglesiavidaparatodostandil147"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <i>
              <AiOutlineYoutube className={styles.youtube} />
            </i>
          </a>
        </div>
        <div className={styles.navItem}>
          <a
            href="https://www.instagram.com/iglesia_vidaparatodos_tandil/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <i>
              <BsInstagram className={styles.instagram} />
            </i>
          </a>
        </div>
        <div className={styles.navItem}>
          <a
            href="https://www.instagram.com/iglesia_vidaparatodos_tandil/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <i>
              <FaSpotify className={styles.instagram} />
            </i>
          </a>
        </div>
        <div className={styles.navItem}>
          <a
            href="https://www.instagram.com/iglesia_vidaparatodos_tandil/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <i>
              <AiOutlineWhatsApp className={styles.instagram} />
            </i>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default socialBar;

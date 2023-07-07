import styles from "./SocialBar.module.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
const socialBar = () => {
  return (
    <nav className={styles.nav}>
      <h4 className={styles.title}>Seguinos en redes</h4>
      <div className={styles.line}></div>
      <ul className={styles.navList}>
        <div className={styles.navItem}>
          <a
            href="https://www.facebook.com/iglesia.tandil"
            target="_blank"
            rel="noreferrer"
            className={styles.navlink}
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
            className={styles.navlink}
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
            className={styles.navlink}
          >
            <i>
              <BsInstagram className={styles.instagram} />
            </i>
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default socialBar;

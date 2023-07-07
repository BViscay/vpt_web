import styles from "./Navbar.module.css";
import logo from "../../assets/Logo.png";
import chevron from "../../assets/chevron.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.container}>
        <a className={styles.link} href="/">
          Home
        </a>
        <a className={styles.link} href="/about">
          La Iglesia
        </a>
        <a className={styles.link} href="/contenido-multimedia">
          Contenidos
        </a>
        <a className={styles.link} href="/staff">
          Pastores
        </a>
        <div className={styles.dropdown}>
          <a className={styles.link} href="#">
            Actividades
            <img src={chevron} alt="Chevron" />
          </a>
          <div className={styles.menu}>
            <a href="#">RECREO</a>
            <a href="#">JOVENES DE VIDA</a>
            <a href="#">MATRIMONIOS</a>
            <a href="#">Misiones - GARDEY</a>
            <a href="#">Misiones - MDQ</a>
            <a href="#">Pexels Blog</a>
          </div>
        </div>

        <button className={styles.button} onClick={() => navigate("/contacto")}>
          Contacto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

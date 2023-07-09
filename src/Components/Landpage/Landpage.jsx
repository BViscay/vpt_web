//import banner from "../../../public/assets/Portada.png";
import styles from "./Landpage.module.css";
import SocialBar from "../SocialBar/SocialBar";
import Footer from "../Footer/Footer";

const header = () => {
  return (
    <div className={styles.banner}>
      <img
        className={styles.image}
        src="../../../assets/Portada.png"
        alt="Portada"
      />
      <div className={styles.social}>
        <SocialBar />
      </div>
      <div className={styles.info}>
        <div>
          <h1 className={styles.title}>Reuniones de </h1>
          <h1 className={styles.title}>Celebracion</h1>
          <h2 className={styles.subtitle}>
            Domingos 10.00 hs. y Miércoles 20.00 hs.
          </h2>
        </div>
        <p className={styles.paragraph}>
          Mira la transmision en vivo en{" "}
          <a className={styles.link} href="">
            este link
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default header;

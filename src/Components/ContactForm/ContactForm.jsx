import styles from "./ContactForm.module.css";
import { FcPhoneAndroid } from "react-icons/fc";
// import { HiMailOpen } from "react-icons/hi";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgForm} src="src/assets/ImgForm.jpg" alt="" />
      <form className={styles.form}>
        <h2 className={styles.TXTform}>CONTACTANOS!</h2>
        <p className={styles.inputParr} type="Name:">
          <input
            className={styles.inputForm}
            placeholder="Ingresa tu nombre aquí.."
          ></input>
        </p>
        <p className={styles.inputParr} type="Email:">
          <input
            className={styles.inputForm}
            placeholder="Dejanos aca tu mail.."
          ></input>
        </p>
        <p className={styles.inputParr} type="Message:">
          <input
            className={styles.inputForm}
            placeholder="Que nos querés contar.."
          ></input>
        </p>
        <button className={styles.buttonForm}>Enviar</button>
        <div className={styles.divForm}>
          <div>
            <span className={styles.spanForm}>
              <FcPhoneAndroid className={styles.formIcon} />
            </span>
            +54 249 424-4270
          </div>
          {/* <div>
            <span className={styles.spanForm}>
              <HiMailOpen className={styles.formIcon} />
            </span>
            elmundoqueseviene@gmail.com
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

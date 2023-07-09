import styles from "./ContactForm.module.css";
import { FcPhoneAndroid } from "react-icons/fc";
import Whatsapp from "../WhatsappButton/WhatsappButton";
import { PiChurch } from "react-icons/pi";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.imgForm}
        src="../../../public/assets/ImgForm.jpg"
        alt=""
      />
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

          <div>
            <span className={styles.spanForm}>
              <PiChurch className={styles.formIcon} />
            </span>
            Alem 1627 - Tandil
          </div>
        </div>
      </form>
      <Whatsapp
        className={styles.Whatsapp}
        phoneNumber="+542494244270"
        message="Hola, quiero info de la igle"
      />
    </div>
  );
};

export default LoginForm;

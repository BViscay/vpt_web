import styles from "./WhatsappButton.module.css";

//eslint-disable-next-line
const WhatsApp = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <img
      onClick={handleClick}
      className={styles.WhatsApp}
      src="../../../assets/LogoWapp.png"
      alt="WhatsApp Icon"
    />
  );
};

export default WhatsApp;

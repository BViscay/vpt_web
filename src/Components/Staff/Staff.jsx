import styles from "./Staff.module.css";
import { useState } from "react";
import { pastores } from "./staffData";

const Staff = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {pastores.map((pastor, number) => (
          <li
            key={number}
            style={{ backgroundImage: `url(${pastor.backgroundUrl})` }}
            className={`${active === number ? styles.active : ""} ${
              styles.item
            } customClass`}
            onClick={() => setActive(number)}
          >
            <h3 className={styles.name}>{pastor.name}</h3>
            <div className={styles.sectionContent}>
              <div className={styles.inner}>
                <div className={styles.bio}>
                  <h2 className={styles.subtitle}>{pastor.name}</h2>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Staff;

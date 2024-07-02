
import styles from "./Titre.module.css";
        
const Titre = ({ children ,className}) => {
    return <h1 className={styles.title + " " + className}>{children}</h1>;
  };
  export default Titre;
  
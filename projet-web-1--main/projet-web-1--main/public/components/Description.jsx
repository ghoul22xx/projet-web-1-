import styles from "./Description.module.css";
const Description = ({ children ,className}) => {
  return <p className={styles.description + " " + className}>{children}</p>;
};

export default Description;

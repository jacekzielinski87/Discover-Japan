import styles from "./Logo.module.css";


function Logo() {
  return (
    <div>
      <img src="/Logo.png" alt="Japan flag" className={styles.logo}/>
    </div>
  );
}

export default Logo;

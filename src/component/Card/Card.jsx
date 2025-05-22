import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>{props.header}</h1>
      <span className={styles.button}>{props.buttonTitle}</span>
    </div>
  );
};

export default Card;

import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
const Card = ({ image, name, description }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.button} onClick={()=>navigate(`/${name}-sentiment`)}>{name}</button>
    </div>
  );
};

export default Card;
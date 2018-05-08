import React from 'react';
import { Fade } from 'react-reveal';
import styles from './PriceBox.module.scss';

const PriceBox = (props) => (
  <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.priceTitle}>
        {props.price}
        </div>
        <div className={styles.priceCurrency}>
        AUD
        </div>
      </div>
      <div className={styles.right}>
        <p>{props.time}</p>
        <h2>{props.name}</h2>
        
        <h6>{props.subtitle}</h6>
      </div>
  </div>
);

export default PriceBox;

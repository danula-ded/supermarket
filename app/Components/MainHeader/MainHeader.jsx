import React from "react";
import Styles from "./MainHeader.module.css";

export const MainHeader = () => {
  return (
    <div className={`${Styles.MainHeader}`}>
      <div className={`${Styles.HeaderTextButton}`}>
        <div className={`${Styles.HeaderText}`}>
          <h1 className={`${Styles.h1}`}>Шопинг Колледжа</h1>
          <p className={`${Styles.p}`}>Добро пожаловать в мир вкуса и стиля! <br />У нас есть все, чтобы сделать твою жизнь ярче и вкуснее.</p>
        </div>
        <div className={`${Styles.Button}`}>
          <button className={`${Styles["button-text"]}`}>Погнали!</button>
        </div>
      </div>
    </div>
  );
};

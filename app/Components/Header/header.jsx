import React from "react";
import Styles from "./header.module.css";

export const Header = () => {
    return (
        <div className={Styles.Header}>
            <img className={Styles["Background-photo"]} src="https://via.placeholder.com/1920x1132" alt="Background" />
            <div className={Styles.HeaderPanel}>
                <div className={Styles.Logo}>
                    <img className={Styles.Logo1} style={{ width: 150, height: 150, borderRadius: 60 }} src="https://via.placeholder.com/150x150" alt="Logo" />
                    <div style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Еда+</div>
                </div>
                <div className={Styles.Panel} style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 105, display: 'inline-flex' }}>
                    <div style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Продукты</div>
                    <div style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Профиль</div>
                    <div style={{ color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Контакты</div>
                </div>
            </div>
        </div>
    );
}

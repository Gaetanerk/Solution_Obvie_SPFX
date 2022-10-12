import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function BtnReturnHome(props) {

    function changeScreen() {

        props.setItems([]);
        props.setScreen('home');
    }

    return (
        <DefaultButton onClick={changeScreen} className={styles.btnReturnHome} text="Retour à l'accueil" />
    )
}
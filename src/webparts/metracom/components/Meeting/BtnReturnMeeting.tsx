import * as React from 'react';
import styles from '../Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function BtnReturnMeeting(props) {

    function changeScreen() {
        props.setScreen('detail');
    }

    return (
        <DefaultButton onClick={changeScreen} className={styles.btnReturnHome} text="Retour aux détails" />
    )
}
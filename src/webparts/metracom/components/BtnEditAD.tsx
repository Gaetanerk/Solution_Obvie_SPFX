import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function BtnEditAD(props) {

    async function displayEditAD() {
        props.setItemsAD(props.itemsAD)
        props.setItemsDetailAD(props.itemsDetailAD)
        props.setScreen('editAD')
    }

    return (
        <DefaultButton onClick={displayEditAD} className={styles.btnEdit} text="Éditer" />
    )
}
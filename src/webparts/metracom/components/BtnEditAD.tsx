import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function BtnEditAD() {
    return (
        <DefaultButton className={styles.btnEdit} text="Éditer" />
    )
}
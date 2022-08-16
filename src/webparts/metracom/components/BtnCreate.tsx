import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useState } from 'react';  

export function BtnCreate(props) {
    let [count, setCount] = useState(0);
    console.log({count});

    return (
        <div className={styles.btnCreate}>
        <DefaultButton onClick={() => setCount(count + 1)} text="Créer une liste de réunion" />
        </div>
    );
}
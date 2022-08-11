import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';
//import { Form } from './Form';

//const handleClick = () => {
//    return (
//    <Form/>
//    )
//}

export function BtnCreate() {
     return (
        <div className={styles.btnCreate}>
        <DefaultButton text="Créer une liste de réunion" />
        </div>
    );
}
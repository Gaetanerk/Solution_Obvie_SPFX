import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Form } from '../components/Form';

export function BtnCreate() {

    const handleCreate = (e) => {
        e.preventDefault()
    }

     return (
        <div className={styles.btnCreate}>
        <DefaultButton onClick={handleCreate} text="Créer une liste de réunion" />
        </div>
    );
}
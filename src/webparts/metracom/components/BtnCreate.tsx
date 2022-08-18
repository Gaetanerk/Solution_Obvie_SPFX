import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useState } from 'react';  

export function BtnCreate(props) {
    let [count, setCount] = useState(1);
    if (count !%2) {
      return (
        <DefaultButton onClick={() => setCount(count + 1)} className={styles.btnCreate} text="Créer une liste de réunion" />
      )}
    else {
    return (
      <DefaultButton onClick={() => setCount(count + 1)} className={styles.btnCreate} text="Annuler" />
    );
  }
}
import * as React from 'react';
import styles from '../Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function BtnFormNewMeeting(props) {    

    if (props.count !%2) {
        return (
        <DefaultButton href='#formMeeting' onClick={() => props.setCount(props.count + 1)} className={styles.btnCreate} text="Créer une liste de réunion" />
      )}
      else {
        return (
        <DefaultButton id='formMeeting' onClick={() => props.setCount(props.count + 1)} className={styles.btnCreate} text="Annuler" />
        )
      }
}
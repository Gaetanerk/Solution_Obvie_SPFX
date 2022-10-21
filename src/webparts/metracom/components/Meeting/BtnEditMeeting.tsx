import * as React from 'react';
import styles from '../Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function BtnEditMeeting(props) {

async function displayEditMeeting() {
    
    props.setScreen('editmeeting')
}

    return (
        <DefaultButton onClick={displayEditMeeting} className={styles.btnEdit} text="Éditer" />
    )
}
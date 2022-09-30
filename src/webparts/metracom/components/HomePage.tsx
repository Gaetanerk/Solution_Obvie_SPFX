import * as React from 'react';
import styles from './Metracom.module.scss';
import { BtnMeeting } from './BtnMeeting';
import { Form } from './Form';
import { useState } from 'react';

export function HomePage(props) {

    return (
        <div className={styles.divWelcome}>
            <BtnMeeting className={styles.btnMeeting} context={props.context} setScreen={props.setScreen} idItem={props.idItem} setIdItem={props.setIdItem}/>
            <Form className={styles.formMeeting} context={props.context}/>
        </div>
    )
}
import * as React from 'react';
import styles from './Metracom.module.scss';
import { BtnMeeting } from './BtnMeeting';
import { Form } from './Form';
import { escape } from '@microsoft/sp-lodash-subset';

export function HomePage(props) {

    return (
        <div className={styles.divWelcome}>
        <h1>Application Réunion Metracom</h1>
        <h2>Bonjour, {escape(props.userDisplayName)} !</h2>
            <BtnMeeting className={styles.btnMeeting} context={props.context} setScreen={props.setScreen} idItem={props.idItem} setIdItem={props.setIdItem} itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} itemsAD={props.itemsAD} setItemsAD={props.setItemsAD}/>
            <Form className={styles.formMeeting} context={props.context}/>
        </div>
    )
}
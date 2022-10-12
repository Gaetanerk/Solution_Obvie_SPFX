import * as React from 'react';
import styles from './Metracom.module.scss';
import { BtnMeeting } from './BtnMeeting';
import { Form } from './Form';
import { escape } from '@microsoft/sp-lodash-subset';
import { BtnFormNewMeeting } from './BtnFormNewMeeting';

export function HomePage(props) {

  console.log(props.idItem);

    return (
        <div className={styles.divWelcome}>
        <h1>Application Réunion Metracom</h1>
        <h2>Bonjour, {escape(props.userDisplayName)} !</h2>
            <BtnMeeting className={styles.btnMeeting} context={props.context} items={props.items} setItems={props.setItems} count={props.count} setCount={props.setCount} setScreen={props.setScreen} idItem={props.idItem} setIdItem={props.setIdItem} itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} idItemAD={props.idItemAD} setIdItemAD={props.setIdItemAD}/>
            <BtnFormNewMeeting context={props.context} setScreen={props.setScreen} count={props.count} setCount={props.setCount} />
            <Form className={styles.formMeeting} context={props.context} count={props.count} setCount={props.setCount} />
        </div>
    )
}
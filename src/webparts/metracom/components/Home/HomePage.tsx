import * as React from 'react';
import styles from '../Metracom.module.scss';
import { BtnMeeting } from '../Meeting/BtnMeeting';
import { Form } from '../Meeting/Form';
import { escape } from '@microsoft/sp-lodash-subset';
import { BtnFormNewMeeting } from '../Meeting/BtnFormNewMeeting';
import { SearchMeeting } from '../Search/SearchMeeting'

export function HomePage(props) {

    return (
        <div>
            <SearchMeeting context={props.context} 
                           items={props.items} setItems={props.setItems} 
                           setScreen={props.setScreen} />
            <div className={styles.divWelcome}>
            <img src={require('../../images/logoSolutionObvie.jpg')} />
            <h1>Réunion Solution Obvie</h1>
            <h2>Bonjour, {escape(props.userDisplayName)} !</h2>
                <BtnMeeting className={styles.btnMeeting} context={props.context} 
                                                          items={props.items} setItems={props.setItems} 
                                                          count={props.count} setCount={props.setCount} 
                                                          setScreen={props.setScreen} 
                                                          idItem={props.idItem} setIdItem={props.setIdItem} 
                                                          itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} 
                                                          itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} 
                                                          idItemAD={props.idItemAD} setIdItemAD={props.setIdItemAD}/>
                <BtnFormNewMeeting context={props.context} 
                                   setScreen={props.setScreen} 
                                   count={props.count} setCount={props.setCount} />
                <Form className={styles.formMeeting} context={props.context} 
                                                     count={props.count} setCount={props.setCount} />
            </div>
        </div>
    )
}
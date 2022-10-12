import * as React from 'react';
import styles from './Metracom.module.scss';
import { BtnMeeting } from './BtnMeeting';
import { BtnReturnHome } from './BtnReturnHome';

export function MeetingPage(props) {

    return (
        <div>
            <BtnReturnHome context={props.context} screen={props.screen} setScreen={props.setScreen} items={props.items} setItems={props.setItems} />
            <BtnMeeting className={styles.btnMeeting} context={props.context} items={props.items} setItems={props.setItems} count={props.count} setCount={props.setCount} setScreen={props.setScreen} idItem={props.idItem} setIdItem={props.setIdItem} itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} idItemAD={props.idItemAD} setIdItemAD={props.setIdItemAD}/>
        </div>
    )
}
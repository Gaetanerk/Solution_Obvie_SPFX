import * as React from 'react';
import { useState } from 'react';
import { HomePage } from './HomePage';
import { DetailPage } from './DetailPage';
import { EditSuccess } from './EditSuccess';

export function Welcome(props) {

    const [idItem, setIdItem] = useState();
    
    const [screen, setScreen] = useState('home');

    const [itemsDetail, setItemsDetail] = useState();
    
    const [itemsAD, setItemsAD] = useState([]);

    return (
        <div>
            {screen === 'home' && <HomePage context={props.context} setScreen={setScreen} idItem={idItem} setIdItem={setIdItem} itemsDetail={itemsDetail} setItemsDetail={setItemsDetail} itemsAD={itemsAD} setItemsAD={setItemsAD} userDisplayName={props.userDisplayName}/>}
            {screen === 'detail' && <DetailPage context={props.context} setScreen={setScreen} idItem={idItem} setIdItem={setIdItem} itemsDetail={itemsDetail} setItemsDetail={setItemsDetail} itemsAD={itemsAD} setItemsAD={setItemsAD}/>}
            {screen === 'editsuccess' && <EditSuccess context={props.context} setScreen={setScreen} idItem={idItem} setIdItem={setIdItem} />}
        </div>
    )
}
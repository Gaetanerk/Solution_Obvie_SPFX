import * as React from 'react';
import { InfoList } from './InfoList';
import { BtnReturnHome } from './BtnReturnHome';
import { ActionDecision } from './ActionDecision';

export function DetailPage(props) {
    
    return (
        <div>
            <BtnReturnHome screen={props.screen} setScreen={props.setScreen} context={props.context}/>
            <InfoList context={props.context} itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} idItem={props.idItem} setIdItem={props.setIdItem}/>
            <ActionDecision context={props.context} idItem={props.idItem} setIdItem={props.setIdItem} itemsAD={props.itemsAD} setItemsAD={props.setItemsAD}/>
        </div>
    )
}
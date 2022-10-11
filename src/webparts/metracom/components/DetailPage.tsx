import * as React from 'react';
import { InfoList } from './InfoList';
import { BtnReturnHome } from './BtnReturnHome';
import { ActionDecision } from './ActionDecision';

export function DetailPage(props) {
    
    return (
        <div>
            <BtnReturnHome screen={props.screen} setScreen={props.setScreen} context={props.context}/>
            <InfoList context={props.context} screen={props.screen} setScreen={props.setScreen} itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} idItem={props.idItem} setIdItem={props.setIdItem}/>
            <ActionDecision context={props.context} itemsAD={props.itemsAD} setItemsAD={props.setItemsAD}/>
        </div>
    )
}
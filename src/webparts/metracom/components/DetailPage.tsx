import * as React from 'react';
import { InfoList } from './InfoList';
import { BtnReturnHome } from './BtnReturnHome';
import { ActionDecision } from './ActionDecision';

export function DetailPage(props) {
    
    return (
        <div>
            <BtnReturnHome context={props.context} screen={props.screen} setScreen={props.setScreen} items={props.items} setItems={props.setItems}/>
            <InfoList context={props.context} screen={props.screen} setScreen={props.setScreen} itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} idItem={props.idItem} setIdItem={props.setIdItem} items={props.items} setItems={props.setItems}/>
            <ActionDecision context={props.context} itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} idItemAD={props.idItemAD} setIdItemAD={props.setIdItemAD} setScreen={props.setScreen} idItem={props.idItem} setIdItem={props.setIdItem}/>
        </div>
    )
}
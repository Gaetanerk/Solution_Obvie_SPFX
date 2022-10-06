import * as React from 'react';
import { InfoList } from './InfoList';
import { BtnReturnHome } from './BtnReturnHome';
import { ActionDecision } from './ActionDecision';

export function DetailPage(props) {
    
    return (
        <div>
            <BtnReturnHome screen={props.screen} setScreen={props.setScreen} context={props.context}/>
            <InfoList context={props.context} idItem={props.idItem} setIdItem={props.setIdItem} items={props.items} setItems={props.setItems}/>
            <ActionDecision context={props.context} idItem={props.idItem} setIdItem={props.setIdItem}/>
        </div>
    )
}
import * as React from 'react';
import { InfoList } from './InfoList';
import { BtnReturnHome } from './BtnReturnHome';

export function DetailPage(props) {
    
    return (
        <div>
            <InfoList context={props.context} idItem={props.idItem} setIdItem={props.setIdItem}/>
            <BtnReturnHome screen={props.screen} setScreen={props.setScreen} context={props.context}/>
        </div>
    )
}
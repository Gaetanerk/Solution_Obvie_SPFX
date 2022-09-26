import * as React from 'react';
import { InfoList } from './InfoList';
import { ActionDecision } from './ActionDecision';
import { BtnReturnHome } from './BtnReturnHome';
import { useState } from 'react';

export function DetailPage(props) {
    
    return (
        <div>
            <BtnReturnHome screen={props.screen} setScreen={props.setScreen} context={props.context}/>
        </div>
    )
}
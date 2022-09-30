import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function BtnDetails(props) {

    function displayDetail() {
        props.setScreen('detail');
        props.setIdItem(props.idItem)
    }

    return (
        <DefaultButton onClick={displayDetail} text="Détails" />
   )
}

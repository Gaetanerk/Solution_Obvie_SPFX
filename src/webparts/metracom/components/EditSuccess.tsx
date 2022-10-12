import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function EditSuccess(props) {

    function displayEditSuccess() {
        props.setScreen('detail')
    }

    return (
        <div>
            <p>Votre modification a été réalisée avec succès</p>
            <DefaultButton onClick={displayEditSuccess} text='OK' />
        </div>
    )
}
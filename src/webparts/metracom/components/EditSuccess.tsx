import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function EditSuccess(props) {

    function displayEditSuccess() {
        props.setScreen('detail')
    }

    return (
        <div>
            <p>La liste a été mise à jour avec succès</p>
            <DefaultButton onClick={displayEditSuccess} text='OK' />
        </div>
    )
}
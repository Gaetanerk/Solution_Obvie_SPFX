import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useEffect } from 'react';

export function EditSuccess(props) {

    function displayEditSuccess() {
        props.setScreen('meeting')
    }

    return (
        <div>
            <p>La liste a été mise à jour avec succès</p>
            <DefaultButton onClick={displayEditSuccess} text='OK' />
        </div>
    )
}
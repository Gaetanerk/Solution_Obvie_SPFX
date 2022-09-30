import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function BtnReturnHome(props) {

    function changeScreen() {

        props.setScreen('home');
    }

    return (
        <DefaultButton onClick={changeScreen} text="Retour à l'accueil" />
    )
}
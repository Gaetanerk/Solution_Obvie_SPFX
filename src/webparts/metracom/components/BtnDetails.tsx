import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { InfoList } from './InfoList';

export function BtnDetails(props) {

    function changeScreen() {
        props.setScreen('detail');
    }

    return (
        <DefaultButton onClick={changeScreen} text="Détails" />
   )
}

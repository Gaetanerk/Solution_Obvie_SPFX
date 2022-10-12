import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export function BtnEditMeeting(props) {

async function displayEditMeeting() {
    props.setScreen('editmeeting')
}

    return (
        <DefaultButton onClick={displayEditMeeting} className={styles.btnEdit} text="Éditer" />
    )
}
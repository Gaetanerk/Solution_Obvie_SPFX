import * as React from 'react';
import styles from './Metracom.module.scss';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import { useState } from 'react';
import { Item } from '@pnp/sp/items';
import { IContextualMenuProps } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';

export function InfoList(props) {

    const menuProps: IContextualMenuProps = {
        items: [
          {
            key: 'inProgress',
            text: 'En cours',
            iconProps: { iconName: 'ConstructionCone' },
            },
          {
            key: 'Late',
            text: 'En retard',
            iconProps: { iconName: 'Clock' },
            },
          {
            key: 'Finished',
            text: 'Terminées',
            iconProps: { iconName: 'CheckMark' },
            },
        ],
      };

    return (
        <div>
         <h1>Détail de réunion :</h1>
           <DefaultButton 
            text="Modifier le status"
            menuProps={menuProps} />
        </div>
    )
}
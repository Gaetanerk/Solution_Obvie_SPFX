import * as React from 'react';
import styles from './Metracom.module.scss';
import { IContextualMenuProps, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { NewMeeting } from './NewMeeting';


export function BtnMeeting(props) {
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'newMeeting',
        text: 'Nouvelle',
        iconProps: { iconName: 'Flag' },
        onClick: function() {
          console.log('Nouvelle')
        },
      },
      {
        key: 'inProgress',
        text: 'En cours',
        iconProps: { iconName: 'ConstructionCone' },
        onClick: function() {
          console.log('En cours')
          },
      },
      {
        key: 'Late',
        text: 'En retard',
        iconProps: { iconName: 'Clock' },
        onClick: function() {
          console.log('En retard')
          },
      },
      {
        key: 'Finished',
        text: 'Terminées',
        iconProps: { iconName: 'CheckMark' },
        onClick: function() {
          console.log('Terminées')
          },
      },
    ],
  };
    return (
    <Stack 
    className={styles.btnMeeting}>
        <DefaultButton 
          text="Voir les réunions"
          menuProps={menuProps}
        />
    </Stack>
    );
  };
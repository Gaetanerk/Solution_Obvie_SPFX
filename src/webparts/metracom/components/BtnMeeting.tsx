import * as React from 'react';
import styles from './Metracom.module.scss';
import { IContextualMenuProps, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export function BtnMeeting(props) {
  
  async function getList() {
    const sp = spfi().using(SPFx(props.context));
    const items = await sp.web.lists.getByTitle("Liste de réunion").items();
  }

const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'newMeeting',
        text: 'Nouvelle',
        iconProps: { iconName: 'Flag' },
        onClick: function() {
          console.log('clicked! Nouvelle')
          },
      },
      {
        key: 'inProgress',
        text: 'En cours',
        iconProps: { iconName: 'ConstructionCone' },
        onClick: function() {
          console.log('clicked! En cours')
          },
      },
      {
        key: 'Late',
        text: 'En retard',
        iconProps: { iconName: 'Clock' },
        onClick: function() {
          console.log('clicked! En retard')
          },
      },
      {
        key: 'Finished',
        text: 'Terminées',
        iconProps: { iconName: 'CheckMark' },
        onClick: function() {
          console.log('clicked! Terminées')
          },
      },
    ],
  };
  

console.log(menuProps.items[0])
console.log(menuProps.items[1])
console.log(menuProps.items[2])
console.log(menuProps.items[3])

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
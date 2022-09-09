import * as React from 'react';
import styles from './Metracom.module.scss';
import { IContextualMenuProps, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { useState } from 'react'


export function BtnMeeting(props) {
  const [items, setItems]=useState([])
  async function getList(status) {
    const sp = spfi().using(SPFx(props.context));
    const items = await sp.web.lists.getByTitle("Liste de réunion").items.filter("Etat eq '" + status + "'")();
    items.forEach(item => {
      setItems(prevItems => [...prevItems, item])
    });
    console.log(items);
    
  }
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'newMeeting',
        text: 'Nouvelle',
        iconProps: { iconName: 'Flag' },
        onClick: function() {
        const getItems = getList("Nouvelle");
        },
      },
      {
        key: 'inProgress',
        text: 'En cours',
        iconProps: { iconName: 'ConstructionCone' },
        onClick: function() {
          const getItems = getList("En cours");
          },
      },
      {
        key: 'Late',
        text: 'En retard',
        iconProps: { iconName: 'Clock' },
        onClick: function() {
          const getItems = getList("En retard");
          },
      },
      {
        key: 'Finished',
        text: 'Terminées',
        iconProps: { iconName: 'CheckMark' },
        onClick: function() {
          const getItems = getList("Terminée");
          },
      },
    ],
  };
    return (
    <div>
    <Stack 
    className={styles.btnMeeting}>
        <DefaultButton 
          text="Voir les réunions"
          menuProps={menuProps}
        />
          </Stack>
          {items.map((item) =>
          <h2>{item.Title}</h2>
          )}
          </div>
    );
  };  
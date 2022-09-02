import * as React from 'react';
import styles from './Metracom.module.scss';
import { IContextualMenuProps, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export function BtnMeeting(props) {

const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'newMeeting',
        text: 'Nouvelle',
        iconProps: { iconName: 'Flag' },
      },
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
  

console.log(menuProps.items[0])
console.log(menuProps.items[1])
console.log(menuProps.items[2])
console.log(menuProps.items[3])

async function getList() {
  const sp = spfi().using(SPFx(props.context));
  const items = await sp.web.lists.getByTitle("Liste de réunion").items();
}

  const handleMeeting = (ev) => {
    ev.preventDefault()
    if (menuProps.items[0].onItemClick) {
      console.log("Clicked newMeeting")
    }
    else if (menuProps.items[1].onItemClick) {
      console.log("Clicked inProgress")
    }
    else if (menuProps.items[2].onItemClick) {
      console.log("Clicked Late")
    }
    else {
      console.log("Clicked Finished")
    }
}

    return (
    <Stack 
    className={styles.btnMeeting}>
        <DefaultButton 
          onClick={handleMeeting}
          text="Voir les réunions"
          menuProps={menuProps}
        />
    </Stack>
    );
  };
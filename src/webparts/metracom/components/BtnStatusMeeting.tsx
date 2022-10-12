import * as React from 'react';
import { IContextualMenuProps } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export function BtnStatusMeeting(props) {
    
    async function updateStatus(status) {
        const sp = spfi().using(SPFx(props.context));
        const list = sp.web.lists.getByTitle("Liste de réunion");
        const i = await list.items.getById(props.idItem).update({
          Etat: status
        });
      }

    const menuProps: IContextualMenuProps = {
        items: [
          {
            key: 'inProgress',
            text: 'En cours',
            iconProps: { iconName: 'ConstructionCone' },
            onClick: function() {
            const upStatus = updateStatus("En cours")
            props.setIdItem(props.idItem)
            props.setScreen('editsuccess')
          }
            
            },
          {
            key: 'Late',
            text: 'En retard',
            iconProps: { iconName: 'Clock' },
            onClick: function() {
            const upStatus = updateStatus("En retard")
            props.setIdItem(props.idItem)
            props.setScreen('editsuccess')
          }
            },
          {
            key: 'Finished',
            text: 'Terminée',
            iconProps: { iconName: 'CheckMark' },
            onClick: function() {
            const upStatus = updateStatus("Terminée")
            props.setIdItem(props.idItem)
            props.setScreen('editsuccess')
          }
            },
        ],
      };

    return (
        <DefaultButton text="Modifier l'état" menuProps={menuProps} />
    )
}
import * as React from 'react';
import { IContextualMenuProps } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export function BtnStatusAD(props) {
    
    async function updateStatus(idAD) {
        const sp = spfi().using(SPFx(props.context));
        const list = sp.web.lists.getByTitle("Actiondecision");
        const i = await list.items.getById(props.idItemAD).update({
          Etat: idAD
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
            props.setIdItemAD(props.idItemAD)
                props.setScreen('editsuccess')}
          },
          {
            key: 'Late',
            text: 'En retard',
            iconProps: { iconName: 'Clock' },
            onClick: function() {
            const upStatus = updateStatus("En retard")
            props.setIdItemAD(props.idItemAD)
                props.setScreen('editsuccess')}
          },
          {
            key: 'Finished',
            text: 'Terminée',
            iconProps: { iconName: 'CheckMark' },
            onClick: function() {
            const upStatus = updateStatus("Terminée")
            props.setIdItemAD(props.idItemAD)
            props.setScreen('editsuccess')}
          },
        ],
      };

    return (
        <DefaultButton text="Modifier l'état" menuProps={menuProps} />
    )
}
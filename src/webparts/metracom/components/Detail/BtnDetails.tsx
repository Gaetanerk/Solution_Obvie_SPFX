import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import styles from '../Metracom.module.scss';

export function BtnDetails(props) {
    
    async function getListDetail() {
      const sp = spfi().using(SPFx(props.context));
      const item = await sp.web.lists.getByTitle("Liste de réunion").items.getById(props.idItem)();
          const userName = await sp.web.siteUsers.getById(item.ParticipantsId).select('Title')();
          item.ParticipantsId = userName.Title
          const date = new Date(item.Dateetheure);
          const newDate = date.toLocaleString('fr-FR');
          item.Dateetheure = newDate
          props.setItemsDetail(item)
        };

    async function getListAD(meeting) {
        const sp = spfi().using(SPFx(props.context));
        const itemsListAD = await sp.web.lists.getByTitle("Actiondecision").items.filter("IDMeeting eq '" + meeting + "'")();
          for (const itemListAD of itemsListAD) {
            const userNameRecipient = await sp.web.siteUsers.getById(itemListAD.Destinataired_x00e9_cisionStringId).select('Title')();
            itemListAD.Destinataired_x00e9_cisionId = userNameRecipient.Title
            const userNameTransmitter = await sp.web.siteUsers.getById(itemListAD.EmetteurdelactionStringId).select('Title')();
            itemListAD.EmetteurdelactionId = userNameTransmitter.Title
            const userNameValidator = await sp.web.siteUsers.getById(itemListAD.ValideurdelactionStringId).select('Title')();
            itemListAD.ValideurdelactionId = userNameValidator.Title
            const dateStart = new Date(itemListAD.Dated_x00e9_but);
            const newDateStart = dateStart.toLocaleString('fr-FR');
            const dateEnd = new Date(itemListAD.Datedefin);
            const newDateEnd = dateEnd.toLocaleString('fr-FR');
            itemListAD.Dated_x00e9_but = newDateStart
            itemListAD.Datedefin = newDateEnd
            props.setIdItemAD(itemListAD.ID)
            props.setItemsAD(prevItemsListAD => [...prevItemsListAD, itemListAD])
            }
          };

    function displayDetail() {
        props.setIdItem();
        props.setIdItemAD();
        props.setItems(props.items)
        props.setIdItem(props.idItem);
        props.setIdItemAD(props.idItemAD);
        props.setItemsDetail(props.item)
        props.setItemsAD(props.itemsAD)
        const getItemsListAD = getListAD(props.idItem)
        props.setScreen('detail');
    }

    return (
        <DefaultButton onClick={displayDetail} className={styles.btnEdit} text="Détails" />
   )
}
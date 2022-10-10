import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useState } from 'react';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";

export function BtnDetails(props) {
    
    async function getListDetail() {
      const sp = spfi().using(SPFx(props.context));
      const item = await sp.web.lists.getByTitle("Liste de réunion").items.getById(props.idItem)();
        //for (const itemDetail of itemsDetail) {
          const userName = await sp.web.siteUsers.getById(item.ParticipantsId).select('Title')();
          item.ParticipantsId = userName.Title
          const date = new Date(item.Dateetheure);
          const newDate = date.toLocaleString('fr-FR');
          item.Dateetheure = newDate
          props.setItemsDetail(item)
          //}
        };

    function displayDetail() {
        props.setIdItem(props.idItem);
        props.setItemsDetail(props.item)
        console.log(props.item);
        props.setScreen('detail');
    }

    return (
        <DefaultButton onClick={displayDetail} text="Détails" />
   )
}
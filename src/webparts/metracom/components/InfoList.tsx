import * as React from 'react';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import { ActionDecision } from './ActionDecision';

export function InfoList(props) {

    /*async function getDetailList() {
    const sp = spfi().using(SPFx(props.context));
    const items = await sp.web.lists.getByTitle("Liste de réunion").items.getById(props.idItem)();
    for (const item of items) {
        const date = new Date(item.Dateetheure);
        const newDate = date.toLocaleString('fr-FR');
        item.Dateetheure = newDate
        props.setItems(prevItems => [...prevItems, item])
        }
      };*/

    return (
        <div>
           <h1>Détail de réunion : {props.idItem}</h1>
           <ActionDecision />
        </div>
    )
}
import * as React from 'react';
import { IContextualMenuProps } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import styles from './Metracom.module.scss';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export function InfoList(props) {

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
            const upStatus = updateStatus("En cours")}
            },
          {
            key: 'Late',
            text: 'En retard',
            iconProps: { iconName: 'Clock' },
            onClick: function() {
            const upStatus = updateStatus("En retard")}
            },
          {
            key: 'Finished',
            text: 'Terminée',
            iconProps: { iconName: 'CheckMark' },
            onClick: function() {
            const upStatus = updateStatus("Terminée")}
            },
        ],
      };

    return (
        <div>
         <h1>Détail de réunion :</h1>
          <table className={styles.tableList}>
            <thead>
              <tr className={styles.headListMeeting}>
                <th>Objet :</th>
                <th>Date et Heure :</th>
                <th>Ordre du jour :</th>
                <th>Organisateur :</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.listMeeting}>
                <td width={"25%"}>{props.itemsDetail.Title}</td>
                <td width={"25%"}>{props.itemsDetail.Dateetheure}</td>
                <td width={"25%"}>{props.itemsDetail.Ordredujour}</td>
                <td width={"25%"}>{props.itemsDetail.Organisateur}</td>
              </tr>
            </tbody>
            <thead>
            <tr className={styles.headListMeeting}>
              <th>Nom du projet :</th>
              <th>Nom du client :</th>
              <th>Participants :</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.listMeeting}>
              <td width={"25%"}>{props.itemsDetail.Nomduprojet}</td>
              <td width={"25%"}>{props.itemsDetail.Nomduclient}</td>
              <td width={"25%"}>{props.itemsDetail.ParticipantsId}</td>
              <td width={"25%"}><DefaultButton text="Modifier l'état" menuProps={menuProps} /></td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}
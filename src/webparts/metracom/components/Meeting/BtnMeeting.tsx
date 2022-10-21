import * as React from 'react';
import styles from '../Metracom.module.scss';
import { IContextualMenuProps, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import { BtnDetails } from '../Detail/BtnDetails';



export function BtnMeeting(props) {
  
  async function getList(status) {
    const sp = spfi().using(SPFx(props.context));
    const items = await sp.web.lists.getByTitle("Liste de réunion").items.filter("Etat eq '" + status + "'")();
      for (const item of items) {
        const userName = await sp.web.siteUsers.getById(item.ParticipantsId).select('Title')();
        item.ParticipantsId = userName.Title
        const date = new Date(item.Dateetheure);
        const newDate = date.toLocaleString('fr-FR');
        item.Dateetheure = newDate
        props.setItems(prevItems => [...prevItems, item])
        }
      };
      
  console.log('ok');

  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'newMeeting',
        text: 'Nouvelle',
        iconProps: { iconName: 'Flag' },
        onClick: function() {
          props.setItems([]);
          const getItems = getList("Nouvelle");
          props.setScreen('meeting');
        },
      },
      {
        key: 'inProgress',
        text: 'En cours',
        iconProps: { iconName: 'ConstructionCone' },
        onClick: function() {
          props.setItems([]);
          const getItems = getList("En cours");
          props.setScreen('meeting');
        },
      },
      {
        key: 'Late',
        text: 'En retard',
        iconProps: { iconName: 'Clock' },
        onClick: function() {
          props.setItems([]);
          const getItems = getList("En retard");
          props.setScreen('meeting');
        },
      },
      {
        key: 'Finished',
        text: 'Terminées',
        iconProps: { iconName: 'CheckMark' },
        onClick: function() {
          props.setItems([]);
          const getItems = getList("Terminée");
          props.setScreen('meeting');
        },
      },
    ],
  };
  
  return (
    <div>
    <Stack>
        <DefaultButton 
          className={styles.btnMeeting} 
          text="Voir les réunions"
          menuProps={menuProps}
          />
          </Stack>
          {props.items.map((item) =>
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
                <td width={"25%"}>{item.Title}</td>
                <td width={"25%"}>{item.Dateetheure}</td>
                <td width={"25%"}>{item.Ordredujour}</td>
                <td width={"25%"}>{item.Organisateur}</td>
              </tr>
            </tbody>
            <thead>
            <tr className={styles.headListMeeting}>
              <th>Nom du projet :</th>
              <th>Nom du client :</th>
              <th>Participants :</th>
              <th>État :</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.listMeeting}>
              <td width={"25%"}>{item.Nomduprojet}</td>
              <td width={"25%"}>{item.Nomduclient}</td>
              <td width={"25%"}>{item.ParticipantsId}</td>
              <td width={"25%"}>{item.Etat}</td>
            </tr>
          </tbody>
            <tbody>
              <tr className={styles.listMeeting}>
                <td width={"25%"}></td>
                <td width={"25%"}></td>
                <td width={"25%"}></td>
                <td width={"25%"}><BtnDetails context={props.context} 
                                            idItem={item.Id} setIdItem={props.setIdItem} 
                                            idItemAD={props.idItemAD} setIdItemAD={props.setIdItemAD} 
                                            setScreen={props.setScreen} 
                                            item={item} items={props.items} setItems={props.setItems} 
                                            itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} 
                                            itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} /></td>
              </tr>
            </tbody>
        </table>
          )}
          </div>
    );
  };
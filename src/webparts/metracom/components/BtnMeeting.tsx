import * as React from 'react';
import styles from './Metracom.module.scss';
import { IContextualMenuProps, Stack } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { useState } from 'react';
import { BtnDetails } from './BtnDetails';



export function BtnMeeting(props) {
  const [items, setItems] = useState([]);
  async function getList(status) {
    const sp = spfi().using(SPFx(props.context));
    const items = await sp.web.lists.getByTitle("Liste de réunion").items.filter("Etat eq '" + status + "'")();
    items.forEach(item => {
      setItems(prevItems => [...prevItems, item])
    });
    console.log(items);
  }

  console.log('ok2');

  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'newMeeting',
        text: 'Nouvelle',
        iconProps: { iconName: 'Flag' },
        onClick: function() {
        setItems([]);
        const getItems = getList("Nouvelle");
        },
      },
      {
        key: 'inProgress',
        text: 'En cours',
        iconProps: { iconName: 'ConstructionCone' },
        onClick: function() {
          setItems([]);
          const getItems = getList("En cours");
        },
      },
      {
        key: 'Late',
        text: 'En retard',
        iconProps: { iconName: 'Clock' },
        onClick: function() {
          setItems([]);
          const getItems = getList("En retard");
          },
      },
      {
        key: 'Finished',
        text: 'Terminées',
        iconProps: { iconName: 'CheckMark' },
        onClick: function() {
          setItems([]);
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
          <table className={styles.tableList}>
            <thead>
              <tr className={styles.headListMeeting}>
                <th>Objet</th>
                <th>Date et Heure</th>
                <th>Ordre du jour</th>
                <th>Organisateur</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.listMeeting}>
              <td>{item.Title}</td>
                <td>{item.Dateetheure}</td>
                <td>{item.Ordredujour}</td>
                <td>{item.Organisateur}</td>
              </tr>
            </tbody>
            <thead>
            <tr className={styles.headListMeeting}>
              <th>Nom du projet</th>
              <th>Nom du client</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.listMeeting}>
              <td>{item.Nomduprojet}</td>
              <td>{item.Nomduclient}</td>
              <td>{item.PaticipantsId}</td>
              <td><BtnDetails /></td>
            </tr>
          </tbody>
        </table>
          )}
          </div>
    );
  };
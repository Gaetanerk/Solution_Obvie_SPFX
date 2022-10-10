import * as React from 'react';
import { IContextualMenuProps } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import styles from './Metracom.module.scss';

export function InfoList(props) {

    const menuProps: IContextualMenuProps = {
        items: [
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

      console.log(props.idItem);
      React.useEffect(() => {
        console.log(props.itemsDetail)
      })

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
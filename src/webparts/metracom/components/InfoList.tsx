import * as React from 'react';
import styles from './Metracom.module.scss';
import { BtnEditMeeting } from './BtnEditMeeting';
import { BtnStatusMeeting } from './BtnStatusMeeting';

export function InfoList(props) {

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
              <th><BtnEditMeeting /></th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.listMeeting}>
              <td width={"25%"}>{props.itemsDetail.Nomduprojet}</td>
              <td width={"25%"}>{props.itemsDetail.Nomduclient}</td>
              <td width={"25%"}>{props.itemsDetail.ParticipantsId}</td>
              <td width={"25%"}><BtnStatusMeeting context={props.context} idItem={props.idItem} setIdItem={props.setIdItem} setScreen={props.setScreen} /></td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}
import * as React from 'react';
import styles from './Metracom.module.scss';
import { BtnDetails } from './BtnDetails';
import { BtnReturnHome } from './BtnReturnHome';
import { SearchMeeting } from './SearchMeeting';

export function Search(props) {
    
    return (
        <div>
            <BtnReturnHome context={props.context} 
                           screen={props.screen} setScreen={props.setScreen} 
                           items={props.items} setItems={props.setItems}
                           itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} />
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
            </tr>
          </thead>
          <tbody>
            <tr className={styles.listMeeting}>
              <td width={"25%"}>{item.Nomduprojet}</td>
              <td width={"25%"}>{item.Nomduclient}</td>
              <td width={"25%"}>{item.ParticipantsId}</td>
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
    )
}
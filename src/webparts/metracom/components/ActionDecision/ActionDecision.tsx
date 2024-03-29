import * as React from 'react';
import styles from '../Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button'
import { TextField } from '@fluentui/react/lib/TextField';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { useState } from 'react'
import "@pnp/sp/site-users/web";
import { IIconProps } from '@fluentui/react';
import { ActionButton } from '@fluentui/react/lib/Button';
import { BtnEditAD } from './BtnEditAD';
import { BtnStatusAD } from './BtnStatusAD';

export function ActionDecision(props) {
  
  const [formData, setFormData] = useState({
    titleAction: "",
    descriptionAction: "",
    summonsAction: "",
    transmitter: "",
    validator: "",
    descriptionDecision: "",
    recipientDecision: "",
    status: "Nouvelle",
    termAction: "",
    dateStart: "",
    dateEnd: "",
    ID: props.idItem,
    meeting: ""
    })
      
    const [attendeesTransmitter, setAttendeesTransmitter] = useState([]);
    const [attendeesValidator, setAttendeesValidator] = useState([]);
    const [attendeesRecipient, setAttendeesRecipient] = useState([]);
    let [count, setCount] = useState(1);
    
    let inputValue = false;
    if (formData.titleAction.length > 0
      && formData.descriptionAction.length > 0
      && formData.summonsAction.length > 0
      && formData.descriptionDecision.length > 0
      && attendeesTransmitter.length > 0
      && attendeesValidator.length > 0
      && attendeesRecipient.length > 0
      && formData.status.length > 0
      && formData.termAction.length > 0
      && formData.dateStart.length  > 0
      && formData.dateEnd.length > 0 ) {
        inputValue = true;
      }

      async function getUserIdTransmitter(users) {
        const sp = spfi().using(SPFx(props.context));
        const userIdTransmitter = [];
        for (let i = 0; i < users.length; i++) {
          const user = await sp.web.siteUsers.getByLoginName(users[i].loginName)();
          userIdTransmitter.push(user.Id)
        }
        return userIdTransmitter;
      }
      
      async function getUserIdValidator(users) {
        const sp = spfi().using(SPFx(props.context));
        const userIdValidator = [];
        for (let i = 0; i < users.length; i++) {
          const user = await sp.web.siteUsers.getByLoginName(users[i].loginName)();
          userIdValidator.push(user.Id)
        }
        return userIdValidator;
      }
      
      async function getUserIdRecipient(users) {
        const sp = spfi().using(SPFx(props.context));
      const userIdRecipient = [];
        for (let i = 0; i < users.length; i++) {
        const user = await sp.web.siteUsers.getByLoginName(users[i].loginName)();
        userIdRecipient.push(user.Id)
      }
      return userIdRecipient;
    }
    
    async function addListAD() {
      const sp = spfi().using(SPFx(props.context));
      const userIdTransmitter = await getUserIdTransmitter(attendeesTransmitter)
      const userIdValidator = await getUserIdValidator(attendeesValidator)
      const userIdRecipient = await getUserIdRecipient(attendeesRecipient)
      const iar = await sp.web.lists.getByTitle("Actiondecision").items.add({
        Title: formData.titleAction,
        Descriptiondelaction: formData.descriptionAction,
        Assignationdelaction: formData.summonsAction,
        EmetteurdelactionId: userIdTransmitter[0],
        ValideurdelactionId: userIdValidator[0],
        Descriptiond_x00e9_cision: formData.descriptionDecision,
        Destinataired_x00e9_cisionId: userIdRecipient[0],
        Etat: formData.status,
        Dur_x00e9_e: formData.termAction,
        Dated_x00e9_but: formData.dateStart,
        Datedefin: formData.dateEnd,
        IDMeeting: formData.ID
      });
      setFormData({...formData, titleAction: "", 
                                descriptionAction: "", 
                                summonsAction: "", 
                                transmitter: "", 
                                validator: "", 
                                descriptionDecision: "", 
                                recipientDecision: "", 
                                status: "", 
                                termAction: "", 
                                dateStart: "", 
                                dateEnd: "", 
                                meeting: ""});
      setCount(count + 1);
    }
    
    function onChangePeopleTransmitter(e) {
      setAttendeesTransmitter([]);
      e.forEach(ePeople => {
        setAttendeesTransmitter(prevAttendeesTransmitter => [...prevAttendeesTransmitter, ePeople])
      });
    }        
    
    function onChangePeopleValidator(e) {
      setAttendeesValidator([]);
      e.forEach(ePeople => {
        setAttendeesValidator(prevAttendeesValidator => [...prevAttendeesValidator, ePeople])
      });
    }        
    
    function onChangePeopleRecipient(e) {
      setAttendeesRecipient([]);
      e.forEach(ePeople => {
        setAttendeesRecipient(prevAttendeesRecipient => [...prevAttendeesRecipient, ePeople])
      });
      }

      const addFriendIcon: IIconProps = { iconName: 'Add' };   
      const cancel: IIconProps = { iconName: 'Cancel' };   
      
      if (count !%2) {
        return (
          <div>
            <h1>Action Décision :</h1>
            <ActionButton onClick={() =>setCount(count + 1)} iconProps={addFriendIcon}>
            Ajouter Action Décision
            </ActionButton>
        {props.itemsAD.map((item) =>
        <table className={styles.tableList}>
        <thead>
          <tr className={styles.headListMeeting}>
            <th>Titre action :</th>
            <th>Description action :</th>
            <th>Assignation action :</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.listMeeting}>
            <td width={"33%"}>{item.Title}</td>
            <td width={"33%"}>{item.Descriptiondelaction}</td>
            <td width={"33%"}>{item.Assignationdelaction}</td>
          </tr>
        </tbody>
        <thead>
          <tr className={styles.headListMeeting}>
            <th>Émetteur action :</th>
            <th>Valideur action :</th>
            <th>État :</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.listMeeting}>
            <td width={"33%"}>{item.EmetteurdelactionId}</td>
            <td width={"33%"}>{item.ValideurdelactionId}</td>
            <td width={"33%"}>{item.Etat}</td>
          </tr>
        </tbody>
        <thead>
        <tr className={styles.headListMeeting}>
          <th>Description décision :</th>
          <th>Destinataire décision :</th>
          <th>Durée :</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.listMeeting}>
          <td width={"33%"}>{item.Descriptiond_x00e9_cision}</td>
          <td width={"33%"}>{item.Destinataired_x00e9_cisionId}</td>
          <td width={"33%"}>{item.Dur_x00e9_e}</td>
        </tr>
      </tbody>
      <thead>
        <tr className={styles.headListMeeting}>
          <th>Date de début :</th>
          <th>Date de fin :</th>
          <th><BtnEditAD context={props.context} 
                         setScreen={props.setScreen} 
                         itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} 
                         itemsDetailAD={item} setItemsDetailAD={props.setItemsDetailAD} /></th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.listMeeting}>
          <td width={"33%"}>{item.Dated_x00e9_but}</td>
          <td width={"33%"}>{item.Datedefin}</td>
          <td width={"33%"}><BtnStatusAD context={props.context} 
                                         idItemAD={item.ID} setIdItemAD={props.setIdItemAD} 
                                         setScreen={props.setScreen}
                                         itemsAD={props.itemsAD} 
                                         setItemsAD={props.setItemsAD}
                                         item={item} /></td>
        </tr>
      </tbody>
    </table>
        )}
          </div>
    )
  } else {
    return (
      <div>
        <h1>Action Décision :</h1>
        <ActionButton onClick={() =>setCount(count + 1)} iconProps={cancel}>
          Annuler
        </ActionButton>
        {props.itemsAD.map((item) =>
        <table className={styles.tableList}>
        <thead>
          <tr className={styles.headListMeeting}>
            <th>Titre action :</th>
            <th>Description action :</th>
            <th>Assignation action :</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.listMeeting}>
            <td width={"33%"}>{item.Title}</td>
            <td width={"33%"}>{item.Descriptiondelaction}</td>
            <td width={"33%"}>{item.Assignationdelaction}</td>
          </tr>
        </tbody>
        <thead>
          <tr className={styles.headListMeeting}>
            <th>Émetteur action :</th>
            <th>Valideur action :</th>
            <th>État :</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.listMeeting}>
            <td width={"33%"}>{item.EmetteurdelactionId}</td>
            <td width={"33%"}>{item.ValideurdelactionId}</td>
            <td width={"33%"}>{item.Etat}</td>
          </tr>
        </tbody>
        <thead>
        <tr className={styles.headListMeeting}>
          <th>Description décision :</th>
          <th>Destinataire décision :</th>
          <th>Durée :</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.listMeeting}>
          <td width={"33%"}>{item.Descriptiond_x00e9_cision}</td>
          <td width={"33%"}>{item.Destinataired_x00e9_cisionId}</td>
          <td width={"33%"}>{item.Dur_x00e9_e}</td>
        </tr>
      </tbody>
      <thead>
        <tr className={styles.headListMeeting}>
          <th>Date de début :</th>
          <th>Date de fin :</th>
          <th><BtnEditAD context={props.context} 
                         items={props.items} setItems={props.setItems} 
                         itemsDetailAD={item} setItemsDetailAD={props.setItemsDetailAD} 
                         setScreen={props.setScreen} 
                         idItem={props.idItem} setIdItem={props.setIdItem} 
                         itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} 
                         itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} 
                         idItemAD={props.idItemAD} setIdItemAD={props.setIdItemAD}/></th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.listMeeting}>
          <td width={"33%"}>{item.Dated_x00e9_but}</td>
          <td width={"33%"}>{item.Datedefin}</td>
          <td width={"33%"}><BtnStatusAD context={props.context} 
                                         idItemAD={item.ID} setIdItemAD={props.setIdItemAD} 
                                         setScreen={props.setScreen}
                                         itemsAD={props.itemsAD} 
                                         setItemsAD={props.setItemsAD}
                                         item={item}/></td>
        </tr>
      </tbody>
    </table>
        )}
        <form className={styles.formMeeting}>
        <input onChange={(e) => setFormData({...formData, status: e.currentTarget.value})} 
               value={formData.status} style={{visibility: 'hidden'}} />
        <TextField onChange={(e) => setFormData({...formData, titleAction: e.currentTarget.value})} 
                   className={styles.inputForm} 
                   value={formData.titleAction} 
                   placeholder="Titre de l'action" autoFocus={true} />
        <TextField onChange={(e) => setFormData({...formData, descriptionAction: e.currentTarget.value})} 
                   className={styles.inputForm} 
                   value={formData.descriptionAction} 
                   placeholder="Description de l'action" />
        <PeoplePicker
          context={props.context}
          showtooltip={true}
          onChange={onChangePeopleTransmitter}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Emetteur de l'action"
          peoplePickerWPclassName={styles.backgroundPeoplePicker}
          />
        <TextField onChange={(e) => setFormData({...formData, summonsAction: e.currentTarget.value})} 
                   className={styles.inputFormSummons} 
                   value={formData.summonsAction} 
                   placeholder="Assignation de l'action" />
        <PeoplePicker
          context={props.context}
          showtooltip={true}
          onChange={onChangePeopleValidator}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Valideur de l'action"
          peoplePickerWPclassName={styles.backgroundPeoplePicker}
          />
        <TextField onChange={(e) => setFormData({...formData, descriptionDecision: e.currentTarget.value})} 
                   className={styles.inputFormDesc} 
                   value={formData.descriptionDecision} 
                   placeholder="Description décision" />
        <PeoplePicker
          context={props.context}
          showtooltip={true}
          onChange={onChangePeopleRecipient}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Destinataire décision"
          peoplePickerWPclassName={styles.backgroundPeoplePicker}
          />
        <TextField onChange={(e) => setFormData({...formData, termAction: e.currentTarget.value})} 
                   className={styles.inputFormTerm} 
                   value={formData.termAction} 
                   placeholder="Durée de l'action" />
        <TextField onChange={(e) => setFormData({...formData, dateStart: e.currentTarget.value})} 
                   className={styles.inputForm} 
                   value={formData.dateStart} 
                   type="datetime-local" 
                   placeholder="Date de début" />
        <TextField onChange={(e) => setFormData({...formData, dateEnd: e.currentTarget.value})} 
                   className={styles.inputForm} 
                   value={formData.dateEnd} 
                   type="datetime-local" 
                   placeholder="Date de fin" />
        <DefaultButton onClick={addListAD} 
                       className={styles.btnSubmit} 
                       disabled={!inputValue ? true : false} 
                       text="Valider le formulaire" />
        </form>
    </div>
      )
    }
  }
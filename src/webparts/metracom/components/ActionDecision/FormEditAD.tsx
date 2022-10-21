import * as React from 'react';
import styles from '../Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { spfi, SPFx } from "@pnp/sp";
import { useState, useEffect } from 'react'
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { BtnReturnMeeting } from '../Meeting/BtnReturnMeeting';

export function FormEditAD(props) {         
    
    const dateStart = props.itemsDetailAD.Dated_x00e9_but;
    const dateStartRebuild = dateStart[6]+
                             dateStart[7]+
                             dateStart[8]
                             +dateStart[9]+
                             "-"+
                             dateStart[3]+
                             dateStart[4]+
                             "-"+
                             dateStart[0]+
                             dateStart[1]+
                             "T"+
                             dateStart[11]+
                             dateStart[12]+
                             ":"+
                             dateStart[14]+
                             dateStart[15];
    const dateEnd = props.itemsDetailAD.Datedefin;
    const dateEndRebuild = dateEnd[6]+
                           dateEnd[7]+
                           dateEnd[8]+
                           dateEnd[9]+
                           "-"+
                           dateEnd[3]+
                           dateEnd[4]+
                           "-"+
                           dateEnd[0]+
                           dateEnd[1]+
                           "T"+
                           dateEnd[11]+
                           dateEnd[12]+
                           ":"+
                           dateEnd[14]+
                           dateEnd[15];

    const [formData, setFormData] = useState({
        titleAction: props.itemsDetailAD.Title,
        descriptionAction: props.itemsDetailAD.Descriptiondelaction,
        summonsAction: props.itemsDetailAD.Assignationdelaction,
        transmitter: props.itemsDetailAD.EmetteurdelactionId,
        validator: props.itemsDetailAD.ValideurdelactionId,
        descriptionDecision: props.itemsDetailAD.Descriptiond_x00e9_cision,
        recipientDecision: props.itemsDetailAD.Destinataired_x00e9_cisionId,
        termAction: props.itemsDetailAD.Dur_x00e9_e,
        dateStart: dateStartRebuild,
        dateEnd: dateEndRebuild
      })
      
    const [attendeesTransmitter, setAttendeesTransmitter] = useState([]);
    const [attendeesValidator, setAttendeesValidator] = useState([]);
    const [attendeesRecipient, setAttendeesRecipient] = useState([]);

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

    async function updateMeeting() {
        const sp = spfi().using(SPFx(props.context));
        const userIdTransmitter = await getUserIdTransmitter(attendeesTransmitter)
        const userIdValidator = await getUserIdValidator(attendeesValidator)
        const userIdRecipient = await getUserIdRecipient(attendeesRecipient)
        const list = sp.web.lists.getByTitle("Actiondecision");
        const i = await list.items.getById(props.itemsDetailAD.ID).update({
            Title: formData.titleAction,
            Descriptiondelaction: formData.descriptionAction,
            Assignationdelaction: formData.summonsAction,
            Emetteurdelaction: userIdTransmitter[0],
            Valideurdelaction: userIdValidator[0],
            Descriptiond_x00e9_cision: formData.descriptionDecision,
            Destinataired_x00e9_cisionId: userIdRecipient[0],
            Dur_x00e9_e: formData.termAction,
            Dated_x00e9_but: formData.dateStart,
            Datedefin: formData.dateEnd,
        })
        setFormData({...formData, titleAction: "", 
                                  descriptionAction: "", 
                                  summonsAction: "", 
                                  transmitter: "", 
                                  validator: "", 
                                  descriptionDecision: "", 
                                  recipientDecision: "", 
                                  termAction: "", 
                                  dateStart: "", 
                                  dateEnd: ""});
        props.itemsDetail.Title = formData.titleAction;
        const dateStart = new Date(formData.dateStart);
        const newDateStart = dateStart.toLocaleString('fr-FR');
        const dateEnd = new Date(formData.dateEnd);
        const newDateEnd = dateEnd.toLocaleString('fr-FR');
        props.itemsDetailAD.Descriptiondelaction = formData.descriptionAction;
        props.itemsDetailAD.Assignationdelaction = formData.summonsAction;
        props.itemsDetailAD.Emetteurdelaction = formData.transmitter;
        props.itemsDetailAD.Valideurdelaction = formData.validator;
        props.itemsDetailAD.Descriptiond_x00e9_cision = formData.descriptionDecision;
        props.itemsDetailAD.Destinataired_x00e9_cisionId = formData.recipientDecision;
        props.itemsDetailAD.Dur_x00e9_e = formData.termAction;
        props.itemsDetailAD.Dated_x00e9_but = newDateStart;
        props.itemsDetailAD.Datedefin = newDateEnd;
        props.setItemsAD(props.itemsAD)
        props.setItemsDetailAD(props.itemsDetailAD)
        props.setScreen('editsuccess')
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

    return (
        <div>
        <BtnReturnMeeting context={props.context} 
                          items={props.items} setItems={props.setItems} 
                          setScreen={props.setScreen} 
                          itemsDeatilAD={props.itemsDetailAD} setItemsDetailAD={props.setItemsDetailAD} />
        <form className={styles.formMeeting}>
        <TextField onChange={(e) => setFormData({...formData, titleAction: e.currentTarget.value})} 
                  className={styles.inputForm} 
                  value={formData.titleAction} 
                  placeholder="Titre de l'action" 
                  autoFocus={true} />
        <TextField onChange={(e) => setFormData({...formData, descriptionAction: e.currentTarget.value})} 
                  className={styles.inputForm} 
                  value={formData.descriptionAction} 
                  placeholder="Description de l'action" />
          <PeoplePicker
          context={props.context}
          showtooltip={true}
          personSelectionLimit={20}
          onChange={onChangePeopleTransmitter}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Émetteur de l'action"
          defaultSelectedUsers={[formData.transmitter]}
          peoplePickerWPclassName={styles.backgroundPeoplePicker}
          />
          <TextField onChange={(e) => setFormData({...formData, summonsAction: e.currentTarget.value})} 
                    className={styles.inputFormSummons} 
                    value={formData.summonsAction} 
                    placeholder="Assignation de l'action" />
          <PeoplePicker
          context={props.context}
          showtooltip={true}
          personSelectionLimit={20}
          onChange={onChangePeopleValidator}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Valideur de l'action"
          defaultSelectedUsers={[formData.validator]}
          peoplePickerWPclassName={styles.backgroundPeoplePicker}
          />
          <TextField onChange={(e) => setFormData({...formData, descriptionDecision: e.currentTarget.value})} 
                    className={styles.inputFormDesc} 
                    value={formData.descriptionDecision} 
                    placeholder="Description décision" />
          <PeoplePicker
          context={props.context}
          showtooltip={true}
          personSelectionLimit={20}
          onChange={onChangePeopleRecipient}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Destinataire décision"
          defaultSelectedUsers={[formData.recipientDecision]}
          peoplePickerWPclassName={styles.backgroundPeoplePicker}
          />
          <TextField onChange={(e) => setFormData({...formData, termAction: e.currentTarget.value})} 
                    className={styles.inputFormTerm} 
                    value={formData.termAction} 
                    placeholder="Durée de l'action" />
          <TextField onChange={(e) => setFormData({...formData, dateStart: e.currentTarget.value})} 
                    className={styles.inputFormTerm} 
                    type="datetime-local" 
                    value={formData.dateStart} 
                    placeholder="Date de début" />
          <TextField onChange={(e) => setFormData({...formData, dateEnd: e.currentTarget.value})} 
                    className={styles.inputFormTerm} 
                    type="datetime-local" 
                    value={formData.dateEnd} 
                    placeholder="Date de fin" />
          <DefaultButton onClick={updateMeeting} className={styles.btnSubmit} text="Valider le formulaire" />
        </form>
        </div>
    )
}
import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button'
import { TextField } from '@fluentui/react/lib/TextField';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { useState } from 'react'
import "@pnp/sp/site-users/web";

export function ActionDecision(props) {
        
    const [formData, setFormData] = useState({
        titleAction: "",
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
        ID: "",
        meeting: ""
      })

    const [attendees, setAttendees] = useState([]);
    let [count, setCount] = useState(1);
    
    React.useEffect(() => {
      console.log(attendees)
    })
    
    let inputValue = false;
    if (formData.titleAction.length > 0
      && formData.descriptionAction.length > 0
      && formData.summonsAction.length > 0
      && formData.descriptionDecision.length > 0
      && attendees.length > 0 
      && formData.status.length > 0
      && formData.termAction.length > 0
      && formData.dateStart.length  > 0
      && formData.dateEnd.length > 0
      && formData.meeting.length > 0 ) {
      inputValue = true;
    }

    async function getUserId(users) {
      const sp = spfi().using(SPFx(props.context));
      const userId = [];
        for (let i = 0; i < users.length; i++) {
        const user = await sp.web.siteUsers.getByLoginName(users[i].loginName)();
        userId.push(user.Id)
        }
        return userId;
    }

    async function addListAD() {
      const sp = spfi().using(SPFx(props.context));
      const userId = await getUserId(attendees)
      console.log(userId);
      const iar = await sp.web.lists.getByTitle("Liste action décision").items.add({
        Title: formData.titleAction,
        Descriptiondelaction: formData.descriptionAction,
        Assignationdelaction: formData.summonsAction,
        Emetteurdelaction: userId[0],
        Valideurdelaction: userId[0],
        Descriptiondecision: formData.descriptionDecision,
        Destinatairedecision: userId[0],
        Etat: formData.status,
        Dureeaction: formData.termAction,
        Datedebut: formData.dateStart,
        Datedefin: formData.dateEnd,
        ID: formData.ID,
        Reunion: formData.meeting,
      });
      setFormData({...formData, titleAction: "", descriptionAction: "", summonsAction: "", transmitter: "", validator: "", descriptionDecision: "", recipientDecision: "", status: "", termAction: "", dateStart: "", dateEnd: "", meeting: ""});
      setCount(count + 1);
    }

      function onChangePeople(e) {
        setAttendees([]);
        e.forEach(ePeople => {
          setAttendees(prevAttendees => [...prevAttendees, ePeople])
        });
      }        

    if (count !%2) {
      return (
        <div>
            <h1>Action Décision :</h1>
            <DefaultButton onClick={() => setCount(count + 1)} className={styles.btnAction} text='Ajouter' />
            <DefaultButton className={styles.btnAction} text='Modifier' />
        </div>
    )
    } else {
      return (
        <div>
        <h1>Action Décision :</h1>
        <DefaultButton onClick={() => setCount(count + 1)} className={styles.btnAction} text='Ajouter' />
        <DefaultButton className={styles.btnAction} text='Modifier' />
        <form className={styles.formMeeting}>
        <TextField onChange={(e) => setFormData({...formData, titleAction: e.currentTarget.value})} className={styles.inputForm} value={formData.titleAction} placeholder="Titre de l'action" />
        <TextField onChange={(e) => setFormData({...formData, descriptionAction: e.currentTarget.value})} className={styles.inputForm} value={formData.descriptionAction} placeholder="Description de l'action" />
        <PeoplePicker
          context={props.context}
          showtooltip={true}
          onChange={onChangePeople}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Emetteur de l'action"
        />
        <TextField onChange={(e) => setFormData({...formData, summonsAction: e.currentTarget.value})} className={styles.inputFormSummons} value={formData.summonsAction} placeholder="Assignation de l'action" />
        <PeoplePicker
          context={props.context}
          showtooltip={true}
          onChange={onChangePeople}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Valideur de l'action"
        />
        <TextField onChange={(e) => setFormData({...formData, descriptionDecision: e.currentTarget.value})} className={styles.inputFormDesc} value={formData.descriptionDecision} placeholder="Description décision" />
        <PeoplePicker
          context={props.context}
          showtooltip={true}
          onChange={onChangePeople}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Destinataire décision"
        />
        <TextField onChange={(e) => setFormData({...formData, status: e.currentTarget.value})} className={styles.inputFormStatus} value={formData.status} placeholder="Etat" />
        <TextField onChange={(e) => setFormData({...formData, termAction: e.currentTarget.value})} className={styles.inputForm} value={formData.termAction} placeholder="Durée de l'action" />
        <TextField onChange={(e) => setFormData({...formData, dateStart: e.currentTarget.value})} className={styles.inputForm} value={formData.dateStart} type="datetime-local" placeholder="Date de début" />
        <TextField onChange={(e) => setFormData({...formData, dateEnd: e.currentTarget.value})} className={styles.inputForm} value={formData.dateEnd} type="datetime-local" placeholder="Date de fin" />
        <TextField onChange={(e) => setFormData({...formData, meeting: e.currentTarget.value})} className={styles.inputForm} value={formData.meeting} placeholder="Réunion" />
        <DefaultButton onClick={addListAD} className={styles.btnSubmit} disabled={!inputValue ? true : false} text="Valider le formulaire" />
        </form>
    </div>
      )
    }
}
import * as React from 'react';
import styles from './Metracom.module.scss';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { useState } from 'react'
import "@pnp/sp/site-users/web";
import { useRef } from 'react';

export function Form(props) {
  const [formData, setFormData] = useState({
    status: "Nouvelle",
    object: "",
    orderDay: "",
    organizer: "",
    nameProject: "",
    customer: "",
    dateHour: ""
  })

  let [count, setCount] = useState(1);
    
    const [attendees, setAttendees] = useState([]);
    
    React.useEffect(() => {
      console.log(attendees)
    })
    
    let inputValue = false;
    if (formData.status.length > 0 
      && formData.object.length > 0 
      && formData.orderDay.length > 0 
      && formData.organizer.length > 0 
      && formData.nameProject.length > 0 
      && formData.customer.length > 0 
      && attendees.length > 0 
      && formData.dateHour.length >0) {
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

    async function addList() {
      const sp = spfi().using(SPFx(props.context));
      const userId = await getUserId(attendees)
      const iar = await sp.web.lists.getByTitle("Liste de réunion").items.add({
        Title: formData.object,
        Dateetheure: formData.dateHour,
        Ordredujour: formData.orderDay,
        Organisateur: formData.organizer,
        Nomduprojet: formData.nameProject,
        Nomduclient: formData.customer,
        ParticipantsId: userId[0],
        Etat: formData.status,
      });
      setFormData({...formData, object: "", orderDay: "", organizer: "", nameProject: "", customer: "", dateHour: ""});
      setCount(count + 1);
    }

      function onChangePeople(e) {
        setAttendees([]);
        e.forEach(ePeople => {
          setAttendees(prevAttendees => [...prevAttendees, ePeople])
        });
      }   
      
      const ref = useRef(null);

      const addAction = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
      setCount(count + 1);
      };

      if (count !%2) {
        return (
          <div>
        <DefaultButton onClick={addAction} className={styles.btnCreate} text="Créer une liste de réunion" />
        </div>
      )}
      else {
        return (
          <div>
        <DefaultButton onClick={() => setCount(count + 1)} className={styles.btnCreate} text="Annuler" />
        <form className={styles.formMeeting}>
          <input onChange={(e) => setFormData({...formData, status: e.currentTarget.value})} value={formData.status} style={{visibility: 'hidden'}} />
          <TextField onChange={(e) => setFormData({...formData, object: e.currentTarget.value})} className={styles.inputForm} value={formData.object} placeholder="Objet" autoFocus={true} />
          <TextField onChange={(e) => setFormData({...formData, orderDay: e.currentTarget.value})} className={styles.inputForm} value={formData.orderDay} placeholder="Ordre du jour" />
          <TextField onChange={(e) => setFormData({...formData, organizer: e.currentTarget.value})} className={styles.inputForm} value={formData.organizer} placeholder="Organisateur" />
          <TextField onChange={(e) => setFormData({...formData, nameProject: e.currentTarget.value})} className={styles.inputForm} value={formData.nameProject} placeholder="Nom du projet" />
          <TextField onChange={(e) => setFormData({...formData, customer: e.currentTarget.value})} className={styles.inputForm} value={formData.customer} placeholder="Client" />
          <PeoplePicker
          context={props.context}
          showtooltip={true}
          personSelectionLimit={20}
          onChange={onChangePeople}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000}
          required={true}
          placeholder="Participants"
          ref={ref}
          />
          <TextField onChange={(e) => setFormData({...formData, dateHour: e.currentTarget.value})} className={styles.inputFormDateHour} type="datetime-local" value={formData.dateHour} placeholder="Date" />
          <DefaultButton onClick={addList} className={styles.btnSubmit} disabled={!inputValue ? true : false} text="Valider le formulaire" />
        </form>
        </div>
        )
      }
    };
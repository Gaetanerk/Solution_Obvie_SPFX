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

    const [attendees, setAttendees] = useState([]);
    
    React.useEffect(() => {
      console.log(attendees)
    })

    let inputValue = false;
    if (formData.status.length > 0 && formData.object.length > 0 && formData.orderDay.length > 0 && formData.organizer.length > 0 && formData.nameProject.length > 0 && formData.customer.length > 0 && attendees.length > 0 && formData.dateHour.length >0) {
        inputValue = true;
      }
      
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
      }
      
      async function getList() {
        const sp = spfi().using(SPFx(props.context));
        const items = await sp.web.lists.getByTitle("Liste de réunion").items();
      }
      
      async function addList() {
        const sp = spfi().using(SPFx(props.context));
        const iar = await sp.web.lists.getByTitle("Liste de réunion").items.add({
          Title: formData.object,
          Dateetheure: formData.dateHour,
          Ordredujour: formData.orderDay,
          Organisateur: formData.organizer,
          Nomduprojet: formData.nameProject,
          Nomduclient: formData.customer,
          //Participants: formData.attendees,
          Etat: formData.status
          //setFormData(
          //  object = "";
          //  orderDay = "";
          //  organizer = "";
          //  nameProject = "";
          //  customer = "";
          //  attendees = [];
          //  dateHour = ""
          //)
        });
}

function onChangePeople(e) {

  setAttendees([]);
 
  e.forEach(ePeople => {
    setAttendees(prevAttendees => [...prevAttendees, ePeople])
  });

}

    let [count, setCount] = useState(1);
    if (count !%2) {
      return (
        <div>
        <DefaultButton onClick={() => setCount(count + 1)} className={styles.btnCreate} text="Créer une liste de réunion" />
        </div>
      )}
      else {
        return (
          <div>
        <DefaultButton onClick={() => setCount(count + 1)} className={styles.btnCreate} text="Annuler" />
        <form className={styles.formMeeting}>
          <TextField onChange={(e) => setFormData({...formData, status: e.currentTarget.value})} className={styles.inputFormDisabled} value={formData.status} disabled={true} />
          <TextField onChange={(e) => setFormData({...formData, object: e.currentTarget.value})} className={styles.inputForm} value={formData.object} placeholder="Objet" />
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
          placeholder="Participants"
          />
          <TextField onChange={(e) => setFormData({...formData, dateHour: e.currentTarget.value})} className={styles.inputFormDateHour} type="datetime-local" value={formData.dateHour} placeholder="Date" />
          <DefaultButton onClick={addList} className={styles.btnSubmit} disabled={!inputValue ? true : false} text="Valider le formulaire" />
        </form>
        </div>
        )
      }
    };
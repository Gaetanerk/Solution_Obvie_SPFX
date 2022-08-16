import * as React from 'react';
import styles from './Metracom.module.scss';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { useState } from 'react'

export function Form(props) {
  
    const [formData, setFormData] = useState({
      status: "Nouvelle",
      object: "",
      orderDay: "",
      organizer: "",
      nameProject: "",
      customer: "",
      attendees: "",
      dateHour: ""
    })

    let inputValue = false;
    if (formData.status.length > 0 
      && formData.object.length > 0 
      && formData.orderDay.length > 0 
      && formData.organizer.length > 0 
      && formData.nameProject.length > 0 
      && formData.customer.length > 0 
      && formData.attendees.length > 0 
      && formData.dateHour.length >0) {
        inputValue = true;
      }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
  }

  async function getList() {
    console.log(props.description);
    console.log(props.context);
    const sp = spfi().using(SPFx(props.context));
    const items = await sp.web.lists.getByTitle("Liste de réunion").items();
    console.log(items);
  }
    return (
        <form className={styles.formMeeting}>
          <br />
          <TextField onChange={(e) => setFormData({...formData, status: e.currentTarget.value})} className={styles.inputFormDisabled} value={formData.status} disabled={true} />
          <TextField onChange={(e) => setFormData({...formData, object: e.currentTarget.value})} className={styles.inputForm} value={formData.object} placeholder="Objet" />
          <TextField onChange={(e) => setFormData({...formData, orderDay: e.currentTarget.value})} className={styles.inputForm} value={formData.orderDay} placeholder="Ordre du jour" />
          <TextField onChange={(e) => setFormData({...formData, organizer: e.currentTarget.value})} className={styles.inputForm} value={formData.organizer} placeholder="Organisateur" />
          <TextField onChange={(e) => setFormData({...formData, nameProject: e.currentTarget.value})} className={styles.inputForm} value={formData.nameProject} placeholder="Nom du projet" />
          <TextField onChange={(e) => setFormData({...formData, customer: e.currentTarget.value})} className={styles.inputForm} value={formData.customer} placeholder="Client" />
          <TextField onChange={(e) => setFormData({...formData, attendees: e.currentTarget.value})} className={styles.inputForm} value={formData.attendees} placeholder="Participants" />
          <TextField onChange={(e) => setFormData({...formData, dateHour: e.currentTarget.value})} className={styles.inputForm} type="datetime-local" value={formData.dateHour} placeholder="Date" />
          <DefaultButton onClick={handleSubmit} className={styles.btnSubmit} disabled={!inputValue ? true : false} text="Valider le formulaire" />
        </form>
    )
  };
  //<DefaultButton onClick={handleSubmit} disabled={false}text="Valider le formulaire" />
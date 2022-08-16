import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { useState } from 'react'

export function Form(props) {
  
    const [formData, setFormData] = useState({
      object: "",
      dateHour: "",
      orderDay: "",
      organizer: "",
      nameProject: "",
      customer: "",
      attendees: "",
      status: ""
    })
    let inputValue = false;
    if (formData.object.length > 0 
      && formData.dateHour.length > 0  
      && formData.orderDay.length > 0  
      && formData.organizer.length > 0  
      && formData.nameProject.length > 0  
      && formData.customer.length > 0 
      && formData.attendees.length > 0  
      && formData.status.length > 0 ) {
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
        <form>
          <TextField onChange={(e) => setFormData({...formData, object: e.currentTarget.value})} value={formData.object} label="Objet" required />
          <TextField onChange={(e) => setFormData({...formData, dateHour: e.currentTarget.value})} value={formData.dateHour} label="Date et heure" required />
          <TextField onChange={(e) => setFormData({...formData, orderDay: e.currentTarget.value})} value={formData.orderDay} label="Ordre du jour" required />
          <TextField onChange={(e) => setFormData({...formData, organizer: e.currentTarget.value})} value={formData.organizer} label="Organisateur" required />
          <TextField onChange={(e) => setFormData({...formData, nameProject: e.currentTarget.value})} value={formData.nameProject} label="Nom du projet" required />
          <TextField onChange={(e) => setFormData({...formData, customer: e.currentTarget.value})} value={formData.customer} label="Client" required />
          <TextField onChange={(e) => setFormData({...formData, attendees: e.currentTarget.value})} value={formData.attendees} label="Participants" required />
          <TextField onChange={(e) => setFormData({...formData, status: e.currentTarget.value})} value={formData.status} label="Etat" required />
          <br />
          <DefaultButton onClick={handleSubmit} disabled={!inputValue ? true : false} text="Valider le formulaire" />
        </form>
    )
  };

import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import React, { useState } from 'react'

const Form = () => {
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

export function Form(props) {

  async function getList() {
    console.log(props.description);
    console.log(props.context);
    const sp = spfi().using(SPFx(props.context));
    const items = await sp.web.lists.getByTitle("Liste de réunion").items();
    console.log(items);
  }
    return (
        <form>
          <TextField {(e) => setFormData({...formData, object: e.target.value})} value={formData.object} label="Objet" required />
          <TextField label="Date et heure" required />
          <TextField label="Ordre du jour" required />
          <TextField label="Organisateur" required />
          <TextField label="Nom du projet" required />
          <TextField label="Client" required />
          <TextField label="Participants" required />
          <TextField label="Etat" required />
          <br />
          <DefaultButton text="Valider le formulaire" onClick={getList}/>
        </form>
    )
  };


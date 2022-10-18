import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { spfi, SPFx } from "@pnp/sp";
import { useState } from 'react'
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { BtnReturnMeeting } from './BtnReturnMeeting';

export function FormEditMeeting(props) {
    
    const date = props.itemsDetail.Dateetheure;
    const dateRebuild = date[6]+
                        date[7]+
                        date[8]+
                        date[9]+
                        "-"+
                        date[3]+
                        date[4]+
                        "-"+
                        date[0]+
                        date[1]+
                        "T"+
                        date[11]+
                        date[12]+
                        ":"+
                        date[14]+
                        date[15];

    const [formData, setFormData] = useState({
        object: props.itemsDetail.Title,
        orderDay: props.itemsDetail.Ordredujour,
        organizer: props.itemsDetail.Organisateur,
        nameProject: props.itemsDetail.Nomduprojet,
        customer: props.itemsDetail.Nomduclient,
        attendees: props.itemsDetail.ParticipantsId,
        dateHour: dateRebuild
      })      
        
    const [attendees, setAttendees] = useState([]);

    async function getUserId(users) {
        const sp = spfi().using(SPFx(props.context));
        const userId = [];
          for (let i = 0; i < users.length; i++) {
          const user = await sp.web.siteUsers.getByLoginName(users[i].loginName)();
          userId.push(user.Id)
          }
          return userId;
      }

    async function updateMeeting() {
        const sp = spfi().using(SPFx(props.context));
        const userId = await getUserId(attendees)
        const list = sp.web.lists.getByTitle("Liste de réunion");
        const i = await list.items.getById(props.itemsDetail.ID).update({
            Title: formData.object,
            Dateetheure: formData.dateHour,
            Ordredujour: formData.orderDay,
            Organisateur: formData.organizer,
            Nomduprojet: formData.nameProject,
            Nomduclient: formData.customer,
            ParticipantsId: userId[0],
        })
        setFormData({...formData, object: "", 
                                  orderDay: "", 
                                  organizer: "", 
                                  nameProject: "", 
                                  customer: "", 
                                  dateHour: ""});
        props.setScreen('editsuccess')
    }

    function onChangePeople(e) {
        setAttendees([]);
        e.forEach(ePeople => {
          setAttendees(prevAttendees => [...prevAttendees, ePeople])
        });
      }    

    return (
        <div>
        <BtnReturnMeeting context={props.context} 
                          items={props.items} setItems={props.setItems} 
                          setScreen={props.setScreen} />
        <form className={styles.formMeeting}>
          <TextField onChange={(e) => setFormData({...formData, object: e.currentTarget.value})} 
                     className={styles.inputForm} 
                     value={formData.object} 
                     placeholder="Objet" 
                     autoFocus={true} />
          <TextField onChange={(e) => setFormData({...formData, orderDay: e.currentTarget.value})} 
                     className={styles.inputForm} 
                     value={formData.orderDay} 
                     placeholder="Ordre du jour" />
          <TextField onChange={(e) => setFormData({...formData, organizer: e.currentTarget.value})} 
                     className={styles.inputForm} 
                     value={formData.organizer} 
                     placeholder="Organisateur" />
          <TextField onChange={(e) => setFormData({...formData, nameProject: e.currentTarget.value})} 
                     className={styles.inputForm} 
                     value={formData.nameProject} 
                     placeholder="Nom du projet" />
          <TextField onChange={(e) => setFormData({...formData, customer: e.currentTarget.value})} 
                     className={styles.inputForm} 
                     value={formData.customer} 
                     placeholder="Client" />
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
          defaultSelectedUsers={[formData.attendees]}
          peoplePickerWPclassName={styles.backgroundPeoplePicker}
          />
          <TextField onChange={(e) => setFormData({...formData, dateHour: e.currentTarget.value})} 
                     className={styles.inputFormDateHour} 
                     type="datetime-local" 
                     value={formData.dateHour} 
                     placeholder="Date" />
          <DefaultButton onClick={updateMeeting} 
                         className={styles.btnSubmit} 
                         text="Valider le formulaire" />
        </form>
        </div>
    )
}
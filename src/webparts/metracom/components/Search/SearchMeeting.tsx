import * as React from 'react';
import styles from '../Metracom.module.scss';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { useState } from 'react';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";

export function SearchMeeting(props) {

    const [formData, setFormData] = useState({
        search: ""
      })

    async function searchList(title) {
        const sp = spfi().using(SPFx(props.context));
        const items = await sp.web.lists.getByTitle("Liste de réunion").items.filter("Title eq '" + title + "'")();
        for (const item of items) {
            const userName = await sp.web.siteUsers.getById(item.ParticipantsId).select('Title')();
            item.ParticipantsId = userName.Title
            const date = new Date(item.Dateetheure);
            const newDate = date.toLocaleString('fr-FR');
            item.Dateetheure = newDate
            props.setItems(prevItems => [...prevItems, item])
        }
        setFormData({...formData, search:""})
    };

return (
    <SearchBox
        className={styles.searchMeeting}
        placeholder="Rechercher une réunion"
        value={formData.search}
        onChange={(e) => setFormData({...formData, search: e.currentTarget.value})}
        onKeyPress={event => {
            if (event.key === 'Enter') {
              props.setItems([])
              const getList = searchList(formData.search);
              props.setItems(props.items)
              props.setScreen('search');
            }
          }}
    />
    )
}
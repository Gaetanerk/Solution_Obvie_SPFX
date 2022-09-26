import * as React from 'react';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";

export function InfoList(props) {

    async function getDetailList() {
    const sp = spfi().using(SPFx(props.context));
    const items = await sp.web.lists.getByTitle("Liste de réunion").items();
    }

    return (
        getDetailList()
    )
}
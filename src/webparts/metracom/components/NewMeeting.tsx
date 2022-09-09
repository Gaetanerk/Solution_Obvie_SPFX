import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/items/get-all";

export function NewMeeting(props) {

  async function getNewMeeting() {    
  const sp = spfi().using(SPFx(props.context));
  const allItems: any[] = await sp.web.lists.getByTitle("Liste de réunion").items.getAll();
  }
}
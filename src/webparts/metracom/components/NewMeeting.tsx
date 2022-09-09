import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/items/get-all";

export function NewMeeting(props) {

  async function getNew() {    
  const sp = spfi().using(SPFx(props.context));
  const allItems: any[] = await sp.web.lists.getByTitle("Liste de réunion").items.getAll();
  const r = await sp.web.lists.getByTitle("Etat").getItemsByCAMLQuery({
      ViewXml: `<View><Query><Where><Eq><FieldRef Name="Etat"/><Value Type="Nouvelle">Term 2</Value></Eq></Where></Query></View>`,
  });
  console.log(r.allItems.length);
}
}
import ContactsClient from '~/components/ContactsClient'
import type { V2_MetaFunction } from '@remix-run/node' 

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Contactez Gold Builiding BTP" },
    { name: "description", content: "Une préoccupation ou bien une question ? Ecrivez nous via ce formulaire et nous vous repondons le plus tôt possible" }
  ];
}

const Contacts = () => {
  return (
    <>
      <ContactsClient/>
    </>
  )
}

export default Contacts
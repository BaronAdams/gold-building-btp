import RDVClient from '~/components/RDVClient'
import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Prennez RDV chez Gold Builiding BTP" },
    { name: "description", content: 'Prennez un RDV chez nous pour une conslutation, un service ou une réalisation de tâches pour un de vos projets civils'}
  ];
}
const RDV = () => {
  return (
    <>
      <RDVClient/>
    </>
  )
}

export default RDV
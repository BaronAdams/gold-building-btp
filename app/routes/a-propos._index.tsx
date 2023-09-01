import Mission from '~/components/Mission'
import Values from '~/components/Values'
import Vision from '~/components/Vision'
import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
    return [
      { title: "Gold Building BTP - A propos de nous" },
    ];
  }

const Propos = () => {
  return (
    <>
      <Mission/>
      <Vision/>
      <Values/>
    </>
  )
}

export default Propos
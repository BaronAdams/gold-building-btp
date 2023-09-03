import { Button, Label, Modal, Spinner, TextInput, Textarea } from 'flowbite-react'
import { useEffect, useRef, useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa'
import { type ActionArgs, type V2_MetaFunction } from '@remix-run/node' 
import { useFetcher } from '@remix-run/react';
import { createMeeting } from '~/services/meeting.server';
import { badRequest } from '~/utils/request.server';
import { validateContent, validateEmail, validateName, validatePhone } from '~/utils/helper.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Prennez RDV chez Gold Builiding BTP" },
    { name: "description", content: 'Prennez un RDV chez nous pour une conslutation, un service ou une réalisation de tâches pour un de vos projets civils'}
  ];
}

export async function action({request}: ActionArgs) {
  const form = await request.formData()
  const name =  form.get('name')
  const phone =  form.get('phone')
  const email =  form.get('email')
  const description =  form.get('description')

  if (
    typeof email !== "string" ||
    typeof description !== "string" ||
    typeof name !== "string" ||
    typeof phone !== "string"
  ) {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Une erreur est survenue lors de l'envoi du formulaire",
    });
  }

  const fieldErrors = {
    email: validateEmail(email),
    description: validateContent(description),
    name: validateName(name),
    phone: validatePhone(phone),
  };

  const fields = { name, email, description,phone };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }
  try {
    //@ts-ignore
    await createMeeting({name,email,description,phone})
    return { error:null, success:true }
  } catch (error) {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Une erreur est survenue lors de l'envoi du formulaire",
    });
  }
}

const RDV = () => {
  const fetcher = useFetcher()
  const formRef = useRef()
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const [success, setSuccess] = useState<boolean | undefined>(undefined)
  const [isHover, setIsHover] = useState<boolean>(false)


  useEffect(() => {
    if (
      fetcher.state === "idle" &&
      fetcher.data?.success
    ) {
      setSuccess(true)
      props.setOpenModal('default')
      //@ts-ignore
      formRef?.current.reset();
    }
  }, [fetcher]);

  return (
    <>
      <Modal show={props.openModal === 'default'} position={'center'} onClose={() => props.setOpenModal(undefined)}>
          <Modal.Body>
          {success === true && (<div className='flex flex-col gap-7 items-center'>
              <p className='text-3xl'>Demande envoyée <FaRegCheckCircle className='inline ml-3 text-[#3faa36] text-3xl'/></p>
              <p>Nous vous recontacterons pour fixer un rendez-vous chez nous</p>
              </div>)}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => props.setOpenModal(undefined)}>OK</Button>
          </Modal.Footer>
      </Modal>
    <div className="w-screen min-h-[90vh] flex justify-center items-center bg-[url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692838866/ings_qluarr.avif')] relative" style={{backgroundPosition:'top center', backgroundSize:'cover'}}>
        <div className="w-[100%] h-[100%] z-1 absolute top-0 left-0 bg-[#dfc73e] bg-opacity-60"></div>
        <div className='h-[90%] w-[80%] max-[1050px]:w-[90%] max-[1030px]:w-[95%] z-10 bg-white rounded-lg flex gap-20 justify-center items-center px-6 py-8'>
            <div className='w-[280px] h-[280px] bg-[#222A35] max-[1030px]:w-[28%] max-[762px]:hidden '></div>
            {/*@ts-ignore*/}
            <fetcher.Form method='post' ref={formRef} className="flex max-[490px]:flex-col max-[490px]:justify-center min-h-[300px] gap-5">
                <div className="flex flex-col max-h-[380px] flex-wrap gap-4">
                    <div>
                        <Label htmlFor='name' className='mb-10' value='Votre nom (M/Mme)'/>
                        <TextInput id='name' name='name' type='text' placeholder='Jean Dupont' aria-invalid={Boolean(fetcher.data?.fieldErrors?.name)} helperText={fetcher.data?.fieldErrors?.email ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.name}</p>) : null}  color={fetcher.data?.fieldErrors?.name ? "failure" : "gray"} className='w-[240px] max-[1030px]:w-[190px] max-[490px]:w-[230px]' />
                         {/*@ts-ignore*/}
                         {/* {fetcher.data?.fieldErrors?.name ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.name}</p>) : null} */}
                    </div>
                    <div>
                        <Label htmlFor='email' className='mb-10' value='Votre adresse email(facultatif)'/>
                        <TextInput id='email' name='email' type='email' placeholder='dupontjean@gmail.com' aria-invalid={Boolean(fetcher.data?.fieldErrors?.email)} helperText={fetcher.data?.fieldErrors?.email ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.email}</p>) : null}  color={fetcher.data?.fieldErrors?.email ? "failure" : "gray"} className='w-[240px] max-[1030px]:w-[190px] max-[490px]:w-[230px]' />
                        {/*@ts-ignore*/}
                        {/* {fetcher.data?.fieldErrors?.email ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.email}</p>) : null} */}
                    </div>
                    <div>
                        <Label htmlFor='phone' className='mb-10' value='Votre adresse téléphonique'/>
                        <TextInput id='phone' name='phone' type='text' placeholder='699001256' aria-invalid={Boolean(fetcher.data?.fieldErrors?.phone)} helperText={fetcher.data?.fieldErrors?.email ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.phone}</p>) : null}  color={fetcher.data?.fieldErrors?.phone ? "failure" : "gray"} className='w-[240px] max-[1030px]:w-[190px] max-[490px]:w-[230px]' />
                        {/*@ts-ignore*/}
                        {/* {fetcher.data?.fieldErrors?.description ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.description}</p>) : null} */}
                    </div>
                    <button type='submit' onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='text-sm max-[490px]:hidden text-white font-medium p-3 rounded-md w-[180px]' style={{background: isHover ? 'linear-gradient(#dfc73e 0%, #000 50%,  #93731B 100%)' : 'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)'}} >
                      {fetcher.state === "submitting" && (<Spinner className='mr-3' color={"black"} />)} Envoyer
                  </button>
                </div>
                <div>
                    <Label htmlFor='description' className='mb-10' value='Description'/>
                    <Textarea id='description' aria-invalid={Boolean(fetcher.data?.fieldErrors?.description)} helperText={fetcher.data?.fieldErrors?.email ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.description}</p>) : null}  color={fetcher.data?.fieldErrors?.description ? "failure" : "gray"} name='description' rows={6}  
                      placeholder="Dites en détail l'objet de votre rendez-vous chez nous? Nous vous recontacterons pour une date de prise de contact" 
                      className='w-[280px] max-[1030px]:w-[230px] text-[14px]'  />
                      {/*@ts-ignore*/}
                      {/* {fetcher.data?.fieldErrors?.description ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.description}</p>) : null}   */}
                </div>
                <button type='submit' onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='text-sm hidden max-[490px]:block text-white font-medium p-3 rounded-md w-[180px]' style={{background: isHover ? 'linear-gradient(#dfc73e 0%, #000 50%,  #93731B 100%)' : 'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)'}} >
                      {fetcher.state === "submitting" && (<Spinner className='mr-3' color={"black"} />)} Envoyer
                  </button>
            </fetcher.Form>
        </div>
    </div>
    </>  
  )
}

export default RDV

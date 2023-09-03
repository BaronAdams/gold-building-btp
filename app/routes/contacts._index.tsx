import { Button, Label, Modal, Spinner, TextInput, Textarea } from 'flowbite-react'
import { useEffect, useRef, useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa'
import { type ActionArgs, type V2_MetaFunction } from '@remix-run/node' 
import { useFetcher } from '@remix-run/react';
import { createMessage } from '~/services/message.server';
import { badRequest } from '~/utils/request.server';
import { validateContent, validateEmail } from '~/utils/helper.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Contactez Gold Builiding BTP" },
    { name: "description", content: "Une préoccupation ou bien une question ? Ecrivez nous via ce formulaire et nous vous repondons le plus tôt possible" }
  ];
}

export async function action({request}: ActionArgs) {
  const form = await request.formData()
  const email =  form.get('email')
  const message =  form.get('message')

  if (
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Une erreur est survenue lors de l'envoi du formulaire",
    });
  }

  const fieldErrors = {
    email: validateEmail(email),
    message: validateContent(message),
  };

  const fields = { email, message };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }
  try {
    //@ts-ignore
    await createMessage({email,message})
    return { error:null, success:true }
  } catch (error) {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Une erreur est survenue lors de l'envoi du formulaire",
    });
  }
}

const Contacts = () => {
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
            <p className='text-3xl'>Message envoyée <FaRegCheckCircle className='inline ml-3 text-[#3faa36] text-3xl'/></p>
            <p>Nous vous enverrons un message pour repondre à votre question</p>
            </div>)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>OK</Button>
        </Modal.Footer>
      </Modal>
    <div className='w-screen flex min-h-[90vh] max-[724px]:bg-[url("https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692796074/chantier_zatxhw.avif")] max-[724px]:justify-center max-[724px]:items-center '>
      <div className="w-[100%] h-[100%] z-1 hidden max-[724px]:block absolute top-0 left-0 bg-black bg-opacity-50"></div>
      <div className="w-[50%] h-[100%] max-[724px]:hidden bg-red-600 relative" style={{backgroundImage:"url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692796074/chantier_zatxhw.avif')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black bg-opacity-50"></div>
          <div className="w-[100%] h-[100%] absolute top-0 left-0 flex flex-col p-5 justify-center items-start">
              <h1 className={`text-[70px] text-white font-medium max-[1025px]:text-[60px] max-[893px]:text-[55px] max-[824px]:text-[50px] max-[745px]:text-[45px]`}>Un problème ?</h1>
              <h1 className={`text-[70px] text-white font-medium max-[1025px]:text-[60px] max-[893px]:text-[55px] max-[824px]:text-[50px] max-[745px]:text-[45px]`}> Une question ? </h1>
              <p className='text-white text-[22px] max-[824px]:text-[18px] '>Contactez nous via nos numéros de téléphone ou bien laissez nous un message</p>
          </div>
      </div>
      {/*@ts-ignore*/}
      <fetcher.Form method='post' ref={formRef} className="w-[50%] z-20 flex flex-col h-full gap-[25px] justify-center items-center max-[724px]:bg-white max-[724px]:w-[90%] max-[724px]:pb-2 max-[724px]:h-[94%] max-[407px]:w-full max-[407px]:h-full max-[724px]:rounded-lg ">
        <img src='/logo.jpeg' className='w-[120px] h-[120px] object-cover ' />
        <p className='hidden max-[724px]:block max-[350px]:text-[14px] font-normal px-3'>Un problème ? Une question ? Contactez nous via nos numéros de téléphone ou bien laissez nous un message </p>
        <div>
          <Label htmlFor='email' className='mb-10' value='Votre adresse e-mail'/>
          {/*@ts-ignore*/}
          <TextInput id='email' name='email' type='email' placeholder='you@exemple.com' aria-invalid={Boolean(fetcher.data?.fieldErrors?.email)} helperText={fetcher.data?.fieldErrors?.email ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.email}</p>) : null} color={fetcher.data?.fieldErrors?.email ? "failure" : "gray"} className='w-[320px] max-[350px]:w-[290px] ' />
          {/*@ts-ignore*/}
          {/* {fetcher.data?.fieldErrors?.email ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.email}</p>) : null} */}
        </div>
        <div>
          <Label htmlFor='message' className='mb-10' value='Votre message'/>
          {/*@ts-ignore*/}
          <Textarea id='message' name='message' placeholder='Laissez votre message ici' aria-invalid={Boolean(fetcher.data?.fieldErrors?.message)} helperText={fetcher.data?.fieldErrors?.message ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.message}</p>) : null} color={fetcher.data?.fieldErrors?.message ? "failure" : "gray"} className='w-[320px] max-[350px]:w-[290px] max-h-[200px]' rows={5} />
          {/*@ts-ignore*/}
          {/* {fetcher.data?.fieldErrors?.message ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.fieldErrors.message}</p>) : null} */}
        </div>
        {/*@ts-ignore*/}
        {fetcher.data?.formError ? (<p className="text-red-500 mt-1" role="alert">{fetcher.data.formError}</p>) : null}
        <button type='submit' disabled={fetcher.state === "submitting"} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='text-sm max-[490px]:block text-white font-medium p-3 rounded-md w-[180px] max-[490px]:order-5 '  style={{background: isHover ? 'linear-gradient(#dfc73e 0%, #000 50%,  #93731B 100%)' : 'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)'}}>
          {fetcher.state === "submitting" && (<Spinner className='mr-3' color={"black"} />)}Envoyer
        </button>
      </fetcher.Form>
    </div>
    </>
  )
}

export default Contacts
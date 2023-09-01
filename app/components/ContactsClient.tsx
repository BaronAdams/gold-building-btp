import { Button, Label, Modal, Spinner, TextInput, Textarea } from 'flowbite-react'
import { useEffect, useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa'
import { apiUrl } from '~/constants';
import { GBApi } from '~/utils/helper';

const ContactsClient = () => {
  const [form, setForm] = useState<{email:string, message:string}>({
    email:'',
    message:''
})
const [openModal, setOpenModal] = useState<string | undefined>();
const props = { openModal, setOpenModal };
const [success, setSuccess] = useState<boolean | undefined>(undefined)
const [loading, setLoading] = useState<boolean | undefined>(undefined)
const [isHover, setIsHover] = useState<boolean>(false)

const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void =>{
    setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
}

const handleSendMessage = async() =>{
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}/messages`,{
        method:'POST',
        body:JSON.stringify({
          //@ts-ignore
         email: form?.email,
          //@ts-ignore
         message: form.message,
     })
      })
      // const res = await response.json()
      //   await GBApi.post('/messages',{
      //        //@ts-ignore
      //       email: form?.email,
      //        //@ts-ignore
      //       message: form.message,
      //   })
        setSuccess(true)
        props.setOpenModal('default')
        setForm({
            email:'',
            message:''
        })
    } catch (error) {
        setSuccess(false)
        console.log(error)
    }finally{
        setLoading(false)
    }
}

useEffect(()=>{
    console.log(form)
},[form])



  return (
    <>
    <Modal show={props.openModal === 'default'} position={'center'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Body>
        {success === true && (<div className='flex flex-col gap-7 items-center'>
            <p className='text-3xl'>Demande envoyée <FaRegCheckCircle className='inline ml-3 text-[#3faa36] text-3xl'/></p>
            <p>Nous vous enverrons un message pour repondre à votre question</p>
            </div>)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>OK</Button>
        </Modal.Footer>
      </Modal>
    <div className='w-screen flex h-[90vh] max-[724px]:bg-[url("https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692796074/chantier_zatxhw.avif")] max-[724px]:justify-center max-[724px]:items-center '>
      <div className="w-[100%] h-[100%] z-1 hidden max-[724px]:block absolute top-0 left-0 bg-black bg-opacity-50"></div>
      <div className="w-[50%] h-[100%] max-[724px]:hidden bg-red-600 relative" style={{backgroundImage:"url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692796074/chantier_zatxhw.avif')", backgroundPosition:"center", backgroundSize:"cover"}}>
          <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black bg-opacity-50"></div>
          <div className="w-[100%] h-[100%] absolute top-0 left-0 flex flex-col p-5 justify-center items-start">
              <h1 className={`text-[70px] text-white font-medium max-[1025px]:text-[60px] max-[893px]:text-[55px] max-[824px]:text-[50px] max-[745px]:text-[45px]`}>Un problème ?</h1>
              <h1 className={`text-[70px] text-white font-medium max-[1025px]:text-[60px] max-[893px]:text-[55px] max-[824px]:text-[50px] max-[745px]:text-[45px]`}> Une question ? </h1>
              <p className='text-white text-[22px] max-[824px]:text-[18px] '>Contactez nous via nos numéros de téléphone ou bien laissez nous un message</p>
          </div>
      </div>
      <div className="w-[50%] z-20 flex flex-col h-full gap-[25px] justify-center items-center max-[724px]:bg-white max-[724px]:w-[90%] max-[724px]:h-[94%] max-[407px]:w-full max-[407px]:h-full max-[724px]:rounded-lg ">
        <img src='/logo.jpeg' className='w-[120px] h-[120px] object-cover ' />
        <p className='hidden max-[724px]:block max-[350px]:text-[14px] font-normal px-3'>Un problème ? Une question ? Contactez nous via nos numéros de téléphone ou bien laissez nous un message </p>
        <div>
          <Label htmlFor='email' className='mb-10' value='Votre adresse e-mail'/>
          <TextInput id='email' name='email' type='email' onChange={handleChange} defaultValue={form?.email} placeholder='you@exemple.com' className='w-[320px] max-[350px]:w-[290px] ' />
        </div>
        <div>
          <Label htmlFor='message' className='mb-10' value='Votre message'/>
          <Textarea id='message' name='message' onChange={handleChange} defaultValue={form?.message} placeholder='Laissez votre message ici' className='w-[320px] max-[350px]:w-[290px]  max-h-[200px]' rows={5} />
        </div>
        <button onClick={()=>{handleSendMessage()}} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='text-sm hidden max-[490px]:block text-white font-medium p-3 rounded-md w-[180px] max-[490px]:order-5 '  style={{background: isHover ? 'linear-gradient(#dfc73e 0%, #000 50%,  #93731B 100%)' : 'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)'}}>
          {loading && (<Spinner className='mr-3' color={"black"} />)}Envoyer
        </button>
      </div>
    </div>
    </>
  )
}

export default ContactsClient
import { MeetForms } from '~/utils/types'
import { Button, Label, Modal, Spinner, TextInput, Textarea } from 'flowbite-react'
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { GBApi } from '~/utils/helper'
import { apiUrl } from '~/constants'

const RDVClient = () => {
    const [form, setForm] = useState<MeetForms>({
        name:'',
        email:'',
        phone:'',
        description:''
    })
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const [success, setSuccess] = useState<boolean | undefined>(undefined)
    const [loading, setLoading] = useState<boolean | undefined>(undefined)
    const [isHover, setIsHover] = useState<boolean>(false)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void =>{
        setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleMeet = async() =>{
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/meetings`,{
                method:'POST',
                body:JSON.stringify({
                  //@ts-ignore
                name: form.name,
                //@ts-ignore
               email: form?.email,
                //@ts-ignore
               phone: form.phone,
                //@ts-ignore
               description: form.description,
             })
            })
            // await GBApi.post('/meetings',{
            //      //@ts-ignore
            //     name: form.name,
            //      //@ts-ignore
            //     email: form?.email,
            //      //@ts-ignore
            //     phone: form.phone,
            //      //@ts-ignore
            //     description: form.description,
            // })
            setSuccess(true)
            props.setOpenModal('default')
            setForm({
                name:'',
                email:'',
                phone:'',
                description:''
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
            <p>Nous vous recontacterons pour fixer un rendez-vous chez nous</p>
            </div>)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>OK</Button>
        </Modal.Footer>
      </Modal>
    <div className="w-screen h-[90vh] flex justify-center items-center bg-[url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692838866/ings_qluarr.avif')] relative" style={{backgroundPosition:'top center', backgroundSize:'cover'}}>
        <div className="w-[100%] h-[100%] z-1 absolute top-0 left-0 bg-[#dfc73e] bg-opacity-60"></div>
        <div className='h-[90%] w-[80%] max-[1050px]:w-[90%] max-[1030px]:w-[95%] z-10 bg-white rounded-lg flex gap-20 justify-center items-center'>
            <div className='w-[280px] h-[280px] bg-[#222A35] max-[1030px]:w-[28%] max-[762px]:hidden '></div>
            <div className="flex max-[490px]:flex-col max-[490px]:justify-center min-h-[300px] gap-5">
                <div className="flex flex-col max-h-[300px] flex-wrap gap-4">
                    <div>
                        <Label htmlFor='name' className='mb-10' value='Votre nom (M/Mme)'/>
                        <TextInput onChange={handleChange} defaultValue={form.name} id='name' name='name' type='text' placeholder='Jean Dupont' className='w-[240px] max-[1030px]:w-[190px] max-[490px]:w-[230px]' />
                    </div>
                    <div>
                        <Label htmlFor='email' className='mb-10' value='Votre adresse email(facultatif)'/>
                        <TextInput onChange={handleChange} defaultValue={form?.email} id='email' name='email' type='email' placeholder='dupontjean@gmail.com' className='w-[240px] max-[1030px]:w-[190px] max-[490px]:w-[230px]' />
                    </div>
                    <div>
                        <Label htmlFor='phone' className='mb-10' value='Votre adresse téléphonique'/>
                        <TextInput onChange={handleChange} defaultValue={form.phone} id='phone' name='phone' type='text' placeholder='699001256' className='w-[240px] max-[1030px]:w-[190px] max-[490px]:w-[230px]' />
                    </div>
                    <button onClick={()=>{handleMeet()}} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='text-sm max-[490px]:hidden text-white font-medium p-3 rounded-md w-[180px] max-[490px]:order-5 '  style={{background: isHover ? 'linear-gradient(#dfc73e 0%, #000 50%,  #93731B 100%)' : 'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)'}} >
                        {loading && (<Spinner className='mr-3' color={"black"} />)} Envoyer
                    </button>
                </div>
                <div>
                    <Label htmlFor='description' className='mb-10' value='Description'/>
                    <Textarea onChange={handleChange} defaultValue={form.description} id='description' name='description' rows={6}  
                    placeholder="Dites en détail l'objet de votre rendez-vous chez nous? Nous vous recontacterons pour une date de prise de contact" 
                    className='w-[280px] max-[1030px]:w-[230px] text-[14px]'  />
                    {success === false && (<p className='text-[#e95550]'><FaRegTimesCircle className='inline mr-3 text-[#e95550]'/>Erreur. Veuillez réessayer</p>)}
                </div>
                <button onClick={()=>{handleMeet()}} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='text-sm hidden max-[490px]:block text-white font-medium p-3 rounded-md w-[180px] max-[490px]:order-5 '  style={{background: isHover ? 'linear-gradient(#dfc73e 0%, #000 50%,  #93731B 100%)' : 'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)'}} >
                        {loading && (<Spinner className='mr-3' color={"black"} />)} Envoyer
                    </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default RDVClient
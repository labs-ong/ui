import { contactInfo } from '@/lib/const'
import Image from 'next/image'
import CircleOne from 'public/Ellipse.png'
import CircleTwo from 'public/Ellipse2.png'
import { Network } from '@/components/icons'
import type { Metadata } from 'next'
import { Input } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Generated by create next app',
  keywords: 'Ecommerce',
}

export default function Contact() {
  return (
    <>
      <section className='flex'>
        <article className='bg-black w-[35%] relative p-3'>
          <article className='text-white'>
            <h2 className='bolt text-[28px] mt-[5%]'>
              <b>Contact Information</b>
            </h2>
            <p className='font-[500] text-[18px] pb-[10%]'>
              Say something start a live chat!
            </p>
            {contactInfo.map((info, i) => (
              <figure className='flex gap-4 mt-[13%]' key={i}>
                <Image src={info.src} alt={info.alt} />
                <p>
                  <b>{info.text}</b>
                </p>
              </figure>
            ))}
          </article>
          <div className='flex justify-end relative z-1'>
            <figure className='w-[138px] absolute top-[-5%] right-[11%]'>
              <Image className='w-[100%]' src={CircleOne} alt='circleOne' />
            </figure>
            <figure className='w-[200px] mr-[-40px] mb-[-17px]'>
              <Image className='w-[100%]' src={CircleTwo} alt='circleTwo' />
            </figure>
          </div>
          <div className='absolute z-5 bottom-10'>
            <Network
              styleicons='text-white'
              colorfacebook=''
              bgfacebook='bg-withe'
            />
          </div>
        </article>
        <div className='flex w-[50%]'>
          <div>
            <Input placeholder='Feyz' />
            <Input placeholder='example@gmail.com' name='Email' />
          </div>
          <div>
            <Input placeholder='Ibrahim' />
            <Input placeholder='+91 73569 88456 ' />
          </div>
        </div>
      </section>
    </>
  )
}

import Image from 'next/image'
import Information from '@/components/information'
import ContactArea from '@/components/contact'


export default function Contact(){
    return(
        <main>
        <div className='w-full mx-auto h-80 bg-[url("/images/contact.png")] bg-cover'> </div>
            <div className='grid grid-cols-2 gap-4'>
                <Information/>
                <ContactArea/>
            </div>
            <iframe className="py-4 w-full h-96" src="https://www.google.com/maps/d/u/0/embed?mid=1rF3AS6RdY48F5Nxd-kdGxXPa4eHlTcg&ehbc=2E312F&noprof=1"></iframe>
        <br/>
        </main>
    )
}

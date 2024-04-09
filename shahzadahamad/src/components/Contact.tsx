import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import { FaXTwitter} from 'react-icons/fa6'
import { RiMailLine  } from 'react-icons/ri';
export default function Contact() {
    return <>
        <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">CONTACT</p>
        <div className='flex flex-col justify-center items-start text-xl font-medium ml-16 md:ml-48 lg:ml-80 mt-48 mb-48'>
            <div className='space-y-8 '>{/*  So that items start in same vertical line */}
               <a href="shahzadahamad285@gmail.com"> <div className='flex items-center space-x-10'><div className="bg-teal-500 rounded-full p-5 text-white text-3xl "><RiMailLine/></div> <span className='text-teal-900'>shahzadahamad285@gmail.com</span></div></a>
               <a href="shahzadahamad285@gmail.com"> <div className='flex items-center space-x-10'><div className="bg-teal-500 rounded-full p-5 text-white text-3xl "><FaXTwitter /></div> <span className='text-teal-900'>twitter.com/Shahzad2805</span> </div></a>
               <a href=""> <div className='flex items-center space-x-10'><div className="bg-teal-500 rounded-full p-5 text-white text-3xl"><FaGithub /></div><span className='text-teal-900'>github.com/shahzad285</span></div></a>
               <a href=""> <div className='flex items-center space-x-10'><div className="bg-teal-500 rounded-full p-5 text-white text-3xl"><FaLinkedin /></div><span className='text-teal-900'>linkedin.com/in/shahzad-ahamad-80b36662</span></div></a>
               <a href=""> <div className='flex items-center space-x-10'><div className="bg-teal-500 rounded-full p-5 text-white text-3xl"><FaDiscord /></div> <span className='text-teal-900'>discordapp.com/users/1178989566292656148</span></div></a>
            </div>
        </div>
    </>
}
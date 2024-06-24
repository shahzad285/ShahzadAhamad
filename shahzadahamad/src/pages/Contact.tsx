import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { RiMailLine } from 'react-icons/ri';
export default function Contact() {
    return <>
        <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">CONTACT</p>
        <div className='flex flex-col justify-center items-start text-xl font-medium ml-16 md:ml-24 lg:ml-80 pt-48 pb-48'>
            <div className='space-y-8 '>{/*  So that items start in same vertical line */}
                <div>
                    <a href="mailto:shahzadahamad285@gmail.com?subject=Send email to Shahzad" className='flex items-center space-x-10'><div className="bg-teal-500 rounded-full p-5 text-white text-3xl "><RiMailLine /></div> <span className='text-teal-900 hover:underline'>shahzadahamad285@gmail.com</span></a>
                </div>
                <div>
                    <a href="https://www.twitter.com/Shahzad2805" className='flex items-center space-x-10'> <div className="bg-teal-500 rounded-full p-5 text-white text-3xl"><FaXTwitter /></div> <span className='text-teal-900 hover:underline'>twitter.com/Shahzad2805</span></a>
                </div>
                <div>
                    <a href="https://www.github.com/shahzad285" className='flex items-center space-x-10'> <div className="bg-teal-500 rounded-full p-5 text-white text-3xl"><FaGithub /></div><span className='text-teal-900 hover:underline'>github.com/shahzad285</span></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/shahzadahamad" className='flex items-center space-x-10'> <div className="bg-teal-500 rounded-full p-5 text-white text-3xl"><FaLinkedin /></div><span className='text-teal-900 hover:underline'>linkedin.com/in/shahzadahamad</span></a>
                </div>
                <div>
                    <a href="https://discordapp.com/users/1178989566292656148" className='flex items-center space-x-10'> <div className="bg-teal-500 rounded-full p-5 text-white text-3xl"><FaDiscord /></div> <span className='text-teal-900 hover:underline'>discordapp.com/users/1178989566292656148</span></a>
                </div>
            </div>
        </div>
    </>
}
import { Link } from "react-scroll";

interface HiddenMenuProps{
  onClose:()=>void;
}

const HiddenMenu:React.FC<HiddenMenuProps>=({ onClose })=> {  
  return <>
    <div className="flex w-full h-screen">
      <div className="z-20 w-48 h-screen fixed bg-white">
        <ul className="menu-items">
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link onClick={onClose} className="flex items-center pl-5 w-full h-full cursor-pointer" to="about" smooth={true} duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/about.svg" alt="About me" />
              <span className="px-5">About</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link onClick={onClose}  className="flex items-center pl-5 w-full h-full cursor-pointer" to="experience" smooth={true} duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/experience.svg" alt="About me" />
              <span className="px-5">Experience</span>
            </Link>
          </li>          
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link onClick={onClose}  className="flex items-center pl-5 w-full h-full cursor-pointer" to="skills" smooth={true} duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/skills.svg" alt="About me" />
              <span className="px-5">Skills</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link onClick={onClose}  className="flex items-center pl-5 w-full h-full cursor-pointer" to="education" smooth={true} duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/education.svg" alt="About me" />
              <span className="px-5">Education</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link onClick={onClose}  className="flex items-center pl-5 w-full h-full cursor-pointer" to="projects" smooth={true} duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/projects.svg" alt="About me" />
              <span className="px-5">Projects</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link onClick={onClose}  className="flex items-center pl-5 w-full h-full cursor-pointer" to="contact" smooth={true} duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/contact.svg" alt="About me" />
              <span className="px-5">Contact</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <a className="flex items-center pl-5 w-full h-full"  href="https://drive.google.com/file/d/15Lb8_ow8kqLPBHcvCxlvb9qqev3MaQDh/view" target="_blank">
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/resume.svg" alt="About me" />
              <span className="px-5"> Resume</span>
            </a>
          </li>
        </ul>
        
      </div>
      <div className="flex-grow bg-zinc-400 ">

        </div>
    </div>
  </>
}

export default HiddenMenu;
import { Link } from "react-scroll";

export default function HiddenMenu() {
  return <>
    <div className="flex w-full h-screen">
      <div className=" w-48 h-screen">
        <ul className="menu-items">
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link className="flex items-center pl-5 w-full h-full" to="about" duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/about.svg" alt="About me" />
              <span className="px-5">About</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link className="flex items-center pl-5 w-full h-full" to="intro" duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/experience.svg" alt="About me" />
              <span className="px-5">Experience</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link className="flex items-center pl-5 w-full h-full" to="projects" duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/projects.svg" alt="About me" />
              <span className="px-5">Projects</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link className="flex items-center pl-5 w-full h-full" to="skills" duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/skills.svg" alt="About me" />
              <span className="px-5">Skills</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link className="flex items-center pl-5 w-full h-full" to="education" duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/education.svg" alt="About me" />
              <span className="px-5">Education</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <Link className="flex items-center pl-5 w-full h-full" to="contact" duration={500}>
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/contact.svg" alt="About me" />
              <span className="px-5">Contact</span>
            </Link>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <a className="flex items-center pl-5 w-full h-full" href="">
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/resume.svg" alt="About me" />
              <span className="px-5">Resume</span>
            </a>
          </li>
        </ul>
        
      </div>
      <div className="flex-grow bg-zinc-400 ">

        </div>
    </div>
  </>
}
export default function HiddenMenu() {
  return <>
    <div className="flex w-full h-screen">
      <div className=" w-48 h-screen">
        <ul className="menu-items">
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <a className="flex items-center pl-5 w-full h-full" href="">
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/about.svg" alt="About me" />
              <span className="px-5">About</span>
            </a>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <a className="flex items-center pl-5 w-full h-full" href="">
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/experience.svg" alt="About me" />
              <span className="px-5">Experience</span>
            </a>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <a className="flex items-center pl-5 w-full h-full" href="">
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/projects.svg" alt="About me" />
              <span className="px-5">Projects</span>
            </a>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <a className="flex items-center pl-5 w-full h-full" href="">
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/skills.svg" alt="About me" />
              <span className="px-5">Skills</span>
            </a>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <a className="flex items-center pl-5 w-full h-full" href="">
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/education.svg" alt="About me" />
              <span className="px-5">Education</span>
            </a>
          </li>
          <li className="flex py-8 h-12 items-center hover:bg-zinc-100 ">
            <a className="flex items-center pl-5 w-full h-full" href="">
              <img className=" h-6 w-6 fill-current text-green-300" src="/images/contact.svg" alt="About me" />
              <span className="px-5">Contact</span>
            </a>
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
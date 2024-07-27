import { useEffect, useRef, useState } from "react";
import {Link} from "react-scroll";
import HiddenMenu from "./HiddenMenu";

export default function SideMedu() {
    const [showPopupMenu, setShowPopupMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    function changeShowPopupMenuFlag() {
        setShowPopupMenu(true);
    }
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowPopupMenu(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuRef]);

    function handleMenuContainerClick() {
        // Prevent closing the menu when clicking inside the menu container
        setShowPopupMenu(!showPopupMenu);
    }

    function closeMenu() {
        setShowPopupMenu(false);
    }

    return <>
        <div>
        {showPopupMenu && <HiddenMenu onClose={closeMenu} />}
        </div>
        <div className="">
            <div ref={menuRef} onClick={handleMenuContainerClick} className="z-20 md:hidden flex items-center menu-sm-container bg-white w-full h-14 fixed shadow-lg shadow-zinc-300">
                <a onClick={changeShowPopupMenuFlag}><img className="ml-4 h-9 w-9 fill-current text-green-300 cursor-pointer" src="/images/menu.svg" alt="About me" /></a>
                <Link className="w-full flex flex-col items-center cursor-pointer" to="intro" smooth={true} duration={1500}>
                    <span className="text-xl font-medium text-green-700">Shahzad Ahamad</span>
                    <span className="text-sm font-thin text-purple-900">Full-stackDeveloper</span>
                </Link>
            </div>

            <div className="z-20 hidden md:block menu-md-container w-48 h-screen fixed border-r-2 shadow-md shadow-slate-300">
                <ul className="menu-items">
                    <li className="logo bg-zinc-50  min-h-24 p-7 pb-8 border-b-2">
                        <Link className="w-full cursor-pointer" to="intro" smooth={true} duration={1500}>
                            <p className="text-3xl font-thin text-green-700">Shahzad Ahamad</p>
                            <span className="text-sm font-thin text-purple-900">Full-stackDeveloper</span>
                        </Link>
                    </li>
                    <li className="flex h-12 items-center hover:bg-zinc-100 hover:border-l-4">
                        <Link className="flex items-center pl-5 w-full h-full cursor-pointer" to="about" smooth={true} duration={1500}>
                            <img className=" h-6 w-6 fill-current text-green-300" src="/images/about.svg" alt="About" />
                            <span className="px-5">About</span>
                        </Link>
                    </li>
                    <li className="flex h-12 items-center hover:bg-zinc-100 hover:border-l-4">
                        <Link className="flex items-center pl-5 w-full h-full cursor-pointer" to="experience" smooth={true} duration={1500}>
                            <img className=" h-6 w-6 fill-current text-green-300" src="/images/experience.svg" alt="Experience" />
                            <span className="px-5">Experience</span>
                        </Link>
                    </li>                    
                    <li className="flex h-12 items-center hover:bg-zinc-100 hover:border-l-4">
                        <Link className="flex items-center pl-5 w-full h-full cursor-pointer" to="skills" smooth={true} duration={1500}>
                            <img className=" h-6 w-6 fill-current text-green-300" src="/images/skills.svg" alt="Skills" />
                            <span className="px-5">Skills</span>
                        </Link>
                    </li>
                    
                    <li className="flex h-12 items-center hover:bg-zinc-100 hover:border-l-4">
                        <Link className="flex items-center pl-5 w-full h-full cursor-pointer" to="education" smooth={true} duration={1500}>
                            <img className=" h-6 w-6 fill-current text-green-300" src="/images/education.svg" alt="Education" />
                            <span className="px-5">Education</span>
                        </Link>
                    </li>
                    <li className="flex h-12 items-center hover:bg-zinc-100 hover:border-l-4">
                        <Link className="flex items-center pl-5 w-full h-full cursor-pointer" to="contact" smooth={true} duration={1500}>
                            <img className=" h-6 w-6 fill-current text-green-300" src="/images/contact.svg" alt="Contact" />
                            <span className="px-5">Contact</span>
                        </Link>
                    </li>
                    <li className="flex h-12 items-center hover:bg-zinc-100 hover:border-l-4">
                        <Link className="flex items-center pl-5 w-full h-full cursor-pointer" to="projects" smooth={true} duration={1500}>
                            <img className=" h-6 w-6 fill-current text-green-300" src="/images/projects.svg" alt="Projects" />
                            <span className="px-5">Projects</span>
                        </Link>
                    </li>
                    <li className="flex h-12 items-center hover:bg-zinc-100 hover:border-l-4">
                        <a className="flex items-center pl-5 w-full h-full" href="https://drive.google.com/file/d/15Lb8_ow8kqLPBHcvCxlvb9qqev3MaQDh/view" target="_blank">
                            <img className=" h-6 w-6 fill-current text-green-300" src="/images/resume.svg" alt="Resume" />
                            <span className="px-5">Resume</span>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </>
}
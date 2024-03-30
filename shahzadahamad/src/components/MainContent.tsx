import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

export default function MainContent() {
    return <>
        <div className="md:ml-48">
            <div id="intro" className="flex pt-36 h-screen ml-6">
               <Intro/>
            </div>
            <div id="about" className=" h-screen">
                <About/>
            </div>
            <div id="experience" className=" h-screen">
                <Experience/>
            </div>
            <div id="projects" className=" h-screen">
                <Projects/>

            </div>
            <div id="skills" className=" h-screen">
               <Skills/>

            </div>
            <div id="education" className=" h-screen">
                <Education/>

            </div>
            <div id="contact" className=" h-screen">
                <Contact/>
            </div>
        </div>
    </>
}
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

export default function MainContent() {
    return <>
        <div className="md:ml-48 bg-slate-200">
            <div id="intro" className="flex h-full  bg-black">
                <Intro />
            </div>
            <div id="about" className=" h-auto">
                <About />
            </div>
            <div id="experience" className=" h-auto">
                <Experience />
            </div>
            <div id="projects" className=" h-auto">
                <Projects />
            </div>
            <div id="skills" className=" h-auto">
                <Skills />
            </div>
            <div id="education" className="h-auto">
                <Education />
            </div>
            <div id="contact" className="h-auto">
                <Contact />
            </div>
        </div>
    </>
}
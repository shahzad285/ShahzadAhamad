import { useState } from "react";
import ExperienceCard, { ExperienceCardProps } from "../components/ExperienceCard";

export default function Experience() {
    const [selectedItem, setSelectedItem] = useState("Imobisoft");
    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    };

    const experienceData: ExperienceCardProps[] = [
        {
            pointer: "Imobisoft",
            experienceTime: "Oct 2020 - Present",
            logo: "/images/imobisoft.png",
            companyLink:"https://www.imobisoft.co.uk/",
            name: "Imobisoft (Remote)",
            role: "Technical lead",
            description: `Led end-to-end projects.
                          Mentored junior team members.
                          Collaborated with various teams.
                          Interacted directly with clients for requirement gathering.
                          Worked extensively on backend operations.
                          Deployed applications to Windows servers and Azure cloud environments.
                          Architected Azure for different needs.
                          Worked on SaaS projects.`,
            location: "Coventry, United Kingdom"
        },
        {
            pointer: "Careerbuilder",
            experienceTime: "Jul 2019 - Oct 2020",
            logo: "/images/careerbuilder.png",
            companyLink:"https://www.careerbuilder.co.in/",
            name: "Careerbuilder India",
            role: "Software engineer 2",
            description: `Contributed to the development of Workterra, a comprehensive SaaS healthcare solution, utilizing .NET for backend and Angular for frontend.
                          Collaborated effectively with remote teams, fostering seamless project execution.`,
            location: "Noida, India"
        },
        {
            pointer: "Finoit Technologies",
            experienceTime: "Oct 2017 - Jul 2019",
            logo: "/images/finoit.png",
            companyLink:"https://www.finoit.com/",
            name: "Finoit Inc",
            role: "Senior software engineer",
            description: `Contributed to FieldCircle, a top-rated field service CRM, streamlining service and maintenance operations.
                          Worked on EconomyEnergy project, utilizing Umbraco for efficient project management.
                          Played a pivotal role as a full-stack developer, ensuring successful front-end and back-end development.
                          Collaborated with diverse teams and contributed across various aspects of software development.`,
            location: "Noida, India "
        },
        {
            pointer: "Infosys",
            experienceTime: "Jul 2014 - Sep 2017",
            logo: "/images/infosys.png",
            companyLink:"https://www.infosys.com/",
            name: "Infosys",
            role: "System engineer",
            description:`Engaged in diverse projects, contributing to system development and enhancing technical competencies.
                         Collaborated effectively with cross-functional teams to deliver high-quality solutions.
                         Demonstrated proficiency in problem-solving and adapting to evolving project requirements.`,
            location: "Chandigarh, India"
        }
    ];
    return <>
        <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">EXPERIENCE</p>
        <div className="flex justify-center items-center my-24">
            <div className="hidden lg:block w-2/5 items-center text-center">
                <ul className="">
                    {experienceData.map((experience, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer py-2 ${selectedItem === experience.pointer ? "text-green-500 font-bold text-xl" : "hover:text-blue-500 hover:font-semibold hover:scale-125"}`}
                            onClick={() => handleItemClick(experience.pointer)}
                        >
                            {experience.pointer}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full ml-20 lg:ml-0 lg:w-3/5 flex flex-col items-center justify-center">
                {experienceData.map((experience, index) => (
                    <div key={index} className={`w-full my-10 lg:my-0 block ${selectedItem !== experience.pointer ? "lg:hidden" : ""}`}>
                        <ExperienceCard {...experience} />
                    </div>
                ))}
                
            </div>
        </div>
    </>
}
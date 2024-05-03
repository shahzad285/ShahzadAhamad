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
            experienceTime: "Oct 2020 - Present · 3 yrs 8 mos",
            logo: "logo1",
            name: "Imobisoft · Full-time(Remote)",
            role: "Technical lead",
            description: "Description about your experience at Imobisoft Description about your experience at Imobisoft  Description about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at ImobisoftDescription about your experience at Imobisoft",
            location: "Coventry, United Kingdom"
        },
        {
            pointer: "Careerbuilder",
            experienceTime: "Jul 2019 - Oct 2020 · 1 yr 4 mos",
            logo: "logo2",
            name: "Careerbuilder Sourcing Solutions · Full-time",
            role: "Software engineer 2",
            description: "Description about your experience at Careerbuilder",
            location: "Noida, India"
        },
        {
            pointer: "Finoit Inc",
            experienceTime: "Oct 2017 - Jul 2019 . 1 yr 10 mos",
            logo: "logo3",
            name: "Finoit Inc",
            role: "Senior software engineer",
            description: "Description about your experience at Finoit Inc",
            location: "Noida, India "
        },
        {
            pointer: "Infosys",
            experienceTime: "Jul 2014 - Sep 2017 . 3 yrs 2 mos",
            logo: "logo4",
            name: "Infosys",
            role: "System engineer",
            description: "Description about your experience at Infosys",
            location: "Chandigarh, India"
        }
    ];
    return <>
        <p className="bg-teal-700 text-5xl font-thin pl-10 text-white py-8">EXPERIENCE</p>
        <div className="flex justify-center items-center my-24">
            <div className="hidden md:block w-2/5 items-center text-center">
                <ul className="">
                    {experienceData.map((experience, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer py-2 ${selectedItem === experience.pointer ? "text-green-500 font-bold text-xl" : "hover:text-blue-500 hover:font-semibold hover:text-lg"}`}
                            onClick={() => handleItemClick(experience.pointer)}
                        >
                            {experience.pointer}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-5/6 md:w-3/5 flex  flex-col items-center justify-center flex-shrink-0">
                {experienceData.map((experience, index) => (
                    <div key={index} className={`w-full block md:${selectedItem === experience.pointer ? "block" : "hidden"}`}>
                        <ExperienceCard {...experience} />
                    </div>
                ))}
                {/* <div className={`block md:${selectedItem === "Imobisoft" ? "block" : "hidden"}`}>
                    Imobisoft
                </div>
                <div className={`block md:${selectedItem === "Careerbuilder" ? "block" : "hidden"}`}>
                    Careerbuilder
                </div>
                <div className={`block md:${selectedItem === "Finoit Inc" ? "block" : "hidden"}`}>
                    Finoit Inc
                </div>
                <div className={`block md:${selectedItem === "Infosys" ? "block" : "hidden"}`}>
                    Infosys
                </div> */}
            </div>
        </div>
    </>
}